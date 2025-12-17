'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/bs-computer-science/StickyNav';
import LeadershipSection from '@/components/layout/LeadershipSection';
import SemesterTable from '@/components/bs-computer-science/SemesterTable';
import { semesterData, internshipData } from './courseData';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';

export default function BETSoftwarePage() {
    return (
        <div className="page-bet-software">
            <PageHero
                title="Bachelor of Engineering Technology (Software)"
                subtitle="Practical Software Solutions"
                bgImage="https://uitu.edu.pk/wp-content/uploads/2024/08/besoft.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission', href: '/admission' },
                    { label: 'Bachelor of Engineering Technology (Software)' }
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
                                        <img src="https://uitu.edu.pk/wp-content/uploads/2024/08/besoft.jpg" alt="Overview" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg" style={{ marginTop: '-150px' }}>
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Overview</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p className="mb-4">In today’s technology-driven world, the software has become an essential element of our daily life, from communication to entertainment, transportation to healthcare, agriculture to law enforcement, information security to artificial intelligence etc. The role of software is critical today since practically every facet of modern life is reliant on the operations tied with software technology. With the rise of digital transformation, companies are increasingly using technology, with software at its core, to automate and streamline their operations, improve customer experience, and gain a competitive edge.</p>
                                                <p className="mb-4">Bachelor of Engineering Technology (Software) is a program that deals with the design, development, testing, and maintenance of software systems using best software engineering practices. Software engineering technologists augment the development of the software that fits the demands of businesses and individuals, delivers an exceptional user experience. It is concerned with applying engineering technology principles and practices to software development to ensure the software is efficient, dependable, and scalable. One notable aspect of this program is the field training, which gives students practical exposure to the industries before they begin their careers as Software Engineering Technologists.</p>

                                                <h3 className="text-[#002856] font-bold text-xl mt-6 mb-4">Degree Requirements</h3>
                                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                                    <li><strong>Duration of Program (In Years):</strong> 4</li>
                                                    <li><strong>Number of Semesters:</strong> 8</li>
                                                    <li><strong>Total Credit Hours:</strong> 130</li>
                                                    <li><strong>Total Number of Courses:</strong> 40 + Project + Field Training</li>
                                                </ul>

                                                <h3 className="text-[#002856] font-bold text-xl mb-4">Fee Structure</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li><strong>One Time Fee*:</strong> 25,000</li>
                                                    <li><strong>Security Deposit:</strong> 15,000</li>
                                                    <li><strong>Tuition Fee:</strong> 48,000</li>
                                                    <li><strong>Semester Fee*:</strong> 10,000</li>
                                                    <li><strong>Total Fee:</strong> 98,000</li>
                                                </ul>
                                                <p className="text-sm mt-4 text-gray-500">* One time fee includes Admission, Enrollment, and Documents Verification Fees</p>
                                                <p className="text-sm text-gray-500">* Semester Fee includes Examination, Semester, and Co-curricular Charges</p>
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
                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Mission</h3>
                                        <p className="mb-8">To prepare students for successful careers as a software engineering technologist with a thorough understanding of best software engineering practices and experiential learning opportunities to apply that knowledge to solve real-world problems.</p>

                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Educational Objectives (PEOs):</h3>
                                        <p>The main objectives that our graduates are expected to achieve in the long run are:</p>
                                        <ul className="list-disc pl-5 mb-8 space-y-2">
                                            <li>Demonstrate effective communication and interpersonal skills using ethical and professional principles when assigned a role as a member or a leader of multi-disciplinary teams.</li>
                                            <li>Apply their foundations as software engineering technologist to adapt to diversified environments using the appropriate theory, principles and processes to design, implement, deploy and maintain practical software systems.</li>
                                            <li>Exhibit progression in exploring and adopting new skills and evolving technologies through innovation in provided solution.</li>
                                        </ul>

                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Learning Outcomes (PLOs):</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Engineering Technology Knowledge (SA1):</strong> An ability to apply knowledge of mathematics, natural science, Engineering Technology fundamentals, and Engineering Technology specialization to defined and applied Engineering Technology procedures, processes, systems, or methodologies.</li>
                                            <li><strong>Problem Analysis (SA2):</strong> An ability to Identify, formulate, research literature, and analyze broadly defined Engineering Technology problems reaching substantiated conclusions using analytical tools appropriate to the discipline or area of specialization.</li>
                                            <li><strong>Design/Development of Solutions (SA3):</strong> An ability to design solutions for broadly- defined Engineering Technology problems and contribute to the design of systems, components or processes to meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</li>
                                            <li><strong>Investigation (SA4):</strong> An ability to conduct investigations of broadly-defined problems; locate, search and select relevant data from codes, databases, and literature; and design and conduct experiments to provide valid conclusions.</li>
                                            <li><strong>Modern Tool Usage (SA5):</strong> An ability to Select and apply appropriate techniques, resources, and modern technology and IT tools, including prediction and modeling, to broadly-defined Engineering Technology problems, with an understanding of the limitations.</li>
                                            <li><strong>The Engineering Technologist and Society (SA6):</strong> An ability to demonstrate understanding of the societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to Engineering Technology practice and solutions to broadly defined Engineering Technology problems.</li>
                                            <li><strong>Environment and Sustainability (SA7):</strong> An ability to understand and evaluate the sustainability and impact of Engineering Technology work in the solution of broadly defined Engineering Technology problems in societal and environmental contexts.</li>
                                            <li><strong>Ethics (SA8):</strong> Understand and commit to professional ethics and responsibilities, and norms of Engineering Technology practice.</li>
                                            <li><strong>Individual and Team Work (SA9):</strong> An ability to Function effectively as an individual and as a member or leader in diverse teams.</li>
                                            <li><strong>Communication (SA10):</strong> An ability to communicate effectively on broadly defined Engineering Technology activities with the Engineering Technologist community and with society at large by being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
                                            <li><strong>Project Management (SA11):</strong> An ability to demonstrate knowledge and understanding of Engineering Technology management principles and apply these to one’s work as a member or leader in a team and to manage projects in multidisciplinary environments.</li>
                                            <li><strong>Lifelong Learning (SA12):</strong> An ability to recognize the need for and have the ability to engage in independent and lifelong learning in specialist Engineering Technologies.</li>
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
                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Admission Eligibility:</h3>
                                        <p className="mb-4">Applicants must have secured at least 50% marks in either HSSC (Pre-Engineering), HSSC (Pre-Medical), HSSC (Science General), a relevant DAE, or an equivalent examination.</p>
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
        </div>
    );
}
