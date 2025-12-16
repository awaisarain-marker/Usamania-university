'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import FYPSection from '@/components/fyp/FYPSection';

export default function FinalYearProjectsPage() {
    return (
        <div className="page-fyp">
            <PageHero
                title="Final Year Projects"
                subtitle="Showcasing Innovation and Research"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg" // Using same placeholder as Students page for consistency
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Final Year Projects' }
                ]}
            />

            <FYPSection />
        </div>
    );
}
