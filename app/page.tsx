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
  heroVideoUrl: "https://ik.imagekit.io/byat8clceo/herosection%20video.mp4",
  heroTitle: "Expand your world,",
  heroSubtitle: "shape its future",
  heroButtons: [
    { text: "Admission", link: "/admission", style: "red" as const },
    { text: "How to apply", link: "/admission#how-to-apply", style: "transparent" as const }
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
      name: "Ali Khan ('24)",
      location: "Karachi, Sindh",
      quote: "UIT University provided me with the technical skills and industry exposure needed to excel in Data Science.",
      fullText: "Joining UIT University was the best decision for my career. The benefits are endless. A tight-knit, fun, and intelligent community awaits you here. The Data Science program is rigorous and up-to-date with industry standards. I’ve had access to state-of-the-art labs and mentorship from experienced faculty, which allowed me to work on real-world projects. Experiences you couldn't even dream of at other local universities are ahead—all while receiving a world-class education right here in Karachi.",
      bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flashenburg-AUBG-Testimonial-945x700.png",
      avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flasheburg-profile-150x150.png",
    },
    {
      name: "Sara Ahmed ('25)",
      location: "Lahore, Punjab",
      quote: "The collaborative environment at UIT allowed me to work on innovative software engineering projects.",
      fullText: "One of my favorite moments at UIT University was showcasing my final year project. I had the opportunity to collaborate with peers from different disciplines, developing a comprehensive software solution. I was standing there presenting to industry leaders, realizing how surreal my whole experience at UIT University has been. I am from Lahore but found a second home here, meeting people from all over Pakistan and growing both personally and professionally for four years.",
      bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-25-1-945x700.png",
      avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-profile-photo-150x150.png",
    },
    {
      name: "Zainab Malik ('26)",
      location: "Islamabad",
      quote: "UIT University broadened my horizons with its diverse community and practical approach to learning.",
      fullText: "\"UIT University helped grow my horizons by offering a diverse community, wonderfully passionate professors, and areas to practice the academic material and skills learned on campus. The focus on practical application in the BBA program has been instrumental in preparing me for the corporate world. The workshops and seminars organized regularly have given me insights that go beyond textbooks.\"",
      bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2023/10/Kayla-AUBG-USA-939x700.png",
      avatarUrl: "https://www.aubg.edu/wp-content/uploads/2023/10/Greti-website-covers-150x150.jpg",
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
        buttons={pageData.heroButtons as { text: string; link: string; style: 'red' | 'transparent' }[]}
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
