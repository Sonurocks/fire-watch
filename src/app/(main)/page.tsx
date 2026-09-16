import type { Metadata } from "next";
import Home from "@/components/home";

export const metadata: Metadata = {
  title: "Home | Fire Watch",
  description: "Explore Fire Watch Safety Network for cutting-edge fire detection and protection solutions.",
  openGraph: {
    title: "Home | Fire Watch",
    description: "Explore Fire Watch Safety Network for cutting-edge fire detection and protection solutions.",
    siteName: "Fire Watch",
    type: "website",
  }
};

export default function HomePage() {
  return (
    <main className="w-full">
      <Home />
    </main>
  );
}
