'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/bs-computer-science/StickyNav';
import LeadershipSection from '@/components/layout/LeadershipSection';
import SemesterTable from '@/components/bs-computer-science/SemesterTable';
import { semesterData, internshipData } from './courseData';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';

export default function BSAccountingFinancePage() {
    return (
        <div className="page-bs-accounting-finance">
            <PageHero
                title="BS Accounting and Finance"
                subtitle="Mastering Financial Strategies"
                bgImage="https://uitu.edu.pk/wp-content/uploads/2024/08/af.webp"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission', href: '/admission' },
                    { label: 'BS Accounting and Finance' }
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
                                        <img src="https://uitu.edu.pk/wp-content/uploads/2024/08/af.webp" alt="Overview" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg" style={{ marginTop: '-150px' }}>
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Overview</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <h3 className="text-[#002856] font-bold text-xl mb-4">Vision Statement – BSAF:</h3>
                                                <p className="mb-4">The vision of the BS Accounting and Finance (BSAF) program at UIT University is to develop ethical, analytical, and technology-driven finance professionals who excel in the global financial landscape through innovation, data-driven decision-making, and a commitment to societal impact.</p>

                                                <h3 className="text-[#002856] font-bold text-xl mb-4">Mission Statement – BSAF:</h3>
                                                <p className="mb-4">The mission of the BSAF program at UIT University is to deliver a future-focused education in accounting and finance that blends theoretical foundations with practical applications, financial analytics, and technology. We aim to foster critical thinking, ethical decision-making, and industry readiness—empowering students to succeed in dynamic financial environments and contribute meaningfully to the economy and society.</p>

                                                <h3 className="text-[#002856] font-bold text-xl mb-4">BSAF Program Overview:</h3>
                                                <p className="mb-4">The BS Accounting & Finance (BSAF) program is a specialized four-year degree focused on developing strong analytical, quantitative, and financial skills required in the accounting and financial sectors. The curriculum covers accounting principles, auditing, taxation, corporate finance, financial modeling, banking laws, and risk management. Through practical training, a mandatory internship, and a research-based capstone project, the BSAF program prepares students for careers in accounting, banking, auditing, corporate finance, and further professional certifications such as ACCA, CA, and CFA.</p>

                                                <h3 className="text-[#002856] font-bold text-xl mt-6 mb-4">Degree Requirements</h3>
                                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                                    <li><strong>Duration of Program:</strong> 4 Years</li>
                                                    <li><strong>Number of Semesters:</strong> 8</li>
                                                    <li><strong>Total Credit Hours:</strong> 132</li>
                                                    <li><strong>Total Number of Courses:</strong> 46</li>
                                                </ul>

                                                <h3 className="text-[#002856] font-bold text-xl mb-4">Credit Hour Structure</h3>
                                                <div className="overflow-x-auto mb-6">
                                                    <table className="min-w-full bg-white border border-gray-200">
                                                        <thead>
                                                            <tr className="bg-gray-100">
                                                                <th className="py-2 px-4 border-b text-left">Category</th>
                                                                <th className="py-2 px-4 border-b text-left">Courses</th>
                                                                <th className="py-2 px-4 border-b text-left">Credit Hours</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr><td className="py-2 px-4 border-b">General Education</td><td className="py-2 px-4 border-b">12</td><td className="py-2 px-4 border-b">30</td></tr>
                                                            <tr><td className="py-2 px-4 border-b">Interdisciplinary</td><td className="py-2 px-4 border-b">5</td><td className="py-2 px-4 border-b">15</td></tr>
                                                            <tr><td className="py-2 px-4 border-b">Major/Disciplinary</td><td className="py-2 px-4 border-b">27</td><td className="py-2 px-4 border-b">81</td></tr>
                                                            <tr><td className="py-2 px-4 border-b">Internship</td><td className="py-2 px-4 border-b">1</td><td className="py-2 px-4 border-b">3</td></tr>
                                                            <tr><td className="py-2 px-4 border-b">Capstone Project</td><td className="py-2 px-4 border-b">1</td><td className="py-2 px-4 border-b">3</td></tr>
                                                            <tr className="font-bold"><td className="py-2 px-4 border-b">Total</td><td className="py-2 px-4 border-b">46</td><td className="py-2 px-4 border-b">132</td></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
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
                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Educational Objectives (PEOs)</h3>

                                        <h4 className="font-bold mt-4">Professional Competence:</h4>
                                        <p className="mb-2">Demonstrate technical proficiency in accounting, auditing, taxation, and financial management.</p>

                                        <h4 className="font-bold mt-4">Ethical Leadership:</h4>
                                        <p className="mb-2">Apply ethical principles and regulatory knowledge in financial decision-making.</p>

                                        <h4 className="font-bold mt-4">Lifelong Learning:</h4>
                                        <p className="mb-2">Pursue ongoing development through education and certifications.</p>

                                        <h4 className="font-bold mt-4">Global and Societal Contribution:</h4>
                                        <p className="mb-8">Contribute to financial innovation and global business practices with integrity.</p>

                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Program Learning Outcomes (PLOs)</h3>
                                        <p className="mb-4">The Program Learning Outcomes (PLOs) describe the specific skills, knowledge, and attitudes that students will acquire upon completing the BSAF program. These PLOs align directly with the Program Educational Objectives (PEOs) to ensure that graduates meet the program’s long-term objectives.</p>

                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Foundational Business Knowledge:</strong> Graduates will demonstrate comprehensive knowledge of core business disciplines, including finance, marketing, operations, and management to solve business problems.</li>
                                            <li><strong>Critical Thinking and Problem-Solving:</strong> Graduates will apply critical thinking and analytical skills to evaluate and solve complex business challenges using quantitative and qualitative methods.</li>
                                            <li><strong>Effective Communication:</strong> Graduates will develop strong written and oral communication skills to effectively present ideas, arguments, and business strategies to diverse stakeholders.</li>
                                            <li><strong>Ethical Decision-Making and Social Responsibility:</strong> Graduates will apply ethical principles and social responsibility in all business decisions, promoting sustainable and socially responsible practices.</li>
                                            <li><strong>Teamwork and Leadership:</strong> Graduates will work effectively in teams and demonstrate leadership qualities in diverse business environments.</li>
                                            <li><strong>Technological Proficiency:</strong> Graduates will use modern business technologies and information systems to enhance operational efficiency and decision-making processes.</li>
                                            <li><strong>Global Business Awareness:</strong> Graduates will understand global business environments and navigate cultural and economic differences to operate effectively in international markets.</li>
                                            <li><strong>Innovation and Entrepreneurial Mindset:</strong> Graduates will foster creativity, innovation, and an entrepreneurial mindset to develop new business models and solutions.</li>
                                            <li><strong>Financial Literacy and Analytical Tools:</strong> Graduates will interpret financial data and use financial tools to make informed business decisions, assess risks, and evaluate organizational performance.</li>
                                            <li><strong>Data-Driven Decision Making:</strong> Graduates will apply data analytics and business intelligence tools to enhance decision-making processes and optimize business strategies.</li>
                                            <li><strong>Negotiation and Conflict Resolution:</strong> Graduates will demonstrate strong negotiation and conflict resolution skills to manage business relationships and resolve disputes effectively.</li>
                                            <li><strong>Sustainability and Environmental Stewardship:</strong> Graduates will incorporate environmental responsibility and sustainability into strategic business decision-making to promote long-term success.</li>
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
                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Admission Eligibility</h3>
                                        <p className="mb-4">Passed either Higher Secondary Examination (HSC-II) or equivalent from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 marks are eligible to apply for admission.</p>

                                        <h3 className="text-[#002856] font-bold text-xl mb-4">Pre Entry Admission Test Eligibility Criteria</h3>
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
