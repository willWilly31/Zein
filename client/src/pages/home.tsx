import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Programs } from "@/components/Programs";
import { Comparison } from "@/components/Comparison";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
