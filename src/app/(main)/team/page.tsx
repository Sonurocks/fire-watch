import { Metadata } from "next";
import TeamPageContent from "@/components/team";

export const metadata: Metadata = {
  title: "Our Team | Fire Watch",
  description:
    "Get to know the experienced professionals working together to deliver reliable fire detection and protection solutions.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
