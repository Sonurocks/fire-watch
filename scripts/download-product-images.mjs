/**
 * scripts/download-product-images.mjs
 *
 * Migrates all product.image URLs in product.json from external fire-watch.co URLs
 * to local optimized WebP assets.
 *
 * Usage:
 *   node scripts/download-product-images.mjs
 *
 * To run again in the future (idempotent):
 *   node scripts/download-product-images.mjs
 */

import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PRODUCT_JSON_PATH = path.join(ROOT, "src", "data", "product.json");
const PRODUCT_JSON_BACKUP = PRODUCT_JSON_PATH + ".backup";
const PUBLIC_PRODUCTS_DIR = path.join(ROOT, "public", "assets", "products");

// ── Slugify (mirrors src/lib/slugify.ts exactly) ──────────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ── Download a URL to a buffer ─────────────────────────────────────────────────
function downloadToBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https://") ? https : http;
    client
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadToBuffer(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve({ buffer: Buffer.concat(chunks), contentType: res.headers["content-type"] || "" }));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

// ── Convert buffer → lossless WebP, preserve dimensions ───────────────────────
async function convertToWebP(buffer, outputPath) {
  const meta = await sharp(buffer).metadata();
  await sharp(buffer)
    .webp({ lossless: true })
    .toFile(outputPath);
  const outMeta = await sharp(outputPath).metadata();
  return { input: meta, output: outMeta };
}

