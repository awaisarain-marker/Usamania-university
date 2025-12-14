'use client';

import React, { useState, useRef, useEffect } from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/oric/StickyNav';
import BlogSection from "@/components/home/BlogSection";

interface ExpandableTextProps {
    children: React.ReactNode;
    renderTrigger?: (expanded: boolean, toggle: () => void) => React.ReactNode;
}

function ExpandableText({ children, renderTrigger }: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('5.4rem');

    useEffect(() => {
        if (expanded) {
            setHeight(`${contentRef.current?.scrollHeight}px`);
        } else {
            setHeight('5.4rem');
        }
    }, [expanded]);

    const toggle = () => setExpanded(!expanded);

    return (
        <div className="jsExpandableText">
            <div className="text-big">
                <div
                    ref={contentRef}
                    className="jsExpandableTextLong"
                    style={{
                        maxHeight: height,
                        overflow: 'hidden',
                        transition: 'max-height 0.4s ease-in-out',
                        display: 'block'
                    }}
                >
                    {children}
                </div>
            </div>
            {renderTrigger ? (
                renderTrigger(expanded, toggle)
            ) : (
                <button
                    className="read-more jsExtendLong"
                    onClick={(e) => {
                        e.preventDefault();
                        toggle();
                    }}
                >
                    <span>{expanded ? 'Read Less' : 'Read More'}</span>
                </button>
            )}
        </div>
    );
}

