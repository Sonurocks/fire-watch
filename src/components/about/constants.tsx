import React from "react";
import { ABOUT_ASSETS } from "@/assets";
import { AboutHeroData, OurStoryData, OurVisionData, WhoWeAreData, GlobeData, OurCoreValuesData } from "./types";

export const ABOUT_HERO_DATA: AboutHeroData = {
  title: "About Fire Watch",
  description:
    "Our core mission is protecting lives, structures, and critical environments with certified engineering systems and industry-leading equipment.",
  buttonText: "Explore Our Systems",
  buttonLink: "/product",
};

export const OUR_STORY_DATA: OurStoryData = {
  label: "MISSION STATEMENT",
  title: "Building a Stronger Future for Fire & Safety",
  paragraphs: [
    "At FIRE WATCH (FW), we are a leading provider of comprehensive fire detection and suppression solutions, proudly headquartered in California, United States. Our mission is to expand globally, fostering a reputation for quality, value, and integrity, and establishing FIRE WATCH as a trusted leader in the fire and safety industry worldwide.",
    "With a state-of-the-art manufacturing facility, we leverage cutting-edge technologies to innovate products and processes, maintaining a sustainable, efficient network that adheres to the highest standards of quality, safety, and environmental compliance.",
  ],
  image: ABOUT_ASSETS.STORY_IMG,
};

export const WHO_WE_ARE_DATA: WhoWeAreData = {
  label: "WHO WE ARE",
  title: "Protecting What Matters Through Reliable Fire Protection.",
  paragraphs: [
    <React.Fragment key="1">
      FIRE WATCH is a <span className="text-brand-red-alt">USA-based fire protection company</span> specializing in the supply, installation, and maintenance of fire detection and firefighting systems. Our trained and experienced engineers and technicians deliver reliable solutions tailored to meet diverse fire protection requirements.
    </React.Fragment>,
    <React.Fragment key="2">
      We have a specialized, multi-skilled technical team capable of maintaining a wide range of firefighting systems. With the infrastructure and manpower to undertake <span className="text-brand-red-alt">turnkey projects</span>, we provide end-to-end solutions focused on <span className="text-brand-red-alt">quality, reliability, and client satisfaction.</span>
    </React.Fragment>,
  ],
};

export const OUR_VISION_DATA: OurVisionData = {
  label: "OUR VISION",
  title: "Engineering a Smarter, More Connected Future",
  description: "Our vision is to become a global leader in engineering solutions by delivering excellence, embracing innovation, and expanding our reach across emerging markets.",
  cards: [
    {
      id: "vision-1",
      title: "Industry-Leading Excellence",
      description: "Deliver engineering services that set new standards for quality, performance, and reliability worldwide.",
    },
    {
      id: "vision-2",
      title: "Strategic Growth",
      description: "Expand our capabilities through greenfield projects and strategic acquisitions of established companies.",
    },
    {
      id: "vision-3",
      title: "Global Reach",
      description: "Build a stronger presence across key markets, with a focus on expanding throughout the MENA region.",
    },
    {
      id: "vision-4",
      title: "Innovation & Tailored Solutions",
      description: "Harness advanced technologies to drive creativity and deliver solutions tailored to our clients' evolving needs.",
    },
  ],
};

export const OUR_MISSION_DATA = {
  label: "OUR MISSION",
  title: "Leading Through Excellence,\nTrust & Innovation",
  description:
    "At Fire Watch, our mission is to be a trusted leader in fire protection by delivering exceptional service, building lasting relationships, and maintaining the highest standards of quality and integrity.",
  cards: [
    { id: "mission-1", title: "Comprehensive\nService" },
    { id: "mission-2", title: "Trusted\nPartnerships", isRed: true },
    { id: "mission-3", title: "Regional\nLeadership" },
    { id: "mission-4", title: "Market-Driven\nSolutions" },
    { id: "mission-5", title: "Integrity &\nExcellence" },
  ],
};

export const OUR_CORE_VALUES_DATA: OurCoreValuesData = {
  label: "OUR CORE VALUES",
  title: "Building Excellence Through\nPeople, Precision & Partnership",
  items: [
    { id: "value-1", title: "Excellence in Talent" },
    { id: "value-2", title: "Empowering People" },
    { id: "value-3", title: "Precision & Collaboration" },
    { id: "value-4", title: "Customer-Centric Approach" },
  ],
};

export const GLOBE_DATA: GlobeData = {
  title: "Protecting Across the Globe",
  description:
    "Fire Watch solutions are trusted and installed in multiple countries, delivering reliable fire safety wherever you are.",
  locations: [
    // 3 Major Red Pins
    {
      id: "usa-head-office",
      title: "Head Office",
      label: "22982 La Cadena Dr. Suite 211\nLaguna Hills, CA 92653 – USA",
      type: "pin",
      left: "17%",
      top: "44%",
      lineDirection: "left",
    },
    {
      id: "uk-office",
      label: "Manufacturing Facilities",
      type: "pin",
      left: "47%",
      top: "40%",
      lineDirection: "left",
    },
    {
      id: "dubai-office",
      label: "Regional sales office in\n(Dubai)\nDSO,HQ,F1-104-2,\nDubai silicon Oasis,UAE",
      type: "pin",
      left: "63%",
      top: "51%",
      lineDirection: "right",
    },
    { id: "egypt", label: "Egypt", type: "logo", left: "56%", top: "49%" },
    { id: "jordan", label: "Jordan", type: "logo", left: "57.5%", top: "47%" },
    { id: "kuwait", label: "Kuwait", type: "logo", left: "60.5%", top: "48%" },
    { id: "ksa", label: "Saudi Arabia", type: "logo", left: "59%", top: "51%" },
    { id: "bahrain", label: "Bahrain", type: "logo", left: "61.5%", top: "49%" },
    { id: "qatar", label: "Qatar", type: "logo", left: "62%", top: "50%" },
    { id: "oman", label: "Oman", type: "logo", left: "63.5%", top: "52%" },
    { id: "pakistan", label: "Pakistan", type: "logo", left: "67.5%", top: "48%" },
    { id: "india", label: "India", type: "logo", left: "70%", top: "53%" },
    { id: "nepal", label: "Nepal", type: "logo", left: "71%", top: "47%" },
    { id: "bhutan", label: "Bhutan", type: "logo", left: "72.5%", top: "47.5%" },
    { id: "bangladesh", label: "Bangladesh", type: "logo", left: "73%", top: "50%" },
    { id: "srilanka", label: "Sri Lanka", type: "logo", left: "71.5%", top: "58%" },
    { id: "china", label: "China", type: "logo", left: "78%", top: "44%" },
  ],
};
