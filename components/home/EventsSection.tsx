'use client';

import { useState, useEffect } from 'react';
import { getAllEvents } from '@/sanity/lib/queries';

interface EventsSectionProps {
    title?: string;
}

export default function EventsSection({ title = "Upcoming Events" }: EventsSectionProps) {
    const [events, setEvents] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const data = await getAllEvents();
                // Map Sanity data to component format
                const formattedEvents = data.map((event: any) => {
                    const date = new Date(event.date);
                    return {
                        day: date.getDate().toString().padStart(2, '0'),
                        month: date.toLocaleString('default', { month: 'long' }),
                        title: event.title,
                        time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
                        location: event.location,
                        link: event.externalUrl || `/events/${event.slug}`,
                        externalUrl: event.externalUrl
                    };
                });
                setEvents(formattedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        // Stop when the last 2 items are visible
        setCurrentIndex((prev) => (prev < events.length - 2 ? prev + 1 : prev));
    };

    if (events.length === 0) return null;

    return (
        <section className="events-section">
            <div className="container">
                {/* Header */}
                <div className="events-section__heading row">
                    <div className="section-title">
                        <h2>{title}</h2>
                    </div>
                    <a href="/events/" className="btn-secondary --red --arrow --border">
                        <span className="uppercase">View events calendar</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </a>
                </div>

                {/* Events Slider */}
                <div className="swiper-container events-section__slider">
                    <div className="swiper-wrapper" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
                        {events.map((event, index) => (
                            <div key={index} className="swiper-slide events-section__slide">
                                <a
                                    href={event.link}
                                    className="events-section__item"
                                    target={event.externalUrl ? "_blank" : "_self"}
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
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="slider__navigation">
                        <button
                            className={`slider__prev ${currentIndex === 0 ? 'swiper-button-disabled' : ''}`}
                            onClick={handlePrev}
                            aria-label="Previous slide"
                        >
                            <svg width="25" height="25" className="icon icon-arrow-left" aria-hidden="true" role="img">
                                <use xlinkHref="#arrow-left"></use>
                            </svg>
                        </button>
                        <button
                            className={`slider__next ${currentIndex >= events.length - 2 ? 'swiper-button-disabled' : ''}`}
                            onClick={handleNext}
                            aria-label="Next slide"
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
