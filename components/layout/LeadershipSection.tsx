'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface ExpandableTextProps {
    children: React.ReactNode;
    renderTrigger?: (expanded: boolean, toggle: () => void) => React.ReactNode;
}

function ExpandableText({ children, renderTrigger }: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('5.4rem'); // Approx 3 lines (1.125rem * 1.6 * 3)

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
                    style={{ display: 'flex', marginTop: '15px', alignItems: 'center', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textTransform: 'uppercase', fontWeight: 700, color: '#002856' }}
                    onClick={(e) => {
                        e.preventDefault();
                        toggle();
                    }}
                >
                    <span style={{ color: '#002856' }}>{expanded ? 'Read Less' : 'Read More'}</span>
                    <svg
                        width="25"
                        height="25"
                        className="icon icon-arrow-down"
                        aria-hidden="true"
                        role="img"
                        style={{
                            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s',
                            marginLeft: '5px',
                            fill: '#ed1c24'
                        }}
                    >
                        <use xlinkHref="#arrow-down"></use>
                    </svg>
                </button>
            )}
        </div>
    );
}


interface LeadershipSectionProps {
    hideHeader?: boolean;
    introTabConfig?: {
        label?: string;
        content?: React.ReactNode;
        hideImage?: boolean;
    };
    customTabs?: {
        id: string;
        label: string;
        content: React.ReactNode;
    }[];
    customBottomSection?: React.ReactNode;
}

