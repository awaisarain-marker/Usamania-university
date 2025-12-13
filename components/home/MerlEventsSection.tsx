'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const events = [
    {
        day: "06",
        month: "FEBRUARY",
        title: "Fulbright Science of Disinformation Symposium",
        time: "Online",
        link: "#",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC1.jpg" // Placeholder until user provides real image
    },
    {
        day: "14",
        month: "MARCH",
        title: "AI in Healthcare Conference",
        time: "BAC Auditorium",
        link: "#",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC2.jpg"
    },
    {
        day: "22",
        month: "APRIL",
        title: "Global Tech Summit 2025",
        time: "Main Hall",
        link: "#",
        image: "https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC3.jpg"
    }
];

export default function MerlEventsSection() {
    const [uniqueId] = useState(() => Math.random().toString(36).substr(2, 9));

    return (
        <section className="events-section py-20 !bg-white">
            <div className="container">
                <div className="events-section__heading row mb-10 flex justify-between items-end">
                    <div className="section-title">
                        <h2 className="text-[#002856] text-[50px] font-serif leading-none">Upcoming Events</h2>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: `.prev-${uniqueId}`,
                            nextEl: `.next-${uniqueId}`,
                        }}
                        className="pb-20"
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div className="group border-[5px] border-[#005092] p-0 flex flex-col md:flex-row items-stretch bg-white relative overflow-hidden h-full">
                                    {/* Date Column */}
                                    <div className="flex flex-col justify-center items-center p-8 min-w-[150px] border-r border-gray-100 bg-[#e6eef4] transition-colors duration-300 group-hover:bg-[#e6eef4]">
                                        <div className="relative">
                                            <span className="text-[80px] font-bold font-serif leading-none transition-all duration-300 relative z-10"
                                                style={{
                                                    WebkitTextStroke: '1px #002856',
                                                    WebkitTextFillColor: 'transparent',
                                                    color: '#002856'
                                                }}
                                            >
                                                {event.day}
                                            </span>
                                            {/* Hover State Duplicate for smooth transition */}
                                            <span className="text-[80px] font-bold font-serif leading-none transition-all duration-300 absolute left-0 top-0 opacity-0 group-hover:opacity-100 z-20"
                                                style={{
                                                    WebkitTextStroke: '1px #ed1c24',
                                                    WebkitTextFillColor: '#ed1c24',
                                                    color: '#ed1c24'
                                                }}
                                            >
                                                {event.day}
                                            </span>
                                        </div>
                                        <span className="text-[#005092] font-bold tracking-widest text-lg md:[writing-mode:vertical-lr] md:rotate-180 uppercase mt-2 md:mt-0">
                                            {event.month}
                                        </span>
                                    </div>

                                    {/* Image Column */}
                                    <div className="w-full md:w-1/3 relative min-h-[250px]">
                                        <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                                    </div>

                                    {/* Content Column */}
                                    <div className="flex-1 p-8 flex flex-col justify-center bg-transparent relative">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-[32px] text-[#002856] font-serif leading-tight mb-4">
                                                    {event.title}
                                                </h3>
                                                <p className="text-[#005092] font-medium text-lg border-l-2 border-[#ed1c24] pl-4">
                                                    {event.time}
                                                </p>
                                            </div>

                                            {/* Icon that appears on hover */}
                                            <span className="opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100">
                                                <svg width="40" height="40" className="icon icon-arrow-top-right text-[#ed1c24]" aria-hidden="true" role="img" fill="currentColor">
                                                    <use xlinkHref="#arrow-top-right"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex justify-end gap-4 mt-8">
                        <button className={`prev-${uniqueId} w-[50px] h-[50px] rounded-full border border-[#005092] text-[#005092] flex items-center justify-center hover:bg-[#005092] hover:text-white transition-colors`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className={`next-${uniqueId} w-[50px] h-[50px] rounded-full border border-[#005092] text-[#005092] flex items-center justify-center hover:bg-[#005092] hover:text-white transition-colors`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
