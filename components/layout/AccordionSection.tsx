'use client';

import React, { useState } from 'react';

interface AccordionSectionProps {
    sectionId?: string;
    imageUrl: string;
    imageAlt?: string;
    title: string;
    paragraphs?: { text: string }[];
    showReadMore?: boolean;
    backgroundColor?: 'light' | 'white';
}

export default function AccordionSection({
    sectionId,
    imageUrl,
    imageAlt,
    title,
    paragraphs = [],
    showReadMore = true,
    backgroundColor = 'light',
}: AccordionSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const bgClass = backgroundColor === 'light' ? '-light-bg' : '';

    return (
        <section className="residence py-16 md:py-24" id={sectionId}>
            <div className="container">
                <div className="accordion-section__head">
                    <div className="accordion-section__head-image">
                        <img
                            className="image lazy loaded"
                            alt={imageAlt || title}
                            width="1256"
                            height="580"
                            src={imageUrl}
                        />
                    </div>
                    <div className={`accordion-section__head-text ${bgClass}`}>
                        <div className="accordion-section__head-text-wrap">
                            <div className="section-title">
                                <h2>{title}</h2>
                            </div>
                            <div className="jsExpandableText">
                                <div className="text-big">
                                    <div
                                        className="jsExpandableTextLong"
                                        style={{
                                            maxHeight: isExpanded ? 'none' : '5.4rem',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out',
                                            display: 'block'
                                        }}
                                    >
                                        {paragraphs.map((para, index) => (
                                            <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                                {para.text}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {showReadMore && paragraphs.length > 0 && (
                                    <button
                                        className="btn-secondary --red --arrow --border"
                                        style={{ marginTop: 0, cursor: 'pointer' }}
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                                        <svg
                                            width="25"
                                            height="25"
                                            className="icon icon-arrow"
                                            aria-hidden="true"
                                            role="img"
                                            style={{
                                                transform: isExpanded ? 'rotate(-90deg)' : 'rotate(90deg)',
                                                transition: 'transform 0.3s'
                                            }}
                                        >
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
