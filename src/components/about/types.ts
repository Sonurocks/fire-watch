import React from "react";

export interface AboutHeroData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface OurStoryData {
  label: string;
  title: string;
  paragraphs: string[];
  image: string;
}

export interface WhoWeAreData {
  label: string;
  title: string;
  paragraphs: React.ReactNode[];
}

export interface VisionCard {
  id: string;
  title: string;
  description: string;
}

export interface OurVisionData {
  label: string;
  title: string;
  description: string;
  cards: VisionCard[];
}

export interface MissionCard {
  id: string;
  title: string;
  isRed?: boolean;
}

export interface OurMissionData {
  label: string;
  title: string;
  description: string;
  cards: MissionCard[];
}

export interface MapLocation {
  id: string;
  title?: string;
  label: string;
  type: "pin" | "logo";
  top: string;
  left: string;
  lineDirection?: "left" | "right";
}

export interface GlobeData {
  title: string;
  description: string;
  locations: MapLocation[];
}

export interface CoreValueItem {
  id: string;
  title: string;
}

export interface OurCoreValuesData {
  label: string;
  title: string;
  items: CoreValueItem[];
}
