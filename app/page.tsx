'use client';

import { useEffect, useState } from 'react';
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
import { getHomePageContent } from "@/sanity/lib/queries";

// Default fallback data
const defaultData = {
  // Hero defaults
  heroVideoUrl: "https://www.aubg.edu/wp-content/uploads/2022/10/campus-tour.mp4",
  heroTitle: "Expand your world,",
  heroSubtitle: "shape its future",
  heroButtons: [
    { text: "Admission", link: "/admission", style: "red" },
    { text: "How to apply", link: "/admission#how-to-apply", style: "transparent" }
  ],
  heroStats: [
    { value: "Global Standards", label: "delivered in Pakistan" },
    { value: "5+", label: "nationalities represented on campus" },
    { value: "Education", label: "Relevant, modern learning" },
    { value: "#1", label: "in career success" }
  ],
  heroQuickLinks: [
    { title: "MERL", subtitle: "Medical Engineering Research Lab", link: "/merl", linkText: "Learn more", imageUrl: null },
    { title: "Final Year Projects", subtitle: "Innovative Student Projects", link: "/final-year-projects", linkText: "Explore Projects", imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/08/Blagoevgrad-96x69.jpg" },
    { title: "Scholarship", subtitle: "Financial Aid Opportunities", link: "/students#scholarship", linkText: "Discover here", imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/04/about-hero-background-96x69.jpg" }
  ],

  // Introduction defaults
  introImageUrl: "https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-1028x605.jpg",
  introTitle: "An Introduction to Our University",
  introDescription: "The UIT University (UITU) was established vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide Notification in The Sindh Government Gazette on May 28, 2018. The University after due charter inspections by HEC, granted NOC whereby UITU has been initially allowed to start undergraduate programs in four departments namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences. The UIT University is managed by Usman Memorial Foundation (UMF).",
  introButtonText: "Learn More About Us",
  introButtonLink: "/about-us",

  // Academics defaults
  academicsTitle: "UIT Academics",
  academicsDescription: "Discover the program that sparks your passion and sets you up for success. Your academic journey awaits!",

  // Testimonials defaults
  testimonials: [
    {
      name: "Daniel Flashenburg ('28)",
      location: "Easton, MA",
      quote: "The benefits are endless. A tight-knit, fun, and intelligent community awaits you",
      fullText: "Do it! The benefits are endless. A tight-knit, fun, and intelligent community awaits you, and experiences you couldn't even dream of at a school in the US are ahead-- all the while you are receiving the same level of education at an (often times) monumentally less expensive cost.\"",
      bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flashenburg-AUBG-Testimonial-945x700.png",
      avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flasheburg-profile-150x150.png",
    },
    {
      name: "Owen Kemerer ('25)",
      location: "Burlington, VT",
      quote: "I had the opportunity to take a trip to Brussels as part of a European Studies class.",
      fullText: "One of my favorite moments at UIT University was during the fall semester of my senior year. I had the opportunity to take a trip to Brussels as part of a European Studies class. I was standing waiting for the metro talking to some friends from Ukraine and Bulgaria. In that moment I realized how surreal my whole experience at UIT University has been. I am an American who has been lucky enough to live on another continent for four years and meet people from all over the world.",
      bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-25-1-945x700.png",
      avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-profile-photo-150x150.png",
    },
  ],

  // Alumni defaults
  alumniImageUrl: "https://www.aubg.edu/wp-content/uploads/2023/05/alumni-success.png",
  alumniTitle: "Alumni Success",
  alumniDescription: "Read more about the remarkable achievements of the UIT alumni",
  alumniButtonText: "Check our alumni success stories",
  alumniButtonLink: "/corporate-liaison#alumni-engagement",

  // CTA defaults
  ctaTopImageUrl: "https://www.aubg.edu/wp-content/uploads/2022/03/hats.png",
  ctaLabel: "Still searching?",
  ctaTitleTop: "Let Us Help",
  ctaTitleBottom: "You Thrive!",
  ctaDescription: "Our counselors and students are here to answer all your UIT-related questions about higher Education. Get in touch:",
  ctaButtons: [
    { text: "Talk to our counselors", link: "/offices/admissions-office/" },
    { text: "Talk to our students", link: "/admissions/talk-to-our-students/" }
  ],
  ctaBottomImageUrl: "https://www.aubg.edu/wp-content/uploads/2022/03/students.png",

  // Campus defaults
  campusTitle: "Study Hard & Enjoy Your Campus Experience",
  campusGallery: [
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-19-400x400.jpg", alt: "Gallery Image 1" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/All-campus-picnic-400x400.jpg", alt: "Gallery Image 2" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-17-400x400.jpg", alt: "Gallery Image 3" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Commencement-2022-400x400.jpg", alt: "Gallery Image 4" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Move-in-day-2022-400x400.jpg", alt: "Gallery Image 5" }
  ]
};

export default function Home() {
  const [pageData, setPageData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomePageContent();
        if (data) {
          // Merge with defaults (use Sanity data if available, otherwise use defaults)
          setPageData({
            ...defaultData,
            ...Object.fromEntries(
              Object.entries(data).filter(([, value]) => value !== null && value !== undefined)
            )
          });
        }
      } catch (error) {
        console.error('Error fetching home page content:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <SvgSprite />
      <Hero
        videoUrl={pageData.heroVideoUrl}
        title={pageData.heroTitle}
        subtitle={pageData.heroSubtitle}
        buttons={pageData.heroButtons}
        stats={pageData.heroStats}
        quickLinks={pageData.heroQuickLinks}
      />
      <WorldClassSection
        imageUrl={pageData.introImageUrl}
        title={pageData.introTitle}
        description={pageData.introDescription}
        buttonText={pageData.introButtonText}
        buttonLink={pageData.introButtonLink}
      />
      <AcademicsGrid
        title={pageData.academicsTitle}
        description={pageData.academicsDescription}
      />
      <BlogSection />
      <TestimonialsSection testimonials={pageData.testimonials} />
      <AlumniSection
        imageUrl={pageData.alumniImageUrl}
        title={pageData.alumniTitle}
        description={pageData.alumniDescription}
        buttonText={pageData.alumniButtonText}
        buttonLink={pageData.alumniButtonLink}
      />
      <EventsSection />
      <CtaSection
        topImageUrl={pageData.ctaTopImageUrl}
        label={pageData.ctaLabel}
        titleTop={pageData.ctaTitleTop}
        titleBottom={pageData.ctaTitleBottom}
        description={pageData.ctaDescription}
        buttons={pageData.ctaButtons}
        bottomImageUrl={pageData.ctaBottomImageUrl}
      />
      <CampusExperienceSection
        title={pageData.campusTitle}
        gallery={pageData.campusGallery}
      />
    </div>
  );
}
