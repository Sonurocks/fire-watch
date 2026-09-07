import React from "react";

export type HeroData = {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export type FeatureData = {
  label: string;
  title: React.ReactNode;
  description: string;
  list: string[];
};

export type LatestNewsHeaderData = {
  title: string;
  description: string;
};

export type QuoteData = {
  quote: React.ReactNode;
  author: string;
};

export type ContactCtaData = {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};
