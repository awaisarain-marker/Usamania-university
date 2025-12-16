'use client';

import React, { useState } from 'react';

export default function ScholarshipSection() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 'inter-merit',
            label: 'Intermediate Merit',
            title: 'Merit Scholarship for Top Position Holders of Intermediate or Equivalent Examination: (Applicable to: Fresh Intake)',
            content: (
                <div className="text-big">
                    <p>A concession of 100% in tuition fee of the first semester along with a cash award* of PKR 100,000 per annum is applicable to a candidate who stood among top three positions in any of the recognized Boards of Intermediate and / or equivalent provided s/he falls in top 25% of the merit list. The same will continue in the subsequent semesters subject to maintaining minimum GPA/CGPA of 3.50. It will be assessed at the end of each semester throughout the program.</p>
                    <p className="mt-4 text-sm italic">* This will be paid equal installments, the first being paid at the beginning of second semester provided the student continue as a regular student.</p>
                </div>
            )
        },
        {
            id: 'uitu-merit',
            label: 'UITU Merit',
            title: 'Merit Scholarship for Top Achievers in UITU’s Merit List: (Applicable to: Fresh Intake)',
            content: (
                <div className="text-big">
                    <p>Following concessions in tuition fee of the first semester along with a cash award* of PKR 60,000 per annum are applicable to candidates who stood among top three positions in the UITU’s Merit list provided s/he scores minimum 70% cumulative marks as per admission criteria set for the batch:</p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        <li><strong>1st Position Holder:</strong> 75% Tuition Fee waiver</li>
                        <li><strong>2nd Position Holder:</strong> 50% Tuition Fee waiver</li>
                        <li><strong>3rd Position Holder:</strong> 30% Tuition Fee waiver</li>
                    </ul>
                    <p className="mt-4 text-sm italic">* This will be paid equal installments, the first being paid at the beginning of second semester provided the student continue as a regular student.</p>
                </div>
            )
        },
        {
            id: 'alevel-merit',
            label: 'A-Level Merit',
            title: 'Merit Scholarship for Outstanding Performers in A- Levels: (Applicable to: Fresh Intake)',
            content: (
                <div className="text-big">
                    <p>A concession of 100% in tuition fee of the first semester is applicable to a candidate who secured minimum 3 A*’s in A-Level Examination provided s/he falls in top 25% of the merit list and provides IBCC equivalence.</p>
                </div>
            )
        },
        {
            id: 'performance',
            label: 'Performance-Based',
            title: 'Performance Scholarship: (Applicable to: Continuing Student)',
            content: (
                <div className="text-big">
                    <p>Following Batch wise concessions in tuition fee of the current semester (in which s/he is registered) are applicable to students who stood among top three positions in their last semester examination:</p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                        <li><strong>1st position Holder:</strong> 70% (one for each batch)</li>
                        <li><strong>2nd Position Holder:</strong> 40% (one for each batch)</li>
                        <li><strong>3rd Position Holder:</strong> 30% (one for each batch)</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'need-based',
            label: 'Need-Based',
            title: 'Need based Financial Assistance: (Applicable to: Continuing Student)',
            content: (
                <div className="text-big">
                    <p>A full / partial concession in the tuition fee is applicable to the financially weak enrolled students. A student may also apply after getting enrollment. A student willing to avail this financial assistance shall meet the management’s prescribed criteria.</p>
                    <p className="mt-4">The financial assistance, once granted, in this category will continue for the entire degree program provided that student shall maintain a minimum CGPA 2.50.</p>
                </div>
            )
        },
        {
            id: 'sibling',
            label: 'Sibling Consession',
            title: 'Sibling Financial Assistance: (Applicable to: Continuing Student)',
            content: (
                <div className="text-big">
                    <p>A concession of 5% in tuition fee is applicable to a student who is brother or sister of (i) active student of the University or (ii) alumnus of the UIT / UITU. A student willing to avail this financial assistance shall meet the management’s prescribed criteria.</p>
                </div>
            )
        }
    ];

    return (
        <div id="scholarship" className="flexible --border">
            <div className="container">
                <div className="flexible__wrap --white">
                    <article className="flexible__content">
                        <section className="residence">
                            <div className="residence__wrap">
                                <div className="residence__content w-full">
                                    <div className="section-title mb-8">
                                        <h2>Scholarship</h2>
                                    </div>

                                    <div className="custom-accordion-tabs accordion-tabs js-tabs is-initialized tabs-allowed">
                                        <ul role="tablist" className="custom-accordion-tabs__list --scroll row tabs-tab-list">
                                            {tabs.map((tab, index) => (
                                                <li key={tab.id} role="presentation" className="custom-accordion-tabs__item">
                                                    <button
                                                        role="tab"
                                                        aria-selected={activeTab === index}
                                                        className={`custom-accordion-tabs__link tabs-trigger js-tabs-trigger ${activeTab === index ? 'is-selected' : ''}`}
                                                        onClick={() => setActiveTab(index)}
                                                        style={{ borderRadius: '0' }} // Enforcing sharp corners
                                                    >
                                                        {tab.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>

                                        {tabs.map((tab, index) => (
                                            <section
                                                key={tab.id}
                                                id={`scholtabsection${index}`}
                                                role="tabpanel"
                                                className={`tabs-panel js-tabs-panel ${activeTab === index ? 'is-open' : 'is-hidden'}`}
                                                aria-labelledby={`scholtab${index}`}
                                            >
                                                <div className={`content ${activeTab === index ? 'is-open' : 'is-hidden'} pt-8`} aria-hidden={activeTab !== index}>
                                                    <h3 className="text-xl font-bold text-[#002856] mb-4">{tab.title}</h3>
                                                    {tab.content}
                                                </div>
                                            </section>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
}
