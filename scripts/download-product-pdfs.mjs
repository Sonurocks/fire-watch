import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PRODUCT_JSON_PATH = path.join(ROOT, "src", "data", "product.json");
const PRODUCT_JSON_BACKUP = PRODUCT_JSON_PATH + ".pdf-backup";
const DOCUMENTS_DIR = path.join(ROOT, "public", "documents", "products");
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
function downloadToBuffer(url, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      return reject(new Error(`Too many redirects for ${url}`));
    }
    const client = url.startsWith("https:") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "FireWatch-PDF-Migrator/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let redirectUrl = res.headers.location;
          if (redirectUrl.startsWith("/")) {
            const parsed = new URL(url);
            redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
          }
          return downloadToBuffer(redirectUrl, redirectCount + 1)
            .then(resolve)
            .catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () =>
          resolve({
            buffer: Buffer.concat(chunks),
            contentType: res.headers["content-type"] || "",
          })
        );
        res.on("error", reject);
      })
      .on("error", reject);
  });
}
function isValidPdf(buffer) {
  if (!buffer || buffer.length < 5) return false;
  const header = buffer.slice(0, 5).toString("ascii");
  return header === "%PDF-";
}
async function main() {
  console.log("\n========================================");
  console.log("  PRODUCT PDF MIGRATION");
  console.log("========================================\n");
  if (!fs.existsSync(PRODUCT_JSON_PATH)) {
    console.error("ERROR: product.json not found at:", PRODUCT_JSON_PATH);
    process.exit(1);
  }
  const rawJson = fs.readFileSync(PRODUCT_JSON_PATH, "utf-8");
  const data = JSON.parse(rawJson);
  if (!fs.existsSync(PRODUCT_JSON_BACKUP)) {
    fs.writeFileSync(PRODUCT_JSON_BACKUP, rawJson, "utf-8");
    console.log("✔ Backup created:", PRODUCT_JSON_BACKUP);
  } else {
    console.log("ℹ Backup already exists — not overwriting:", PRODUCT_JSON_BACKUP);
  }
  fs.mkdirSync(DOCUMENTS_DIR, { recursive: true });
  const tasks = [];
  const seenUrls = new Map(); 
  for (const category of data) {
    const catSlug = slugify(category.name);
    for (const subCategory of category.subCategories || []) {
      const subCatSlug = slugify(subCategory.name);
      for (const product of subCategory.products || []) {
        const productSlug = slugify(product.name);
        for (const doc of product.documents || []) {
          if (!doc.url || !doc.url.startsWith("http")) continue;
          const docTitleSlug = slugify(doc.title);
          const dirPath = path.join(DOCUMENTS_DIR, catSlug, subCatSlug);
          const fileName = `${productSlug}--${docTitleSlug}.pdf`;
          const localUrl = `/documents/products/${catSlug}/${subCatSlug}/${fileName}`;
          const outputPath = path.join(dirPath, fileName);
          tasks.push({
            category,
            subCategory,
            product,
            doc,
            catSlug,
            subCatSlug,
            productSlug,
            docTitleSlug,
            dirPath,
            fileName,
            localUrl,
            outputPath,
            externalUrl: doc.url,
          });
        }
      }
    }
  }
  const stats = {
    productsScanned: 0,
    totalDocRefs: tasks.length,
    uniqueUrls: new Set(tasks.map((t) => t.externalUrl)).size,
    downloaded: 0,
    skippedExisting: 0,
    failed: 0,
    updated: 0,
    failures: [],
    created: [],
  };
  for (const category of data) {
    for (const subCategory of category.subCategories || []) {
      stats.productsScanned += (subCategory.products || []).length;
    }
  }
  console.log(`Products scanned: ${stats.productsScanned}`);
  console.log(`Document references found: ${stats.totalDocRefs}`);
  console.log(`Unique PDF URLs: ${stats.uniqueUrls}\n`);
  for (const task of tasks) {
    const {
      category,
      subCategory,
      product,
      doc,
      catSlug,
      subCatSlug,
      dirPath,
      fileName,
      localUrl,
      outputPath,
      externalUrl,
    } = task;
    process.stdout.write(
      `  [${catSlug}/${subCatSlug}] ${product.name} → ${doc.title}\n`
    );
    if (doc.localUrl && fs.existsSync(path.join(ROOT, "public", doc.localUrl))) {
      console.log(`    ↳ ✔ Already migrated: ${doc.localUrl}`);
      stats.skippedExisting++;
      continue;
    }
    if (fs.existsSync(outputPath)) {
      const existingBuf = fs.readFileSync(outputPath);
      if (isValidPdf(existingBuf) && existingBuf.length > 0) {
        console.log(`    ↳ ✔ File exists, updating localUrl: ${localUrl}`);
        doc.localUrl = localUrl;
        stats.skippedExisting++;
        stats.updated++;
        continue;
      } else {
        console.log(`    ↳ ⚠ Existing file invalid, re-downloading...`);
        fs.unlinkSync(outputPath);
      }
    }
    if (seenUrls.has(externalUrl)) {
      const existingLocal = seenUrls.get(externalUrl);
      const existingPath = path.join(ROOT, "public", existingLocal);
      if (fs.existsSync(existingPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        fs.copyFileSync(existingPath, outputPath);
        console.log(`    ↳ ✔ Reused (duplicate URL): ${localUrl}`);
        doc.localUrl = localUrl;
        stats.downloaded++;
        stats.updated++;
        stats.created.push(localUrl);
        continue;
      }
    }
    try {
      const { buffer, contentType } = await downloadToBuffer(externalUrl);
      if (!isValidPdf(buffer)) {
        throw new Error(
          `Downloaded file is not a valid PDF (header: ${buffer
            .slice(0, 10)
            .toString("ascii")}, content-type: ${contentType})`
        );
      }
      if (buffer.length < 100) {
        throw new Error(`Downloaded PDF is suspiciously small (${buffer.length} bytes)`);
      }
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(outputPath, buffer);
      const sizeKB = (buffer.length / 1024).toFixed(1);
      console.log(`    ↳ ✔ Downloaded: ${fileName} (${sizeKB} KB)`);
      doc.localUrl = localUrl;
      seenUrls.set(externalUrl, localUrl);
      stats.downloaded++;
      stats.updated++;
      stats.created.push(localUrl);
    } catch (err) {
      console.error(`    ↳ ✘ FAILED: ${err.message}`);
      stats.failed++;
      stats.failures.push({
        product: product.name,
        document: doc.title,
        url: externalUrl,
        reason: err.message,
      });
    }
  }
  const updatedJson = JSON.stringify(data, null, 2);
  try {
    JSON.parse(updatedJson);
  } catch (e) {
    console.error("\nERROR: Updated JSON is invalid — NOT writing to disk.");
    process.exit(1);
  }
  fs.writeFileSync(PRODUCT_JSON_PATH, updatedJson, "utf-8");
  console.log("\n✔ product.json updated.\n");
  console.log("── Post-Migration Validation ──────────────────────\n");
  const updatedData = JSON.parse(fs.readFileSync(PRODUCT_JSON_PATH, "utf-8"));
  let validationErrors = 0;
  for (const category of updatedData) {
    for (const subCategory of category.subCategories || []) {
      for (const product of subCategory.products || []) {
        for (const doc of product.documents || []) {
          if (!doc.url || !doc.url.startsWith("http")) {
            console.error(`  ✘ Missing/modified original URL: ${product.name} → ${doc.title}`);
            validationErrors++;
          }
          if (doc.localUrl) {
            const localFilePath = path.join(ROOT, "public", doc.localUrl);
            if (!fs.existsSync(localFilePath)) {
              console.error(`  ✘ localUrl points to missing file: ${doc.localUrl}`);
              validationErrors++;
            } else {
              const buf = fs.readFileSync(localFilePath);
              if (!isValidPdf(buf)) {
                console.error(`  ✘ localUrl file is not a valid PDF: ${doc.localUrl}`);
                validationErrors++;
              }
            }
          }
        }
      }
    }
  }
  if (validationErrors === 0) {
    console.log("  ✔ All validations passed!\n");
  } else {
    console.error(`\n  ✘ ${validationErrors} validation error(s) found.\n`);
  }
  console.log("========================================");
  console.log("  PRODUCT PDF MIGRATION REPORT");
  console.log("========================================");
  console.log(`\nProducts scanned:         ${stats.productsScanned}`);
  console.log(`Document URLs found:      ${stats.totalDocRefs}`);
  console.log(`Unique PDFs:              ${stats.uniqueUrls}`);
  console.log(`Successfully downloaded:  ${stats.downloaded}`);
  console.log(`Already existing:         ${stats.skippedExisting}`);
  console.log(`Failed:                   ${stats.failed}`);
  console.log(`JSON references updated:  ${stats.updated}`);
  console.log(`PDF location:             public/documents/products/`);
  console.log(`Original URLs preserved:  YES`);
  if (stats.failures.length > 0) {
    console.log("\n── Failed Downloads ──\n");
    stats.failures.forEach((f) => {
      console.log(`  Product:  ${f.product}`);
      console.log(`  Document: ${f.document}`);
      console.log(`  URL:      ${f.url}`);
      console.log(`  Reason:   ${f.reason}\n`);
    });
  }
  if (stats.created.length > 0) {
    console.log("\n── Files Created ──\n");
    stats.created.forEach((p) => console.log(`  + public${p}`));
  }
  console.log("\n── Files Modified ──\n");
  console.log("  ~ src/data/product.json");
  console.log("\nTo run this migration again:");
  console.log("  node scripts/download-product-pdfs.mjs\n");
}
main().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});
