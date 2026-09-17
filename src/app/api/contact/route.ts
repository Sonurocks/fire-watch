import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  validateContactForm,
  type ContactFormData,
} from "@/lib/contactValidation";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function getFormattedUTCDate(): string {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  
  const year = now.getUTCFullYear();
  const month = pad(now.getUTCMonth() + 1);
  const day = pad(now.getUTCDate());
  const hours = pad(now.getUTCHours());
  const minutes = pad(now.getUTCMinutes());
  const seconds = pad(now.getUTCSeconds());
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;
}

function buildHtml(data: ContactFormData, timestamp: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#BD0000;padding:24px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">Contact Inquiry</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:0 0 20px 0;">
                  <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Full Name</div>
                  <div style="font-size:16px;color:#222;">${escapeHtml(data.fullName)}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 20px 0;">
                  <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Email Address</div>
                  <div style="font-size:16px;color:#222;">${escapeHtml(data.email)}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 20px 0;">
                  <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Phone Number</div>
                  <div style="font-size:16px;color:#222;">${escapeHtml(data.phone || "Not provided")}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 20px 0;">
                  <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">System / Inquiry Type</div>
                  <div style="font-size:16px;color:#222;">${escapeHtml(data.inquiryType || "Not specified")}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 20px 0;">
                  <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Enquiry Date &amp; Time</div>
                  <div style="font-size:16px;color:#222;">${escapeHtml(timestamp)}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 0 0;">
                  <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Detailed Message</div>
                  <div style="font-size:16px;color:#222;line-height:1.6;">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #eee;">
            <p style="margin:0;font-size:12px;color:#999;text-align:center;">Submitted via Fire Watch website</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

function buildText(data: ContactFormData, timestamp: string): string {
  return `Contact Inquiry

Full Name: ${data.fullName}
Email Address: ${data.email}
Phone Number: ${data.phone || "Not provided"}
System / Inquiry Type: ${data.inquiryType || "Not specified"}
Enquiry Date & Time: ${timestamp}

Detailed Message:
${data.message}

Submitted via Fire Watch website`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 },
    );
  }
  
  const reqBody = body as Record<string, unknown>;
  if (typeof reqBody.botcheck === "string" && reqBody.botcheck.trim() !== "") {
    return NextResponse.json({ success: true, message: "Message sent successfully" });
  }

  const validation = validateContactForm(body);
  if (!validation.valid) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed",
        errors: validation.errors,
      },
      { status: 422 },
    );
  }

  const { data } = validation;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpSecure = process.env.SMTP_SECURE;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const smtpFrom = process.env.SMTP_FROM;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom || !contactEmail) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Contact email service is not configured. Please try again later.",
      },
      { status: 503 },
    );
  }

  if (smtpSecure !== "true" && smtpSecure !== "false") {
    return NextResponse.json(
      {
        success: false,
        message:
          "Contact email service secure configuration is invalid. Please try again later.",
      },
      { status: 503 },
    );
  }

  const parsedPort = Number(smtpPort);
  if (!Number.isInteger(parsedPort) || parsedPort < 1 || parsedPort > 65535) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Contact email service is not configured correctly. Please try again later.",
      },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parsedPort,
      secure: smtpSecure === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const timestamp = getFormattedUTCDate();

    await transporter.sendMail({
      from: smtpFrom,
      to: contactEmail,
      replyTo: data.email,
      subject: `Contact Inquiry - ${data.fullName}`,
      text: buildText(data, timestamp),
      html: buildHtml(data, timestamp),
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err));
    
    // Sanitize message to prevent accidental credential leakage (e.g., from URLs or raw SMTP logs)
    const rawMessage = error.message || "Unknown error";
    const sanitizedMessage = typeof rawMessage === "string" 
      ? rawMessage
          .replace(/(password|pass|secret|key|user)=([^\\s&]+)/gi, "$1=***")
          .replace(/(:\/\/[^:]+:)([^@]+)(@)/gi, "$1***$3")
      : "Invalid error message format";

    console.error("[Contact] SMTP Error:", {
      name: error.name || "UnknownError",
      code: (error as Error & { code?: string }).code || "UNKNOWN_CODE",
      responseCode: (error as Error & { responseCode?: number }).responseCode || null,
      message: sanitizedMessage,
    });

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your message. Please try again.",
      },
      { status: 500 },
    );
  }
}
