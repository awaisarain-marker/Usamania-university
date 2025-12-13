'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

interface CarouselItem {
    id: string;
    image: string;
    title?: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const uniqueId = Math.random().toString(36).substr(2, 9); // For unique classes per instance

    return (
        <div className="images-slider__wrap group relative w-full py-8">
            <style jsx global>{`
                .images-slider__wrap {
                    position: relative;
                }
                .swiper-container {
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                    list-style: none;
                    padding: 0;
                    z-index: 1;
                }
                .images-slider__nav {
                    display: flex;
                    justify-content: flex-end;
                    z-index: 1;
                    position: relative;
                    margin-bottom: 20px;
                }
                .slider__next, .slider__prev {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    border: none;
                    border-radius: 100px; /* User CSS says 100px */
                    box-shadow: 0 20px 40px rgba(0, 40, 86, .2);
                    margin: 0 5px;
                    width: 70px;
                    height: 70px;
                    transition: color .3s ease-in-out;
                    cursor: pointer;
                    color: #002856;
                }
                .slider__prev.swiper-button-disabled, .slider__next.swiper-button-disabled {
                    color: rgba(0, 80, 146, .4);
                    background-color: rgba(255, 255, 255, .4);
                    box-shadow: 0 10px 20px rgba(0, 40, 86, .2);
                    cursor: default;
                }
                .images-slider__image {
                    border-left: 5px solid #ed1c24; /* Red border */
                    display: flex;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    position: relative;
                }
                .swiper-slide {
                    flex-shrink: 0;
                    height: auto;
                    position: relative;
                    transition-property: transform;
                }
                .swiper-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    max-height: 385px; /* per user request */
                }
                /* Font import if needed, but we rely on global/project fonts */
            `}</style>

            {/* Navigation - Placed above as per flex-end design implied or standard practice for this layout */}
            <div className="images-slider__nav">
                <div className={`slider__prev jsImagesSliderPrev prev-${uniqueId}`}>
                    <ArrowLeft className="w-5 h-5" /> {/* Icon size matched roughly to 18px */}
                </div>
                <div className={`slider__next jsImagesSliderNext next-${uniqueId}`}>
                    <ArrowRight className="w-5 h-5" />
                </div>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: `.prev-${uniqueId}`,
                    nextEl: `.next-${uniqueId}`,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                loop={true}
                className="swiper-container"
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="images-slider__image group/item"
                            onClick={() => setLightboxImage(item.image)}
                        >
                            <img
                                src={item.image}
                                alt={item.title || 'Carousel Image'}
                                className="transition-transform duration-500 group-hover/item:scale-105"
                            />
                            {item.title && (
                                <div className="absolute bottom-[29px] left-0 w-full px-[20px] pl-[40px] z-20 pointer-events-none">
                                    <h3 className="text-white font-bold text-[1.625rem] leading-tight font-['Lato'] drop-shadow-md">
                                        {item.title}
                                    </h3>
                                </div>
                            )}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 pointer-events-none z-10 transition-all duration-300 bg-gradient-to-t from-[#001a37f2] via-transparent to-transparent opacity-90 group-hover/item:from-[#001a37] group-hover/item:to-[#0028564d]" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Lightbox - Kept as requested */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentLightBoxIndex = items.findIndex(i => i.image === lightboxImage);
                                if (currentLightBoxIndex > 0) {
                                    setLightboxImage(items[currentLightBoxIndex - 1].image);
                                } else {
                                    setLightboxImage(items[items.length - 1].image);
                                }
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 transition-colors"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <motion.img
                            key={lightboxImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={lightboxImage}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentLightBoxIndex = items.findIndex(i => i.image === lightboxImage);
                                if (currentLightBoxIndex < items.length - 1) {
                                    setLightboxImage(items[currentLightBoxIndex + 1].image);
                                } else {
                                    setLightboxImage(items[0].image);
                                }
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 transition-colors"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
