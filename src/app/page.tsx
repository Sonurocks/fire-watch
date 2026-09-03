import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeView from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HomeView />
      </main>
      <Footer />
    </div>
  );
}
