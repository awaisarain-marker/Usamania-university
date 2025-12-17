"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { client } from '@/sanity/lib/client';

interface Program {
    title: string;
    image: string;
    link: string;
    alt: string;
}

// Fallback hardcoded programs (used when no Sanity courses exist)
const fallbackPrograms: Program[] = [
    {
        title: "BS Computer Science",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg",
        link: "/admission/bs-computer-science",
        alt: "BS Computer Science",
    },
    {
        title: "BS Software Engineering",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Symmer-Programs-480x338.jpg",
        link: "/admission/bs-software-engineering",
        alt: "BS Software Engineering",
    },
    {
        title: "BS Artificial Intelligence",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Study-Abroad-480x366.jpg",
        link: "/admission/bs-artificial-intelligence",
        alt: "BS Artificial Intelligence",
    },
    {
        title: "BS Data Science",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/136-e1661700039394-480x318.jpg",
        link: "/admission/bs-data-science",
        alt: "BS Data Science",
    },
    {
        title: "BE Electrical (Electronic)",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/DSC00353-1-480x320.jpg",
        link: "/admission/be-electrical-electronic",
        alt: "BE Electrical (Electronic)",
    },
    {
        title: "BE Electrical (Power)",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg",
        link: "/admission/be-electrical-power",
        alt: "BE Electrical (Power)",
    },
    {
        title: "BE Computer Systems",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Symmer-Programs-480x338.jpg",
        link: "/admission/be-computer-systems",
        alt: "BE Computer Systems",
    },
    {
        title: "B.E. Tech (Software)",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Study-Abroad-480x366.jpg",
        link: "/admission/bet-software",
        alt: "B.E. Tech (Software)",
    },
    {
        title: "B.E. Tech (Computer)",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/136-e1661700039394-480x318.jpg",
        link: "/admission/bet-computer",
        alt: "B.E. Tech (Computer)",
    },
    {
        title: "BBA",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/DSC00353-1-480x320.jpg",
        link: "/admission/bba",
        alt: "BBA",
    },
    {
        title: "BS Accounting & Finance",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg",
        link: "/admission/bs-accounting-finance",
        alt: "BS Accounting & Finance",
    },
];

// Fetch courses from Sanity
async function fetchCoursesFromSanity(): Promise<Program[]> {
    try {
        const courses = await client.fetch(`
            *[_type == "course"] | order(title asc) {
                title,
                "slug": slug.current,
                cardImageUrl,
                "cardImage": cardImage.asset->url,
                heroImageUrl,
                "heroImage": heroImage.asset->url
            }
        `);

        if (courses && courses.length > 0) {
            return courses.map((course: { title: string; slug: string; cardImageUrl?: string; cardImage?: string; heroImageUrl?: string; heroImage?: string }) => ({
                title: course.title,
                // Priority: cardImageUrl > cardImage (uploaded) > heroImageUrl > heroImage (uploaded) > fallback
                image: course.cardImageUrl || course.cardImage || course.heroImageUrl || course.heroImage || "https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg",
                link: `/courses/${course.slug}`,
                alt: course.title,
            }));
        }
        return [];
    } catch (error) {
        console.error('Error fetching courses from Sanity:', error);
        return [];
    }
}

export default function AcademicsGrid() {
    const [allPrograms, setAllPrograms] = useState<Program[]>(fallbackPrograms);
    const [visibleCount, setVisibleCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    useEffect(() => {
        async function loadCourses() {
            const sanityCourses = await fetchCoursesFromSanity();
            if (sanityCourses.length > 0) {
                // Use Sanity courses if available
                setAllPrograms(sanityCourses);
            }
            // Keep fallback programs if no Sanity courses
            setIsInitialLoading(false);
        }
        loadCourses();
    }, []);

    const handleLoadMore = async () => {
        setIsLoading(true);
        // Simulate network delay for smooth effect
        await new Promise(resolve => setTimeout(resolve, 800));
        setVisibleCount(prev => Math.min(prev + 3, allPrograms.length));
        setIsLoading(false);
    };

    return (
        <section className="academics-section section --center-v">
            <div className="container">
                <div className="row academics-section__list">
                    {/* Heading Column */}
                    <div className="col-4 academics-section__heading --center-v">
                        <div className="section-title">
                            <h2>UIT <br /> Academics</h2>
                        </div>
                        <div className="text-big">
                            <p>Discover the program that sparks your passion and sets you up for success. Your academic journey awaits!</p>
                        </div>
                    </div>

                    {/* Loading State */}
                    {isInitialLoading ? (
                        <div className="col-8 flex items-center justify-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin text-[#002856]" />
                        </div>
                    ) : (
                        <>
                            {/* Program Cards */}
                            {allPrograms.slice(0, visibleCount).map((program, index) => (
                                <motion.div
                                    key={program.title}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index >= 5 ? 0.1 : 0 }}
                                    className="col-4 academics-section__item"
                                >
                                    <div className="academics-section__item-image">
                                        <Link className="image-hover" href={program.link}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={program.image} alt={program.alt} />
                                        </Link>
                                    </div>
                                    <div className="academics-section__item-title">
                                        <h3><Link href={program.link}>{program.title}</Link></h3>
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    )}
                </div>

                {/* Load More Button */}
                {!isInitialLoading && visibleCount < allPrograms.length && (
                    <div className="row mt-8">
                        <div className="col-12 text-center">
                            <button
                                onClick={handleLoadMore}
                                disabled={isLoading}
                                className="btn-secondary --red --arrow --border"
                                style={{ margin: '0 auto', cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.7 : 1 }}
                            >
                                {isLoading ? (
                                    <>
                                        <span>Loading Programs</span>
                                        <Loader2 className="w-5 h-5 animate-spin" style={{ marginLeft: '10px' }} />
                                    </>
                                ) : (
                                    <>
                                        <span>Load More Programs</span>
                                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
