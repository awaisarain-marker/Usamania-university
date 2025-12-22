'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllEvents } from '@/sanity/lib/queries';

export default function EventsPage() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const data = await getAllEvents();
                // Map Sanity data to component format matching EventsSection
                const formattedEvents = data.map((event: any) => {
                    const date = new Date(event.date);
                    return {
                        ...event,
                        day: date.getDate().toString().padStart(2, '0'),
                        month: date.toLocaleString('default', { month: 'long' }),
                        time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
                        link: event.externalUrl || `/events/${event.slug}`,
                    };
                });
                setEvents(formattedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

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
                                <span>Events</span>
                            </span>
                        </nav>
                        <div className="page-title">
                            <h1 className="text-blue">Upcoming Events</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="container">
                    <div className="blog-section__slider">
                        <div className="slider__wrapper">
                            <div className="blog-listing-grid grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                {events.map((event, index) => (
                                    <div key={index} style={{ position: 'relative', backgroundColor: 'transparent' }}>
                                        <Link
                                            href={event.link}
                                            className="events-section__item"
                                            target={event.externalUrl ? "_blank" : "_self"}
                                            style={{ width: '100%' }}
                                        >
                                            <div className="events-section__item-date">
                                                <div className="events-section__item-day">
                                                    <span>{event.day}</span>
                                                </div>
                                                <div className="events-section__item-month">
                                                    <span>{event.month}</span>
                                                </div>
                                            </div>

                                            <div className="events-section__item-content-wrap">
                                                <div className="events-section__item-content">
                                                    <div className="events-section__item-inner">
                                                        <div className="events-section__item-title">
                                                            <h2 className="font-secondary">{event.title}</h2>
                                                        </div>
                                                        <div className="text-small">
                                                            <span className="text-uppercase">{event.time}</span> | <span>{event.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="events-section__item-icon">
                                                    <svg width="25" height="25" className="icon icon-arrow-top-right" aria-hidden="true" role="img">
                                                        <use xlinkHref="#arrow-top-right"></use>
                                                    </svg>
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
