'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Inner component that uses useSearchParams - must be wrapped in Suspense
function FacilitiesParamHandler({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
    const searchParams = useSearchParams();

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam === 'facilities' && sectionRef.current) {
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [searchParams, sectionRef]);

    return null;
}

export default function FacilitiesSection() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const tabs = [
        {
            id: 'computing-labs',
            label: 'Computing Labs',
            content: (
                <div className="facilities-tab-content">
                    <div className="table-wrapper" style={{ overflowX: 'auto' }}>
                        <table className="uit-table" style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontFamily: 'inherit',
                            fontSize: '17px'
                        }}>
                            <thead style={{ background: '#002856', color: '#fff', textAlign: 'left' }}>
                                <tr>
                                    <th style={{ border: '1px solid #ccc', padding: '12px' }}>Lab</th>
                                    <th style={{ border: '1px solid #ccc', padding: '12px' }}>Total Systems</th>
                                    <th style={{ border: '1px solid #ccc', padding: '12px' }}>Break-Up</th>
                                    <th style={{ border: '1px solid #ccc', padding: '12px' }}>Configuration</th>
                                    <th style={{ border: '1px solid #ccc', padding: '12px' }}>Other Facilities</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>CL1</td>
                                    <td rowSpan={2} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>72</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>64</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 4th Gen, 8GB RAM, 512 SSD + 500 SATA HDD, 18.5 In LCD</td>
                                    <td rowSpan={2} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>9</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 4th Gen, 8GB RAM, 512 SSD, 18.5 In LCD</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>CL2</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>50</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>50</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i5, 11th Gen, 16GB RAM, 512 SSD, 18.5 In LCD</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>CL3</td>
                                    <td rowSpan={3} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>72</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>49</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 4th Gen, 8GB RAM, 240 SSD + 250 SATA HDD, 18.5 In LCD</td>
                                    <td rowSpan={3} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>17</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i5, 3rd Gen, 8GB RAM, 240 SSD, 18.5 In LCD</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>6</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 3rd Gen, 8GB RAM, 240 SSD, 18.5 In LCD</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>CL4</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>50</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>50</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 8th Gen, 16GB RAM, 1TB NVME SSD, RTX 3060 12GB, 22 In LED</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>CL5</td>
                                    <td rowSpan={2} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>30</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>25</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i5, 11th Gen, 16GB RAM, 500 SSD, 18.5 In LCD</td>
                                    <td rowSpan={2} style={{ border: '1px solid #ccc', padding: '12px', verticalAlign: 'top' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>5</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 4th Gen, 8GB RAM, 500 SATA HDD, 18.5 In LCD</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>CL6</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>48</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>48</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 6th Gen, 8GB RAM, 512 SSD, 18.5 In LCD</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>CL7</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>40</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>40</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i7, 6th Gen, 8GB RAM, 512 SSD, 18.5 In LCD</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>GP-Library</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>37</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>37</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i5, 3rd Gen, 8GB RAM, 250 GB SATA HDD, 18.5 In LCD</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Multimedia, UPS, Network Printer</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>FYP</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>12</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>12</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>Core i5, 3rd Gen, 8GB RAM, 500 GB SATA HDD, 18.5 In LCD</td>
                                    <td style={{ border: '1px solid #ccc', padding: '12px' }}>None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        },
        {
            id: 'electrical-labs',
            label: 'Electrical Engineering Laboratories',
            content: (
                <div className="facilities-tab-content">
                    {[
                        { name: 'Electronics Laboratory-I (EL- I)', desc: 'In this laboratory, our students undergo practical work related to the fundamental Electrical Network Analysis and Digital Logic Design courses.', incharge: 'Aftab Shaikh' },
                        { name: 'Electronics Laboratory-II (EL- II)', desc: 'This laboratory provides a practical work experience to the students of Industrial Electronics, Linear Control Systems, and VLSI Design.', incharge: 'M Saleem Siddiqui' },
                        { name: 'Electrical Machines and Drives (EM&D) Laboratory', desc: 'This laboratory caters to the practical requirements of Electrical Machines, Power Electronics, and Integrated Electronics courses.', incharge: 'Kashan Ahmed' },
                        { name: 'Communication Systems (Comm Sys) Laboratory', desc: 'In this laboratory, students use Telecommunications-related equipment as part of their practical work for courses such as Communication Systems, Antennas, Wave Propagation, Digital Signal Processing, etc.', incharge: 'M Farhan Akhtar' },
                        { name: 'Electrical Engineering (EE) Laboratory', desc: 'The students conduct practical work on Linear Circuit Analysis, Electronic Devices and Circuits, and Instrumentation and Measurement in the Electrical Engineering Laboratory.', incharge: 'Rizwan Naseem' },
                        { name: 'Digital Systems (DS) Laboratory', desc: 'Digital Systems Laboratory caters to practical work in the courses of Microprocessor-based Systems and Embedded Systems.', incharge: 'Irfan Siddiqui' },
                        { name: 'Power Engineering (PE) Laboratory', desc: 'Power Engineering Laboratory is the specialized laboratory for the Power Engineering stream courses on power generation, transmission, distribution and system protection.', incharge: 'Irfan Ahmed Khan' },
                        { name: 'Physics Laboratory', desc: 'Students gain hands-on learning of Applied Physics concepts in this lab.', incharge: 'Mirza Shafqat Baig' },
                        { name: 'Workshop', desc: "The workshop serves as a specialized laboratory for 'Workshop Practice.' Our students learn the fundamental technical skills of electrical engineering here.", incharge: 'Asad Pervaiz' }
                    ].map((lab, idx) => (
                        <div key={idx} style={{ marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#e6eef4', borderLeft: '4px solid #ed1c24', borderRadius: '4px' }}>
                            <h3 style={{ color: '#002856', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{lab.name}</h3>
                            <p style={{ color: '#555', marginBottom: '0.5rem', lineHeight: '1.6', fontSize: '17px' }}>{lab.desc}</p>
                            <p style={{ color: '#777', fontSize: '17px', fontStyle: 'italic' }}>Laboratory In-Charge: {lab.incharge}</p>
                        </div>
                    ))}
                    <p style={{ marginTop: '1rem', color: '#002856', fontWeight: '600', fontSize: '17px' }}>Engineering Lab Administrator: Syed Shahzad Abbas</p>
                </div>
            )
        },
        {
            id: 'special-labs',
            label: 'Special Purpose Labs',
            content: (
                <div className="facilities-tab-content">
                    <div style={{ padding: '1.5rem', backgroundColor: '#e6eef4', borderLeft: '4px solid #ed1c24', borderRadius: '4px' }}>
                        <h3 style={{ color: '#002856', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Microelectronic Research Lab</h3>
                        <p style={{ color: '#555', lineHeight: '1.6', fontSize: '17px' }}>
                            Microelectronics Research Laboratories (MERL) at UITU aspires to lead microelectronics research and development in Pakistan. Being an engineering enterprise, it provides cutting-edge exposure to its affiliates. The MERL administration inspires its members by setting a powerful example and upholding the highest standards for their own personal and professional growth.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'library',
            label: 'Library',
            content: (
                <div className="facilities-tab-content">
                    <div style={{ padding: '1.5rem', backgroundColor: '#e6eef4', borderRadius: '4px' }}>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '17px' }}>
                            The UITU Library is the backbone of academic activities for students and faculty. The library houses a rich collection of the latest academic and non-academic books in a comfortable environment that provides students with an opportunity to enhance their knowledge and fulfil curriculum requirements. The LRC functions are managed by professional, well-trained and courteous staff, adding value to the facilities and learning process.
                        </p>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '17px' }}>
                            The UITU Library offers several facilities and services to cater to students' and faculty's needs. The LRC stocks and renews a wide range of the latest books, a collection of audio/video CDs, and corporate and industry information to ignite the intellectual spirit in young minds. The LRC subscribes to publications from the Institute of Electrical and Electronic Engineers (IEEE) and the Association for Computing Machinery (ACM). Furthermore, the Book Bank at the UITU library provides course books for the entire semester at a nominal cost.
                        </p>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '17px' }}>
                            The contemporary learning styles have been considered while designing the LRC facilities. While the individual study space offers students a calm area to concentrate on solitary learning, the collaborative learning environment promotes intellectual exchanges and collaborative work. Students have access to the library's multimedia resources through the computer lab. Moreover, the resource centre can hold small-group and one-on-one instructional sessions.
                        </p>
                        <a href="https://uitu.edu.pk/library/" target="_blank" rel="noopener noreferrer" style={{ color: '#ed1c24', fontWeight: '600', textDecoration: 'underline', fontSize: '17px' }}>
                            Visit Library Page
                        </a>
                    </div>
                </div>
            )
        },
        {
            id: 'cafeteria',
            label: 'Cafeteria',
            content: (
                <div className="facilities-tab-content">
                    <div style={{ padding: '1.5rem', backgroundColor: '#e6eef4', borderRadius: '4px' }}>
                        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '17px' }}>
                            The UITU cafeteria provides students with affordable yet hygienic meals and refreshments on working days. Moreover, it is an oasis of relaxation and socialisation amid heavy learning schedules. UITU's supervisory committee oversees Cafeteria Management under the UITU Health and Hygiene Regulations.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'auditorium',
            label: 'Auditorium',
            content: (
                <div className="facilities-tab-content">
                    <div style={{ padding: '1.5rem', backgroundColor: '#e6eef4', borderRadius: '4px' }}>
                        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '17px' }}>
                            The UITU's well-equipped and purpose-built auditorium seats 200 students. This auditorium has been a venue for conferences, seminars, and workshops with renowned scholars and representatives from Industry and PEC for CPD events. It has also been used for student activities like debates, speeches, dramas, quiz competitions, and other events.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'sports',
            label: 'Sports & Indoor Games',
            content: (
                <div className="facilities-tab-content">
                    <div style={{ padding: '1.5rem', backgroundColor: '#e6eef4', borderRadius: '4px' }}>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '17px' }}>
                            The UITU considers physical and mental fitness essential for UITIANs. Students have hectic and tight schedules, and they get tired. To perform best, it is necessary to have a sound mind in a sound body; for that, games/sports are a component of a student's academic life.
                        </p>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '17px' }}>
                            UITU's department of extracurricular activities and its members play an essential part in arranging the students' indoor games and outdoor sports.
                        </p>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '17px' }}>
                            Indoor games increase mental power; games like Chess, Scrabble, Sudoku, and Darts are arranged for inter-semester competitions. Table Tennis, Badminton, and Netball are also available indoors.
                        </p>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '17px' }}>
                            To emphasize physical strength, the Department of Extracurricular Activities arranges nearby playgrounds for inter-semester cricket matches, football, hockey etc.
                        </p>
                        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '17px' }}>
                            Sports and games should be part of a student's life. They should give equal importance to both along with their studies. Towards the end of their academic life, they will be high achievers in their professional life.
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <>
            <Suspense fallback={null}>
                <FacilitiesParamHandler sectionRef={sectionRef} />
            </Suspense>
            <section ref={sectionRef} className="facilities-section" style={{ padding: '4rem 0', backgroundColor: '#e6eef4' }}>
                <div className="container">
                    <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ color: '#002856', fontSize: '2.5rem', fontWeight: '700' }}>Facilities & Campus Life</h2>
                    </div>

                    <div className="facilities-tabs" style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        overflow: 'hidden'
                    }}>
                        {/* Tab Headers */}
                        <div className="facilities-tabs__header" style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            overflowX: 'auto',
                            backgroundColor: '#002856',
                            borderBottom: '2px solid #ed1c24',
                            scrollbarWidth: 'none', // Hide scrollbar for Firefox
                            msOverflowStyle: 'none'  // Hide scrollbar for IE/Edge
                        }}>
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    role="tab"
                                    aria-selected={activeTab === index}
                                    className={`facilities-tab-btn ${activeTab === index ? 'is-active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                    style={{
                                        padding: '1rem 1.5rem',
                                        border: 'none',
                                        background: activeTab === index ? '#ed1c24' : 'transparent',
                                        color: '#fff',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        flex: '1 1 auto',
                                        minWidth: '150px',
                                        textAlign: 'center'
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="facilities-tabs__content" style={{ padding: '2rem' }}>
                            {tabs.map((tab, index) => (
                                <div
                                    key={tab.id}
                                    role="tabpanel"
                                    style={{ display: activeTab === index ? 'block' : 'none' }}
                                >
                                    {tab.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
