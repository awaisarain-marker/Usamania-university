import React from 'react';
import PageHero from '@/components/layout/PageHero';
import TabAccordion from '@/components/layout/TabAccordion';
import LeadershipSection from '@/components/layout/LeadershipSection';
import FacilitiesSection from '@/components/layout/FacilitiesSection';

export default function AboutUs() {
    return (
        <main>
            <PageHero
                title="About UIT University"
                subtitle="Excellence in Education, Innovation in Research"
                bgImage="/campus-hero.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' }
                ]}
            >
                <a href="#" className="btn-secondary --red --border --arrow mr-4">
                    <span>Plan for growth and development</span>
                    <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                </a>
                <a href="#" className="btn-secondary --red --border --arrow">
                    <span>Skaptopara III Expansion</span>
                    <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                </a>
            </PageHero>

            {/* Tabbed Content Section */}
            <TabAccordion />

            {/* Our Journey Section */}
            <section className="pb-16 md:pb-24 pt-0 md:pt-0">
                <div className="container">
                    <h2 className="text-[#002856] font-serif text-4xl md:text-5xl mb-12 text-center">Our Journey</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Foundation Legacy", desc: "Usman Memorial Foundation established in memory of Late Mohammad Usman." },
                            { title: "Institute Birth", desc: "Usman Institute of Technology (UIT) established, beginning our journey in technical education." },
                            { title: "Academic Growth", desc: "Affiliation with NED University of Engineering and Technology, expanding our horizons." },
                            { title: "University Status", desc: "Chartered as independent UIT University under Sindh Act, achieving full autonomy." }
                        ].map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-0 md:pt-8 border-l-2 md:border-l-0 md:border-t-2 border-[#005092]">
                                <div className="absolute top-0 left-[-9px] md:top-[-9px] md:left-0 w-4 h-4 rounded-full bg-[#ed1c24]"></div>
                                <h3 className="text-[#002856] font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <LeadershipSection />

            {/* Facilities Section */}
            <FacilitiesSection />
        </main>
    );
}
