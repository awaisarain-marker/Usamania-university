'use client';

import { useState, useEffect, useRef } from 'react';
import { getAllPosts } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BlogPost {
    title: string;
    image: string;
    link: string;
    description?: string;
    category: string;
    featured?: boolean;
}

interface BlogSectionProps {
    title?: string;
}

export default function BlogSection({ title = "UIT University Today" }: BlogSectionProps) {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef<SwiperType | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const paginationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getAllPosts();
                if (data && data.length > 0) {
                    const formattedPosts = data.map((post: any) => ({
                        title: post.title,
                        image: post.mainImageUrl || post.mainImage || "https://www.aubg.edu/wp-content/uploads/2025/12/Professor-Nikos-Fatouros-Teaching-Economics-at-AUBG-2-1-489x318.png", // Fallback image
                        link: post.externalUrl || (post.slug ? `/uit-today/${post.slug}` : '#'),
                        description: post.description,
                        category: post.category || "News",
                        featured: false
                    }));
                    setPosts(formattedPosts);
                }
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) {
        return <div className="py-20 text-center">Loading news...</div>;
    }

    if (posts.length === 0) {
        return null;
    }

    // Chunk posts into groups of 5
    const chunkSize = 5;
    const postChunks = [];
    for (let i = 0; i < posts.length; i += chunkSize) {
        postChunks.push(posts.slice(i, i + chunkSize));
    }

    return (
        <section className="blog-section">
            <div className="container">
                {/* Header */}
                <div className="blog-section__heading row">
                    <div className="blog-section__heading-text">
                        <div className="section-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="text-big">
                            <p>Discover what it&apos;s like to study at one of Pakistan&apos;s top universities, and explore our latest developments, student achievements, and alumni success stories.</p>
                        </div>
                    </div>
                    <Link href="/uit-today" className="btn-secondary --red --arrow --border">
                        <span>VIEW ALL STORIES</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </Link>
                </div>

                {/* Blog Slider */}
                <div className="blog-section__slider relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="slider__wrapper w-full"
                    >
                        {postChunks.map((chunk, chunkIndex) => (
                            <SwiperSlide key={chunkIndex}>
                                <div className="blog-section__list">
                                    {chunk.map((post, postIndex) => (
                                        <div key={postIndex} className="blog-section__item">
                                            <Link href={post.link} className="blog-section__item-wrap">
                                                <figure className="blog-section__item-media">
                                                    <img
                                                        className="image"
                                                        alt={`${post.title} featured image`}
                                                        src={post.image}
                                                    />
                                                </figure>
                                                <div className="blog-section__item-content">
                                                    <div className="blog-section__item-title">
                                                        <h3 className="font-secondary text-bold">{post.title}</h3>
                                                    </div>
                                                    {/* Show description only for the first item in the chunk (the big one) */}
                                                    {postIndex === 0 && post.description && (
                                                        <div className="blog-section__item-desc">
                                                            <p>{post.description}</p>
                                                        </div>
                                                    )}
                                                    <div className="blog-section__item-footer">
                                                        <span className="text-uppercase text-bold text-light-blue">{post.category}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination */}
                    <div ref={paginationRef} className="slider__pagination"></div>

                    {/* Navigation */}
                    <div className="slider__navigation">
                        <button
                            ref={prevRef}
                            className="slider__prev"
                            aria-label="Previous slide"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <svg width="25" height="25" className="icon icon-arrow-left" aria-hidden="true" role="img">
                                <use xlinkHref="#arrow-left"></use>
                            </svg>
                        </button>
                        <button
                            ref={nextRef}
                            className="slider__next"
                            aria-label="Next slide"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <svg width="25" height="25" className="icon icon-arrow-right" aria-hidden="true" role="img">
                                <use xlinkHref="#arrow-right"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

