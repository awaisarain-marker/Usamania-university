'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/continuing-education/StickyNav';
import RegistrationSection from '@/components/continuing-education/RegistrationSection';
import ShortCoursesSection from '@/components/continuing-education/ShortCoursesSection';
import WorkshopSeminarSection from '@/components/continuing-education/WorkshopSeminarSection';
import CertificateDistributionSection from '@/components/continuing-education/CertificateDistributionSection';

export default function ContinuingEducationPage() {
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
        <div className="page-continuing-education">
            <PageHero
                title="Continuing Education"
                subtitle="Lifelong Learning and Professional Development"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg" // Placeholder image, same as corporate liaison for now
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Continuing Education' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#registration" onClick={(e) => handleScroll(e, 'registration')} className="btn-secondary --red --border --arrow">
                        <span>Registration</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                    <a href="#short-courses" onClick={(e) => handleScroll(e, 'short-courses')} className="btn-link --white">
                        <span>Short Courses</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#workshop-seminar" onClick={(e) => handleScroll(e, 'workshop-seminar')} className="btn-link --white">
                        <span>Workshop / Seminar</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#certificate-distribution" onClick={(e) => handleScroll(e, 'certificate-distribution')} className="btn-link --white">
                        <span>Certificate Distribution</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            <StickyNav />

            <RegistrationSection />

            <ShortCoursesSection />

            <WorkshopSeminarSection />
            <CertificateDistributionSection />
        </div>
    );
}
