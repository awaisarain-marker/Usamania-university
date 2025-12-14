'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import TabAccordion from '@/components/layout/TabAccordion';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/corporate-liaison/StickyNav';
import LeadershipSection from '@/components/layout/LeadershipSection';

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
            <div id="corporate-liaison-events" className="py-8 md:py-12 bg-[#e6eef4] border-t border-gray-200">
                <div className="container">
                    <div className="w-full bg-white p-8 md:p-12   shadow-sm border border-gray-100">
                        <div className="section-title mb-6">
                            <h2>Corporate Liaison Events</h2>
                        </div>
                        <div className="prose max-w-none text-gray-600">
                            <p>Information about Corporate Liaison Events will appear here.</p>
                        </div>
                    </div>
                </div>
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
                                                <h2>Blood-Mental</h2>
                                            </div>
                                            <div className="text-big">
                                                <p>Content for Blood-Mental will be added here later.</p>
                                            </div>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Blood-Mental',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        '/campus-hero.png',
                                        'https://images.unsplash.com/photo-1541339907198-e021fc9e2752?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                    ]
                                },
                                {
                                    id: 'social-work',
                                    label: 'Social Work',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2>Social Work</h2>
                                            </div>
                                            <div className="text-big">
                                                <p>Content for Social Work will be added here later.</p>
                                            </div>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Social Work',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                        '/campus-hero.png'
                                    ]
                                },
                                {
                                    id: 'test-ride',
                                    label: 'Test Ride',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2>Test Ride</h2>
                                            </div>
                                            <div className="text-big">
                                                <p>Content for Test Ride will be added here later.</p>
                                            </div>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Test Ride',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                    ]
                                },
                                {
                                    id: 'cleaning',
                                    label: 'Cleaning',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2>Cleaning</h2>
                                            </div>
                                            <div className="text-big">
                                                <p>Content for Cleaning will be added here later.</p>
                                            </div>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Cleaning',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://images.unsplash.com/photo-1581578731117-10d521878dfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                        '/campus-hero.png'
                                    ]
                                },
                                {
                                    id: 'blood-drive',
                                    label: 'Blood Drive',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2>Blood Drive</h2>
                                            </div>
                                            <div className="text-big">
                                                <p>Content for Blood Drive will be added here later.</p>
                                            </div>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for Blood Drive',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                        '/campus-hero.png'
                                    ]
                                },
                                {
                                    id: 'brf',
                                    label: 'BRF',
                                    content: (
                                        <div>
                                            <div className="section-title">
                                                <h2>BRF</h2>
                                            </div>
                                            <div className="text-big">
                                                <p>Content for BRF will be added here later.</p>
                                            </div>
                                        </div>
                                    ),
                                    rightImage: '/campus-hero.png', // Placeholder
                                    rightQuote: 'Quote for BRF',
                                    rightQuoteAuthor: 'Author',
                                    rightImages: [
                                        'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                        '/campus-hero.png'
                                    ]
                                }
                            ]}
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Day Trip Learning Section */}
            <div id="day-trip-learning" className="py-8 md:py-12 bg-[#e6eef4] border-t border-gray-200">
                <div className="container">
                    <div className="w-full bg-white p-8 md:p-12   shadow-sm border border-gray-100">
                        <div className="section-title mb-6">
                            <h2>Day Trip Learning</h2>
                        </div>
                        <div className="prose max-w-none text-gray-600">
                            <p>Information about Day Trip Learning will appear here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
