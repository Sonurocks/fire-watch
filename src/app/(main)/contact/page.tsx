import { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | Fire Watch",
  description:
    "Have a question or need a reliable fire protection solution? Get in touch with the Fire Watch team.",
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <Contact />
    </main>
  );
}
