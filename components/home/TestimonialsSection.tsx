'use client';

import { useState } from 'react';

interface Testimonial {
    name: string;
    location: string;
    quote: string;
    fullText: string;
    bgImageUrl: string;
    avatarUrl: string;
}

interface TestimonialsSectionProps {
    testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
    {
        name: "Daniel Flashenburg ('28)",
        location: "Easton, MA",
        quote: "The benefits are endless. A tight-knit, fun, and intelligent community awaits you",
        fullText: "Do it! The benefits are endless. A tight-knit, fun, and intelligent community awaits you, and experiences you couldn't even dream of at a school in the US are ahead-- all the while you are receiving the same level of education at an (often times) monumentally less expensive cost.\"",
        bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flashenburg-AUBG-Testimonial-945x700.png",
        avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flasheburg-profile-150x150.png",
    },
    {
        name: "Owen Kemerer ('25)",
        location: "Burlington, VT",
        quote: "I had the opportunity to take a trip to Brussels as part of a European Studies class.",
        fullText: "One of my favorite moments at UIT University was during the fall semester of my senior year. I had the opportunity to take a trip to Brussels as part of a European Studies class. I was standing waiting for the metro talking to some friends from Ukraine and Bulgaria. In that moment I realized how surreal my whole experience at UIT University has been. I am an American who has been lucky enough to live on another continent for four years and meet people from all over the world.",
        bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-25-1-945x700.png",
        avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-profile-photo-150x150.png",
    },
    {
        name: "Kayla Whittaker",
        location: "Kayla Whittaker",
        quote: "UIT University helped grow my horizons by offering a diverse community and wonderfully passionate professors.",
        fullText: "\"UIT University helped grow my horizons by offering a diverse community, wonderfully passionate professors, and areas to practice the academic material and skills learned on campus.\"",
        bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2023/10/Kayla-AUBG-USA-939x700.png",
        avatarUrl: "https://www.aubg.edu/wp-content/uploads/2023/10/Greti-website-covers-150x150.jpg",
    },
];

export default function TestimonialsSection({ testimonials = defaultTestimonials }: TestimonialsSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleThumbClick = (index: number) => {
        setActiveIndex(index);
    };

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    if (!testimonials || testimonials.length === 0) return null;

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-section__content swiper-container">
                    <div className="testimonials-section__slides swiper-wrapper">
                        <div
                            className="testimonials-section__slide swiper-slide"
                            style={{ backgroundImage: `url("${activeTestimonial.bgImageUrl}")` }}
                        >
                            <div className="testimonials-section__slide-wrap">
                                <div className="testimonials-section__slide-content">
                                    <svg width="25" height="25" className="icon icon-quote testimonials-section__slide-icon" aria-hidden="true" role="img">
                                        <use xlinkHref="#quote"></use>
                                    </svg>
                                    <div className="text-small">
                                        <p className="text-uppercase text-white">See what others say about UIT University</p>
                                    </div>
                                    <div className="testimonials-section__slide-quote">
                                        <p>{activeTestimonial.quote}</p>
                                    </div>
                                    <button
                                        onClick={openModal}
                                        className="btn-secondary --red --arrow --border js-toggle-testimonial"
                                        type="button"
                                    >
                                        <span>Read Entire Testimonial</span>
                                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials-section__thumbs row">
                    {testimonials.map((testimonial, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`testimonials-section__thumb js-testimonial-slider-thumb ${index === activeIndex ? 'is-active' : ''}`}
                            data-thumb-index={index}
                            onClick={(e) => {
                                e.preventDefault();
                                handleThumbClick(index);
                            }}
                        >
                            <div className="testimonials-section__thumb-avatar">
                                <figure className="testimonials-section__thumb-avatar-wrap">
                                    <img
                                        className="image avatar"
                                        width="100"
                                        height="100"
                                        alt={`Testimonial ${testimonial.name} Image`}
                                        src={testimonial.avatarUrl}
                                    />
                                </figure>
                            </div>
                            <div className="testimonials-section__thumb-name">
                                <div className="text-big">
                                    <p className="text-bold text-light-blue">{testimonial.name}</p>
                                </div>
                                <div className="text-small">
                                    <span>{testimonial.location}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className={`modal-overlay ${isModalOpen ? 'is-active' : ''}`} onClick={closeModal}></div>
            <div className={`modal --testimonials ${isModalOpen ? 'is-active' : ''}`} id="jsTestimonialPopup">
                <div className="modal__wrap">
                    <button
                        id="jsTestimonialPopupClose"
                        className="exit"
                        aria-label="Close testimonial"
                        onClick={closeModal}
                    >
                        <span>×</span>
                    </button>
                    <div className="modal__content" id="jsTestimonialPopupContent">
                        <div className="modal__text jsModalText">
                            <p>{activeTestimonial.fullText}</p>
                        </div>
                        <div className="jsVideoControls modal__video"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
