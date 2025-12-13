import Hero from "@/components/home/Hero";
import WorldClassSection from "@/components/home/WorldClassSection";
import AcademicsGrid from "@/components/home/AcademicsGrid";
import BlogSection from "@/components/home/BlogSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AlumniSection from "@/components/home/AlumniSection";
import EventsSection from "@/components/home/EventsSection";
import CtaSection from "@/components/home/CtaSection";
import CampusExperienceSection from "@/components/home/CampusExperienceSection";
import SvgSprite from "@/components/icons/Sprite";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SvgSprite />
      <Hero />
      <WorldClassSection />
      <AcademicsGrid />
      <BlogSection />
      <TestimonialsSection />
      <AlumniSection />
      <EventsSection />
      <CtaSection />
      <CampusExperienceSection />
      <CampusExperienceSection />
    </div>
  );
}
