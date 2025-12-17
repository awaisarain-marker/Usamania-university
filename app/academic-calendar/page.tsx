'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/academic-calendar/StickyNav';

export default function AcademicCalendarPage() {
    const calendarData = [
        {
            year: "2026",
            id: "year-2026",
            items: [
                { title: "Academic Calendar Summer 2026", url: "https://uitu.edu.pk/wp-content/uploads/2025/11/Final-UIT-University-Academic-Calendar-Summer-2026.pdf" },
                { title: "Academic Calendar Spring 2026", url: "https://uitu.edu.pk/wp-content/uploads/2025/11/Final-UIT-University-Academic-Calendar-Spring-2026.pdf" }
            ]
        },
        {
            year: "2025",
            id: "year-2025",
            items: [
                { title: "Academic Calendar Fall 2025", url: "https://uitu.edu.pk/wp-content/uploads/2025/09/FINAL-UIT-University-Academic-Calendar-Fall-2025-V1.pdf" },
                { title: "Academic Calendar Summer 2025", url: "https://uitu.edu.pk/wp-content/uploads/2025/06/Final-UIT-University-Academic-Calendar-Summer-2025.pdf" },
                { title: "Academic Calendar Spring 2025", url: "https://uitu.edu.pk/wp-content/uploads/2025/02/FINAL-UIT-University-Academic-Calendar-Spring-2025-V5.pdf" }
            ]
        },
        {
            year: "2024",
            id: "year-2024",
            items: [
                { title: "Academic Calendar Fall 2024", url: "https://uitu.edu.pk/wp-content/uploads/2024/12/COMBINED-ACADEMIC-CALENDARS-FALL-2024.pdf" },
                { title: "Academic Calendar Spring 2024", url: "https://uitu.edu.pk/wp-content/uploads/2024/12/COMBINED-ACADEMIC-CALENDARS-SPRING-2024.pdf" }
            ]
        },
        {
            year: "2023",
            id: "year-2023",
            items: [
                { title: "Academic Calendar Fall 2023", url: "https://uitu.edu.pk/wp-content/uploads/2024/12/COMBINED-ACADEMIC-CALENDARS-FALL-2023.pdf" },
                { title: "Academic Calendar Spring 2023", url: "https://uitu.edu.pk/wp-content/uploads/2024/12/spring-2023.pdf" }
            ]
        },
        {
            year: "2022",
            id: "year-2022",
            items: [
                { title: "Academic Calendar Fall 2022", url: "https://uitu.edu.pk/wp-content/uploads/2024/12/Fall-2022.pdf" },
                { title: "Academic Calendar Spring 2022", url: "https://uitu.edu.pk/wp-content/uploads/2024/12/COMBINED-ACADEMIC-CALENDARS-SPRING-2022.pdf" }
            ]
        }
    ];

    return (
        <div className="page-academic-calendar">
            <PageHero
                title="Academic Calendar"
                subtitle="Stay up to date with the university schedule"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Academics', href: '#' },
                    { label: 'Academic Calendar' }
                ]}
            >
                {/* Hero CTA links to jump to years */}
                <div className="hero__cta-list">
                    {calendarData.map((section) => (
                        <a key={section.year} href={`#${section.id}`} className="btn-link --white">
                            <span>{section.year}</span>
                            <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                        </a>
                    ))}
                </div>
            </PageHero>

            <StickyNav />

            <div className="container py-16 md:py-24">
                {calendarData.map((section, index) => (
                    <div key={section.year} id={section.id} className={`mb-20 scroll-mt-48 ${index === 0 ? 'mt-12' : ''}`}>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-10 w-2 bg-[#ed1c24]"></span>
                            <h2 className="text-4xl font-serif font-bold text-[#002856]">{section.year}</h2>
                        </div>

                        <div className="bg-white border border-gray-100 shadow-lg rounded-none">
                            {section.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 text-[#ed1c24] bg-red-50 p-2 rounded-full">
                                            <svg width="24" height="24" className="icon" aria-hidden="true" role="img">
                                                <use xlinkHref="#calendar"></use>
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-[#002856] text-lg">
                                            {item.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-6 mt-2 md:mt-0 pl-14 md:pl-0">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#ed1c24] hover:text-[#002856] transition-colors font-medium flex items-center gap-2 text-base relative group"
                                        >
                                            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                                                View PDF
                                            </span>
                                            <svg width="14" height="14" className="icon transition-transform group-hover:translate-x-1" aria-hidden="true" role="img">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg>
                                        </a>
                                        <a
                                            href={item.url}
                                            download
                                            className="text-[#ed1c24] hover:text-[#002856] transition-colors font-medium flex items-center gap-2 text-base relative group"
                                        >
                                            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                                                Download
                                            </span>
                                            <svg width="14" height="14" className="icon rotate-90 transition-transform group-hover:translate-y-1" aria-hidden="true" role="img">
                                                <use xlinkHref="#arrow"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
