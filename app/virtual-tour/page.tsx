'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';

export default function VirtualTourPage() {
    return (
        <div className="page-virtual-tour">
            <PageHero
                title="Virtual Campus Tour"
                subtitle="Explore our state-of-the-art facilities from anywhere in the world"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Virtual Tour' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="section-title mb-8">
                        <h2>Experience UIT University</h2>
                    </div>

                    <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                        <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                            <h3 className="text-xl font-bold text-[#002856] mb-2">360° Tour Loading...</h3>
                            <p className="text-gray-600 mb-4">The virtual tour experience is being prepared.</p>
                            <span className="inline-block px-4 py-2 bg-[#ed1c24] text-white font-semibold text-sm rounded transition-transform group-hover:scale-105">
                                Tour Player Placeholder
                            </span>
                        </div>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-[#002856] mb-3">Modern Classrooms</h3>
                            <p className="text-gray-600">Equipped with the latest multimedia technology to enhance learning.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-[#002856] mb-3">Advanced Labs</h3>
                            <p className="text-gray-600">State-of-the-art laboratories for hands-on engineering and science practice.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-[#002856] mb-3">Library & Commons</h3>
                            <p className="text-gray-600">Vibrant spaces for study, research, and collaboration.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
