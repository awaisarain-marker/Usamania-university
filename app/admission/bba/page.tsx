'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/bs-computer-science/StickyNav';
import LeadershipSection from '@/components/layout/LeadershipSection';
import SemesterTable from '@/components/bs-computer-science/SemesterTable';
import { semesterData, internshipData } from './courseData';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';

export default function BBAPage() {
    return (
        <div className="page-bba">
            <PageHero
                title="BBA (Business Administration)"
                subtitle="Developing Global Business Leaders"
                bgImage="https://uitu.edu.pk/wp-content/uploads/2024/08/bba.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission', href: '/admission' },
                    { label: 'BBA (Business Administration)' }
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
                <React.Suspense fallback={<div>Loading...</div>}>
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
                                            <img src="https://uitu.edu.pk/wp-content/uploads/2024/08/bba.jpg" alt="Overview" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="accordion-section__head-text -light-bg" style={{ marginTop: '-150px' }}>
                                            <div className="accordion-section__head-text-wrap">
                                                <div className="section-title">
                                                    <h2>Overview</h2>
                                                </div>
                                                <div className="prose max-w-none text-gray-600">
                                                    <h3 className="text-[#002856] font-bold text-xl mb-4">Vision Statement- BBA:</h3>
                                                    <p className="mb-4">To foster global leadership by promoting societal and economic value creation, encouraging technopreneurship, and advancing sustainable research, innovation, and ethical practices.</p>

                                                    <h3 className="text-[#002856] font-bold text-xl mb-4">Mission Statement- BBA:</h3>
                                                    <p className="mb-4">Equipping students with advanced knowledge, critical thinking abilities, and strong ethical values to thrive as adaptable leaders and impactful change agents across various industries and communities.</p>

                                                    <h3 className="text-[#002856] font-bold text-xl mb-4">BBA Program Overview:</h3>
                                                    <p className="mb-4">The Bachelor of Business Administration (BBA) program is a comprehensive four-year degree designed to develop well-rounded business professionals with strong foundations in management, marketing, human resource management, finance, and entrepreneurship. The program blends theoretical knowledge with practical skills through interactive learning, case studies, projects, and industry exposure. With elective specializations, internship experience, and a capstone project, the BBA equips students with the managerial and leadership capabilities needed to excel in the modern business world.</p>

                                                    <h3 className="text-[#002856] font-bold text-xl mt-6 mb-4">Degree Requirements</h3>
                                                    <ul className="list-disc pl-5 space-y-2 mb-6">
                                                        <li><strong>Duration of Program:</strong> 4 Years</li>
                                                        <li><strong>Number of Semesters:</strong> 8</li>
                                                        <li><strong>Total Credit Hours:</strong> 135</li>
                                                        <li><strong>Total Number of Courses:</strong> 47</li>
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
                                                                <tr><td className="py-2 px-4 border-b">Major/Disciplinary</td><td className="py-2 px-4 border-b">28</td><td className="py-2 px-4 border-b">84</td></tr>
                                                                <tr><td className="py-2 px-4 border-b">Internship</td><td className="py-2 px-4 border-b">1</td><td className="py-2 px-4 border-b">3</td></tr>
                                                                <tr><td className="py-2 px-4 border-b">Capstone Project</td><td className="py-2 px-4 border-b">1</td><td className="py-2 px-4 border-b">3</td></tr>
                                                                <tr className="font-bold"><td className="py-2 px-4 border-b">Total</td><td className="py-2 px-4 border-b">47</td><td className="py-2 px-4 border-b">135</td></tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

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
                                            <h3 className="text-[#002856] font-bold text-xl mb-4">Program Educational Objectives (PEOs)</h3>

                                            <h4 className="font-bold mt-4">Leadership and Management Excellence</h4>
                                            <p className="mb-2">Graduates will excel in managerial and leadership positions across diverse business sectors, demonstrating strategic decision-making and leadership abilities.</p>

                                            <h4 className="font-bold mt-4">Ethical Decision-Making and Social Responsibility</h4>
                                            <p className="mb-2">Graduates will incorporate ethical principles and social responsibility into their business decisions, promoting sustainable and socially responsible business practices.</p>

                                            <h4 className="font-bold mt-4">Adaptability and Innovation</h4>
                                            <p className="mb-2">Graduates will be adaptable to the dynamic business environment and lead innovation by embracing emerging trends and technologies.</p>

                                            <h4 className="font-bold mt-4">Global Business Competence</h4>
                                            <p className="mb-8">Graduates will possess a global mindset, effectively managing cross-cultural teams and navigating international business environments.</p>

                                            <h3 className="text-[#002856] font-bold text-xl mb-4">Program Learning Outcomes (PLOs)</h3>
                                            <p className="mb-4">The Program Learning Outcomes (PLOs) describe the specific skills, knowledge, and attitudes that students will acquire upon completing the BBA program. These PLOs align directly with the Program Educational Objectives (PEOs) to ensure that graduates meet the program’s long-term objectives.</p>

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

                                            <h3 className="text-[#002856] font-bold text-xl mb-4">Pre Entry Admission Test Eligibility</h3>
                                            <p className="mb-2">Either:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>pass pre-admission entry test of the university with 50% marks,</li>
                                                <li>pass HEC’s Undergraduate Studies Admission Test (USAT) with 50% marks, or</li>
                                                <li>have scored at least 800 in SAT-I and secured at least 1500 in relevant subjects.</li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        ]}
                    />
                </React.Suspense>
            </div>

            {/* Blog and Events Sections */}
            <BlogSection title="Latest News" />
            <EventsSection title="Upcoming Events" />
        </div>
    );
}
