import React from 'react';
import { getAllJobs } from '@/sanity/lib/queries';
import CareersPageContent from '@/components/careers/CareersPageContent';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CareersPage() {
    const jobs = await getAllJobs();

    return <CareersPageContent jobs={jobs} />;
}
