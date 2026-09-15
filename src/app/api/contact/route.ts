import { NextResponse } from "next/server";
import { Resend } from "resend";
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

function buildHtml(data: ContactFormData): string {
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

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const contactFrom = process.env.CONTACT_FROM;

  if (!apiKey || !contactEmail || !contactFrom) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Contact email service is not configured. Please try again later.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: contactFrom,
      to: [contactEmail],
      replyTo: data.email,
      subject: `Contact Inquiry - ${data.fullName}`,
      html: buildHtml(data),
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong while sending your message. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
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