export default function OricPage() {
    return (
        <div className="page-oric">
            <PageHero
                title="Office of Research, Innovation and Commercialization (ORIC)"
                subtitle="Fostering Innovation and Research Excellence"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'ORIC' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#introduction" className="btn-secondary --red --border --arrow">
                        <span>Introduction</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                    <a href="#vision" className="btn-link --white">
                        <span>Vision</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#mission" className="btn-link --white">
                        <span>Mission</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#values" className="btn-link --white">
                        <span>Values</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#organogram" className="btn-link --white">
                        <span>Organogram</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#news-room" className="btn-link --white">
                        <span>News Room</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            <section className="residence py-16 md:py-24" id="introduction">
                <div className="container">
                    {/* Office of Research, Innovation and Commercialization Block */}
                    <div className="accordion-section__head">
                        <div className="accordion-section__head-image">
                            <img
                                className="image lazy loaded"
                                alt="ORIC"
                                width="1256"
                                height="580"
                                src="https://i.pinimg.com/736x/8a/2e/fa/8a2efa5a2ff3cd633de5fe14db6bb4da.jpg"
                            />
                        </div>
                        <div className="accordion-section__head-text -light-bg">
                            <div className="accordion-section__head-text-wrap">
                                <div className="section-title">
                                    <h2>Office of Research, Innovation and Commercialization</h2>
                                </div>
                                <ExpandableText
                                    renderTrigger={(expanded, toggle) => (
                                        <button
                                            className="btn-secondary --red --arrow --border"
                                            onClick={toggle}
                                            style={{ marginTop: '0', cursor: 'pointer' }}
                                        >
                                            <span>{expanded ? 'Read Less' : 'Read More'}</span>
                                            <svg
                                                width="25"
                                                height="25"
                                                className="icon icon-arrow"
                                                aria-hidden="true"
                                                role="img"
                                                style={{
                                                    transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)',
                                                    transition: 'transform 0.3s'
                                                }}
                                            >
                                                <use xlinkHref="#arrow"></use>
                                            </svg>
                                        </button>
                                    )}
                                >
                                    <p>The Office of Research, Innovation, and Commercialization (ORIC) is designed to enhance a university’s research capacity, foster innovation, and drive the commercialization of new ideas and technologies. ORIC bridges the gap between academic research and industry needs, ensuring that the research conducted within universities has practical applications. Its role extends to nurturing a culture of entrepreneurship, where faculty and students are encouraged to develop creative solutions and turn innovative ideas into commercially viable products or services. This helps universities contribute to economic growth and societal development.</p>
                                    <p className="mt-4">In addition to promoting research and innovation, ORIC facilitates partnerships between universities, industries, and government bodies. These collaborations are essential for addressing complex challenges, from technological advancements to sustainability initiatives. ORIC also plays a key role in securing research funding, generating intellectual property, and managing the commercialization of research outputs. By aligning academic goals with market demands, ORIC helps create a sustainable ecosystem of research and innovation, benefiting both the academic community and society at large.</p>
                                </ExpandableText>
                            </div>
                        </div>
                    </div>

                    {/* Director's Message Block */}
                    <div className="accordion-section__head mt-16" id="directors-message">
                        {/* Using same layout but maybe without image if not provided, or purely text. 
                             Request said: "Put the ORIC Introduction section and update the content...". 
                             I will use a text-only width or full width logic if possible, 
                             or repeat the split layout if I had an image. 
                             Since no image for Director, I'll use a full-width text container or similar style.
                             Actually, QEC 'Introduction' is split. 
                             I will make this look like a standard section but maybe full width if no image.
                             Let's use the 'LeadshipSection' style or just a clean text block with the requested styles. 
                         */}
                        <div className="w-full bg-[#f9fafb] p-8 md:p-12 rounded-lg border border-gray-100">
                            <div className="section-title mb-6">
                                <h2>Director's Message</h2>
                                <h3 className="text-xl md:text-2xl font-bold text-[#002856] mt-2 font-lato">Muhammad Ali Kemal</h3>
                            </div>
                            <ExpandableText
                                renderTrigger={(expanded, toggle) => (
                                    <button
                                        className="btn-secondary --red --arrow --border"
                                        onClick={toggle}
                                        style={{ marginTop: '2rem', cursor: 'pointer' }}
                                    >
                                        <span>{expanded ? 'Read Less' : 'Read More'}</span>
                                        <svg
                                            width="25"
                                            height="25"
                                            className="icon icon-arrow"
                                            aria-hidden="true"
                                            role="img"
                                            style={{
                                                transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)',
                                                transition: 'transform 0.3s'
                                            }}
                                        >
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </button>
                                )}
                            >
                                <p>Looking ahead, our vision is clear and collaborative. I see ORIC as a catalyst for the incredible potential within our academic community. That is the very core of our mission: to ensure that the knowledge we create in our labs and classrooms is translated into real-world solutions, rather than leaving it on the shelf.</p>
                                <p className="mt-4">Thus, building on this foundation, our pursuit is directed toward creating a sustainable ecosystem where Academia, Industry, and Institutions can come together to form partnerships that address the challenges of Digital Transformation and a Sustainable Future. ORIC endeavors to become a partner in this adventure and enable the continuum from discovery to impact. Together, we will not only elevate the status of UIT University as a leading Institution, but will also create an economic and social engine for the growth and progress of Pakistan.</p>
                                <p className="mt-6 font-bold text-[#002856]">With regards,<br />Muhammad Ali Kemal,<br />Director ORIC</p>
                            </ExpandableText>
                        </div>
                    </div>
                </div>
            </section>

            <section className="residence py-16 md:py-24" id="vision-mission-values">
                <div className="container">

                    <div id="vision" style={{ marginTop: '3rem' }}>
                        <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                            <div className="qec-vision-content-wrap">
                                <div className="section-title">
                                    <h2>ORIC Vision</h2>
                                </div>
                                <div className="text-big">
                                    <p>"To establish UIT University as a prominent global leader in innovation and sustainability, enabling students and faculty to spearhead state-of-the-art research and solutions that propel technology forward while advocating for environmentally conscious practices."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mission" style={{ marginTop: '3rem' }}>
                        <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                            <div className="qec-vision-content-wrap">
                                <div className="section-title">
                                    <h2>ORIC Mission</h2>
                                </div>
                                <div className="text-big">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                            <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <p>"To support UIT University's pursuit of excellence in research and sustainable technology by fostering impactful research and facilitating the commercialization of pioneering innovations. We are dedicated to empowering students and faculty through strategic partnerships, effective resource mobilization, and rigorous ethical oversight, creating a dynamic research ecosystem that advances technological progress and environmental stewardship."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="values" style={{ marginTop: '3rem' }}>
                        <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                            <div className="qec-vision-content-wrap">
                                <div className="section-title">
                                    <h2>ORIC Core Values</h2>
                                </div>
                                <div className="text-big">
                                    <p>The ORIC seeks to create an advanced environment of Research and Innovation by adherence to the core values of:</p>
                                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                                        {[
                                            "Pioneering Excellence",
                                            "Empowerment and Collaboration",
                                            "Integrity and Ethics",
                                            "Continuous Learning and Improvement",
                                            "Sustainability"
                                        ].map((val, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="flex-shrink-0 text-[#ed1c24]">
                                                    <svg width="16" height="16" className="icon" aria-hidden="true" role="img">
                                                        <use xlinkHref="#arrow-right"></use>
                                                    </svg>
                                                </div>
                                                <span className="font-bold text-[#002856]">{val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div id="organogram" className="py-16 bg-[#f0f2f5]">
                <div className="container">
                    <div className="section-title mb-8">
                        <h2>ORIC Organogram</h2>
                    </div>
                    {/* Reusing the QEC tree structure style */}
                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                        <div className="qec-vision-content-wrap">
                            <div className="org-tree flex justify-center overflow-x-auto pb-4">
                                <ul>
                                    <li>
                                        <div className="node text-lg font-bold">Vice Chancellor</div>
                                        <ul>
                                            <li>
                                                <div className="node">Director ORIC</div>
                                                <ul>
                                                    <li>
                                                        <div className="node">Manager Research Operation & Dev.</div>
                                                        <ul>
                                                            <li>
                                                                <div className="node">Asst. Manager Research Oper.</div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="node">Manager Innovation & Comm.</div>
                                                        <ul>
                                                            <li>
                                                                <div className="node">Asst. Manager IP / Comm.</div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="news-room">
                <BlogSection />
            </div>

            <StickyNav />
        </div>
    );
}
