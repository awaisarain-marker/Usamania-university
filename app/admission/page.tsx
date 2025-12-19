import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/admission/StickyNav';
import AcademicsGrid from '@/components/home/AcademicsGrid';
import TabbedContent from '@/components/layout/TabbedContent';
import { getAdmissionPage } from '@/sanity/lib/queries';
import '@/app/dynamic-content.css';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function AdmissionPage() {
    const pageData = await getAdmissionPage();
    const tabbedContentSection = pageData?.sections?.find((s: any) => s._type === 'tabbedContentBlock');

    return (
        <div className="page-admission">
            <PageHero
                title="Admissions"
                subtitle="Join the future of technology and innovation"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#academics" className="btn-secondary --red --border --arrow">
                        <span>Explore Programs</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>
                </div>
            </PageHero>

            <StickyNav />

            <div id="academics">
                <AcademicsGrid />
            </div>

            <div id="admission-info">
                {tabbedContentSection ? (
                    <TabbedContent
                        sectionId={tabbedContentSection.sectionId || 'admission-tabs'}
                        tabs={tabbedContentSection.tabs || []}
                    />
                ) : (
                    <div className="container py-10 text-center">
                        <p>Loading admission information...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
