'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/sustainable-development-goals/StickyNav';
import EventsSection from '@/components/home/EventsSection';

export default function SDGsPage() {
    return (
        <div className="page-sdgs">
            <PageHero
                title="Sustainable Development Goals"
                subtitle="Committed to a Sustainable Future"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Sustainable Development Goals' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#sdgs" className="btn-secondary --red --border --arrow">
                        <span>SDGs</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                    <a href="#sdgs-report" className="btn-link --white">
                        <span>SDGs Report</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            <StickyNav />

            {/* SDGs Section */}
            <div id="sdgs" className="py-8 md:py-12 bg-[#e6eef4]">
                <div className="container">
                    <div className="w-full bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                        {/* Intro Stats Section */}
                        <div className="flex flex-wrap justify-between items-center mb-12 text-center text-[#002856]">
                            <div className="w-full md:w-auto mb-6 md:mb-0">
                                <h3 className="text-5xl font-bold">17</h3>
                                <p className="text-xl font-bold uppercase">Goals</p>
                            </div>
                            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Our Commitment to a Better Future</h3>
                                <p className="text-lg">Our Pillars</p>
                            </div>
                            <div className="w-full md:w-auto flex gap-8 justify-center">
                                <div>
                                    <h3 className="text-4xl font-bold">19</h3>
                                    <p className="text-sm font-bold uppercase">Sustainability</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold">37</h3>
                                    <p className="text-sm font-bold uppercase">Communications</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold">17</h3>
                                    <p className="text-sm font-bold uppercase">Community</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold">80</h3>
                                    <p className="text-sm font-bold uppercase">Research / Publications</p>
                                </div>
                            </div>
                        </div>

                        {/* Intro Text */}
                        <div className="prose max-w-none text-gray-600 mb-12">
                            <p className="mb-4">Welcome to UIT University's Sustainable Development Goals (SDGs) hub. Here, we showcase our commitment to the 17 SDGs established by the United Nations. Explore how we integrate these goals into our education, research, and community engagement efforts.</p>
                            <p>The Sustainable Development Goals are a universal call to action to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030. UIT University is dedicated to contributing to these global efforts through innovative solutions, partnerships, and sustainable practices.</p>
                        </div>

                        <div className="section-title mb-8">
                            <h2>SDGs</h2>
                        </div>

                        {/* SDGs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { id: 1, count: 6 },
                                { id: 2, count: 7 },
                                { id: 3, count: 32 },
                                { id: 4, count: 99 },
                                { id: 5, count: 8 },
                                { id: 6, count: 5 },
                                { id: 7, count: 8 },
                                { id: 8, count: 31 },
                                { id: 9, count: 61 },
                                { id: 10, count: 24 },
                                { id: 11, count: 8 },
                                { id: 12, count: 5 },
                                { id: 13, count: 11 },
                                { id: 14, count: 9 },
                                { id: 15, count: 7 },
                                { id: 16, count: 17 },
                                { id: 17, count: 21 },
                            ].map((sdg) => (
                                <a
                                    key={sdg.id}
                                    href="#"
                                    className="group relative block bg-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <div className="relative aspect-square">
                                        <img
                                            src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${String(sdg.id).padStart(2, '0')}.jpg`}
                                            alt={`SDG ${sdg.id}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // Fallback if UN images break, though they are standard. 
                                                // Using a solid color placeholder with Goal Number text for robustness
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className="absolute inset-0 hidden flex items-center justify-center bg-[#002856] text-white font-bold text-4xl">
                                            {sdg.id}
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white border-t border-[#e6eef4] text-center">
                                        <p className="font-bold text-[#002856]">Events</p>
                                        <p className="text-[#ed1c24] font-bold text-xl">{sdg.count}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SDGs Report Section */}
            <div id="sdgs-report" className="py-8 md:py-12 bg-[#e6eef4] border-t border-gray-200">
                <div className="container">
                    <div className="w-full bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                        <div className="section-title mb-6">
                            <h2>SDGs Annual Reports</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "SDG Report July - Dec 2024", url: "https://online.pubhtml5.com/ndia/gfaj/" },
                                { title: "SDGs Report January - June 2024", url: "https://online.pubhtml5.com/ndia/mqxe/" },
                                { title: "SDGs Report 2023", url: "https://online.pubhtml5.com/ndia/mnyq/" },
                            ].map((report, idx) => (
                                <a
                                    key={idx}
                                    href={report.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-6 bg-[#e6eef4] hover:bg-[#ed1c24] hover:text-white transition-all duration-300 group border border-[#e6eef4]"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold group-hover:text-white transition-colors text-[#002856]">{report.title}</h3>
                                        <svg width="24" height="24" className="w-6 h-6 text-[#ed1c24] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <EventsSection />
        </div >
    );
}