// ── Generate a safe filename slug from a product name ─────────────────────────
function productNameToSlug(name) {
  return slugify(name);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n========================================");
  console.log("  PRODUCT IMAGE MIGRATION");
  console.log("========================================\n");

  // 1. Read product.json
  if (!fs.existsSync(PRODUCT_JSON_PATH)) {
    console.error("ERROR: product.json not found at:", PRODUCT_JSON_PATH);
    process.exit(1);
  }

  const rawJson = fs.readFileSync(PRODUCT_JSON_PATH, "utf-8");
  const data = JSON.parse(rawJson);

  // 2. Backup
  if (!fs.existsSync(PRODUCT_JSON_BACKUP)) {
    fs.writeFileSync(PRODUCT_JSON_BACKUP, rawJson, "utf-8");
    console.log("✔ Backup created:", PRODUCT_JSON_BACKUP);
  } else {
    console.log("ℹ Backup already exists — not overwriting:", PRODUCT_JSON_BACKUP);
  }

  // 3. Create output directory
  fs.mkdirSync(PUBLIC_PRODUCTS_DIR, { recursive: true });

  // 4. Collect all (category, subCategory, product) triples with external image URLs
  const tasks = [];
  const seenSlugs = new Set(); // for collision detection per (cat/subcat) pair
  const seenUrls = new Map();  // url → local path (avoid downloading duplicates)

  for (const category of data) {
    const catSlug = slugify(category.name);

    for (const subCategory of category.subCategories || []) {
      const subCatSlug = slugify(subCategory.name);
      const seenNamesInScope = new Map(); // productSlug → count (within this subcat)

      for (const product of subCategory.products || []) {
        if (!product.image || !product.image.startsWith("http")) {
          // Already local or missing — skip
          continue;
        }

        const baseSlug = productNameToSlug(product.name);

        // Collision detection within same (cat, subcat)
        const scopeKey = `${catSlug}/${subCatSlug}/${baseSlug}`;
        if (seenSlugs.has(scopeKey)) {
          const count = seenNamesInScope.get(baseSlug) || 1;
          seenNamesInScope.set(baseSlug, count + 1);
          const productSlug = `${baseSlug}-${product.id}`;
          tasks.push({ category, subCategory, product, catSlug, subCatSlug, productSlug });
        } else {
          seenSlugs.add(scopeKey);
          seenNamesInScope.set(baseSlug, 1);
          tasks.push({ category, subCategory, product, catSlug, subCatSlug, productSlug: baseSlug });
        }
      }
    }
  }

  // 5. Stats
  const stats = {
    total: tasks.length,
    downloaded: 0,
    converted: 0,
    skippedExisting: 0,
    failed: 0,
    lowRes: [],
    failures: [],
    created: [],
  };

  console.log(`Found ${stats.total} products with external image URLs.\n`);

  // 6. Process each product
  for (const { category, subCategory, product, catSlug, subCatSlug, productSlug } of tasks) {
    const dirPath = path.join(PUBLIC_PRODUCTS_DIR, catSlug, subCatSlug);
    const fileName = `${productSlug}.webp`;
    const outputPath = path.join(dirPath, fileName);
    const localUrl = `/assets/products/${catSlug}/${subCatSlug}/${fileName}`;
    const originalUrl = product.image;

    process.stdout.write(`  [${catSlug}/${subCatSlug}] ${product.name}\n`);

    // Check if already migrated (output exists)
    if (fs.existsSync(outputPath)) {
      console.log(`    ↳ ✔ Skipping — already exists: ${localUrl}`);
      product.image = localUrl;
      stats.skippedExisting++;
      continue;
    }

    // If same URL was already downloaded in this run, reuse the converted file
    if (seenUrls.has(originalUrl)) {
      const existingLocal = seenUrls.get(originalUrl);
      if (existingLocal !== localUrl) {
        // Different product, same image URL → copy the already-downloaded file
        const existingOutputPath = path.join(ROOT, "public", existingLocal);
        if (fs.existsSync(existingOutputPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
          fs.copyFileSync(existingOutputPath, outputPath);
          console.log(`    ↳ ✔ Reused (duplicate URL), copied to: ${localUrl}`);
          product.image = localUrl;
          stats.downloaded++;
          stats.created.push(localUrl);
          continue;
        }
      }
    }

    try {
      // Download
      const { buffer } = await downloadToBuffer(originalUrl);
      stats.downloaded++;

      // Create output directory
      fs.mkdirSync(dirPath, { recursive: true });

      // Convert to lossless WebP
      const { input, output } = await convertToWebP(buffer, outputPath);

      // Dimension check
      if (input.width !== output.width || input.height !== output.height) {
        console.warn(`    ⚠ DIMENSION MISMATCH: ${input.width}×${input.height} → ${output.width}×${output.height}`);
      } else {
        console.log(`    ↳ ✔ ${input.width}×${input.height} → ${fileName} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
      }

      // Low-res detection (< 300px on either axis)
      if (input.width < 300 || input.height < 300) {
        stats.lowRes.push(`${product.name} — ${input.width}×${input.height}`);
        console.warn(`    ⚠ LOW RESOLUTION SOURCE: ${input.width}×${input.height}`);
      }

      stats.converted++;
      seenUrls.set(originalUrl, localUrl);
      stats.created.push(localUrl);

      // Update product.image
      product.image = localUrl;
    } catch (err) {
      console.error(`    ↳ ✘ FAILED: ${err.message}`);
      stats.failed++;
      stats.failures.push({
        id: product.id,
        name: product.name,
        category: category.name,
        subCategory: subCategory.name,
        url: originalUrl,
        error: err.message,
      });
      // Do NOT update product.image — leave original URL intact
    }
  }

  // 7. Write updated product.json
  const updatedJson = JSON.stringify(data, null, 2);

  // Validate JSON before writing
  try {
    JSON.parse(updatedJson);
  } catch (e) {
    console.error("\nERROR: Updated JSON is invalid — NOT writing to disk.");
    process.exit(1);
  }

  fs.writeFileSync(PRODUCT_JSON_PATH, updatedJson, "utf-8");
  console.log("\n✔ product.json updated.\n");

  // 8. Final report
  console.log("========================================");
  console.log("  PRODUCT IMAGE MIGRATION COMPLETE");
  console.log("========================================");
  console.log(`\nTotal products with external images: ${stats.total}`);
  console.log(`Downloaded:       ${stats.downloaded}`);
  console.log(`Converted:        ${stats.converted}`);
  console.log(`Skipped existing: ${stats.skippedExisting}`);
  console.log(`Failed:           ${stats.failed}`);

  if (stats.lowRes.length > 0) {
    console.log("\nLow-resolution sources detected:");
    stats.lowRes.forEach((r) => console.log(`  - ${r}`));
  }

  if (stats.failures.length > 0) {
    console.log("\nFailed downloads:");
    stats.failures.forEach((f) => {
      console.log(`  - [${f.id}] ${f.name} (${f.category} / ${f.subCategory})`);
      console.log(`    URL: ${f.url}`);
      console.log(`    Error: ${f.error}`);
    });
    console.log("\n⚠ Failed products still reference their original external URL in product.json.");
  }

  if (stats.created.length > 0) {
    console.log("\nFiles created:");
    stats.created.forEach((p) => console.log(`  + public${p}`));
  }

  console.log("\nFiles modified:");
  console.log("  ~ src/data/product.json");

  console.log("\nTo run this migration again:");
  console.log("  node scripts/download-product-images.mjs\n");
}

main().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});
