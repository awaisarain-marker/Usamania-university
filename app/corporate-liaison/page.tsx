'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import TabAccordion from '@/components/layout/TabAccordion';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/corporate-liaison/StickyNav';
import LeadershipSection from '@/components/layout/LeadershipSection';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';

interface ExpandableTextProps {
    children: React.ReactNode;
    renderTrigger?: (expanded: boolean, toggle: () => void) => React.ReactNode;
}

function ExpandableText({ children, renderTrigger }: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('auto'); // Default to auto or a fixed small height if 'collapsible' behavior is desired immediately. 
    // However, for correct measurement, we need to handle initial state. 
    // The ORIC page uses '5.4rem' as initial collapsed height. Let's stick to that for consistency.

    useEffect(() => {
        if (expanded) {
            setHeight(`${contentRef.current?.scrollHeight}px`);
        } else {
            setHeight('5.4rem'); // Collapsed height matching ORIC page
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
                    style={{
                        marginTop: '1.5rem',
                        background: 'none',
                        border: 'none',
                        color: '#ed1c24',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <span>{expanded ? 'Read Less' : 'Read More'}</span>
                    <svg
                        width="25"
                        height="25"
                        className="icon icon-arrow"
                        aria-hidden="true"
                        role="img"
                        style={{
                            marginLeft: '5px',
                            transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)',
                            transition: 'transform 0.3s',
                            fill: 'currentColor'
                        }}
                    >
                        <use xlinkHref="#arrow"></use>
                    </svg>
                </button>
            )}
        </div>
    );
}

export default function CorporateLiaisonPage() {
    return (
        <div className="page-corporate-liaison">
            <PageHero
                title="Corporate Liaison"
                subtitle="Fostering Industry-Academia Collaboration"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Corporate Liaison' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#mous" className="btn-secondary --red --border --arrow">
                        <span>MOUs</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                    <a href="#job-portal" className="btn-link --white">
                        <span>Job Portal</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#alumni-engagement" className="btn-link --white">
                        <span>Alumni Engagement</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#corporate-liaison-events" className="btn-link --white">
                        <span>Corporate Liaison Events</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#corporate-social-responsibility" className="btn-link --white">
                        <span>CS Responsibility</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#day-trip-learning" className="btn-link --white">
                        <span>Day Trip Learning</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            <StickyNav />

            {/* MOUs Section with Tabs */}
            <div id="mous" className="py-8 md:py-12 bg-[#e6eef4]">
                <div className="container">
                    <div className="section-title text-center mb-12">
                        <h2>MOUs</h2>
                    </div>
                </div>
                <LeadershipSection
                    hideHeader
                    customBottomSection={<></>}
                    customTabs={[
                        {
                            id: 'sales-institute',
                            label: 'Sales institute of Pakistan',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="/Sale-institude-of-pakistan-img.png" alt="Sales institute of Pakistan" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg" style={{ marginTop: '-150px' }}>
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Sales institute of Pakistan</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>UIT University signed MOU with the Sales institute of Pakistan (SIP). UIT will collaborate with them regarding organizing training classroom sessions on Soft Skills, social media and the website at UIT University.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'systems-limited',
                            label: 'Systems Limited',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="https://digitalpakistan.pk/wp-content/uploads/2025/09/sys.svg" alt="Systems Limited" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg">
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Systems Limited</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>Systems Limited, an IT software solution company, has signed an MOU with UIT University. The agreement will encourage collaboration made on the training and development of students.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'federal-state',
                            label: 'Federal State Budgetary Educational Institution',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Moscow_08-2012_Petrovsko-Razumovskoe_img01.jpg/500px-Moscow_08-2012_Petrovsko-Razumovskoe_img01.jpg" alt="Federal State Budgetary Educational Institution" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg">
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Federal State Budgetary Educational Institution of Higher Education Russian Timiryazev State Agrarian University</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>Last month, we had the pleasure of welcoming Mr. Andrey Viktorovich Fedorov, Consul General of the Consulate General of Russia in Karachi, as a special guest to UIT University. We look forward to continued collaboration and exchange between Pakistan and Russia.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'kashif-dental',
                            label: 'Kashif Dental Clinic',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="https://www.kashifdental.com/wp-content/uploads/2019/05/2-2.jpg" alt="Kashif Dental Clinic" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg">
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>Kashif Dental Clinic</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>UIT University (UITU) sign MOU with M/s Kashif Dental Clinic (KDC) on 23rd February, 2023. Under MOU, KDC will provide 50% discount in various dental services and treatments to UITU Employees, Students, Alumni and their families at all of its branches and centres located in the Karachi's city.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'wanz-tech',
                            label: 'WANZ International Technology',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="/wanz-tech.png" alt="WANZ International Technology" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg">
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>WANZ International Technology</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>UIT University sign MOU with WANZ International Technology to strengthen industrial linkages for startups & FYPs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'mashq-training',
                            label: 'MASHQ training and Consultancy Pvt.ltd',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="/mashq-training.png" alt="MASHQ training and Consultancy Pvt.ltd" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg">
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>MASHQ training and Consultancy Pvt.ltd</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>UIT University in partnership with Mashq Trainings & Consultancy and Speak Karachi is bringing you a conference on Mental health.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'itecknologi',
                            label: 'iTecknologi Group of Companies',
                            content: (
                                <div className="accordion-section__head">
                                    <div className="accordion-section__head-image">
                                        <img src="/itecknologi.png" alt="iTecknologi Group of Companies" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="accordion-section__head-text -light-bg">
                                        <div className="accordion-section__head-text-wrap">
                                            <div className="section-title">
                                                <h2>iTecknologi Group of Companies</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>UIT University sign MOU with iTecknologi Its diversified conglomerate that is securing its place by providing best tracking services in Pakistan. UIT University and iTecknologi is looking forward to work mutually in the field of IT & Technology for a better Pakistan.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </div>

            {/* Job Portal Section */}
            <div id="job-portal" className="py-8 md:py-12 bg-[#e6eef4] border-t border-gray-200">
                <div className="container">
                    <div className="w-full bg-white p-8 md:p-12   shadow-sm border border-gray-100">
                        <div className="section-title mb-6">
                            <h2>Job Portal</h2>
                        </div>
                        <div className="prose max-w-none text-gray-600">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                                {/* For Students Box */}
                                <a
                                    href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdez7rnQDiFCCNZIYSBPapFzPvRZ7PMCvnVMnHKkFFjahCfBQ/formrestricted"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="job-portal-box group relative block"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            alt="For Students"
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            style={{ borderRadius: '0' }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h3 className="text-white text-3xl font-bold uppercase tracking-wider">For Students</h3>
                                        </div>
                                    </div>
                                </a>

                                {/* For Employers Box */}
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScOCI54piIYJEDguGxMkSITUueBea63oaU4alkzcefcNJzBBw/formrestricted"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="job-portal-box group relative block"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            alt="For Employers"
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            style={{ borderRadius: '0' }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h3 className="text-white text-3xl font-bold uppercase tracking-wider">For Employers</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alumni Engagement Section */}
            <div id="alumni-engagement" className="py-8 md:py-12 bg-[#e6eef4] border-t border-gray-200">
                <div className="container">
                    <div className="w-full bg-white p-8 md:p-12   shadow-sm border border-gray-100">
                        <div className="section-title mb-6">
                            <h2>Alumni Engagement</h2>
                        </div>
                        <ExpandableText>
                            <p>UIT University takes immense pride in nurturing strong connections with our alumni, making alumni engagement a top priority within our Department of Corporate Liaison. Our commitment to our former students is reflected in a range of initiatives designed to keep our alumni involved and invested in the growth and success of the university community.</p>
                            <p className="mt-4">We offer alumni opportunities to contribute to the professional development of current students through mentorship programs and career guidance, sharing their valuable insights and experiences. Additionally, we assist our alumni by providing guidance on further studies and scholarship opportunities, ensuring that they have access to resources to continue their educational journeys.</p>
                            <p className="mt-4">Furthermore, UIT University encourages alumni to support current students by sponsoring internships and offering invaluable work experiences that shape the careers of the next generation. We also actively engage our alumni in the academic realm by allowing them to sponsor and oversee final-year projects, fostering a sense of academic excellence and continuity.</p>
                            <p className="mt-4">But it’s not all about business and academics; we believe in the joy of coming back. Our alumni are invited to participate in recreational activities and events that help maintain connections and friendships formed during their time at the university. Moreover, we proudly feature our alumni’s accomplishments in our bi-annual newsletter, giving them the recognition they deserve.</p>
                            <p className="mt-4">At UIT University, alumni engagement isn’t just a commitment; it’s a celebration of the enduring relationship between our former students and their alma mater. Join us in preserving and enhancing this legacy of excellence and connection.</p>

                            <div className="mt-8 mb-8">
                                <p className="text-xl font-bold text-[#002856]">Our alumni have accomplished amazing things.</p>
                                <p className="text-lg text-[#002856]">We are proud to be a part of their journey.</p>
                            </div>
                        </ExpandableText>

                        {/* Alumni Grid - Placed outside expandable text but inside card */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Shahmeer Amir", title: "FOUNDER AND CEO AT VEILIUX", batch: "BATCH 2011" },
                                { name: "Eng. Fawad Laher", title: "MD, STORM FIBER", batch: "BATCH 1997" },
                                { name: "Tehseen Ahmed", title: "CEO AT TOTAL NETWORK SOLUTIONS", batch: "BATCH 2011" },
                                { name: "Aqeel Khan", title: "CEO DREAMS NETWORK AND TECHNOLOGY", batch: "BATCH 2004" },
                                { name: "Absar Ansari", title: "CEO AT AAA TECHNOLOGY", batch: "BATCH 1997" },
                                { name: "Wajid Hassan", title: "SOLUTION ARCHITECT AT ATNT USA", batch: "BATCH 2002" },
                                { name: "Muhammad Kahif", title: "SENIOR INFORMATION SECURITY PROFESSIONAL AT KUWAIT FINANCE HOUSE", batch: "BATCH 1997" },
                                { name: "Muhammad Fahad shafi", title: "COUNTRY MANAGER SP AT HUAWEI UAE", batch: "BATCH 2005" },
                                { name: "Khalid Khan", title: "REGIONAL SALES MANAGER AT HEWLETT-PACKARD MALESIA", batch: "BATCH 2000" },
                                { name: "Dr. Ishtiyaq Makda", title: "ASSISTANT PROFESSOR HABIB UNIVERSITY", batch: "BATCH 2004" },
                                { name: "Tariq Jawed", title: "VP LEAD ARCHITECT AT JP MORGAN CHASE AND CO. USA", batch: "BATCH 2002" },
                                { name: "Sara Azim", title: "HEAD, PROCESSES MANAGEMENT AT NATIONAL BANK OF PAKISTAN", batch: "BATCH 2001" }
                            ].map((alumni, idx) => (
                                <div key={idx} className="board-member-card" style={{
                                    backgroundColor: '#e6eef4',
                                    borderRadius: '0',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'stretch',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ width: '130px', flexShrink: 0, backgroundColor: '#d1d5db' }}>
                                        <img
                                            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                                            alt={alumni.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '0',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: '1.5rem', flex: 1 }}>
                                        <h3 style={{
                                            color: '#002856',
                                            fontSize: '1.25rem',
                                            fontWeight: '700',
                                            marginBottom: '0.5rem'
                                        }}>{alumni.name}</h3>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#555',
                                            lineHeight: '1.4',
                                            fontWeight: '700',
                                            textTransform: 'uppercase'
                                        }}>{alumni.title}</p>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#ed1c24',
                                            marginTop: '0.25rem',
                                            fontStyle: 'italic',
                                            fontWeight: '600'
                                        }}>{alumni.batch}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-12 text-center">
                            <a href="#" className="btn-secondary --red --arrow --border" style={{ borderRadius: '0' }}>
                                <span>Start Your Alumni Journey</span>
                                <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                    <use xlinkHref="#arrow"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corporate Liaison Events Section */}
            <div id="corporate-liaison-events">
                <EventsSection title="Corporate Liaison Events" />
            </div>

            {/* Corporate Social Responsibility Section */}
            <div id="corporate-social-responsibility" className="py-8 md:py-12 bg-[#e6eef4] border-t border-gray-200">
                <div className="container">
                    <div className="w-full bg-white p-8 md:p-12   shadow-sm border border-gray-100">
                        <div className="section-title mb-6">
                            <h2>Corporate Social Responsibility</h2>
                        </div>
                        <ExpandableText>
                            <p><strong className="text-[#002856]">Welcome !</strong></p>
                            <p className="mt-2">At UIT University, we emphasize the importance of Corporate Social Responsibility (CSR) in modern business practices. CSR involves companies integrating ethical, social, and environmental concerns into their operations, going beyond profit to positively impact society. Our programs are designed to equip students with the knowledge and skills to implement responsible business strategies, preparing them to lead organizations that prioritize both profitability and social good.</p>
                            <p className="mt-4">Whether you're exploring cutting-edge research, engaging in community service, or pursuing your passions, UIT University offers the support and opportunities you need to succeed. Join us in shaping the future and making a lasting impact on the world.</p>
                            <h3 className="text-xl font-bold text-[#002856] mt-8 mb-4">Key Areas of CSR</h3>

                            <h4 className="font-bold text-[#002856] mt-4">Environmental Responsibility</h4>
                            <p>At UIT University, we are committed to reducing our environmental impact by adopting sustainable practices. Our initiatives include the use of renewable energy sources, waste reduction strategies, and pollution minimization efforts. By integrating these practices into our operations, we aim to contribute to a more sustainable future and serve as a model for environmental responsibility in higher education.</p>

                            <h4 className="font-bold text-[#002856] mt-4">Ethical Responsibility</h4>
                            <p>At UIT University, we are dedicated to ensuring the fair and ethical treatment of all our stakeholders, including employees, students, partners, and the broader community. Our commitment involves maintaining transparent practices and actively avoiding any form of exploitation. Through these efforts, we strive to build a culture of trust, integrity, and mutual respect across all our interactions.</p>

                            <h4 className="font-bold text-[#002856] mt-4">Philanthropic Responsibility</h4>
                            <p>At UIT University, we actively support charitable causes and contribute to the welfare of society through donations, community service, and various forms of support. Our commitment to social responsibility reflects our dedication to making a positive impact and fostering a culture of compassion and generosity within our community.</p>

                            <h4 className="font-bold text-[#002856] mt-4">Economic Responsibility</h4>
                            <p>At UIT University, we operate in a manner that contributes to the economic development of society, ensuring that our initiatives are both profitable and beneficial to our employees, students, and the broader community. By aligning our operations with economic growth, we strive to create opportunities that drive prosperity while maintaining a strong commitment to social responsibility.</p>
                        </ExpandableText>

                        {/* Key Areas of CSR Tabs */}
                        <div className="mt-8">
                            <TabAccordion customTabs={[
                                {
                                    id: 'blood-mental',
                                    label: 'Blood-Mental',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2 className="text-[#002856] mb-[15px] font-serif text-[40px]">Blood Donation to Mental Health Consultations</h2>
                                            </div>
                                            <ExpandableText>
                                                <p>At AT UIT University, we recognize the life-saving impact of blood donation. By organizing regular blood donation drives, we encourage our community members to give the gift of life. Each donation has the potential to save multiple lives, and our events provide a safe and supportive environment for donors. Whether you are a first-time donor or a regular participant, your contribution is invaluable to those in need.</p>
                                                <p className="mt-4">Mental well-being is a critical aspect of overall health, and at AT UIT University, we are committed to supporting our community's mental health needs. Our mental health consultations offer a confidential and compassionate space for individuals to discuss their concerns with professional counselors. We believe that mental health is just as important as physical health, and we are dedicated to providing resources and support to help our community thrive emotionally and psychologically.</p>
                                                <p className="mt-4">Good oral health is essential to overall well-being, and AT UIT University is pleased to offer dental checkups as part of our health initiatives. Our dental checkup events provide convenient access to professional dental care, ensuring that our community members can maintain healthy teeth and gums. Regular checkups help prevent dental issues and promote long-term oral health, contributing to a brighter, healthier smile.</p>
                                            </ExpandableText>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Blood-Mental',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/438164726_837927338369047_6413795879715098054_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/441570487_837927351702379_6870174041047606825_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/438102756_837927301702384_4448664194524296717_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/440850163_837927385035709_7460598634136219380_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/438095636_837927378369043_8202368150023819495_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/438093164_837927335035714_4276649413611866615_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/441503811_837927321702382_4316450968097127693_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/441582066_837928135035634_8427555750267253362_n-e1724817153179.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/438059238_837928138368967_4669975231452044154_n-e1724817218959.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/438109201_837927381702376_4611814987736188732_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/442435389_837927341702380_1295562625127509078_n.jpg'
                                    ]
                                },
                                {
                                    id: 'social-work',
                                    label: 'Social Work',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2 className="text-[#002856] mb-[15px] font-serif text-[40px]">Iftar on the Streets - Social Work</h2>
                                            </div>
                                            <ExpandableText>
                                                <p>In a heartwarming demonstration of compassion and practical learning, our 𝐁𝐁𝐀 students at AT UIT University took to the streets of Karachi to embody the spirit of community and togetherness where it’s needed most. As part of their community development coursework, they organized an iftar for the people of Karachi.</p>
                                                <p className="mt-4">This event was not just about serving meals; it was about serving hope, fostering understanding, and creating a shared sense of humanity. As the sun set and the fast was broken together, it became a moment of reflection and connection for both the students and the grateful recipients.</p>
                                                <p className="mt-4">Kudos to our students for exemplifying the true spirit of Ramadan and showcasing what it means to be a part of AT UIT University. Their actions are a testament to our values and commitment to making a meaningful impact on society.</p>
                                            </ExpandableText>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Social Work',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417702580_399815122985290_2320212913418288834_n-e1724816834168.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/419542024_399815139651955_5301415090745846318_n-1-e1724816929734.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/418981943_399815112985291_5059139849380083911_n-e1724816996931.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/419039104_399815142985288_2032704901841049706_n-e1724817045624.jpg'
                                    ]
                                },
                                {
                                    id: 'test-ride',
                                    label: 'Test Ride',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2 className="text-[#002856] mb-[15px] font-serif text-[40px]">Atlas Honda Limited - Escooty Test Ride Activity</h2>
                                            </div>
                                            <ExpandableText>
                                                <p>Atlas Honda Limited recently conducted a Test Ride Activity for the Honda BENLY e at AT UIT University, leveraging the institution's renowned reputation for exceptional student final-year projects (FYPs) and significant faculty contributions in engineering and technology. This event provided a unique opportunity for participants to experience the innovative electric vehicle firsthand, allowing them to explore its advanced features and eco-friendly design.</p>
                                                <p className="mt-4">The test ride also served as a valuable platform for Atlas Honda to gather insightful feedback from UIT University's esteemed faculty. By engaging with a knowledgeable and forward-thinking audience, the company aimed to refine and enhance the Honda BENLY e based on expert evaluations. This collaboration underscores the strong relationship between industry and academia, highlighting both the innovative spirit of UIT University and Atlas Honda's commitment to advancing sustainable automotive solutions.</p>
                                            </ExpandableText>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Test Ride',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417519406_786819790146469_1981514447470178057_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417485978_786819786813136_9209348090859839246_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417434239_786819843479797_569825191881941605_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417453256_786819873479794_6997279604545754562_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417476767_786819706813144_4658583730451752446_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417496513_786819886813126_2335924768207011419_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417691734_786819716813143_3623853440184573600_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417487765_786819693479812_5392052015515603709_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417413859_786819646813150_2362894689777801088_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/417687421_786820093479772_4771061540580939670_n.jpg'
                                    ]
                                },
                                {
                                    id: 'cleaning',
                                    label: 'Cleaning',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2 className="text-[#002856] mb-[15px] font-serif text-[40px]">Cleaning Drive 2023</h2>
                                            </div>
                                            <ExpandableText>
                                                <p>UIT University recently organized a Cleaning Drive, where our dedicated students took to the streets to promote a healthier and cleaner environment. This initiative was a testament to our community’s commitment to environmental stewardship, as students actively participated in removing litter and improving public spaces.</p>
                                                <p className="mt-4">A heartfelt thanks to the enthusiastic students and faculty who rolled up their sleeves to contribute to this vital cause. Your unwavering commitment to enhancing environmental well-being is truly inspiring and reflects the university's values of fostering a sustainable and positive impact on our community.</p>
                                            </ExpandableText>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Cleaning',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/411588764_336844829282320_3964379204016866072_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/411609131_336844802615656_8706796812211973200_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/411600303_336844652615671_3627557699661594083_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/411641458_336844625949007_5119486706546881417_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/411595917_336844789282324_3638924443103725461_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/411597093_336844762615660_2852183050214123939_n.jpg'
                                    ]
                                },
                                {
                                    id: 'blood-drive',
                                    label: 'Blood Drive',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2 className="text-[#002856] mb-[15px] font-serif text-[40px]">Blood Donation Drive</h2>
                                            </div>
                                            <ExpandableText>
                                                <p>UIT University is thrilled to announce the success of our recent Blood Donation Drive, held in collaboration with the KITCC (Kashif Iqbal Thalassemia Care Centre) Trust. This impactful event played a crucial role in saving lives and providing essential support to Thalassemia patients through the generous donation of blood.</p>
                                                <p className="mt-4">We extend our deepest gratitude to all the donors and volunteers whose contributions made this event a tremendous success. Your kindness and dedication have profoundly benefited our community, showcasing the power of collective effort in making a meaningful difference.</p>
                                            </ExpandableText>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Blood Drive',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/397087117_307658445534292_3633512680107889719_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/397096681_307658458867624_4594203551081753278_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/397191443_307658515534285_8338240381990533505_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/397063237_307658412200962_3742616658057312630_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/397182502_307658335534303_4263617317255318876_n.jpg'
                                    ]
                                },
                                {
                                    id: 'brf',
                                    label: 'BRF',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2 className="text-[#002856] mb-[15px] font-serif text-[40px]">Blind Resource Foundation</h2>
                                            </div>
                                            <ExpandableText>
                                                <p>UIT University is honored to have hosted the Blind Resource Foundation Pakistan for a transformative training initiative. On Pakistan's 76th Independence Day, the foundation conducted an engaging two-day capacity-building program titled "Main Bhi Pakistan Hoon."</p>
                                                <p className="mt-4">This program demonstrated a profound commitment to empowerment and upliftment by providing visually impaired individuals with essential skills and tools to navigate and overcome societal challenges. Through this comprehensive training session, participants gained valuable knowledge and resources to enhance their independence and effectiveness in various aspects of life.</p>
                                            </ExpandableText>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for BRF',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/379916608_280756011557869_75062399165391705_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/380433169_280756031557867_230312219695871416_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/379872948_280756028224534_8062607259043773882_n.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/380000899_280756301557840_3702179569480941533_n-1.jpg',
                                        'https://uitu.edu.pk/wp-content/uploads/2024/08/380000899_280756301557840_3702179569480941533_n.jpg'
                                    ]
                                }
                            ]}
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Day Trip Learning Section */}
            <div id="day-trip-learning">
                <BlogSection title="Day Trip Learning" />
            </div>
        </div >
    );
}
