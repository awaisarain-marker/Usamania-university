'use client';

import React, { useState, useRef, useEffect } from 'react';
import PageHero from '@/components/layout/PageHero';
import LeadershipSection from '@/components/layout/LeadershipSection';
import StickyNav from '@/components/qec/StickyNav';


interface ExpandableTextProps {
    children: React.ReactNode;
    renderTrigger?: (expanded: boolean, toggle: () => void) => React.ReactNode;
}

function ExpandableText({ children, renderTrigger }: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('5.4rem'); // Approx 3 lines

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

export default function QecPage() {
    return (
        <div className="page-qec">
            <PageHero
                title="Quality Enhancement Cell (QEC)"
                subtitle="Ensuring Academic Excellence and Continuous Improvement"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'QEC' }
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

                    <a href="#objectives" className="btn-link --white">
                        <span>Objectives</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#activity-calendars" className="btn-link --white">
                        <span>Activity Calendars</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#Organogram" className="btn-link --white">
                        <span>Organogram</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#Team" className="btn-link --white">
                        <span>QEC Team</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#Policies" className="btn-link --white">
                        <span>UITU Policies</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            <section className="residence py-16 md:py-24" id="introduction">
                <div className="container">
                    <div className="accordion-section__head">
                        <div className="accordion-section__head-image">
                            <img
                                className="image lazy loaded"
                                alt="QEC Introduction"
                                width="1256"
                                height="580"
                                src="https://i.pinimg.com/736x/8a/2e/fa/8a2efa5a2ff3cd633de5fe14db6bb4da.jpg"
                            />
                        </div>
                        <div className="accordion-section__head-text -light-bg">
                            <div className="accordion-section__head-text-wrap">
                                <div className="section-title">
                                    <h2>QEC Introduction</h2>
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
                                    <p>Understanding the difficulties that higher education will face in the twenty-first century, the effects of globalization, and the need for a knowledge-based economy, UIT University started the Quality Enhancement Cell in April 2022. The goal is to assist the institution in its efforts to raise the level of instruction and research and make it compliant with global standards. The QEC thinks that pursuing excellence and improving quality must be balanced.</p>
                                    <p className="mt-4">An institution can ensure with confidence and certainty that the standards and quality of its educational program are being upheld and improved by using Quality Assurance (QA). The QEC serves as a focal point for the quality assurance process to hold the standard of higher education and research. In addition, QEC works on academic capacity-building initiatives, public awareness drives, and teacher training to prepare Self-Assessment Reports (SARs) of the multiple teaching programs in their respective departments. In this respect, the QEC strives to preserve the interests of students, educators, employers, and other stakeholders involved in higher education through surveys and feedback.</p>
                                    <p className="mt-4">Moreover, the QEC is concerned with fostering and promoting higher standards of research and education at the university and cultivating public confidence in the quality and integrity of the degrees at the university.</p>
                                </ExpandableText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="residence py-16 md:py-24" id="vision-mission-objectives">
                <div className="container">



                    <div id="vision" style={{ marginTop: '3rem' }}>
                        <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                            <div className="qec-vision-content-wrap">
                                <div className="section-title">
                                    <h2>Vision Statement</h2>
                                </div>
                                <div className="text-big">
                                    <p>To be the pioneer in leading QECs in Pakistan by supporting the academic programs via academic excellence, relevant research, ingenious pedagogies, institutional strengthening, and compliance with HEC and international standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mission" style={{ marginTop: '3rem' }}>
                        <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                            <div className="qec-vision-content-wrap">
                                <div className="section-title">
                                    <h2>Mission Statement</h2>
                                </div>
                                <div className="text-big">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                            <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <p>To develop and implement a university-wide quality assurance system aligned with the HEC Pakistan's QAA standards.</p>
                                    </div>

                                    <div className="flex items-start gap-4 mt-4">
                                        <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                            <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <p>To support the university in achieving its academic and research goals.</p>
                                    </div>

                                    <div className="flex items-start gap-4 mt-4">
                                        <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                            <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <p>To promote a culture of continuous quality improvement within the university.</p>
                                    </div>

                                    <div className="flex items-start gap-4 mt-4">
                                        <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                            <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg>
                                        </div>
                                        <p>To build capacity within the university for quality assurance and enhancement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="objectives" style={{ marginTop: '3rem' }}>
                        <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                            <div className="qec-vision-content-wrap">
                                <div className="section-title">
                                    <h2>Objectives</h2>
                                </div>
                                <div className="text-big">
                                    {[
                                        "To develop and implement quality assurance standards and procedures for all aspects of the university's operations, including teaching, learning, assessment, research, and governance.",
                                        "To regularly review the university's academic programs and services to ensure they meet the highest standards.",
                                        "To support the university in improving the quality of its teaching and learning.",
                                        "To provide training and development opportunities to faculty and staff on quality assurance and enhancement.",
                                        "To promote a culture of continuous quality improvement within the university through self-assessment, peer review, and other quality assurance mechanisms.",
                                        "To work with the HEC and other quality assurance agencies to ensure that the university's quality assurance system meets the highest international standards.",
                                        "To collaborate with other QECs in Pakistan to share best practices and promote quality assurance in higher education."
                                    ].map((text, index) => (
                                        <div key={index} className={`flex items-start gap-4 ${index > 0 ? 'mt-4' : ''}`}>
                                            <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                                <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                                    <use xlinkHref="#arrow-right"></use>
                                                </svg>
                                            </div>
                                            <p>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="activity-calendars" style={{ marginTop: '3rem' }}>
                        <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                            <div className="qec-vision-content-wrap">
                                <div className="section-title">
                                    <h2>QEC Activity Calendars</h2>
                                </div>
                                <div className="text-big">
                                    <div className="flex flex-col gap-4">
                                        {[
                                            { title: "QAA Calendar 2025-2026", url: "https://uitu.edu.pk/wp-content/uploads/2025/11/QAA-Calendar-2025-2026.pdf" },
                                            { title: "QAA Calendar 2024-25", url: "https://uitu.edu.pk/wp-content/uploads/2025/11/QAA-Calendar-2024-25.pdf" },
                                            { title: "QEC Calendar for HEC 2023-2024", url: "https://uitu.edu.pk/wp-content/uploads/2025/11/QEC-Calendar-for-HEC-2023-2024.pdf" }
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-200 last:border-0"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 text-[#ed1c24]">
                                                        <svg width="24" height="24" className="icon" aria-hidden="true" role="img">
                                                            <use xlinkHref="#arrow-top-right"></use>
                                                        </svg>
                                                    </div>
                                                    <span className="font-semibold text-[#002856] text-lg">
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-6 mt-2 md:mt-0">
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#ed1c24] hover:text-[#002856] transition-colors font-medium flex items-center gap-2 text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                                    >
                                                        <span>View PDF</span>
                                                        <svg width="14" height="14" className="icon" aria-hidden="true" role="img">
                                                            <use xlinkHref="#arrow-right"></use>
                                                        </svg>
                                                    </a>
                                                    <a
                                                        href={item.url}
                                                        download
                                                        className="text-[#ed1c24] hover:text-[#002856] transition-colors font-medium flex items-center gap-2 text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                                    >
                                                        <span>Download</span>
                                                        <svg width="14" height="14" className="icon rotate-90" aria-hidden="true" role="img">
                                                            <use xlinkHref="#arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <StickyNav />

            <div id="leadership-section">
                <LeadershipSection
                    hideHeader
                    customBottomSection={<></>}
                    customTabs={[
                        {
                            id: 'Organogram',
                            label: 'Organogram',
                            content: (
                                <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                    <div className="qec-vision-content-wrap">
                                        <div className="section-title">
                                            <h2>Organogram</h2>
                                        </div>
                                        <div className="org-tree flex justify-center overflow-x-auto pb-4">
                                            <ul>
                                                <li>
                                                    <div className="node text-lg font-bold">Vice Chancellor</div>
                                                    <ul>
                                                        <li>
                                                            <div className="node">Senior Director QEC</div>
                                                            <ul>
                                                                <li>
                                                                    <div className="node">Manager</div>
                                                                    <ul>
                                                                        <li>
                                                                            <div className="node">Officer Data Analysis</div>
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="node">Data Analyst</div>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li>
                                                                            <div className="node">Attendant</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="node">Officer Documentation & Accreditation</div>
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
                            )
                        },
                        {
                            id: 'Team',
                            label: 'QEC Team',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img
                                            className="image lazy loaded"
                                            alt="QEC Team"
                                            src="https://uitu.edu.pk/wp-content/uploads/2025/12/edited-photo-2048x1105.webp"
                                        />
                                    </div>
                                    <div className="qec-team accordion-section__head-text -light-bg">
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>QEC Team</h2>
                                            </div>
                                            <div className="grid gap-4 md:grid-cols-3">
                                                {[
                                                    { name: "Muhammad Iftikhar Mubbashir", title: "Director QEC", phone: "02134978275", email: "director.qec@uitu.edu.pk" },
                                                    { name: "Syeda Umme Aeman Kamal", title: "Manager QEC", phone: "02134978275", email: "manager.qec@uitu.edu.pk" },
                                                    { name: "Muhammad Hassan Shahbaz", title: "Data Analyst", phone: "02134978275", email: "data.analyst@uitu.edu.pk" },
                                                    { name: "Muhammad Basit", title: "MIS/IT Coordinator, QEC (Additional Role)", phone: "02134978275", email: "mis.coordinator@uitu.edu.pk" },
                                                    { name: "Zeeshan Sultan", title: "QEC Automation Officer (Additional Role)", phone: "02134978275", email: "muzeeshan@uitu.edu.pk" },
                                                    { name: "Muhammad Latif", title: "Office Boy", phone: "", email: "" }
                                                ].map((member, index) => (
                                                    <div key={index} className="p-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                        <h3 className="text-lg font-bold text-[#002856] mb-1">{member.name}</h3>
                                                        <p className="text-[#ed1c24] font-medium text-sm mb-3">{member.title}</p>

                                                        {(member.phone || member.email) && (
                                                            <div className="space-y-1 text-sm text-gray-600">
                                                                {member.phone && (
                                                                    <div className="flex items-center gap-2">
                                                                        <svg width="16" height="16" className="text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                                        </svg>
                                                                        <span>{member.phone}</span>
                                                                    </div>
                                                                )}
                                                                {member.email && (
                                                                    <div className="flex items-center gap-2">
                                                                        <svg width="16" height="16" className="text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                                            <polyline points="22,6 12,13 2,6"></polyline>
                                                                        </svg>
                                                                        <a href={`mailto:${member.email}`} className="hover:text-[#ed1c24] transition-colors">{member.email}</a>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'Policies',
                            label: 'UITU Policies',
                            content: (
                                <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                    <div className="qec-vision-content-wrap">
                                        <div className="section-title">
                                            <h2>UITU Policies</h2>
                                        </div>
                                        <div className="space-y-8">
                                            {[
                                                {
                                                    category: "Policies for Students",
                                                    items: [
                                                        { title: "Undergraduate course Equivalency Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/12/Undergraduate-course-Equivalency-Policy.pdf" },
                                                        { title: "Admission Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/10/Admission-Policy_compressed.pdf" },
                                                        { title: "Dress Code Policy for Students", url: "https://uitu.edu.pk/wp-content/uploads/2024/05/Dress-Code-Policy-for-Students.pdf" },
                                                        { title: "Internship Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/10/Intership-Policy_compressed.pdf" },
                                                        { title: "Registration & Examination Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/12/Registration-And-Examination-Policy-Manual.pdf" },
                                                        { title: "Scholarship Policy", url: "https://uitu.edu.pk/wp-content/uploads/2024/05/UIT-UNIVERSITY-SCHOLARSHIP-POLICY-APPROVED-IN-MARCH-2022.pdf" },
                                                        { title: "Policy for Mentoring Female Students at UIT University", url: "https://uitu.edu.pk/wp-content/uploads/2024/11/Policy-for-Mentoring-Female-Students-at-UIT-University.pdf" },
                                                        { title: "Policy on Academic Standing Fall 2023", url: "https://uitu.edu.pk/wp-content/uploads/2025/04/Policy-on-Academic-Standing-Fall-2023.pdf" },
                                                        { title: "Co-curricular and Extra-curricular Activities andProcedures 2024", url: "https://uitu.edu.pk/wp-content/uploads/2025/02/CO-CURRICULAR-AND-EXTRA-CURRICULAR-ACTIVITIES-POLICY-AND-PROCEDURES-2024.pdf" },
                                                        { title: "Academic Advisement", url: "https://uitu.edu.pk/wp-content/uploads/2024/03/Academic-Advisement-Policy-Approved-July-2023.pdf" }
                                                    ]
                                                },
                                                {
                                                    category: "Academic Policies",
                                                    items: [
                                                        { title: "UIT University Research Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/12/UIT-University-Research-Policy-Manual.pdf" },
                                                        { title: "Anti-plagiarism", url: "https://uitu.edu.pk/wp-content/uploads/2025/10/Anti-Plagiarism-Policy.pdf" },
                                                        { title: "CQI Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/10/CQI-Policy.pdf" },
                                                        { title: "Institution Quality Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/10/institution-Quality-Policy.pdf" },
                                                        { title: "Policy on Compliance with the Pakistan Qualification Framework", url: "https://uitu.edu.pk/wp-content/uploads/2025/10/Policy-on-Compliance-with-the-pakistan-Qualifacation-Framwork.pdf" },
                                                        { title: "Program, Curriculum and Course Review Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/10/Program-Curriculum-and-Course-Review-Policy.pdf" },
                                                        { title: "Interdisciplinary Research Policy", url: "https://uitu.edu.pk/wp-content/uploads/2025/03/Interdisciplinary-Research-v.3-Mar-20-2025.pdf" },
                                                        { title: "Visiting Faculty Policy 2024", url: "https://uitu.edu.pk/wp-content/uploads/2025/02/VISITING-FACULTY-POLICY-2024.pdf" },
                                                        { title: "Academic Program Approval and Procedure 2024", url: "https://uitu.edu.pk/wp-content/uploads/2025/02/ACADEMIC-PROGRAM-APPROVAL-AND-PROCEDURE-2024.pdf" },
                                                        { title: "Classroom Observation and Policy 2024", url: "https://uitu.edu.pk/wp-content/uploads/2025/02/CLASSROOM-OBSERVATION-POLICY-AND-PROCEDURE-2024.pdf" },
                                                        { title: "Faculty Work Load Policy and Procedures", url: "https://uitu.edu.pk/wp-content/uploads/2025/02/FACULTY-WORK-LOAD-POLICY-AND-PROCEDURES.pdf" }
                                                    ]
                                                },
                                                {
                                                    category: "General Policies",
                                                    items: [
                                                        "Center of Continuing Education (CCE)",
                                                        "Inclusive Access to Academic, Co-Curricular, and Extracurricular Activities",
                                                        "Automation and Digital Transformation Policy",
                                                        "Communication of Approved Policies to all Stakeholders",
                                                        "Document Control & Record Management Policy",
                                                        "Open Door",
                                                        "Social Media Management and Public Information Communication Policy (SMMPIC)",
                                                        "Parking and Allied Services",
                                                        "Employee Leave Policy",
                                                        "Protection of Reporting Discrimination",
                                                        "Grievance Policy anad Procedure 2024",
                                                        "Whistleblowing Policy 2024",
                                                        "Resolution Numbering of Regular Meetings 2024",
                                                        "Faculty and Staff Training and Development Policy and Procedures 2024",
                                                        "Non-Discrimination Against Transgender Individuals",
                                                        "Policy on Open Access to Library at UIT University"
                                                    ].map(title => ({ title, url: "#" }))
                                                },
                                                {
                                                    category: "HEC’s Adopted Policies",
                                                    items: [
                                                        "Policy for Students with Disabilities 2021",
                                                        "Notification with Adopted Policy on Protection Against Sexual Harrasment HEC",
                                                        "Notification for the adoption of HEC Undergraduate Education policy",
                                                        "Notification for the adoption of HEC Graduate Education policy",
                                                        "Notification for the adoption of HEC Policy for Students with Disabilities"
                                                    ].map(title => ({ title, url: "#" }))
                                                },
                                                {
                                                    category: "Archive",
                                                    items: [
                                                        "Admission Policy 2024-2025",
                                                        "Quality Assurance Policy",
                                                        "Transfer of Credit Hours",
                                                        "Harassment Act"
                                                    ].map(title => ({ title, url: "#" }))
                                                }
                                            ].map((section, idx) => (
                                                <div key={idx}>
                                                    <h3 className="text-xl font-bold text-[#002856] mb-4 border-b border-gray-100 pb-2">{section.category}</h3>
                                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                                        {section.items.map((item, itemIdx) => (
                                                            <a
                                                                key={itemIdx}
                                                                href={item.url}
                                                                target={item.url === '#' ? '_self' : '_blank'}
                                                                rel={item.url === '#' ? '' : 'noopener noreferrer'}
                                                                className={`flex items-start gap-3 group ${item.url === '#' ? 'cursor-default' : ''}`}
                                                                onClick={e => item.url === '#' && e.preventDefault()}
                                                            >
                                                                <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                                                    <svg width="18" height="18" className="icon" aria-hidden="true" role="img">
                                                                        <use xlinkHref="#arrow-right"></use>
                                                                    </svg>
                                                                </div>
                                                                <span className={`${item.url === '#' ? 'text-gray-700' : 'text-[#002856] group-hover:text-[#ed1c24] transition-colors'} font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full`}>
                                                                    {item.title}
                                                                </span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    );
}
