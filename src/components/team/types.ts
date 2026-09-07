export interface TeamHeroData {
  title: string;
  description: string;
}

export interface CultureCardItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface OurCultureData {
  label: string;
  title: string;
  items: CultureCardItem[];
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  email: string;
  image: string;
}

export interface MeetOurTeamData {
  label: string;
  title: string;
  description: string;
  members: TeamMemberItem[];
}
