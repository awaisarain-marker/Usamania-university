'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import JobCard from '@/components/careers/JobCard';
import JobSearch from '@/components/careers/JobSearch';
import JobPopup from '@/components/careers/JobPopup';

export interface JobPosition {
    _id?: string;
    title: string;
    description: string;
    postedDate: string;
    deadline: string;
    content: any; // Portable Text
}

export default function CareersPageContent({ jobs }: { jobs: JobPosition[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

    // Filter jobs based on search query
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const visibleJobs = filteredJobs.slice(0, visibleCount);

    const handleLoadMore = () => {
        setIsLoadingMore(true);
        // Simulate loading delay
        setTimeout(() => {
            setVisibleCount(prev => prev + 3);
            setIsLoadingMore(false);
        }, 800);
    };

    // Reset visible count when search changes
    useEffect(() => {
        setVisibleCount(6);
    }, [searchQuery]);

    return (
        <div className="page-careers bg-[#e6eef4] min-h-screen">
            <PageHero
                title="Careers"
                subtitle="Join Our Team at UIT University"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Careers' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#002856] mb-6">Current Openings</h2>
                        <p className="text-lg text-gray-700">Explore the latest job opportunities and become part of our academic excellence.</p>
                    </div>

                    <JobSearch onSearch={setSearchQuery} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[200px]">
                        <AnimatePresence mode="popLayout">
                            {visibleJobs.map((job, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={job._id || index}
                                    className="h-full"
                                >
                                    <JobCard
                                        title={job.title}
                                        description={job.description}
                                        postedDate={job.postedDate}
                                        deadline={job.deadline}
                                        onClick={() => setSelectedJob(job)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {visibleJobs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-500">No jobs found matching your criteria.</p>
                        </div>
                    )}

                    {visibleJobs.length < filteredJobs.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                disabled={isLoadingMore}
                                className="btn-secondary --red --border --arrow inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoadingMore ? (
                                    <span className="flex items-center gap-2">
                                        Loading
                                        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </span>
                                ) : (
                                    <>
                                        <span>Load More</span>
                                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img" style={{ transform: 'rotate(90deg)' }}>
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <JobPopup
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
            />
        </div>
    );
}
