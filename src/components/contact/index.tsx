import ContactHero from "./ContactHero";
import ContactFormCard from "./ContactFormCard";
import ContactSection from "./ContactSection";

export default function Contact() {
  return (
    <div className="w-full flex flex-col">
      <ContactHero />
      <ContactSection />
      <ContactFormCard />
    </div>
  );
}
