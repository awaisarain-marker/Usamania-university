'use client';

import React, { useState } from 'react';

const courses = [
    {
        "title": "Smart Digital Marketing from SEO to Automation",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/10/Digital-Automation.jpeg",
        "category": "Marketing"
    },
    {
        "title": "Cloud Enabled ERP",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/10/ERP.jpeg",
        "category": "Other"
    },
    {
        "title": "3D Animation",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/10/3d-2.jpg",
        "category": "Designing"
    },
    {
        "title": "Graphic Design and Video Editing",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/09/Graphic-Video.jpg",
        "category": "Designing"
    },
    {
        "title": "Prompt Engineering with Generative AI",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/09/Ai-Pompt-engineering.jpg",
        "category": "Development"
    },
    {
        "title": "Applied Data Science and AI",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/09/Data-Science.jpeg",
        "category": "Development"
    },
    {
        "title": "AI-Powered MERN Stack Development",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/06/MERN-Stack.jpeg",
        "category": "Development"
    },
    {
        "title": "Amazon Wholesale  FBA",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/06/Amzon.jpeg",
        "category": "Marketing"
    },
    {
        "title": "Project Management",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/06/Project-Management.jpg",
        "category": "Marketing"
    },
    {
        "title": "Creative Learning Camp 2025",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/06/UCLC-2025.jpeg",
        "category": "Other"
    },
    {
        "title": "Renewable Energy Systems",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/05/CPD-flyer-Renewable.jpg",
        "category": "Other"
    },
    {
        "title": "Python with AI",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/05/Python-AI.jpeg",
        "category": "Other"
    },
    {
        "title": "Supply Chain Leadership and Management",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/05/Supply-chain.jpg",
        "category": "Other"
    },
    {
        "title": "Digital Marketing with AI",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/05/DM-AI.jpg",
        "category": "Marketing"
    },
    {
        "title": "Graphic Designing with AI",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/04/Graphic-AI.jpg",
        "category": "Designing"
    },
    {
        "title": "AI-Powered Video Editing and Design",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/04/Video-editing.jpg",
        "category": "Designing"
    },
    {
        "title": "Social Media Marketing",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/04/SMM.jpeg",
        "category": "Marketing"
    },
    {
        "title": "Shopify",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/01/Shopify-2.jpg",
        "category": "Marketing"
    },
    {
        "title": "How To Become A Daraz seller",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/01/DARAZ-new.jpg",
        "category": "Marketing"
    },
    {
        "title": "Data Science",
        "image": "https://uitu.edu.pk/wp-content/uploads/2025/01/Data-Science.jpg",
        "category": "Other"
    },
    {
        "title": "Graphics and Video Editing",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-23-at-11.32.16.jpeg",
        "category": "Designing"
    },
    {
        "title": "3D Animation",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/12/3d-animation-5-scaled.jpg",
        "category": "Designing"
    },
    {
        "title": "Cyber Security",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/12/Cyber-5-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "AI Power Chip Design",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/12/MERL-1.jpg",
        "category": "Designing"
    },
    {
        "title": "AI Enhanced UI/UX Design and Development",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/11/UIUX-NOV-scaled.jpg",
        "category": "Development"
    },
    {
        "title": "Mern Stack Development",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/10/Mern-Stack-scaled.jpg",
        "category": "Development"
    },
    {
        "title": "Become a Certified Mental Health Counselor",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/10/mental-health-counselor-2-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Mastering Amazon Wholesale FBA",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/10/Amazon-FBA-online-scaled.jpg",
        "category": "Marketing"
    },
    {
        "title": "Graphic Design",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/10/Graphic-October.jpg",
        "category": "Designing"
    },
    {
        "title": "Digital Marketing",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/10/Digital-Marketing-oct.jpg",
        "category": "Marketing"
    },
    {
        "title": "Generate AI Prompt Engineering",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/09/AI-Engineering-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Data Visualization and Analysis in Tableau",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/09/data-analysis-tableau-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Social Media Marketing",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/09/Social-Media-Marketing-class-1-scaled.jpg",
        "category": "Marketing"
    },
    {
        "title": "Python Programming",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/09/Python-Programming-scaled.jpg",
        "category": "Development"
    },
    {
        "title": "Cyber Security",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-26-at-16.45.27.jpeg",
        "category": "Other"
    },
    {
        "title": "Supply Chain Leadership and  Management",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/07/Supply-Chain-Management-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Graphic Designing and Video Editing",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/07/Graphic-Video-scaled.jpg",
        "category": "Designing"
    },
    {
        "title": "CCNA",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/06/CCNA-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Industrial Automation and PLC",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/06/PLC-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Creative Learning Camp 2024",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/06/Summer-Camp-spider-standee-scaled.webp",
        "category": "Other"
    },
    {
        "title": "Mental Health Counselor",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/07/Mental-Health-Counselor-July-class-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Advanced Animation Techniques",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/04/animation-scaled.jpg",
        "category": "Designing"
    },
    {
        "title": "Entrepreneurship",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/07/Entrepreneurship-Class-scaled.jpg",
        "category": "Marketing"
    },
    {
        "title": "UI/UX Design and Development",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/05/UIUx-Designer-3-scaled.jpg",
        "category": "Development"
    },
    {
        "title": "Certified Web and Mobile Hybrid App Development",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/05/web-and-mobile-class-scaled.jpg",
        "category": "Development"
    },
    {
        "title": "YouTube Automation",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-19-at-10.14.58.jpeg",
        "category": "Other"
    },
    {
        "title": "Shopify Dropshipping",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/02/shopify-scaled.jpg",
        "category": "Marketing"
    },
    {
        "title": "NAVTTC",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/NAVTTC-Post-3.jpg",
        "category": "Other"
    },
    {
        "title": "Tiktok Shop Mastery",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/Tiktok-Shop-7-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "IELTS",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/IETS-3.jpg",
        "category": "Other"
    },
    {
        "title": "Lean Manufacturing and Service",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/Lean-2-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Data Analytics with Microsoft Power BI",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/Data-analyst-power-BI-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Foundation of Real Estate",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/Real-Estate-2-2-scaled.jpg",
        "category": "Marketing"
    },
    {
        "title": "Cyber Security Job Training",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/cybersecurity-2.jpeg",
        "category": "Other"
    },
    {
        "title": "Amazon",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/Amazon-FBA-2-2-scaled.jpg",
        "category": "Other"
    },
    {
        "title": "Become A Freelancer",
        "image": "https://uitu.edu.pk/wp-content/uploads/2024/01/Freelancing-2.jpg",
        "category": "Other"
    }
];

