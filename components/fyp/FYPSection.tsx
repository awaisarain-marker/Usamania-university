'use client';

import React, { useState, useMemo } from 'react';
import styles from './FYPSection.module.css';

interface Project {
    id: number;
    department: string;
    code: string;
    name: string;
    sdg: string;
    tools: string;
    domain: string;
    abstract: string;
    supervisor: string;
    designation: string;
    students: string;
}

const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        department: "Computer Science",
        code: "CS27",
        name: "Intellitrader",
        sdg: "",
        tools: "Django, Streamlit",
        domain: "AI",
        abstract: "This project is about a new web app that makes Forex trading easier by using news to predict market changes. The main goal is to make Forex trading simple and available to everyone, even if they don't have any experience. The project has several important steps. First, it sets up a strong system to collect news from different online sources. Then, it uses advanced techniques to understand the sentiment of these news articles, figuring out if they are positive, negative, or neutral, and how they might affect the Forex market. Machine learning models are trained with old data and news sentiments to predict future prices of currency pairs and stocks. The main part of the project is creating trading strategies that automatically buy or sell based on the model's predictions. It also focuses on protecting money during trading by using strategies like stop-loss orders and position sizing. The user interface is designed to be easy to use on all devices, allowing traders and investors to interact with market charts, get personalized advice, and stay updated with real-time notifications. In short, this project offers a new way to make Forex trading easy and accessible for everyone. It helps users make smart trading decisions based on data, making Forex trading available to all.",
        supervisor: "Dr. Lubaid Ahmed",
        designation: "Assistant Professor",
        students: "20B-130-CS Wardah Khan, 20B-111-CS Raazia Khan, 20B-113-CS Hafiz Noman Javed"
    },
    {
        id: 2,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-06-CE",
        name: "PLC and SCADA based Intelligent Load Shedding",
        sdg: "9",
        tools: "Streamlit, PSS®SINCAL, TensorFlow",
        domain: "AI, Power Systems",
        abstract: "It explores an advanced intelligent load shedding system that leverages PLC and SCADA, enhanced by AI. The system automatically manages power distribution by strategically shedding loads, predicting energy demand, and optimizing decisions in real-time. The hardware prototype is controlled by the PLC managing various loads through relays, integrated with NodeMCU and SCADA web platform. AI models analyze historical and real-time data to forecast consumption, identify critical loads, and implement optimized strategies to minimize disruption and maximize efficiency.",
        supervisor: "Engr. Dr. Jibran Ali",
        designation: "Assistant Professor",
        students: "Syed Naqi Abbas Zaidi, Syed Ali Abbas Zaidi, Mirza Abdullah Baig, Muhammad Ebad Khan"
    },
    {
        id: 3,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-05-CE",
        name: "Glove Talk",
        sdg: "9, 10",
        tools: "Flex Sensors, IMU, Arduino, Python, Bluetooth",
        domain: "Assistive Tech, Embedded, AI",
        abstract: "This project develops a smart glove with flex and IMU sensors to recognize sign language gestures using machine learning. Sensor data is transmitted via Bluetooth to a mobile app that translates gestures into text and speech. For reverse communication, the hearing person can type or speak through the app, which converts it into gestures on the glove LCD screen with vibration feedback. The system is affordable, localized for Pakistan, and inclusive, bridging communication gap between deaf/mute and hearing communities.",
        supervisor: "Engr Dr S Talha Ahsan / Engr Aimen Naseem",
        designation: "Associate Professor / Assistant Professor",
        students: "Syed Talha Khurram, Syed Saad Ullah Ahmed, Laiba Ali Khan, Ahmed Ali Ashbal"
    },
    {
        id: 4,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-01-CE",
        name: "AI based food recognition and nutrition estimation plate",
        sdg: "",
        tools: "Pi Camera, Raspberry Pi, LED Matrix Display, Python, Digital Image Processing",
        domain: "AI and Digital Image Processing",
        abstract: "This project develops an AI-based Smart Food Recognition and Nutritional Estimation System using Raspberry Pi. The system uses a camera to capture a food plate, detects food items in real time using AI and Digital Image Processing techniques, and estimates their nutritional content (calories, protein, carbs, and fat) using a fixed-weight model and a preloaded offline database.",
        supervisor: "Dr. Engr. M. Ghazanfar Ullah",
        designation: "Professor (EL)",
        students: "Laraib Khan (22FA-025-CE), Ayesha Naveed (22FA-054-CE), Ilsa Zeeshan (22FA-078-CE), Mohib Najam (22FA-037-CE)"
    },
    {
        id: 5,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-07-CE",
        name: "Autism Spectrum Disorder",
        sdg: "",
        tools: "EEG Headset, Computer + LCD Display, Python, Digital Signal Processing, Cloud Computing",
        domain: "AI and Digital Signal Processing",
        abstract: "The project introduces a smarter approach using an EEG headset to record brain activity and AI to analyze signals linked to autism. It identifies different stages and levels of ASD for precise diagnosis. The goal is to give families and healthcare providers a tool that makes diagnosis faster, more accurate, and accessible for children and adults. Early recognition enables timely interventions.",
        supervisor: "Dr. Engr. M. Ghazanfar Ullah",
        designation: "Professor (EL)",
        students: "Sameer Mohsin (21B-151-CE), Ammar Raza (22FA-003-CE), Abdullah Ali (22FA-001-CE), Maryam Tariq (22FA-085-CE)"
    },
    {
        id: 6,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-09-CE",
        name: "VR Based Lab Simulator for Digital Logic Design",
        sdg: "",
        tools: "High-end computer system, VR headset, Unity, Blender, C#",
        domain: "Computer Graphics, Digital System Design",
        abstract: "This project develops a Virtual Reality lab simulator to teach Digital Logic Design interactively. Students can enter a virtual lab, assemble circuits, and test them. It bridges the gap between theory and practical learning, improves hands-on skills, reduces lab costs, and provides scalable VR learning accessible in schools, universities, and remote setups.",
        supervisor: "Dr. Engr. M. Ghazanfar Ullah",
        designation: "Professor (EL)",
        students: "Ali Irfan (22FA-036-CE), Muhammad Sheharyar (22FA-048-CE), Muhammad Annas (22FA-012-CE), Ibrahim Hussain (22FA-013-CE)"
    },
    {
        id: 7,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-10-CE",
        name: "AI based Aeroponic System",
        sdg: "",
        tools: "ESP32, DHT11/DHT22, pH & EC sensors, Python, C/C++, scikit-learn, Arduino IDE, Firebase, Flask/Dash",
        domain: "AI, Embedded Systems",
        abstract: "This project integrates AI with a vertical aeroponic system to automate plant cultivation. AI models manage mist control (humidity/temperature), optimize nutrients (pH/EC), and detect anomalies using Isolation Forest. The system improves precision farming efficiency, reduces manual intervention, and promotes sustainable agriculture through real-time smart control and monitoring.",
        supervisor: "Engr. Salman Jafri / Engr. Aimen Naseem",
        designation: "Senior Assistant Professor / Assistant Professor",
        students: "Ayesha Asim, Hadia SIddiqui, Usma Arshad, Areeb Alvi"
    },
    {
        id: 8,
        department: "BE Electrical",
        code: "",
        name: "Solar-Powered EV Charging with Battery Swapping Technique (Control Part)",
        sdg: "",
        tools: "Lithium-ion Batteries (48V), BMS, Microcontroller, ICs, Arduino IDE, Real-Time Dashboard",
        domain: "Renewable Energy / EV / Smart BMS",
        abstract: "This project presents a solar-powered EV charging and battery swapping system for 48V lithium-ion packs of electric bikes. Each pack has a BMS and microcontroller for safe, reliable charging. The microcontroller connects to the dashboard for real-time monitoring. It reduces charging time, grid dependency, lowers carbon emissions, and enables sustainable, efficient EV mobility through battery swapping.",
        supervisor: "Engr. Raza A. Jafri",
        designation: "Associate Professor",
        students: "Muzahir Hussain (22FA-002-PE), Syed Naqi Shah (22FA-014-PE), Aneeza Riaz (21B-043-PE)"
    },
    {
        id: 9,
        department: "BE Electrical",
        code: "",
        name: "Solar-Power Charging System with Battery Swapping Technique (Power)",
        sdg: "",
        tools: "Solar Panels, Charge Controller (MPPT), DC-DC Converter, Lithium-ion Battery, Protection unit",
        domain: "Renewable Energy / EV / Smart BMS",
        abstract: "The project designs a solar-based charging system for electric bikes to promote clean transportation. Solar panels convert sunlight to electricity, stored in the bike’s battery via MPPT and DC-DC converters. Reduces grid dependency, uses renewable energy, and enhances sustainability. Performance is analyzed under varying weather to determine efficiency and charging time.",
        supervisor: "Engr. Raza A. Jafri",
        designation: "Associate Professor",
        students: "Syed Haider Abbas (22FA-009-PE), Syed Subhan Reahn (21B-023-PE), Abdul Hadi Ghori (22FA-007-PE)"
    },
    {
        id: 10,
        department: "BE Electrical",
        code: "",
        name: "Real-Time Accident Detection and Alert System",
        sdg: "",
        tools: "Arduino IDE (C/C++), ESP8266, MPU6050, GPS, GSM, 12V Battery, Push Button, LEDs, Buck converter, Buzzer, Micro SD",
        domain: "Embedded Systems, IoT",
        abstract: "This Accident Detection and Alert System ensures quick emergency response for bike accidents. NodeMCU ESP8266 monitors motion via MPU6050. On detecting abnormal tilt or impact, it triggers buzzer and LEDs. Riders can cancel manually; otherwise, GPS location is sent via SMS and call. Provides cost-effective, reliable, and efficient safety solution for motorcycles.",
        supervisor: "Engr. Raza A. Jafri",
        designation: "Associate Professor",
        students: "Muhammad Huzaifa Arshad (22FA-004-EE), Zoya Khan (22FA-009-EE), Safia Abdul Rub (22FA-007-EE), Hafiz Anas Ahmed (22FA-008-EE)"
    },
    {
        id: 11,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-CE",
        name: "",
        sdg: "",
        tools: "Microcontroller, windmill, solar panel",
        domain: "AI prediction",
        abstract: "To avoid false alerts, a manual cancel button is integrated. If the rider is safe, they press it within 30s. Otherwise, GSM module sends emergency SMS and call with GPS location. A mobile app tracks rider route and displays full travel path until accident point. Cost-effective, reliable solution ensuring timely help and accurate accident location.",
        supervisor: "Dr Abid Kareem / Engr. Syed Muhammad Zia Uddin",
        designation: "Dean / Assistant Professor",
        students: "Fariha Muzaffer (22FA-043-CE), Taha Amir (22FA-016-CE)"
    },
    {
        id: 12,
        department: "BE Electrical (Computer Systems)",
        code: "FYP-22B-CE",
        name: "Design And Development of a compact freeze dryer",
        sdg: "",
        tools: "Vacuum Chamber, Vacuum Pump, Condenser, Heating Pad, Temp & Pressure Sensors, Microcontroller",
        domain: "Software and Hardware",
        abstract: "The goal is to design a small, affordable freeze dryer for small-scale industrial/lab use. By freezing materials and applying vacuum (lyophilization), water is removed. Includes temperature control, condenser, and vacuum pump managed by microcontroller. Useful in food preservation, pharmaceuticals, and research, producing an effective working prototype for heat-sensitive materials.",
        supervisor: "Dr Abid Kareem / Engr. Syed Muhammad Zia Uddin",
        designation: "Dean / Assistant Professor",
        students: "Uzair Siddiqui (22FA-004-PE), M.HAMMAD (22FA-042-CE), Salateen Ali Soomro (21B-061-CE), Muhammad Abdullah (22FA-067-CE)"
    }
];

