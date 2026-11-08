import React from "react";
import { HOME_ASSETS } from "@/assets";
import {
  HeroData,
  FeatureData,
  LatestNewsHeaderData,
  QuoteData,
  ContactCtaData,
} from "./type";

export const HERO_DATA: HeroData = {
  title: (
    <>
      Your Safety Is
      <br />
      Our Commitment
      <br />
      to Protection
    </>
  ),
  description:
    "Reliable fire detection and protection solutions designed to safeguard people, property, and critical environments.",
  buttonText: "Explore Our Solutions",
  buttonLink: "/products",
};

export const FEATURE_DATA: FeatureData = {
  label: "WHAT WE DO",
  title: (
    <>
      Comprehensive Fire
      <br className="hidden xl:block" /> Detection Solutions
    </>
  ),
  description:
    "We provide reliable fire detection and notification solutions designed to protect people, property, and critical environments.",
  list: [
    "Reliable Fire Detection",
    "Certified Safety Solutions",
    "Expert Technical Support",
    "Advanced Detection Technology",
    "24/7 Fire Safety Commitment",
    "Designed for Maximum Protection",
  ],
};

export const LATEST_NEWS_HEADER: LatestNewsHeaderData = {
  title: "Latest From Fire Watch",
  description:
    "Stay informed with the latest news, insights, product updates, and developments from Fire Watch.",
};

export const QUOTE_DATA: QuoteData = {
  quote: (
    <>
      &ldquo;We always support the holistic approach to our customers, enabling
      them to establish the right Detection solutions that can meet their fire
      risks effectively and innovatively.&rdquo;
    </>
  ),
  author: "ADEL ELASSAL, GBD",
};

export const CONTACT_CTA_DATA: ContactCtaData = {
  label: "FIRE WATCH SAFETY NETWORK",
  title: "Get In Touch",
  description:
    "Have questions about our certified fire detection systems, technical support, or system installations? Contact our dedicated safety consultants today.",
  buttonText: "Send Message",
  buttonLink: "/contact",
};

export type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  isDark: boolean;
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "01",
    title: "Intelligent System",
    description:
      "Advanced addressable fire detection solutions designed for precise monitoring, faster response, and flexible system integration.",
    image: HOME_ASSETS.PRODUCT_1,
    link: "/products/intelligent-system",
    isDark: true,
  },
  {
    id: "02",
    title: "Conventional System",
    description:
      "Reliable fire detection systems designed to provide dependable monitoring and straightforward protection for a wide range of applications.",
    image: HOME_ASSETS.PRODUCT_2,
    link: "/products/conventional-system",
    isDark: false,
  },
  {
    id: "03",
    title: "Gas Releasing System",
    description:
      "Specialized releasing systems designed to detect fire conditions and support the controlled activation of fixed firefighting installations.",
    image: HOME_ASSETS.PRODUCT_3,
    link: "/products/gas-releasing-system",
    isDark: false,
  },
];

export type NewsItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  isHighlighted?: boolean;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    title: "Join Our Team",
    description:
      "FIRE WATCH is continuously seeking to optimize our workforce targeting new talents. We are more not just a workplace, we are your big family. Please Submit your CV here.",
    image: HOME_ASSETS.NEWS_TEAM,
    link: "/careers",
    isHighlighted: true,
  },
  {
    id: "news-2",
    title: "FIREWATCH Smoke / Heat Detector",
    description:
      "Smoke/Heat Sensor is particularly suited to detecting optically dense smoke/heat typical of fires involving materials such as soft furnishings, plastic, foam or other similar materials.",
    image: HOME_ASSETS.NEWS_SMOKE,
    link: "/products/detectors",
  },
  {
    id: "news-3",
    title: "FIREWATCH at INTERSEC Dubai 2025",
    description:
      "Join us this January at INTERSEC Dubai 2025 as we showcase our latest fire detection solutions. Don't miss to visit our at Stand 3-B22, DWTC, from 14 - 16 Jan, 2025.",
    image: HOME_ASSETS.NEWS_DUBAI,
    link: "/events/intersec-2025",
  },
  {
    id: "news-4",
    title: "Fire Detection And Notification",
    description:
      "FW supplies products that will provide fire detection systems in accordance with Civil Defense regulations. We design our products to satisfy our system requirements of our customers.",
    image: HOME_ASSETS.NEWS_PANEL,
    link: "/products/notification",
  },
];

export type VisionItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

export const VISION_ITEMS: VisionItem[] = [
  {
    id: "vision-1",
    label: "Commitment to Sustainability",
    title: "Eco-Friendly Innovation",
    description:
      "At Fire Watch, we prioritize sustainability by incorporating eco-friendly practices into our production processes and promoting energy-efficient solutions. We are dedicated to reducing our environmental impact while ensuring top-quality fire protection.",
    image: HOME_ASSETS.VISION_TREE,
  },
  {
    id: "vision-2",
    label: "Our Mission",
    title: "Passion to Grow Globally",
    description:
      "We aim to be the largest hub of manufacturing, contracting and trading globally.",
    image: HOME_ASSETS.VISION_TEAM,
  },
  {
    id: "vision-3",
    label: "Our Vision",
    title: "Be the leader of Engineering Solutions",
    description:
      "Be a leader in the use of technology to encourage creativity and innovation engineering solutions. We fill our footprint with happy customers through trust, professionalism, and technical aptitude.",
    image: HOME_ASSETS.VISION_ALARM,
  },
];