const filters = ["All", "Development", "Marketing", "Designing", "Other"];

export default function ShortCoursesSection() {
    const [visibleCount, setVisibleCount] = useState(9);
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredCourses = activeFilter === "All"
        ? courses
        : courses.filter(course => course.category === activeFilter);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 9);
    };

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
        setVisibleCount(9); // Reset visible count when filter changes
    };

    const openLightbox = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section className="section py-16" id="short-courses">
            <div className="container mx-auto px-4">
                <div className="section-title mb-12 text-center">
                    <h2>Short Courses</h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterClick(filter)}
                            className={`
                                px-6 py-2 text-sm font-bold uppercase transition-all duration-300 border
                                ${activeFilter === filter
                                    ? 'bg-[#ed1c24] text-white border-[#ed1c24]'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-[#ed1c24]'}
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.slice(0, visibleCount).map((course, index) => (
                        <div
                            key={index}
                            className="relative block h-full overflow-hidden border-l-[5px] border-[#ed1c24] group cursor-pointer bg-gray-200"
                            onClick={() => openLightbox(course.image)}
                        >
                            {/* Image Container with Aspect Ratio */}
                            <div className="relative w-full aspect-[481/385] overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={course.image}
                                    alt={course.title}
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
                                        className="ma-courses-inner-heading  text-[28px] font-bold text-white leading-tight font-sans drop-shadow-md"
                                        style={{ fontFamily: 'Lato, sans-serif' }}
                                    >
                                        {course.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < filteredCourses.length && (
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
        </section>
    );
}