const AbstractCell = ({ text }: { text: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // If text is short enough, just show it
    if (text.length < 100) return <span>{text}</span>;

    return (
        <div className={styles.abstractWrapper}>
            <span className={`${styles.abstractText} ${isExpanded ? styles.abstractExpanded : styles.abstractCollapsed}`}>
                {text}
            </span>
            <span
                className={styles.showMoreBtn}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Show Less" : "Show More"}
            </span>
        </div>
    );
};

export default function FYPSection() {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [domain, setDomain] = useState("");
    const [designation, setDesignation] = useState("");

    // Get unique options for dropdowns
    const departments = useMemo(() => Array.from(new Set(PROJECTS_DATA.map(p => p.department).filter(Boolean))).sort(), []);
    const supervisors = useMemo(() => Array.from(new Set(PROJECTS_DATA.map(p => p.supervisor).filter(Boolean))).sort(), []);
    const domains = useMemo(() => Array.from(new Set(PROJECTS_DATA.map(p => p.domain).filter(Boolean))).sort(), []);
    const designations = useMemo(() => Array.from(new Set(PROJECTS_DATA.map(p => p.designation).filter(Boolean))).sort(), []);

    const filteredProjects = useMemo(() => {
        return PROJECTS_DATA.filter(project => {
            const matchesSearch = search === "" || Object.values(project).some(val =>
                String(val).toLowerCase().includes(search.toLowerCase())
            );
            const matchesDept = department === "" || project.department === department;
            const matchesSup = supervisor === "" || project.supervisor === supervisor;
            const matchesDom = domain === "" || project.domain === domain;
            const matchesDes = designation === "" || project.designation === designation;

            return matchesSearch && matchesDept && matchesSup && matchesDom && matchesDes;
        });
    }, [search, department, supervisor, domain, designation]);

    return (
        <section className="py-20 bg-[#e6eef4] min-h-screen">
            <div className="container mx-auto px-4">

                {/* Filters */}
                <div className={styles.filterContainer}>
                    <div className={styles.filterBox}>
                        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                            <option value="">Filter by Department</option>
                            {departments.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className={styles.filterBox}>
                        <select value={supervisor} onChange={(e) => setSupervisor(e.target.value)}>
                            <option value="">Filter by Supervisor</option>
                            {supervisors.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div className={styles.filterBox}>
                        <select value={domain} onChange={(e) => setDomain(e.target.value)}>
                            <option value="">Filter by Domain</option>
                            {domains.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className={styles.filterBox}>
                        <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
                            <option value="">Filter by Designation</option>
                            {designations.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                </div>

                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search anything..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Table */}
                <div className={styles.tableWrapper}>
                    <table className={styles.fypTable} id="fypTable">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Department / Program</th>
                                <th>Project Code</th>
                                <th>Project Name</th>
                                <th>Mapped SDG</th>
                                <th>Tools & Technologies</th>
                                <th>Domain</th>
                                <th>Abstract / Description</th>
                                <th>Supervisor Name</th>
                                <th>Supervisor Designation</th>
                                <th>Student Names</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProjects.map((p, index) => (
                                <tr key={p.id}>
                                    <td>{index + 1}</td>
                                    <td>{p.department}</td>
                                    <td>{p.code}</td>
                                    <td>{p.name}</td>
                                    <td>{p.sdg}</td>
                                    <td>{p.tools}</td>
                                    <td>{p.domain}</td>
                                    <td><AbstractCell text={p.abstract} /></td>
                                    <td>{p.supervisor}</td>
                                    <td>{p.designation}</td>
                                    <td>{p.students}</td>
                                </tr>
                            ))}
                            {filteredProjects.length === 0 && (
                                <tr>
                                    <td colSpan={11} className="text-center py-4">No projects found matching your criteria.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}
