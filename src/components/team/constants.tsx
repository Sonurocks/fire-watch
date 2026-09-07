import { TEAM_ASSETS } from "@/assets";
import { TeamHeroData, OurCultureData, MeetOurTeamData } from "./types";

export const TEAM_HERO_DATA: TeamHeroData = {
  title: "Our Team",
  description:
    "Get to know the experienced professionals working together to deliver reliable fire detection and protection solutions.",
};

export const OUR_CULTURE_DATA: OurCultureData = {
  label: "OUR CULTURE",
  title: "Built on People, Driven\nby Purpose",
  items: [
    {
      id: "teamwork",
      title: "Teamwork &\nCollaboration",
      description: "We work together, share ideas, and support each other.",
      icon: TEAM_ASSETS.CULTURE_ICON_1,
    },
    {
      id: "innovation",
      title: "Innovation &\nLearning",
      description: "We stay curious and continuously look for better ways to work.",
      icon: TEAM_ASSETS.CULTURE_ICON_2,
    },
    {
      id: "respect",
      title: "Respect & Trust",
      description: "We value every person's contribution and build strong relationships.",
      icon: TEAM_ASSETS.CULTURE_ICON_3,
    },
    {
      id: "customer",
      title: "Customer First",
      description: "We stay focused on delivering reliable solutions that make a real impact.",
      icon: TEAM_ASSETS.CULTURE_ICON_4,
    },
  ],
};

export const MEET_OUR_TEAM_DATA: MeetOurTeamData = {
  label: "OUR PEOPLE",
  title: "Meet Our\nCore Team",
  description:
    "Our team is the driving force behind our success, bringing together diverse expertise and a shared passion for excellence. With visionary leadership, creative minds, technical expertise, and operational precision, we work collaboratively to achieve our goals.",
  members: [
    {
      id: "adel",
      name: "Adel Elassal",
      role: "Global Business Development Director",
      email: "aelassal@fire-watch.co",
      image: TEAM_ASSETS.MEMBER_ADEL,
    },
    {
      id: "maraghi",
      name: "Mohammed AL-Maraghi",
      role: "Commercial Director",
      email: "m.maraghi@fire-watch.co",
      image: TEAM_ASSETS.MEMBER_MARAGHI,
    },
    {
      id: "biswarub",
      name: "Biswarub Chakraborty",
      role: "Sales Account Manager",
      email: "bchakraborty@fire-watch.co",
      image: TEAM_ASSETS.MEMBER_BISWARUB,
    },
    {
      id: "emara",
      name: "Ahmed Emara",
      role: "Regional Sales Manager",
      email: "aemara@fire-watch.co",
      image: TEAM_ASSETS.MEMBER_EMARA,
    },
    {
      id: "suzan",
      name: "Suzan Dsouza",
      role: "Supply Chain Specialist",
      email: "logistics@fire-watch.co",
      image: TEAM_ASSETS.MEMBER_SUZAN,
    },
  ],
};
