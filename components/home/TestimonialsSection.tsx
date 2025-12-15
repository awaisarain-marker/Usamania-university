'use client';

import { useState } from 'react';

const testimonials = [
    {
        name: "Daniel Flashenburg ('28)",
        location: "Easton, MA",
        quote: "The benefits are endless. A tight-knit, fun, and intelligent community awaits you",
        fullText: "Do it! The benefits are endless. A tight-knit, fun, and intelligent community awaits you, and experiences you couldn't even dream of at a school in the US are ahead-- all the while you are receiving the same level of education at an (often times) monumentally less expensive cost.\"",
        bgImage: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flashenburg-AUBG-Testimonial-945x700.png",
        avatar: "https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flasheburg-profile-150x150.png",
    },
    {
        name: "Owen Kemerer ('25)",
        location: "Burlington, VT",
        quote: "I had the opportunity to take a trip to Brussels as part of a European Studies class.",
        fullText: "One of my favorite moments at UIT University was during the fall semester of my senior year. I had the opportunity to take a trip to Brussels as part of a European Studies class. I was standing waiting for the metro talking to some friends from Ukraine and Bulgaria. In that moment I realized how surreal my whole experience at UIT University has been. I am an American who has been lucky enough to live on another continent for four years and meet people from all over the world.",
        bgImage: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-25-1-945x700.png",
        avatar: "https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-profile-photo-150x150.png",
    },
    {
        name: "Kayla Whittaker",
        location: "Kayla Whittaker",
        quote: "UIT University helped grow my horizons by offering a diverse community and wonderfully passionate professors.",
        fullText: "\"UIT University helped grow my horizons by offering a diverse community, wonderfully passionate professors, and areas to practice the academic material and skills learned on campus.\"",
        bgImage: "https://www.aubg.edu/wp-content/uploads/2023/10/Kayla-AUBG-USA-939x700.png",
        avatar: "https://www.aubg.edu/wp-content/uploads/2023/10/Greti-website-covers-150x150.jpg",
    },
    {
        name: "Sebastian Ore ('28)",
        location: "Sophomore at UIT University | Originally from New York City",
        quote: "I love how I can wake up, simply step out of my dorm and be greeted by stunning mountain views.",
        fullText: "I love how I can wake up, simply step out of my dorm and be greeted by stunning mountain views. Every day, it feels like I'm seeing something new, and it's honestly so different from New York.",
        bgImage: "https://www.aubg.edu/wp-content/uploads/2025/06/Sebastian-Ore-2-945x700.png",
        avatar: "https://www.aubg.edu/wp-content/uploads/2025/06/Sebastian-Ore-profile-150x150.png",
    },
    {
        name: "Molly May ('12), USA",
        location: "History and Civilisation; Senior General Manager at Shake Shack",
        quote: "I see the diversity of both the faculty and the student body as UIT University's main advantage.",
        fullText: "I see the diversity of both the faculty and the student body as UIT University's main advantage; that was one of the top reasons I came here in the first place.",
        bgImage: "https://www.aubg.edu/wp-content/uploads/2022/09/Molly-May-12-1.jpg",
        avatar: "https://www.aubg.edu/wp-content/uploads/2022/09/Molly-May-12-1-e1662236154565-150x143.jpg",
    },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleThumbClick = (index: number) => {
        setActiveIndex(index);
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="testimonials-section">
            <div className="container">
                {/* Main Slider Content */}
                <div className="testimonials-section__content swiper-container">
                    <div className="testimonials-section__slides swiper-wrapper">
                        <div
                            className="testimonials-section__slide swiper-slide"
                            style={{ backgroundImage: `url("${activeTestimonial.bgImage}")` }}
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
                                    <a href="#" className="btn-secondary --red --arrow --border js-toggle-testimonial">
                                        <span>Read Entire Testimonial</span>
                                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thumbnails Navigation */}
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
                                        src={testimonial.avatar}
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
        </section>
    );
}
