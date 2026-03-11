import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-[#05070f] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <WhyUs />
      <CTA />
    </main>
  );
}
