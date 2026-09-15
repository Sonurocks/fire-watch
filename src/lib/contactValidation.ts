const MAX_FULL_NAME = 200;
const MAX_EMAIL = 254;
const MAX_PHONE = 30;
const MAX_INQUIRY_TYPE = 200;
const MAX_MESSAGE = 5000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
  data: ContactFormData;
}

export function validateContactForm(raw: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return {
      valid: false,
      errors: { _form: "Invalid request body" },
      data: {
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      },
    };
  }

  const body = raw as Record<string, unknown>;

  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  if (!fullName) {
    errors.fullName = "Full Name is required";
  } else if (fullName.length > MAX_FULL_NAME) {
    errors.fullName = `Full Name must be ${MAX_FULL_NAME} characters or fewer`;
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email) {
    errors.email = "Email Address is required";
  } else if (email.length > MAX_EMAIL) {
    errors.email = `Email must be ${MAX_EMAIL} characters or fewer`;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  if (phone.length > MAX_PHONE) {
    errors.phone = `Phone number must be ${MAX_PHONE} characters or fewer`;
  }

  const inquiryType =
    typeof body.inquiryType === "string" ? body.inquiryType.trim() : "";
  if (inquiryType.length > MAX_INQUIRY_TYPE) {
    errors.inquiryType = `Inquiry type must be ${MAX_INQUIRY_TYPE} characters or fewer`;
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) {
    errors.message = "Detailed Message is required";
  } else if (message.length > MAX_MESSAGE) {
    errors.message = `Message must be ${MAX_MESSAGE} characters or fewer`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    data: { fullName, email, phone, inquiryType, message },
  };
}
