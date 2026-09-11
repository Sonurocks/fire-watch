import React from "react";
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
      id: "phone",
      label: "Phone",
      values: ["+1 (559) 425 0042"],
      linkPrefix: "tel:",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "address",
      label: "Address",
      values: ["22982 La Cadena Dr. Suite 211", "Laguna Hills, CA 92653 – USA"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "inquiries",
      label: "General Inquiries",
      values: ["sales@fire-watch.co", "info@fire-watch.co"],
      linkPrefix: "mailto:",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            fill="white"
          />
        </svg>
      ),
    },
  ],
};

export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=22982%20La%20Cadena%20Dr%20Suite%20211,%20Laguna%20Hills,%20CA%2092653&t=&z=15&ie=UTF8&iwloc=&output=embed";
