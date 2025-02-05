import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
