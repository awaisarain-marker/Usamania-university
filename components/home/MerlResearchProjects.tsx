'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = [
    // Verify order and types with user lists
    { type: 'image', src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0053-scaled.jpg', title: 'Research Project 1' },
    { type: 'image', src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0054-scaled.jpg', title: 'Research Project 2' },
    { type: 'image', src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_compressed_page-0050-scaled.jpg', title: 'Research Project 3' },
    { type: 'image', src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0051-scaled.jpg', title: 'Research Project 4' },
    { type: 'image', src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0052-scaled.jpg', title: 'Research Project 5' },
    { type: 'video', src: 'https://youtu.be/HRdw202Fneg', title: 'Research Video 1' },
    { type: 'video', src: 'https://youtu.be/O_negvK1OkE', title: 'Research Video 2' },
    { type: 'video', src: 'https://youtu.be/XH2x8uYLIAU', title: 'Research Video 3' },
    { type: 'video', src: 'https://youtu.be/zQvYLzTAyCI', title: 'Research Video 4' },
    { type: 'video', src: 'https://youtu.be/inXB3PWhvj4', title: 'Research Video 5' },
    { type: 'video', src: 'https://youtu.be/uDj88oYgn9I', title: 'Research Video 6' },
];

const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function MerlResearchProjects() {
    const [isOpen, setIsOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);

    const openLightbox = (index: number) => {
        setInitialSlide(index);
        setIsOpen(true);
    };

    return (
        <section className="academics-section section --center-v !py-16">
            <div className="container">
                <div className="row academics-section__list">
                    {/* Heading Column */}
                    <div className="col-4 academics-section__heading --center-v">
                        <div className="section-title">
                            <h2>Research <br /> Projects</h2>
                        </div>
                        <div className="text-big">
                            <p>MERL-UITU Graduates presented their Research Projects in International Conferences and Workshops.</p>
                        </div>
                    </div>

                    {/* Grid Items */}
                    {items.map((item, index) => {
                        let thumbSrc = item.src;
                        if (item.type === 'video') {
                            const videoId = getYoutubeId(item.src);
                            thumbSrc = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                        }

                        return (
                            <div
                                key={index}
                                className="col-4 academics-section__item cursor-pointer group"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="academics-section__item-title">
                                    <h3 className="font-secondary">{item.type === 'video' ? 'Video' : 'Image'}</h3>
                                </div>
                                <div className="relative w-full h-[200px]">
                                    <img
                                        className="academics-section__item-image w-full h-full object-cover"
                                        alt={item.title}
                                        src={thumbSrc}
                                    />
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4">
                    <button
                        className="absolute top-4 right-4 text-white hover:text-red-500 z-[10000]"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="w-full max-w-6xl h-[80vh]">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            initialSlide={initialSlide}
                            className="h-full w-full"
                        >
                            {items.map((item, index) => (
                                <SwiperSlide key={index} className="flex items-center justify-center">
                                    {item.type === 'image' ? (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="max-h-full max-w-full object-contain mx-auto"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${getYoutubeId(item.src)}?autoplay=0`}
                                                className="w-full h-full max-w-4xl max-h-[80vh] aspect-video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </section>
    );
}
