'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Define categories
const CATEGORIES = ["All", "Academics", "Economics", "Alumni", "European Studies", "Politics"];

const blogPosts = [
    {
        title: "The Political Imperative: Surviving and Thriving in Power Dynamics at Work",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-300x195.png",
        link: "/uit-today/what-to-do-with-a-major-in-business-administration-career-prospects", // Local link
        description: "When I recently spoke with employers, AUBG alumni, and Executive MBA students about power dynamics at work, I began with a simple question...",
        category: "Academics",
        featured: true,
    },
    {
        title: "Economics for a New Generation: Professor Nikos Fatouros Teaches for the Future",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/Professor-Nikos-Fatouros-Teaching-Economics-at-AUBG-2-1-489x318.png",
        link: "#",
        description: "Professor Nikos Fatouros joined UIT University in the 2024/2025 academic year and is already serving as the Interim Chair of the Economics Department. His research interests go ...",
        category: "Economics",
    },
    {
        title: "Ashod Derandonyan ('01) Championing Accessibility Support for the Deaf and Hard of Hearing Community",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/Ashod-Derandonyan-'01-at-the-AUBG-Civic-Society-Forum-in-2025-254x165.png",
        link: "#",
        category: "Alumni",
    },
    {
        title: "The 2025 Study Trip to Brussels Explores National Security in the EU",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-European-Studies-Study-Trip-to-Brussels-2025-1-254x165.png",
        link: "#",
        category: "European Studies",
    },
    {
        title: "What to Do with a Major in Economics: Career Prospects and Future Jobs",
        image: "https://www.aubg.edu/wp-content/uploads/2025/11/What-to-Do-with-a-Major-in-Economics-254x165.png",
        link: "#",
        category: "Economics",
    },
    {
        title: "What to Do with a Major in Political Science & International Relations and European Studies",
        image: "https://www.aubg.edu/wp-content/uploads/2025/11/What-to-Do-with-a-Major-in-Political-Science-254x165.png",
        link: "#",
        category: "Politics",
    },
    // Duplicate items to demonstrate Load More functionality
    {
        title: "Advancements in Artificial Intelligence: A 2025 Perspective",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-Professor-Micheal-Stratton-Giving-an-Executive-MBA-Lecture-300x195.png",
        link: "#",
        category: "Academics",
    },
    {
        title: "Alumni Success Story: From UIT to Silicon Valley",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/Ashod-Derandonyan-'01-at-the-AUBG-Civic-Society-Forum-in-2025-254x165.png",
        link: "#",
        category: "Alumni",
    },
    {
        title: "The Future of European Politics",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-European-Studies-Study-Trip-to-Brussels-2025-1-254x165.png",
        link: "#",
        category: "European Studies",
    },
];

export default function BlogListingPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const visiblePosts = filteredPosts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setVisibleCount(6); // Reset visible count on category change
    };

    return (
        <div className="single-post-page">
            <section className="single-post__hero">
                <div className="single-post__container">
                    <div className="single-post__heading text-center">
                        <nav className="breadcrumbs">
                            <Link href="/" className="breadcrumbs__item text-small">
                                <span>Home</span>
                            </Link>
                            <span className="separator text-small"> / </span>
                            <span className="breadcrumbs__link text-bold text-small">
                                <span>UIT University Today</span>
                            </span>
                        </nav>
                        <div className="page-title">
                            <h1 className="text-blue">UIT University Today</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="container">
                    {/* Category Filter Tabs */}
                    <div className="custom-accordion-tabs__list --no-border" style={{ justifyContent: 'center', marginBottom: '40px' }}>
                        {CATEGORIES.map(cat => (
                            <div key={cat} className="custom-accordion-tabs__item">
                                <button
                                    className={`custom-accordion-tabs__link ${activeCategory === cat ? 'is-selected' : ''}`}
                                    onClick={() => handleCategoryChange(cat)}
                                >
                                    {cat}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="blog-section__slider">
                        <div className="slider__wrapper">
                            <div className="blog-listing-grid" style={{ flexWrap: 'wrap', display: 'flex', gap: '20px' }}>
                                {visiblePosts.map((post, index) => (
                                    <div key={index} className="blog-section__item" style={{ flex: '0 0 calc((100% - 40px) / 3)', maxWidth: 'calc((100% - 40px) / 3)' }}>
                                        <a href={post.link} className="blog-section__item-wrap">
                                            <figure className="blog-section__item-media">
                                                <img
                                                    className="image"
                                                    alt={`${post.title} featured image`}
                                                    src={post.image}
                                                />
                                            </figure>
                                            <div className="blog-section__item-content">
                                                <div className="blog-section__item-title">
                                                    <h3 className="font-secondary text-bold" style={{ fontSize: '1rem' }}>{post.title}</h3>
                                                </div>
                                                {/* Description removed as per request */}

                                                <div className="blog-section__item-footer">
                                                    <span className="text-uppercase text-bold text-light-blue">{post.category}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Load More Button */}
                        {visiblePosts.length < filteredPosts.length && (
                            <div className="text-center" style={{ marginTop: '40px' }}>
                                <button
                                    onClick={handleLoadMore}
                                    className="btn-secondary --red --arrow --border"
                                >
                                    <span>Load More</span>
                                    <svg width="25" height="25" className="icon icon-arrow-down" aria-hidden="true" role="img" style={{ transform: 'rotate(90deg)' }}>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
