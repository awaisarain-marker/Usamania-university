import React from 'react';
import Link from 'next/link';

const faculties = [
    {
        title: "Engineering & Technology",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg",
        link: "#engineering",
        alt: "Engineering & Technology Faculty",
    },
    {
        title: "Computing Sciences",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Symmer-Programs-480x338.jpg",
        // Using existing images as placeholders for now, as requested to replace "Academics"
        link: "/faculty/computing-sciences",
        alt: "Computing Sciences Faculty",
    },
    {
        title: "Management & Social Sciences",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Study-Abroad-480x366.jpg",
        link: "#management",
        alt: "Management & Social Sciences Faculty",
    },
];

export default function FacultyGrid() {
    return (
        <section className="academics-section section --center-v">
            <div className="container">
                <div className="row academics-section__list">
                    {/* Heading Column */}
                    <div className="col-4 academics-section__heading --center-v">
                        <div className="section-title">
                            <h2>Our <br /> Faculty</h2>
                        </div>
                        <div className="text-big">
                            <p>Distinguished educators driving innovation, research excellence, and student success across diverse disciplines.</p>
                        </div>
                    </div>

                    {/* Program Cards */}
                    {faculties.map((faculty, index) => (
                        <div key={index} className="col-4 academics-section__item">
                            <div className="academics-section__item-image">
                                <Link className="image-hover" href={faculty.link}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={faculty.image} alt={faculty.alt} />
                                </Link>
                            </div>
                            <div className="academics-section__item-title">
                                <h3><Link href={faculty.link}>{faculty.title}</Link></h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
