'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getEventBySlug } from '@/sanity/lib/queries';
import EventsSection from '@/components/home/EventsSection';

// Custom components for Portable Text
const components = {
    types: {
        image: ({ value }: any) => {
            if (!value?.url) return null;
            return (
                <figure className="image-wrap my-8">
                    <img
                        src={value.url}
                        alt={value.alt || 'Event Image'}
                        className="w-full h-auto rounded-lg"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        twoColumnImageGrid: ({ value }: any) => {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    {(value.imageLeft || value.imageLeftUrl) && (
                        <div className="image-wrap">
                            <img
                                src={value.imageLeftUrl || value.imageLeft}
                                alt={value.imageLeftAlt || 'Image Left'}
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    )}
                    {(value.imageRight || value.imageRightUrl) && (
                        <div className="image-wrap">
                            <img
                                src={value.imageRightUrl || value.imageRight}
                                alt={value.imageRightAlt || 'Image Right'}
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    )}
                </div>
            );
        },
        quote: ({ value }: any) => {
            return (
                <blockquote className="border-l-4 border-primary-red pl-4 italic my-6 text-gray-600 bg-gray-50 p-4 rounded-r-lg">
                    <p className="text-lg mb-2">"{value.quote}"</p>
                    {value.author && <footer className="text-sm font-bold text-gray-800">— {value.author}</footer>}
                </blockquote>
            );
        },
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-3xl font-bold text-blue mt-8 mb-4">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl font-bold text-blue mt-8 mb-4">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-bold text-blue mt-6 mb-3">{children}</h3>,
        normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary-red pl-4 italic my-6 text-gray-600">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
    },
};

export default function SingleEventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvent() {
            try {
                const data = await getEventBySlug(slug);
                setEvent(data);
            } catch (error) {
                console.error('Error fetching event:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchEvent();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-red"></div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h1>
                <Link href="/events" className="text-primary-red hover:underline">
                    Back to Events
                </Link>
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
                            <Link href="/events" className="breadcrumbs__link text-small">
                                <span>Events</span>
                            </Link>
                            <span className="separator text-small"> / </span>
                            <span className="breadcrumbs__link text-bold text-small">
                                <span>{event.title}</span>
                            </span>
                        </nav>
                        <div className="page-title">
                            <h1 className="text-blue">{event.title}</h1>
                        </div>
                        <div className="single-post__heading-tags">
                            {event.date && <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
                            {event.location && <span> {event.location} </span>}
                        </div>
                    </div>
                </div>
            </section>

            <div className="single-post__wrap">
                <aside className="sidebar --fixed">
                    {/* Sticky Social Share */}
                    <div className="addtoany_shortcode">
                        <div className="a2a_kit a2a_kit_size_56 addtoany_list" style={{ lineHeight: '56px' }}>
                            <a className="a2a_button_facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer">
                                <span className="a2a_svg a2a_s__default a2a_s_facebook" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#fff" d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"></path>
                                    </svg>
                                </span>
                            </a>
                            <a className="a2a_button_twitter" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(event.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer">
                                <span className="a2a_svg a2a_s__default a2a_s_twitter" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#FFF" d="M28 8.557a10 10 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.7 9.7 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.94 4.94 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a5 5 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174q-.476-.001-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.114 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013q0-.32-.015-.637c.96-.695 1.795-1.56 2.455-2.55z"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </aside>

                <div className="container">
                    {(event.mainImage || event.mainImageUrl) && (
                        <div className="single-post__featured mb-8">
                            <figure className="image-wrap">
                                <img
                                    className="image w-full h-auto rounded-lg"
                                    alt={event.title}
                                    src={event.mainImageUrl || event.mainImage}
                                />
                            </figure>
                        </div>
                    )}

                    <div className="single-post__content-wrap">
                        <article className="single-post__content">
                            {/* Render Portable Text Body */}
                            {event.body && <PortableText value={event.body} components={components} />}
                        </article>
                    </div>
                </div>
            </div>

            {/* Related Events */}
            <EventsSection title="Upcoming Events" />
        </div>
    );
}
