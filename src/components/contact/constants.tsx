import { ContactHeroData, ContactInfoData } from "./types";

export const CONTACT_HERO_DATA: ContactHeroData = {
  title: "Get In Touch",
  description:
    "Have a question or need a reliable fire protection solution? Our team is here to help you find the right solution for your project.",
};

export const CONTACT_INFO_DATA: ContactInfoData = {
  title: "Contact Us",
  description:
    "Do you have any questions about any of us, our products, or services? Send us an email.",
  details: [
    {
      id: "address",
      label: "Address",
      values: ["22982 La Cadena Dr. Suite 211", "Laguna Hills, CA 92653 – USA"],
    },
    {
      id: "phone",
      label: "Phone",
      values: ["+1 (559) 425 0042"],
      linkPrefix: "tel:",
    },
    {
      id: "inquiries",
      label: "General Inquiries",
      values: ["sales@fire-watch.co", "info@fire-watch.co"],
      linkPrefix: "mailto:",
    },
  ],
};

export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=22982%20La%20Cadena%20Dr%20Suite%20211,%20Laguna%20Hills,%20CA%2092653&t=&z=15&ie=UTF8&iwloc=&output=embed";
