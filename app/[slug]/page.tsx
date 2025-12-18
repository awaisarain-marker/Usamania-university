'use client';

import React, { Suspense } from 'react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getPageBySlug } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';

// Import all components
import Hero from '@/components/home/Hero';
import PageHero from '@/components/layout/PageHero';
import WorldClassSection from '@/components/home/WorldClassSection';
import AlumniSection from '@/components/home/AlumniSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';
import AcademicsGrid from '@/components/home/AcademicsGrid';
import CampusExperienceSection from '@/components/home/CampusExperienceSection';
import FacultyGrid from '@/components/faculty/FacultyGrid';
// About page components
import TabAccordion from '@/components/layout/TabAccordion';
import LeadershipSection from '@/components/layout/LeadershipSection';
import FacilitiesSection from '@/components/layout/FacilitiesSection';
// Content components
import AccordionSection from '@/components/layout/AccordionSection';
import VisionBox from '@/components/layout/VisionBox';
import TabbedContent from '@/components/layout/TabbedContent';

// Define the section type
interface Section {
    _type: string;
    _key?: string;
    [key: string]: any;
}

// Component Map - maps Sanity block types to React components
const ComponentMap: Record<string, React.ComponentType<any>> = {
    heroBlock: Hero,
    pageHeroBlock: PageHero,
    worldClassBlock: WorldClassSection,
    alumniBlock: AlumniSection,
    testimonialsBlock: TestimonialsSection,
    ctaBlock: CtaSection,
    blogSectionBlock: BlogSection,
    eventsSectionBlock: EventsSection,
    academicsGridBlock: AcademicsGrid,
    campusExperienceBlock: CampusExperienceSection,
    facultyGridBlock: FacultyGrid,
    // About page components
    tabAccordionBlock: TabAccordion,
    leadershipBlock: LeadershipSection,
    facilitiesBlock: FacilitiesSection,
    // Content components
    accordionSectionBlock: AccordionSection,
    visionBoxBlock: VisionBox,
    tabbedContentBlock: TabbedContent,
};

// Spacer Component
function Spacer({ height = 'medium' }: { height?: string }) {
    const heights: Record<string, string> = {
        small: '20px',
        medium: '40px',
        large: '80px',
    };
    return <div style={{ height: heights[height] || heights.medium }} />;
}

// Rich Text Block Component
function RichTextBlockComponent({
    title,
    content,
    backgroundColor = 'white',
}: {
    title?: string;
    content?: any[];
    backgroundColor?: string;
}) {
    const bgColors: Record<string, string> = {
        'white': '#ffffff',
        'light-blue': '#e6eef4',
        'dark-blue': '#002856',
    };

    return (
        <section
            className="container py-12"
            style={{ backgroundColor: bgColors[backgroundColor] || bgColors.white }}
        >
            {title && (
                <div className="section-title mb-6">
                    <h2 className={backgroundColor === 'dark-blue' ? 'text-white' : ''}>{title}</h2>
                </div>
            )}
            {content && (
                <div className={`prose max-w-none ${backgroundColor === 'dark-blue' ? 'text-white' : ''}`}>
                    <PortableText value={content} />
                </div>
            )}
        </section>
    );
}

// FAQs Accordion Component
function FaqsAccordionComponent({
    title = 'Frequently Asked Questions',
    faqs = [],
}: {
    title?: string;
    faqs?: Array<{ question: string; answer: string }>;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="container py-12">
            <div className="section-title mb-8">
                <h2>{title}</h2>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                            className="w-full px-6 py-4 text-left font-bold text-[#002856] flex justify-between items-center"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {faq.question}
                            <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4 text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

// Journey Timeline Component
function JourneyTimelineComponent({
    title = 'Our Journey',
    milestones = [],
}: {
    title?: string;
    milestones?: Array<{ title: string; description: string }>;
}) {
    return (
        <section className="pb-16 md:pb-24 pt-12 md:pt-16">
            <div className="container">
                <h2 className="text-[#002856] font-serif text-4xl md:text-5xl mb-12 text-center">
                    {title}
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {milestones.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0 md:pt-8 border-l-2 md:border-l-0 md:border-t-2 border-[#005092]">
                            <div className="absolute top-0 left-[-9px] md:top-[-9px] md:left-0 w-4 h-4 rounded-full bg-[#ed1c24]"></div>
                            <h3 className="text-[#002856] font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Render a single section
function RenderSection({ section }: { section: Section }) {
    const { _type, ...props } = section;

    // Handle special blocks
    if (_type === 'spacerBlock') {
        return <Spacer height={props.height} />;
    }

    if (_type === 'richTextBlock') {
        return <RichTextBlockComponent {...props} />;
    }

    if (_type === 'faqsAccordionBlock') {
        return <FaqsAccordionComponent {...props} />;
    }

    if (_type === 'journeyTimelineBlock') {
        return <JourneyTimelineComponent {...props} />;
    }

    // Look up component in map
    const Component = ComponentMap[_type];

    if (!Component) {
        console.warn(`Unknown section type: ${_type}`);
        return (
            <div className="container py-8 text-center text-gray-500">
                <p>Unknown section type: {_type}</p>
            </div>
        );
    }

    // Wrap complex components in Suspense
    if (_type === 'tabAccordionBlock' || _type === 'leadershipBlock' || _type === 'facilitiesBlock') {
        return (
            <Suspense fallback={<div className="container py-12 text-center">Loading...</div>}>
                <Component {...props} />
            </Suspense>
        );
    }

    return <Component {...props} />;
}

// Main Page Component
export default function DynamicPage() {
    const params = useParams();
    const slug = params.slug as string;

    const [pageData, setPageData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPage() {
            try {
                const data = await getPageBySlug(slug);
                if (data) {
                    setPageData(data);
                } else {
                    setError('Page not found');
                }
            } catch (err) {
                console.error('Error fetching page:', err);
                setError('Error loading page');
            } finally {
                setLoading(false);
            }
        }

        if (slug) {
            fetchPage();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-red"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#002856] mb-4">404</h1>
                    <p className="text-xl text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* SEO */}
            <head>
                <title>{pageData?.seoTitle || pageData?.title || 'Page'} | UIT University</title>
                {pageData?.seoDescription && (
                    <meta name="description" content={pageData.seoDescription} />
                )}
            </head>

            {/* Render all sections */}
            <main>
                {pageData?.sections?.map((section: Section, index: number) => (
                    <RenderSection key={section._key || index} section={section} />
                ))}
            </main>
        </>
    );
}
