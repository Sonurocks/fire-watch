const NAME_REGEX = /^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u;
const EMAIL_REGEX = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
const PHONE_REGEX = /^\+?[1-9]\d{6,14}$/;

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

export function validateField(name: string, value: string): string {
  if (name === "fullName") {
    if (!value) return "Name is required.";
    if (value.length < 2) return "Name should be at least 2 characters.";
    if (value.length > 100) return "Name should not exceed 100 characters.";
    if (!NAME_REGEX.test(value)) return "Name should contain only letters";
  }

  if (name === "email") {
    if (!value) return "Email Address is required.";
    if (value.length > 254) return "Email Address should not exceed 254 characters.";
    if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address.";
  }

  if (name === "phone") {
    if (value) {
      if (!/^\+?\d+$/.test(value)) return "Phone Number should contain only numbers and an optional + at the beginning.";
      const digitsOnly = value.replace(/\+/g, "");
      if (digitsOnly.length < 7) return "Phone Number should contain at least 7 digits.";
      if (digitsOnly.length > 15) return "Phone Number should not exceed 15 digits.";
      if (!PHONE_REGEX.test(value)) return "Please enter a valid phone number.";
    }
  }

  if (name === "inquiryType") {
    if (value) {
      if (value.length < 2) return "Inquiry Type should be at least 2 characters.";
      if (value.length > 100) return "Inquiry Type should not exceed 100 characters.";
    }
  }

  if (name === "message") {
    if (!value) return "Message is required.";
    if (value.length < 10) return "Message should be at least 10 characters.";
    if (value.length > 2000) return "Message should not exceed 2000 characters.";
  }

  return "";
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
  const fields = ["fullName", "email", "phone", "inquiryType", "message"];
  const data: Partial<ContactFormData> = {};

  for (const field of fields) {
    const rawVal = body[field];
    
    if (rawVal !== undefined && typeof rawVal !== "string") {
      errors[field] = "Invalid format.";
      data[field as keyof ContactFormData] = "";
      continue;
    }

    const stringVal = typeof rawVal === "string" ? rawVal : "";
    let cleanedVal = stringVal;
    
    if (field === "fullName" || field === "inquiryType") {
      cleanedVal = stringVal.replace(/\s+/g, " ").trim();
    } else {
      cleanedVal = stringVal.trim();
    }

    data[field as keyof ContactFormData] = cleanedVal;

    const errorMsg = validateField(field, cleanedVal);
    
    if (errorMsg) {
      errors[field] = errorMsg;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    data: data as ContactFormData,
  };
}
