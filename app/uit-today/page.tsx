'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/sanity/lib/queries';

// Define categories
const CATEGORIES = ["All", "Academics", "Economics", "Alumni", "European Studies", "Politics", "Events", "Achievements"];

export default function BlogListingPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [blogPosts, setBlogPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const posts = await getAllPosts();
                setBlogPosts(posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

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

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-red"></div>
            </div>
        );
    }

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
                                        <Link
                                            href={post.externalUrl || `/uit-today/${post.slug}`}
                                            className="blog-section__item-wrap"
                                            target={post.externalUrl ? "_blank" : "_self"}
                                        >
                                            <figure className="blog-section__item-media">
                                                <img
                                                    className="image"
                                                    alt={`${post.title} featured image`}
                                                    src={post.mainImageUrl || post.mainImage || "https://placehold.co/600x400?text=No+Image"}
                                                />
                                            </figure>
                                            <div className="blog-section__item-content">
                                                <div className="blog-section__item-title">
                                                    <h3 className="font-secondary text-bold" style={{ fontSize: '1rem' }}>{post.title}</h3>
                                                </div>

                                                <div className="blog-section__item-footer">
                                                    <span className="text-uppercase text-bold text-light-blue">{post.category}</span>
                                                </div>
                                            </div>
                                        </Link>
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
