import { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Fire Watch",
  description: "Learn more about Fire Watch and our commitment to superior fire detection and suppression systems.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <About />
    </main>
  );
}
