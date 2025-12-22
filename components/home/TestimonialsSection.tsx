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
        name: "Ali Khan ('24)",
        location: "Karachi, Sindh",
        quote: "UIT University provided me with the technical skills and industry exposure needed to excel in Data Science.",
        fullText: "Joining UIT University was the best decision for my career. The benefits are endless. A tight-knit, fun, and intelligent community awaits you here. The Data Science program is rigorous and up-to-date with industry standards. I’ve had access to state-of-the-art labs and mentorship from experienced faculty, which allowed me to work on real-world projects. Experiences you couldn't even dream of at other local universities are ahead—all while receiving a world-class education right here in Karachi.",
        bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flashenburg-AUBG-Testimonial-945x700.png",
        avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flasheburg-profile-150x150.png",
    },
    {
        name: "Sara Ahmed ('25)",
        location: "Lahore, Punjab",
        quote: "The collaborative environment at UIT allowed me to work on innovative software engineering projects.",
        fullText: "One of my favorite moments at UIT University was showcasing my final year project. I had the opportunity to collaborate with peers from different disciplines, developing a comprehensive software solution. I was standing there presenting to industry leaders, realizing how surreal my whole experience at UIT University has been. I am from Lahore but found a second home here, meeting people from all over Pakistan and growing both personally and professionally for four years.",
        bgImageUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-25-1-945x700.png",
        avatarUrl: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-profile-photo-150x150.png",
    },
    {
        name: "Zainab Malik ('26)",
        location: "Islamabad",
        quote: "UIT University broadened my horizons with its diverse community and practical approach to learning.",
        fullText: "\"UIT University helped grow my horizons by offering a diverse community, wonderfully passionate professors, and areas to practice the academic material and skills learned on campus. The focus on practical application in the BBA program has been instrumental in preparing me for the corporate world. The workshops and seminars organized regularly have given me insights that go beyond textbooks.\"",
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