export default function LeadershipSection({ hideHeader = false, introTabConfig, customTabs, customBottomSection }: LeadershipSectionProps) {
    const [activeTab, setActiveTab] = useState(0);

    // Effect to handle hash-based navigation for tabs
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '').toLowerCase();
            if (!hash) return;

            const currentTabs = customTabs || defaultTabs;
            const index = currentTabs.findIndex(t =>
                t.id.toLowerCase() === hash ||
                t.label.toLowerCase().replace(/\s+/g, '-') === hash
            );

            if (index !== -1) {
                setActiveTab(index);
                // Optional: smooth scroll to section if needed, but the hash link usually handles scrolling. 
                // We might need to adjust for fixed header offset later.
            }
        };

        // Check on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [customTabs]); // customTabs is a dependency, defaultTabs is stable enough or reconstructed.

    const defaultTabs = [
        {
            id: introTabConfig?.label || 'Vice Chancellors Message',
            label: introTabConfig?.label || 'Vice Chancellors Message',
            content: (
                <div className="accordion-section__head">
                    {!introTabConfig?.hideImage && (
                        <div className="accordion-section__head-image">
                            <img
                                className="image lazy loaded"
                                alt="UIT Vice Chancellor Image"
                                width="1256"
                                height="580"
                                src="https://uitu.edu.pk/wp-content/uploads/2024/07/vc-1024x943-ezgif.com-crop.webp"
                                srcSet="https://uitu.edu.pk/wp-content/uploads/2024/07/vc-1024x943-ezgif.com-crop.webp 150w, https://uitu.edu.pk/wp-content/uploads/2024/07/vc-1024x943-ezgif.com-crop.webp 300w, https://uitu.edu.pk/wp-content/uploads/2024/07/vc-1024x943-ezgif.com-crop.webp 600w, https://uitu.edu.pk/wp-content/uploads/2024/07/vc-1024x943-ezgif.com-crop.webp 1000w"
                                sizes="(min-width: 75rem) 60rem, (min-width: 50rem) 40rem, (min-width: 40rem) calc(100vw - 10rem), 100vw"
                            />
                        </div>
                    )}
                    <div
                        className="accordion-section__head-text -light-bg"
                        style={introTabConfig?.hideImage ? { width: '100%', maxWidth: '100%', marginTop: '0px', paddingTop: '0px' } : undefined}
                    >
                        <div className="accordion-section__head-text-wrap">
                            <div className="section-title">
                                <h2>{introTabConfig?.label || "Vice Chancellor's Message"}</h2>
                            </div>
                            {introTabConfig?.content ? (
                                introTabConfig.content
                            ) : (
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
                                    <p>Welcome to UIT University, where we believe in transforming lives through quality education and innovative research. As we continue our journey of academic excellence, I am proud to lead an institution that has consistently demonstrated its commitment to nurturing young minds and preparing them for the challenges of tomorrow.</p>
                                    <p className="mt-4">Our university stands as a testament to the vision of the Usman Memorial Foundation, which has been dedicated to educational excellence for over five decades. We have evolved from a small institute to a comprehensive university, always maintaining our core values of integrity, innovation, and inclusivity.</p>
                                    <p className="mt-4">At UITU, we don't just impart knowledge; we cultivate critical thinking, foster creativity, and encourage our students to become lifelong learners. Our distinguished faculty, state-of-the-art facilities, and industry partnerships ensure that our graduates are well-prepared to excel in their chosen fields and contribute meaningfully to society.</p>
                                    <p className="mt-4">I invite you to join our vibrant academic community and be part of our continuing story of success and growth.</p>
                                </ExpandableText>
                            )}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'Board of Advisors',
            label: 'Board of Advisors',
            content: (
                <div className="accordion-section__head" style={{ display: 'block' }}>
                    <div className="section-title">
                        <h2>Board of Advisors</h2>
                    </div>

                    <div className="board-members-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { name: "Salman Ahmad", title: "Senior Partner, McKinsey & Company" },
                            { name: "Saud Azim Hashimi", title: "Managing Partner, Xebec Venture Partners" },
                            { name: "Aliya Iqbal Naqvi", title: "Faculty Member, Department of Social Sciences", subtitle: "Institute of Business Administration, Karachi" },
                            { name: "Zahra Sabri", title: "Lecturer, Department of Social Sciences", subtitle: "Institute of Business Administration, Karachi" },
                            { name: "Col. Aamir Nadeem (Retd.)", title: "Chief Executive Officer Data Communication & Control Pvt. Ltd." },
                            { name: "Samir Hoodbhoy", title: "Managing Director", subtitle: "Data Communication & Control Pvt. Ltd." },
                            { name: "Dr. Shaukat Hameed Khan", title: "Coordinator General COMSTECH", subtitle: "OIC Standing Committee on Science & Technology" }
                        ].map((member, idx) => (
                            <div key={idx} className="board-member-card" style={{
                                padding: '1.5rem',
                                backgroundColor: '#e6eef4',
                                borderLeft: '4px solid #ed1c24',
                                borderRadius: '4px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{
                                    color: '#002856',
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    marginBottom: '0.5rem'
                                }}>{member.name}</h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#555',
                                    lineHeight: '1.4',
                                    fontWeight: '500'
                                }}>{member.title}</p>
                                {member.subtitle && (
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#777',
                                        marginTop: '0.25rem',
                                        fontStyle: 'italic'
                                    }}>{member.subtitle}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'Board of Governors',
            label: 'Board of Governors',
            content: (
                <div className="accordion-section__head" style={{ display: 'block' }}>
                    <div className="section-title">
                        <h2>Board of Governors</h2>
                    </div>

                    <div className="board-members-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { name: "Mr. M. Hussain Hasham", title: "Chairperson", subtitle: "Chancellor UIT University" },
                            { name: "Dr. Vali Uddin", title: "Vice Chancellor UIT University" },
                            { name: "Dr. Kashif Mehmood", title: "Provost UIT University" },
                            { name: "Mr. Justice (Retd.) Shahnawaz Tariq", title: "Ombudsman PHWWP, Government of Sindh", subtitle: "Nominee of Chief Justice of High Court of Sindh" },
                            { name: "Engr. Nazeer Hussain", title: "Nominee of Chairperson of Higher Education Commission", subtitle: "Director General -HEC Regional Centre" },
                            { name: "Mr. Muhammad Abbas Baloch", title: "Secretary, Universities & Boards Department, Government of Sindh", subtitle: "Member, Nominee of Universities & Boards Department, Government of Sindh" },
                            { name: "Mr. Muhammad Sajid, MPA", title: "Member, Provincial Assembly of Sindh", subtitle: "Nominee of Speaker, Provincial Assembly of Sindh" },
                            { name: "Mr. Mahamood Alam Jamot, MPA", title: "Member, Provincial Assembly of Sindh", subtitle: "Nominee of Speaker, Provincial Assembly of Sindh" },
                            { name: "Mr. Samir Hoodbhoy", title: "Executive Officer, Data Communication & Control Pvt. Ltd.", subtitle: "VC’s Nominee for a Person of National and International Eminence" },
                            { name: "Mr. Tariq Rangoonwala", title: "Chairman, Board of Trustees, CZVMG Rangoonwala Trust", subtitle: "VC’s Nominee for a Person of National and International Eminence" },
                            { name: "Mr. Kasim Hasham", title: "Member, Usman Memorial Foundation" },
                            { name: "Mr. Khurram Kasim", title: "Member, Usman Memorial Foundation" },
                            { name: "Mr. Ahmed Ebrahim Hasham", title: "Member, Usman Memorial Foundation" },
                            { name: "Dr. Shoaib Zaidi", title: "Member, Usman Memorial Foundation", subtitle: "Foundation’s Nominee" },
                            { name: "Ms. Maheen Salman", title: "Chief Executive Officer, Global Innovartrix", subtitle: "VC’s Nominee from Industry / Trade Association (FPCCI)" },
                            { name: "Aamir Siddiqui", title: "Secretary", subtitle: "Registrar, UIT University" }
                        ].map((member, idx) => (
                            <div key={idx} className="board-member-card" style={{
                                padding: '1.5rem',
                                backgroundColor: '#e6eef4',
                                borderLeft: '4px solid #ed1c24',
                                borderRadius: '4px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{
                                    color: '#002856',
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    marginBottom: '0.5rem'
                                }}>{member.name}</h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#555',
                                    lineHeight: '1.4',
                                    fontWeight: '500'
                                }}>{member.title}</p>
                                {member.subtitle && (
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#777',
                                        marginTop: '0.25rem',
                                        fontStyle: 'italic'
                                    }}>{member.subtitle}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'Board of Faculties',
            label: 'Board of Faculties',
            content: (
                <div className="accordion-section__head" style={{ display: 'block' }}>
                    <div className="section-title">
                        <h2>Board of Faculties</h2>
                    </div>

                    {/* Faculty of Engineering and Technology (FE&T) */}
                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: '#002856',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            borderBottom: '2px solid #ed1c24',
                            display: 'inline-block',
                            paddingBottom: '0.25rem'
                        }}>
                            Faculty of Engineering and Technology (FE&T)
                        </h3>
                        <div className="board-members-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem',
                            marginTop: '1.5rem'
                        }}>
                            {[
                                { name: "Dr. Abid Karim", title: "Chairperson", subtitle: "Professor and Dean FET" },
                                { name: "Dr. Syed Talha Ahsan", title: "Head of Department / Professor", subtitle: "Chairperson Electrical Engineering" },
                                { name: "Dr. Muhammad Ghazanfarullah Khan", title: "Head of Department / Professor", subtitle: "Professor-EL" },
                                { name: "Dr. Jawwad Ahmed", title: "Head of Department / Professor", subtitle: "Chairperson ET" },
                                { name: "Engr. Adiba Jaffar", title: "Nominee of BOS", subtitle: "Assistant Professor EL" },
                                { name: "Engr. Waseem Zeeshan", title: "Nominee of BOS", subtitle: "Assistant Professor-EL" },
                                { name: "Dr. Rana Javed Masood", title: "Nominee of Academic Council (Member)", subtitle: "Assistant Professor-ET" },
                                { name: "Engr. Aurang Zeb Ansari", title: "Nominee of Academic Council (Member)", subtitle: "Assistant Professor-EL" },
                                { name: "Engr. Rabia Bilal", title: "Nominee of Academic Council (Member)", subtitle: "Assistant Professor-EL" },
                                { name: "Dr. Imran Aslam", title: "Nominee of Board (Expert Member)", subtitle: "Chairman Department of Telecomm. Engg. , NEDUET" },
                                { name: "Engr. Omer Gillani", title: "Nominee of Board (Expert Member)", subtitle: "General Manager Business Development, Transworld Home" },
                                { name: "Dr. Ali Ahmed", title: "Provost Nominee" }
                            ].map((member, idx) => (
                                <div key={idx} className="board-member-card" style={{
                                    padding: '1.5rem',
                                    backgroundColor: '#e6eef4',
                                    borderLeft: '4px solid #ed1c24',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <h3 style={{
                                        color: '#002856',
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        marginBottom: '0.5rem'
                                    }}>{member.name}</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#555',
                                        lineHeight: '1.4',
                                        fontWeight: '500'
                                    }}>{member.title}</p>
                                    {member.subtitle && (
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#777',
                                            marginTop: '0.25rem',
                                            fontStyle: 'italic'
                                        }}>{member.subtitle}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Faculty of Computer Science (FCS) */}
                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: '#002856',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            borderBottom: '2px solid #ed1c24',
                            display: 'inline-block',
                            paddingBottom: '0.25rem'
                        }}>
                            Faculty of Computer Science (FCS)
                        </h3>
                        <div className="board-members-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem',
                            marginTop: '1.5rem'
                        }}>
                            {[
                                { name: "Dr. Kashif Mehmood", title: "Dean, Faculty of Computing", subtitle: "Professor" },
                                { name: "Prof. Dr Syed Anwar Ali", title: "Head of Department / Professor", subtitle: "Professor" },
                                { name: "Dr. Muhammad Wasim", title: "Head of Department / Professor", subtitle: "Chairperson, CS & Associate Professor" },
                                { name: "Dr. Adnan Ahmed Siddiqui", title: "Head of Department / Professor", subtitle: "Professor" },
                                { name: "Mr. Fauzan Saeed", title: "Nominee of BOS", subtitle: "Assistant Professor" },
                                { name: "Dr. Farhan Ahmed Karim", title: "Nominee of BOS", subtitle: "Assistant Professor" },
                                { name: "Dr. Lubaid Ahmed", title: "Nominee of Academic Council (Member)", subtitle: "Assistant Professor" },
                                { name: "Dr. Subhash Sagar", title: "Nominee of Academic Council (Member)", subtitle: "Assistant Professor" },
                                { name: "Mr. Zeeshan Saleem", title: "Nominee of Academic Council (Member)", subtitle: "Assistant Professor" },
                                { name: "Dr. Waqar Saleem", title: "Nominee of Board (Expert Member)", subtitle: "Associate Professor Computer Science, Habib University" },
                                { name: "Dr. Hussain Pervaiz", title: "Nominee of Board (Expert Member)", subtitle: "HoD, Software Engineering Dept., KIET" },
                                { name: "Dr. Muhammad Rafi", title: "Nominee by the Provost" }
                            ].map((member, idx) => (
                                <div key={idx} className="board-member-card" style={{
                                    padding: '1.5rem',
                                    backgroundColor: '#e6eef4',
                                    borderLeft: '4px solid #ed1c24',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <h3 style={{
                                        color: '#002856',
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        marginBottom: '0.5rem'
                                    }}>{member.name}</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#555',
                                        lineHeight: '1.4',
                                        fontWeight: '500'
                                    }}>{member.title}</p>
                                    {member.subtitle && (
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#777',
                                            marginTop: '0.25rem',
                                            fontStyle: 'italic'
                                        }}>{member.subtitle}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Faculty of Management and Social Sciences (FMSS) */}
                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: '#002856',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            borderBottom: '2px solid #ed1c24',
                            display: 'inline-block',
                            paddingBottom: '0.25rem'
                        }}>
                            Faculty of Management and Social Sciences (FMSS)
                        </h3>
                        <div className="board-members-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem',
                            marginTop: '1.5rem'
                        }}>
                            {[
                                { name: "Dr. Waqar Ahmed", title: "Chairperson", subtitle: "Dean FMSS" },
                                { name: "Dr. Waqar Ahmed", title: "Head of Department", subtitle: "Interim Chairperson, Management Science" },
                                { name: "Dr. Nida Mansoor", title: "Nominee of BOS (Management Science)", subtitle: "Assistant Professor" },
                                { name: "Mr. Aamir Khan", title: "Nominee of BOS (Management Science)", subtitle: "Senior Lecturer" },
                                { name: "Ms. Areeba Khan", title: "Nominee of Academic Council (Member)", subtitle: "Lecturer" },
                                { name: "Syed Hafeez ur Rehman", title: "Nominee of Academic Council (Member)", subtitle: "Senior Lecturer" },
                                { name: "Ms. Sameen Fatima", title: "Nominee of Academic Council (Member)", subtitle: "Lecturer" },
                                { name: "Dr. Nooreen Mujahid", title: "Nominee of Board (Expert Member)", subtitle: "Assoc.Prof. & Chaiperson , Dept. of Economics, KU" },
                                { name: "Dr. Salman Sarwat", title: "Nominee of Board (Expert Member)", subtitle: "Associate Professor HOD Accounting & Finance Department CBM, IoBM" },
                                { name: "Dr. Athar Iqbal", title: "Nominee of the Provost", subtitle: "Iqra Head of Campus" }
                            ].map((member, idx) => (
                                <div key={idx} className="board-member-card" style={{
                                    padding: '1.5rem',
                                    backgroundColor: '#e6eef4',
                                    borderLeft: '4px solid #ed1c24',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <h3 style={{
                                        color: '#002856',
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        marginBottom: '0.5rem'
                                    }}>{member.name}</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#555',
                                        lineHeight: '1.4',
                                        fontWeight: '500'
                                    }}>{member.title}</p>
                                    {member.subtitle && (
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#777',
                                            marginTop: '0.25rem',
                                            fontStyle: 'italic'
                                        }}>{member.subtitle}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'Academic Council',
            label: 'Academic Council',
            content: (
                <div className="accordion-section__head" style={{ display: 'block' }}>
                    <div className="section-title">
                        <h2>Academic Council</h2>
                    </div>

                    <div className="board-members-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { name: "Engr. Prof. Dr. Vali Uddin", title: "Chairperson", subtitle: "Vice Chancellor UIT University" },
                            { name: "Dr. Kashif Mehmood", title: "Executive Member", subtitle: "Professor and Dean, Faculty of Computing Science" },
                            { name: "Engr. Prof. Dr. Abid Karim", title: "Executive Member", subtitle: "Dean Faculty of Engineering and Technology" },
                            { name: "Dr. Waqar Ahmed", title: "Executive Member", subtitle: "Professor and Dean Faculty of Management and Social Sciences & Chairperson Management Science" },
                            { name: "Engr. Dr. Syed Talha Ahsan", title: "Executive Member", subtitle: "Chairperson Electrical Engineering" },
                            { name: "Dr. Muhammad Wasim", title: "Executive Member", subtitle: "Chairperson Computing Sciences" },
                            { name: "Dr. Muhammad Jawwad Ahmad", title: "Executive Member", subtitle: "Chairperson Engineering Technology" },
                            { name: "Dr. M. Ghazanfarullah Khan", title: "Member", subtitle: "Professor" },
                            { name: "Dr. Adnan Ahmed Siddiqui", title: "Member", subtitle: "Professor" },
                            { name: "Dr. Rana Javed Masood", title: "Member", subtitle: "Associate Professor" },
                            { name: "Mr. Aamir Siddiqui", title: "Secretary", subtitle: "Registrar" },
                            { name: "Dr. Shaukat Hameed Khan", title: "Member", subtitle: "BOG’s Nominee" },
                            { name: "Mr. Hussein Hasanali", title: "Member", subtitle: "BOG’s Nominee" },
                            { name: "Engr. Sohail Bashir", title: "Member", subtitle: "BOG’s Nominee" },
                            { name: "Dr. Farid Panjwani", title: "Member", subtitle: "BOG’s Nominee" },
                            { name: "Mr. Raza Jafri", title: "Controller of Examinations" }
                        ].map((member, idx) => (
                            <div key={idx} className="board-member-card" style={{
                                padding: '1.5rem',
                                backgroundColor: '#e6eef4',
                                borderLeft: '4px solid #ed1c24',
                                borderRadius: '4px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{
                                    color: '#002856',
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    marginBottom: '0.5rem'
                                }}>{member.name}</h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#555',
                                    lineHeight: '1.4',
                                    fontWeight: '500'
                                }}>{member.title}</p>
                                {member.subtitle && (
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#777',
                                        marginTop: '0.25rem',
                                        fontStyle: 'italic'
                                    }}>{member.subtitle}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'Management Team',
            label: 'Management Team',
            content: (
                <div className="accordion-section__head" style={{ display: 'block' }}>
                    <div className="section-title">
                        <h2>Management Team</h2>
                    </div>

                    <div className="board-members-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { name: "Engr. Prof. Dr. Vali Uddin", title: "Vice Chancellor", ext: "Ext no: 3132", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/vc.webp" },
                            { name: "Dr. Kashif Mehmood", title: "Provost & Dean Faculty of Computing Sciences", ext: "Ext no: 3018", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/dr-kashif.webp" },
                            { name: "Engr. Prof. Dr. Abid Karim", title: "Dean Faculty of Engineering & Technology", ext: "Ext no: 3114", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/dr-abid-karim.webp" },
                            { name: "Dr. Waqar Ahmed", title: "Dean Faculty of Management & Social Sciences", ext: "Ext no: 3078", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/Dr.-Waqar-Ahmed.webp" },
                            { name: "Mr. Aamir Siddiqui", title: "Registrar", ext: "Ext no: 3026", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/amir-siddiqui.webp" },
                            { name: "Ms. Shabana Naz", title: "Director Finance", ext: "Ext no: 3013", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/shabana-naz.webp" },
                            { name: "Mr. Muhammad Kamran Jamil", title: "Director HR & Administration", ext: "Ext no: 3005", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/kamran-jamil.webp" },
                            { name: "Engr. Shahzad Ahmed", title: "Director Information Technology", ext: "Ext no: 3135", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/shahzad-ahmed.webp" },
                            { name: "Mr. Muhammad Iftikhar Mubbashir", title: "Director Quality Enhancement Cell", ext: "Ext no: 3034", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/iftikhar-mubbashir.webp" },
                            { name: "Engr. Dr. Syed Talha Ahsan", title: "Chairperson Electrical Engineering", ext: "Ext no: 3078", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/dr-talha-ahsan.webp" },
                            { name: "Dr. Muhammad Wasim", title: "Chairperson Computer Science", ext: "Ext no: 3033", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/dr-wasim.webp" },
                            { name: "Dr. Jawwad Ahmed", title: "Chairperson Engineering Technology", ext: "Ext no: 3117", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/dr-jawwad.jpg" },
                            { name: "Engr. Raza Abbas Jafri", title: "Controller of Examinations", ext: "Ext no: 3065", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/raza-jafri.webp" },
                            { name: "Mr. Muhammad Ali Kemal", title: "Director Office of Research Innovation & Commercialization", ext: "Ext no: 3039", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/ali-kemal.webp" },
                            { name: "Mr. Muhammad Uzair Rizwan", title: "Director Admissions & External Affairs", ext: "Ext no: 3031", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/uzair.webp" },
                            { name: "Mr. Syed Masood Ahmad", title: "Resident Auditor", ext: "Ext no: 3046", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/masood.webp" },
                            { name: "Ms. Nuzhat Raza", title: "Librarian", ext: "Ext no: 3023", image: "https://uitu.edu.pk/wp-content/uploads/2025/12/nuzhat.webp" }
                        ].map((member, idx) => (
                            <div key={idx} className="board-member-card" style={{
                                backgroundColor: '#e6eef4',
                                borderRadius: '4px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'stretch',
                                overflow: 'hidden'
                            }}>
                                <div style={{ width: '130px', flexShrink: 0 }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '0',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{
                                        color: '#002856',
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        marginBottom: '0.5rem'
                                    }}>{member.name}</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#555',
                                        lineHeight: '1.4',
                                        fontWeight: '500'
                                    }}>{member.title}</p>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#777',
                                        marginTop: '0.25rem',
                                        fontWeight: '600'
                                    }}>{member.ext}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    const tabs = customTabs || defaultTabs;

    return (
        <div className="flexible --border">
            <div className="container">
                <div className="flexible__wrap --white">
                    <article className="flexible__content">

                        <section className="residence">
                            <div className="residence__wrap lazy loaded" style={{ backgroundImage: hideHeader ? 'none' : 'url("https://www.aubg.edu/wp-content/themes/digitalsilk/assets/_dist/images/grifon-blue.svg")' }}>
                                {/* Conditionally render header content */}
                                {!hideHeader && (
                                    <div className="residence__content">
                                        <div className="section-title">
                                            <h2>UIT Leadership</h2>
                                        </div>
                                        <div className="text-big">
                                            <p>"Education is the most powerful weapon which you can use to change the world."</p>
                                            <p>Learn more below.</p>
                                        </div>
                                    </div>
                                )}
                                <div className="custom-accordion-tabs accordion-tabs js-tabs is-initialized tabs-allowed">
                                    <ul role="tablist" className="custom-accordion-tabs__list --scroll row tabs-tab-list">
                                        {tabs.map((tab, index) => (
                                            <li key={tab.id} role="presentation" className="custom-accordion-tabs__item">
                                                <button
                                                    role="tab"
                                                    aria-selected={activeTab === index}
                                                    className={`custom-accordion-tabs__link tabs-trigger js-tabs-trigger ${activeTab === index ? 'is-selected' : ''}`}
                                                    onClick={() => setActiveTab(index)}
                                                >
                                                    {tab.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>

                                    {tabs.map((tab, index) => (
                                        <section
                                            key={tab.id}
                                            id={`restabsection${index}`}
                                            role="tabpanel"
                                            className={`tabs-panel js-tabs-panel ${activeTab === index ? 'is-open' : 'is-hidden'}`}
                                            aria-labelledby={`residencetab${index}`}
                                        >

                                            <div className={`content ${activeTab === index ? 'is-open' : 'is-hidden'}`} aria-hidden={activeTab !== index}>
                                                {tab.content}
                                            </div>
                                        </section>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {customBottomSection !== undefined ? (
                            customBottomSection
                        ) : (
                            <section className="image-cta">
                                <div className="container">
                                    <div className="image-cta__wrap">
                                        <div className="image-cta__head">
                                            <figure className="image-cta__head-image">
                                                <img
                                                    className="image lazy loaded"
                                                    alt="Accreditations & Recognition Image"
                                                    width="1256"
                                                    height="605"
                                                    src="/commesion-about-img-001.webp"
                                                    srcSet="/commesion-about-img-001.webp 150w, /commesion-about-img-001.webp 300w, /commesion-about-img-001.webp 600w, /commesion-about-img-001.webp 1000w"
                                                    sizes="(min-width: 75rem) 60rem, (min-width: 50rem) 40rem, (min-width: 40rem) calc(100vw - 10rem), 100vw"
                                                />
                                            </figure>
                                        </div>

                                        <div className="image-cta__body">
                                            <div className="section-title">
                                                <h2>Accreditations & Recognition</h2>
                                            </div>
                                            <ExpandableText
                                                renderTrigger={(expanded, toggle) => (
                                                    <button
                                                        className="btn-secondary --red --arrow --border"
                                                        onClick={toggle}
                                                        style={{ marginTop: '20px', cursor: 'pointer' }}
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
                                                <div style={{ marginTop: '1rem' }}>
                                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#002856', marginBottom: '0.5rem' }}>Government of Sindh</h3>
                                                    <p style={{ marginBottom: '1rem' }}>
                                                        UITU was chartered vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and was notified in The Sindh Government Gazette vide Notification no. PLS/LEGIS-PB-07/2017 dated Karachi, Monday, May 28, 2018.
                                                        <br />
                                                        <a href="http://www.sindhlaws.gov.pk/setup/publications/PUB-18-000114.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#ed1c24', textDecoration: 'underline' }}>View Notification</a>
                                                    </p>

                                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#002856', marginBottom: '0.5rem' }}>Higher Education Commission (HEC)</h3>
                                                    <p>
                                                        UITU is recognized by Higher Education Commission, Pakistan.
                                                        <br />
                                                        <a href="https://www.hec.gov.pk//english/universities/Pages/Sindh/UIT%20University,%20Karachi.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#ed1c24', textDecoration: 'underline' }}>View Recognition</a>
                                                    </p>
                                                </div>
                                            </ExpandableText>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </article>
                </div>
            </div>
        </div>
    );
}
