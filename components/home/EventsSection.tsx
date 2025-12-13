'use client';

import { useState } from 'react';

const events = [
    {
        day: "08",
        month: "December",
        title: "Students' Day",
        time: "8:00 am",
        location: "Bulgaria",
        link: "https://www.aubg.edu/events/students-day/",
    },
    {
        day: "09",
        month: "December",
        title: "Intro To Photography Exhibition",
        time: "7:00 pm",
        location: "Main Building",
        link: "https://www.aubg.edu/events/intro-to-photography-exhibition/",
    },
    {
        day: "10",
        month: "December",
        title: "AUBG Evening in New England",
        time: "7:00 pm",
        location: "310 River Street, Billerica, MA",
        link: "https://www.aubg.edu/events/aubg-evening-in-new-england/",
    },
    {
        day: "10",
        month: "December",
        title: "Application & Scholarships Explained Webinar",
        time: "6:00 pm",
        location: "Online",
        link: "https://www.aubg.edu/events/application-scholarships-explained/",
    },
    {
        day: "11",
        month: "December",
        title: "Rooms We Carry Film Festival | Day 3",
        time: "4:00 pm",
        location: "BAC Auditorium",
        link: "https://www.aubg.edu/events/rooms-we-carry-film-festival-day-3/",
    },
];

export default function EventsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        // Stop when the last 2 items are visible
        setCurrentIndex((prev) => (prev < events.length - 2 ? prev + 1 : prev));
    };

    return (
        <section className="events-section">
            <div className="container">
                {/* Header */}
                <div className="events-section__heading row">
                    <div className="section-title">
                        <h2>Upcoming Events</h2>
                    </div>
                    <a href="/event-calendar/" className="btn-secondary --red --arrow --border">
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
                                <a href={event.link} className="events-section__item">
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
