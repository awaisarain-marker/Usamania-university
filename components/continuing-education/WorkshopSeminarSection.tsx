'use client';

import React, { useState } from 'react';

const workshops = [
    {
        title: "Workshop on Mental Health",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/03/workshop-mental-health-scaled.jpg"
    },
    {
        title: "Workshop on Excel",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/01/workshop-on-excel-1.jpg"
    },
    {
        title: "Cyber Security Session",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/01/cyber-security-session-1.png"
    },
    {
        title: "Session on Future is 3D Animation",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/01/future3d-1.jpeg"
    },
    {
        title: "Real Estate Marketing Seminar",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/01/realestate-1.png"
    },
    {
        title: "Time Management Workshop",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/01/time-1.jpeg"
    }
];

export default function WorkshopSeminarSection() {
    const [visibleCount, setVisibleCount] = useState(3);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    const openLightbox = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div id="workshop-seminar" className="py-8 md:py-12 bg-[#e6eef4] border-t border-gray-200">
            <div className="container mx-auto px-4">
                {/* Wrapper from Alumni Engagement */}
                <div className="w-full bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="section-title mb-6">
                        <h2>Workshop / Seminar</h2>
                    </div>

                    {/* Grid from Short Courses (Filter-less) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workshops.slice(0, visibleCount).map((workshop, index) => (
                            <div
                                key={index}
                                className="relative block h-full overflow-hidden border-l-[5px] border-[#ed1c24] group cursor-pointer bg-gray-200"
                                onClick={() => openLightbox(workshop.image)}
                            >
                                {/* Image Container with Aspect Ratio */}
                                <div className="relative w-full aspect-[481/385] overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={workshop.image}
                                        alt={workshop.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                    />

                                    {/* Gradient Overlay - mimic global style state 1 (default) */}
                                    <div
                                        className="absolute inset-0 z-10 transition-all duration-300 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(360deg, rgba(0, 26, 55, 0.95) 15.26%, rgba(0, 40, 86, 0) 55.58%)'
                                        }}
                                    ></div>

                                    {/* Gradient Overlay - mimic global style state 2 (hover) */}
                                    <div
                                        className="absolute inset-0 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(360deg, rgba(0, 26, 55, 1) 20%, rgba(0, 40, 86, 0.3) 70%)'
                                        }}
                                    ></div>

                                    {/* Title */}
                                    <div className="absolute bottom-[20px] left-0 w-full px-[20px] pl-[40px] z-20">
                                        <h3
                                            className="ma-courses-inner-heading text-[28px] font-bold text-white leading-tight font-sans drop-shadow-md"
                                            style={{ fontFamily: 'Lato, sans-serif' }}
                                        >
                                            {workshop.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visibleCount < workshops.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={loadMore}
                                className="btn-secondary --red"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 transition-opacity duration-300"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors duration-300 z-50 p-2"
                        onClick={closeLightbox}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div
                        className="relative w-full h-full max-w-5xl max-h-[90vh] p-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={selectedImage}
                            alt="Lightbox Preview"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
