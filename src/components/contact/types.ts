import React from "react";

export interface ContactHeroData {
  title: string;
  description: string;
}

export interface ContactDetailItem {
  id: string;
  label: string;
  values: string[];
  linkPrefix?: string;
  icon?: React.ReactNode;
}

export interface ContactInfoData {
  title: string;
  description: string;
  details: ContactDetailItem[];
}
