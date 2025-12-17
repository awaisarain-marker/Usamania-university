'use client';

import React, { Suspense, useState, useEffect } from 'react';
import PageHero from '@/components/layout/PageHero';
import TabAccordion from '@/components/layout/TabAccordion';
import LeadershipSection from '@/components/layout/LeadershipSection';
import FacilitiesSection from '@/components/layout/FacilitiesSection';
import { getAboutPageContent } from '@/sanity/lib/queries';

// Default data as fallback
const defaultData = {
    heroTitle: 'About UIT University',
    heroSubtitle: 'Excellence in Education, Innovation in Research',
    heroBgImage: '/campus-hero.png',
    heroButtons: [
        { text: 'Plan for growth and development', link: '#' },
        { text: 'Skaptopara III Expansion', link: '#' }
    ],
    journeyTitle: 'Our Journey',
    journeyMilestones: [
        { title: 'Foundation Legacy', description: 'Usman Memorial Foundation established in memory of Late Mohammad Usman.' },
        { title: 'Institute Birth', description: 'Usman Institute of Technology (UIT) established, beginning our journey in technical education.' },
        { title: 'Academic Growth', description: 'Affiliation with NED University of Engineering and Technology, expanding our horizons.' },
        { title: 'University Status', description: 'Chartered as independent UIT University under Sindh Act, achieving full autonomy.' }
    ]
};

export default function AboutUs() {
    const [pageData, setPageData] = useState<any>(defaultData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAboutPageContent();
                if (data) {
                    setPageData({
                        ...defaultData,
                        ...Object.fromEntries(
                            Object.entries(data).filter(([, value]) => value !== null && value !== undefined)
                        )
                    });
                }
            } catch (error) {
                console.error('Error fetching about page:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            <PageHero
                title={pageData.heroTitle}
                subtitle={pageData.heroSubtitle}
                bgImage={pageData.heroBgImage || '/campus-hero.png'}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' }
                ]}
            >
                {pageData.heroButtons?.map((button: any, index: number) => (
                    <a key={index} href={button.link} className="btn-secondary --red --border --arrow mr-4">
                        <span>{button.text}</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                    </a>
                ))}
            </PageHero>

            {/* Tabbed Content Section */}
            <Suspense fallback={<div className="container py-12 text-center">Loading tabs...</div>}>
                <TabAccordion />
            </Suspense>

            {/* Our Journey Section */}
            <section className="pb-16 md:pb-24 pt-12 md:pt-16">
                <div className="container">
                    <h2 className="text-[#002856] font-serif text-4xl md:text-5xl mb-12 text-center">
                        {pageData.journeyTitle || 'Our Journey'}
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {(pageData.journeyMilestones || defaultData.journeyMilestones).map((item: any, index: number) => (
                            <div key={index} className="relative pl-8 md:pl-0 md:pt-8 border-l-2 md:border-l-0 md:border-t-2 border-[#005092]">
                                <div className="absolute top-0 left-[-9px] md:top-[-9px] md:left-0 w-4 h-4 rounded-full bg-[#ed1c24]"></div>
                                <h3 className="text-[#002856] font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <Suspense fallback={<div className="container py-12 text-center">Loading leadership section...</div>}>
                <LeadershipSection />
            </Suspense>

            {/* Facilities Section */}
            <Suspense fallback={<div className="container py-12 text-center">Loading facilities...</div>}>
                <FacilitiesSection />
            </Suspense>
        </main>
    );
}
