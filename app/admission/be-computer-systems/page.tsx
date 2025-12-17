'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/bs-computer-science/StickyNav';
import LeadershipSection from '@/components/layout/LeadershipSection';
import SemesterTable from '@/components/bs-computer-science/SemesterTable';
import { semesterData, internshipData } from './courseData';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';

export default function BECompSystemsPage() {
    return (
        <div className="page-be-comp-systems">
            <PageHero
                title="BE Computer Systems"
                subtitle="Integrating Hardware and Software"
                bgImage="https://uitu.edu.pk/wp-content/uploads/2024/08/csys1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission', href: '/admission' },
                    { label: 'BE Computer Systems' }
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
                                        <img src="https://uitu.edu.pk/wp-content/uploads/2024/08/csys1.jpg" alt="Overview" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg" style={{ marginTop: '-150px' }}>
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Overview</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>Computer Systems Engineering is a multidisciplinary field that combines elements of computer science, electrical engineering, and software engineering. The program focuses on the design, development, and maintenance of computer systems, integrating hardware and software to create efficient and reliable solutions. It equips students with the necessary knowledge and skills, thus ensuring that the graduates are well-prepared for the challenges of the modern tech landscape.</p>

                                                <h3 className="text-[#002856] font-bold text-xl mt-6 mb-4">Degree Requirements</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li><strong>Duration of Program (In Years):</strong> 4</li>
                                                    <li><strong>Number of semesters:</strong> 8</li>
                                                    <li><strong>Total credit hours:</strong> 140</li>
                                                    <li><strong>Total number of courses:</strong> 46 + Final Year Project</li>
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
                                                <h3 className="text-[#002856] font-bold text-lg uppercase m-0">{internshipData.name}</h3>
                                                <span className="text-[#ed1c24] font-bold text-lg">{internshipData.text}</span>
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
                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Educational Objectives (PEOs):</h3>
                                        <p>The department of Electrical Engineering prepares graduates to be successful engineers who use their knowledge and skills for coming up with innovative solutions to the problems being faced by the industry, government, academia and/or the society. The main objectives that our graduates are expected to achieve in 5 years after graduation are:</p>
                                        <ul className="list-disc pl-5 mb-8 space-y-2">
                                            <li>They will be able to demonstrate high level of engineering expertise as senior engineers, faculty members or researchers. This would be done by applying their knowledge and skills for solving critical and complex technical, social or environmental problems for the industry, government, society, academia or research organizations.</li>
                                            <li>They will demonstrate leadership and effective team working skills. They will uphold moral and ethical values and work towards fostering the engineering profession and the betterment of society.</li>
                                            <li>They will demonstrate the ability for sustained learning through further study and development and may contribute towards adding new knowledge to the existing knowledge base.</li>
                                        </ul>

                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Learning Outcomes (PLOs):</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>PLO-1 Engineering Knowledge:</strong> Apply knowledge of mathematics, natural science, engineering fundamentals and Engineering specialization to the solution of complex engineering problems.</li>
                                            <li><strong>PLO-2 Problem Analysis:</strong> Identify, formulate, conduct research literature, and analyse complex Engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.</li>
                                            <li><strong>PLO-3 Design/Development of Solutions:</strong> An ability to design solutions for complex engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</li>
                                            <li><strong>PLO-4 Investigation:</strong> Conduct investigation of complex Engineering problems using research- based knowledge and research methods, including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.</li>
                                            <li><strong>PLO-5 Tool Usage:</strong> Create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex Engineering problems, with an understanding of the limitations.</li>
                                            <li><strong>PLO-6 The Engineer and the World:</strong> Analyze and evaluate sustainable development impacts to society, the economy, sustainability, health and safety, legal frameworks, and the environment while solving complex engineering problems.</li>
                                            <li><strong>PLO-7 Ethics:</strong> Apply ethical principles and commit to professional ethics and norms of engineering practice and adhere to relevant national and international laws. Demonstrate an understanding of the need for diversity and inclusion.</li>
                                            <li><strong>PLO-8 Individual and Collaborative Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse and inclusive teams and in multi-disciplinary, face-to-face, remote and distributed settings.</li>
                                            <li><strong>PLO-9 Communication:</strong> Communicate effectively and inclusively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, and make effective presentations, taking into account cultural, language, and learning differences.</li>
                                            <li><strong>PLO-10 Project Management and Finance:</strong> Demonstrate knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, to manage projects in multidisciplinary environments.</li>
                                            <li><strong>PLO-11 Lifelong Learning:</strong> Recognize the need for, and have the preparation and ability for i) independent and life-long learning ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change.</li>
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
                                        <p className="mb-4">Candidates holding Higher Secondary School Certificate (HSC-II) in Pre-Engineering from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 60% or 660 out of 1100 marks are eligible to apply for admission.</p>

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
