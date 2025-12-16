'use client';

import React, { useState } from 'react';

// FAQ Data
const faqData = [
    {
        title: "Personality Development:",
        content: <p>To organize activities and events to develop students’ interpersonal skills to make them more competitive and acceptable in the market. It also includes arranging corporate visits.</p>
    },
    {
        title: "Counseling & Mentoring:",
        content: <p>To engage in activities including engaging internal (heads, faculty members) and external (corporate) counselors for students’ group and individual periodical and special counseling to enhance their academic performance and personality. To arrange senior and peer students’ academic support to cope with academic learning and difficulties. To connect students with the Alumni of the Institute to provide corporate mentorship.</p>
    },
    {
        title: "Academic Awareness:",
        content: <p>To promote and publicize students’ academic achievements and performances in the correct forum.</p>
    },
    {
        title: "Complaints & Grievances:",
        content: <p>To listen to students’ academic and non-academic issues; affecting studies, classify them into internal, external, controllable, and uncontrollable factors, followed by coordination with the concerned departments for their amicable solution.</p>
    },
    {
        title: "Events:",
        content: <p>To coordinate, facilitate and promote activities and events of the student societies and, in this regard to liaising with Administration, Finance, and other departments as required.</p>
    }
];

export default function StudentAffairsSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="student-affairs">
            <div className="container">
                <div className="row">
                    {/* Left Column: Heading, Description, Accordion */}
                    <div className="col-12 md:col-6 pr-0">
                        <div className="section-title mb-6">
                            <h2>Student Affairs</h2>
                        </div>
                        <div className="text-big text-gray-600 mb-8">
                            <p>
                                The Student Affairs office is an integral component of students’ life on campus, and it is a division of service and support to enhance students’ growth and development. In other words, it is a helpful friend for students during the journey at UITU and helps them prepare for the corporate world.
                            </p>
                        </div>

                        <div className="js-accordion-content">
                            <ul className="accordion" aria-label="Services List">
                                {faqData.map((item, index) => (
                                    <li key={index} className={`item-list__box --v2 col-12 accordion__item ${activeIndex === index ? 'is-open' : 'is-closed'}`}>
                                        <div className="item-list__box-wrap --scroll">
                                            <div className="item-list__box-head --no-avatar">
                                                <button
                                                    type="button"
                                                    className="accordion__button-wrap js-accordion"
                                                    aria-label={item.title}
                                                    aria-expanded={activeIndex === index}
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    <span className={`item-list__box-trigger accordion__button ${activeIndex === index ? 'is-active' : ''}`}></span>
                                                    <div className="text-big">
                                                        <h3 className="font-secondary text-bold">{item.title}</h3>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="item-list__box-content --no-padding">
                                                <div
                                                    className="item-list__box-body accordion__content"
                                                    style={{
                                                        display: 'grid',
                                                        gridTemplateRows: activeIndex === index ? '1fr' : '0fr',
                                                        opacity: activeIndex === index ? 1 : 0,
                                                        transition: 'grid-template-rows 0.3s ease-out, opacity 0.3s ease-out'
                                                    }}
                                                >
                                                    <div style={{ overflow: 'hidden' }}>
                                                        <div className="item-list__box-body-wrap accordion__content-wrap text-small pt-5">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Image with specific styling */}
                    <div className="col-12 md:col-6 mt-8 md:mt-0">
                        <div className="testimonial-box__image w-full h-full min-h-[500px]">
                            <img
                                src="/campus-hero.png"
                                alt="Student Affairs"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
