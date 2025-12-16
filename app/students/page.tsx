'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/students/StickyNav';
import StudentPortalSection from '@/components/students/StudentPortalSection';

export default function StudentsPage() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 156; // 88px (header) + 64px (nav)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div className="page-students">
            <PageHero
                title="Students"
                subtitle="Resources and Support for Student Success"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg" // Placeholder image
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Students' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#student-portal" onClick={(e) => handleScroll(e, 'student-portal')} className="btn-secondary --red --border --arrow">
                        <span>Student Portal</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                    <a href="#student-affairs" onClick={(e) => handleScroll(e, 'student-affairs')} className="btn-link --white">
                        <span>Student Affairs</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#library" onClick={(e) => handleScroll(e, 'library')} className="btn-link --white">
                        <span>Library</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#scholarship" onClick={(e) => handleScroll(e, 'scholarship')} className="btn-link --white">
                        <span>Scholarship</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            <StickyNav />

            {/* Placeholder Sections */}
            {/* Sections */}
            <section className="py-20 bg-[#e6eef4] min-h-[400px]">
                <StudentPortalSection />
            </section>

            <section id="student-affairs" className="py-20 bg-[#e6eef4] min-h-[400px]">
                <div className="container">
                    <div className="section-title text-center mb-8">
                        <h2>Student Affairs</h2>
                    </div>
                </div>
            </section>

            <section id="library" className="py-20 bg-[#e6eef4] min-h-[400px]">
                <div className="container">
                    <div className="section-title text-center mb-8">
                        <h2>Library</h2>
                    </div>
                </div>
            </section>

            <section id="scholarship" className="py-20 bg-[#e6eef4] min-h-[400px]">
                <div className="container">
                    <div className="section-title text-center mb-8">
                        <h2>Scholarship</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}
