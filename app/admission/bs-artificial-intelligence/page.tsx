'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/bs-computer-science/StickyNav';
import LeadershipSection from '@/components/layout/LeadershipSection';
import SemesterTable from '@/components/bs-computer-science/SemesterTable';
import { semesterData, internshipData } from './courseData';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';

export default function BSAIPage() {
    return (
        <div className="page-bsai">
            <PageHero
                title="BS Artificial Intelligence"
                subtitle="Pioneering Intelligent Systems"
                bgImage="https://uitu.edu.pk/wp-content/uploads/2025/02/ai.webp"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission', href: '/admission' },
                    { label: 'BS Artificial Intelligence' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#overview" className="btn-secondary --red --border --arrow">
                        <span>Overview</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                </div>
            </PageHero>

            <StickyNav />

            {/* Overview Section */}
            <div id="overview" className="py-8 md:py-12 bg-[#e6eef4]">
                <div className="container">
                    <div className="section-title text-center mb-12">
                        <h2>Overview</h2>
                    </div>
                </div>
                <LeadershipSection
                    hideHeader
                    customBottomSection={<></>}
                    customTabs={[
                        {
                            id: 'overview',
                            label: 'Overview',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="https://uitu.edu.pk/wp-content/uploads/2025/02/ai.webp" alt="Overview" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg" style={{ marginTop: '-150px' }}>
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Overview</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>The BS (AI) program gives the students an in-depth knowledge they need to transform large and complex scenarios into actionable decisions. The program and its curriculum focus on how complex inputs — such as knowledge, vision, language and huge data- bases — can be used to make decisions to enhance human capabilities. The curricu- lum of the BS (AI) program includes coursework in computing, mathematics, automated reasoning, statistics, computational modeling, introduction to classical artificial intelli- gence languages and case studies, knowledge representation and reasoning, artificial neural networks, machine learning, natural language processing, vision and symbolic computation. The program also encourages students to take courses in ethics and so- cial responsibility, with the opportunity to participate in long term projects in which ar- tificial intelligence can be applied to solve problems that can change the world for the better — in areas like agriculture, defense, healthcare, governance, transportation, e- commerce, finance and education.</p>

                                                <h3 className="text-[#002856] font-bold text-xl mt-6 mb-4">Degree Requirements</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li><strong>Duration of Program (In Years):</strong> 4</li>
                                                    <li><strong>Number of semesters:</strong> 8</li>
                                                    <li><strong>Number of courses per semester:</strong> 5-6</li>
                                                    <li><strong>Total credit hours:</strong> 141</li>
                                                    <li><strong>Total number of courses:</strong> 45 (Including Internship + Capstone Project I & II)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'courses',
                            label: 'Courses',
                            content: (
                                <div className="w-full pt-8">
                                    <div className="w-full">
                                        {semesterData.map((semester, idx) => (
                                            <SemesterTable
                                                key={idx}
                                                semesterName={semester.name}
                                                courses={semester.courses}
                                                totalCredits={semester.total}
                                            />
                                        ))}

                                        {/* Internship Footer */}
                                        <div className="mb-8">
                                            <div className="bg-[#e6eef4] p-4 border-l-4 border-[#ed1c24] flex justify-between items-center rounded-none">
                                                <h3 className="text-[#002856] font-bold text-lg uppercase m-0">{internshipData.text}</h3>
                                                <span className="text-[#ed1c24] font-bold text-lg">{internshipData.credits}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'peos-plos',
                            label: 'PEO’s and PLO’s',
                            content: (
                                <div className="w-full pt-8">
                                    <div className="section-title">
                                        <h2>PEO’s and PLO’s</h2>
                                    </div>
                                    <div className="prose max-w-none text-gray-600">
                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Educational Objectives</h3>
                                        <ul className="list-disc pl-5 mb-8 space-y-2">
                                            <li>Pursue diverse range of careers, advanced degrees or professional development in computing and artificial intelligence knowledge acquired during studies.</li>
                                            <li>Apply computing principles, and artificial intelligence knowledge to design innovative and sustainable solutions to meet business objectives and societal challenges.</li>
                                            <li>Communicate effectively and work efficiently as an individual and in interdisciplinary teams with high professional and ethical values.</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'eligibility',
                            label: 'Eligibility',
                            content: (
                                <div className="w-full pt-8">
                                    <div className="section-title">
                                        <h2>Eligibility</h2>
                                    </div>
                                    <div className="prose max-w-none text-gray-600">
                                        <p className="mb-4">Students holding Higher Secondary School Certificate (HSC-II) in Pre-Engineering, Pre-Medical, Science General, Computer Science from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 out of 1100 marks are eligible to apply for admission.</p>
                                        <p className="mb-4">Students awaiting the final result of HSC-II can also apply for conditional admission based on HSC-I results.</p>
                                        <p className="mb-6">HSC-II (Pre-medical) or equivalent students are also eligible for admission. However, they must undertake deficiency courses in six-credit-hour Mathematics in the first year of regular studies.</p>

                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Pre Entry Admission Test Eligibility Criteria:</h3>
                                        <p className="mb-2">Candidates are required to:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>pass the university’s pre-admission entry tests with at least 50% marks,</li>
                                            <li>pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks, or</li>
                                            <li>hold a score of at least 800 in SAT-I and secured at least 1500 in relevant subjects.</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </div>
            {/* Blog and Events Sections */}
            <BlogSection title="Latest News" />
            <EventsSection title="Upcoming Events" />
        </div >
    );
}
