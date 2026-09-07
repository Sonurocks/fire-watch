export interface ContactHeroData {
  title: string;
  description: string;
}

export interface ContactDetailItem {
  id: string;
  label: string;
  values: string[];
  linkPrefix?: string;
}

export interface ContactInfoData {
  title: string;
  description: string;
  details: ContactDetailItem[];
}
