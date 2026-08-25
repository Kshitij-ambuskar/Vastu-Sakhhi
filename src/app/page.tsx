import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrainingSection from "@/components/TrainingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Pournima | Vastu & Astrology Consultant",
  description:
    "Meet Pournima, founder of VastuSakhhi — a professional Vastu and Astrology consultant trained in Astro Vastu, Numero Vastu and Advanced Vastu under Acharya Pankit Goyal. Explore her services and approach.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "About Pournima | VastuSakhhi — Vastu & Astrology Consultant",
    description:
      "Meet Pournima, founder of VastuSakhhi — trained in Astro Vastu, Numero Vastu and Advanced Vastu under Acharya Pankit Goyal.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TrainingSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
