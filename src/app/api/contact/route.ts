import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  validateContactForm,
  type ContactFormData,
} from "@/lib/contactValidation";
import { EMAIL_ASSETS } from "@/assets";

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

function assetUrl(assetPath: string): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "")}${assetPath}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}${assetPath}`;
  }
  return `https://fire-watch.co${assetPath}`;
}

function buildHtml(data: ContactFormData, timestamp: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Inquiry</title>
<style>
  @media only screen and (max-width: 600px) {
    .m-block { display: block !important; width: 100% !important; box-sizing: border-box !important; }
    
    /* Layout */
    .m-card-wrapper { padding: 0 14px !important; }
    .m-card { padding: 18px 20px !important; }
    
    /* Typography */
    .m-heading { font-size: 18px !important; }
    .m-label { font-size: 11px !important; letter-spacing: 0.4px !important; }
    .m-text { font-size: 13px !important; }
    
    /* Spacing */
    .m-heading-cell { padding-bottom: 20px !important; }
    .m-label-cell { border: none !important; padding-bottom: 4px !important; padding-top: 18px !important; }
    .m-first-label { padding-top: 0 !important; }
    .m-value-cell { padding-bottom: 18px !important; padding-top: 0 !important; }

    /* Footer */
    .m-footer-stack { display: block !important; width: 100% !important; text-align: center !important; }
    .m-footer-stack img { margin: 0 auto !important; }
    .m-footer-social { display: block !important; width: 100% !important; text-align: center !important; margin-top: 24px !important; }
    .m-footer-social table { float: none !important; margin: 0 auto !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:#F2F1F1;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F2F1F1;padding:40px 10px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;max-width:600px;width:100%;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 0 30px 0;">
              <a href="https://fire-watch.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
                <img src="${assetUrl(EMAIL_ASSETS.LOGO_PNG)}" alt="Fire Watch" width="188" style="display:block;border:0;height:auto;max-width:100%;">
              </a>
            </td>
          </tr>

          <!-- Hero Image -->
          <tr>
            <td align="center" style="padding:0;">
              <a href="https://fire-watch.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
                <img src="${assetUrl(EMAIL_ASSETS.BANNER)}" alt="New Contact Form Submission" width="600" style="display:block;border:0;max-width:100%;height:auto;">
              </a>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td height="40" style="font-size:40px;line-height:40px;">&nbsp;</td></tr>

          <!-- Details Container -->
          <tr>
            <td class="m-card-wrapper" style="padding:0 20px;">
              <table class="m-card" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F2F1F1;border-radius:10px;padding:30px;">
                <tr>
                  <td colspan="2" class="m-block m-heading-cell" style="padding-bottom:12px;">
                    <h2 class="m-heading" style="margin:0;font-size:20px;font-weight:bold;color:#111111;">Submitted Details</h2>
                  </td>
                </tr>
                
                <!-- Full Name -->
                <tr>
                  <td width="35%" valign="top" class="m-block m-label-cell m-first-label" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-label" style="font-size:12px;color:#757575;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">FULL NAME:</div>
                  </td>
                  <td width="65%" valign="top" class="m-block m-value-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-text" style="font-size:14px;color:#111111;font-weight:600;">${escapeHtml(data.fullName)}</div>
                  </td>
                </tr>
                <!-- Email -->
                <tr>
                  <td width="35%" valign="top" class="m-block m-label-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-label" style="font-size:12px;color:#757575;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">EMAIL ADDRESS:</div>
                  </td>
                  <td width="65%" valign="top" class="m-block m-value-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-text" style="font-size:14px;color:#111111;font-weight:600;overflow-wrap:anywhere;word-break:break-word;">${escapeHtml(data.email)}</div>
                  </td>
                </tr>
                <!-- Phone -->
                <tr>
                  <td width="35%" valign="top" class="m-block m-label-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-label" style="font-size:12px;color:#757575;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">PHONE NUMBER:</div>
                  </td>
                  <td width="65%" valign="top" class="m-block m-value-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-text" style="font-size:14px;color:#111111;font-weight:600;">${escapeHtml(data.phone || "Not provided")}</div>
                  </td>
                </tr>
                <!-- Inquiry -->
                <tr>
                  <td width="35%" valign="top" class="m-block m-label-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-label" style="font-size:12px;color:#757575;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">SYSTEM / INQUIRY TYPE:</div>
                  </td>
                  <td width="65%" valign="top" class="m-block m-value-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-text" style="font-size:14px;color:#111111;font-weight:600;">${escapeHtml(data.inquiryType || "Not specified")}</div>
                  </td>
                </tr>
                <!-- Date -->
                <tr>
                  <td width="35%" valign="top" class="m-block m-label-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-label" style="font-size:12px;color:#757575;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">ENQUIRY DATE &amp; TIME:</div>
                  </td>
                  <td width="65%" valign="top" class="m-block m-value-cell" style="padding:16px 0; border-bottom:1px solid #E5E5E5;">
                    <div class="m-text" style="font-size:14px;color:#111111;font-weight:600;">${escapeHtml(timestamp)}</div>
                  </td>
                </tr>
                <!-- Message -->
                <tr>
                  <td width="35%" valign="top" class="m-block m-label-cell" style="padding:16px 0;">
                    <div class="m-label" style="font-size:12px;color:#757575;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">DETAILED MESSAGE:</div>
                  </td>
                  <td width="65%" valign="top" class="m-block m-value-cell" style="padding:16px 0;">
                    <div class="m-text" style="font-size:14px;color:#111111;font-weight:600;line-height:1.5;overflow-wrap:anywhere;word-break:break-word;">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td height="40" style="font-size:40px;line-height:40px;">&nbsp;</td></tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 20px 40px 20px;">
              <!-- Wrapper table for footer columns -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- Footer Logo -->
                  <td align="left" valign="middle" class="m-footer-stack">
                    <a href="https://fire-watch.co" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
                      <img src="${assetUrl(EMAIL_ASSETS.LOGO_PNG)}" alt="Fire Watch" width="160" style="display:block;border:0;height:auto;max-width:100%;">
                    </a>
                  </td>
                  <!-- Social Links -->
                  <td align="right" valign="middle" class="m-footer-social">
                    <table cellpadding="0" cellspacing="0" border="0" align="right">
                      <tr>
                        <!-- Facebook (no URL — non-clickable) -->
                        <td style="padding-left:12px;">
                          <span style="display:inline-block;">
                            <img src="${assetUrl(EMAIL_ASSETS.FACEBOOK_PNG)}" alt="Facebook" width="40" height="40" style="display:block;border:0;">
                          </span>
                        </td>
                        <!-- LinkedIn -->
                        <td style="padding-left:12px;">
                          <a href="https://www.linkedin.com/company/fire-watch" target="_blank" style="display:inline-block;text-decoration:none;">
                            <img src="${assetUrl(EMAIL_ASSETS.LINKEDIN_PNG)}" alt="LinkedIn" width="40" height="40" style="display:block;border:0;">
                          </a>
                        </td>
                        <!-- Instagram (no URL — non-clickable) -->
                        <td style="padding-left:12px;">
                          <span style="display:inline-block;">
                            <img src="${assetUrl(EMAIL_ASSETS.INSTAGRAM_PNG)}" alt="Instagram" width="40" height="40" style="display:block;border:0;">
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
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
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
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
    const timestamp = getFormattedUTCDate();

    const { error } = await resend.emails.send({
      from: contactFrom,
      to: [contactEmail],
      replyTo: data.email,
      subject: `Contact Inquiry - ${data.fullName}`,
      text: buildText(data, timestamp),
      html: buildHtml(data, timestamp),
    });

    if (error) {
      console.error("[Contact] Resend API Error:", {
        name: error.name,
        message: error.message,
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

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err));

    console.error("[Contact] Unexpected error:", {
      name: error.name || "UnknownError",
      message: error.message || "Unknown error",
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
