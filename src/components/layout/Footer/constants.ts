import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";



export const CONTACT_INFO = [
  {
    id: "address",
    icon: HiOutlineLocationMarker,
    text: "22982 La Cadena Dr. Suite 211\nLaguna Hills, CA 92653 – USA",
  },
  {
    id: "phone",
    icon: FiPhone,
    text: "+1 (559) 425 0042",
  },
  {
    id: "email-info",
    icon: FiMail,
    text: "info@fire-watch.co",
  },
  {
    id: "email-sales",
    icon: FiMail,
    text: "sales@fire-watch.co",
  },
];

export const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/team" },
  { label: "About us", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Contact Us", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { id: "facebook", icon: FaFacebookF, href: "#" },
  { id: "linkedin", icon: FaLinkedinIn, href: "#" },
  { id: "instagram", icon: FaInstagram, href: "#" },
];
