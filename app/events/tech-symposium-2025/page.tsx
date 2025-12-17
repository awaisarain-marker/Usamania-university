'use client';

import React from 'react';
import Link from 'next/link';
// Import shared EventsSection
import EventsSection from '@/components/home/EventsSection';

export default function TechSymposiumEventPage() {
    return (
        <div className="single-post-page">
            <section className="single-post__hero">
                <div className="single-post__container">
                    <div className="single-post__heading text-center">
                        <nav className="breadcrumbs">
                            <Link href="/" className="breadcrumbs__item text-small">
                                <span>Home</span>
                            </Link>
                            <span className="separator text-small"> / </span>
                            <Link href="/events" className="breadcrumbs__link text-small">
                                <span>Events</span>
                            </Link>
                            <span className="separator text-small"> / </span>
                            <span className="breadcrumbs__link text-bold text-small">
                                <span>
                                    UIT University Tech Symposium 2025
                                </span>
                            </span>
                        </nav>
                        <div className="page-title">
                            <h1 className="text-blue">UIT University Tech Symposium 2025: Innovation for Future</h1>
                        </div>
                        <div className="single-post__heading-tags">
                            <span>December 20, 2025</span>
                            <span> Main Auditorium </span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="single-post__wrap">
                <aside className="sidebar --fixed">
                    {/* Sticky Social */}
                    <div className="addtoany_shortcode">
                        <div className="a2a_kit a2a_kit_size_56 addtoany_list" data-a2a-title="UIT University Tech Symposium 2025" style={{ lineHeight: '56px' }}>
                            <a className="a2a_button_facebook" href="/#facebook" title="Facebook" rel="nofollow noopener" target="_blank">
                                <span className="a2a_svg a2a_s__default a2a_s_facebook" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#fff" d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"></path>
                                    </svg>
                                </span>
                                <span className="a2a_label">Facebook</span>
                            </a>
                            <a className="a2a_button_twitter" href="/#twitter" title="Twitter" rel="nofollow noopener" target="_blank">
                                <span className="a2a_svg a2a_s__default a2a_s_twitter" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#FFF" d="M28 8.557a10 10 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.7 9.7 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.94 4.94 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a5 5 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174q-.476-.001-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.114 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013q0-.32-.015-.637c.96-.695 1.795-1.56 2.455-2.55z"></path>
                                    </svg>
                                </span>
                                <span className="a2a_label">Twitter</span>
                            </a>
                            <a className="a2a_button_email" href="/#email" title="Email" rel="nofollow noopener" target="_blank">
                                <span className="a2a_svg a2a_s__default a2a_s_email" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path fill="#fff" d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z"></path>
                                    </svg>
                                </span>
                                <span className="a2a_label">Email</span>
                            </a>
                            <a className="a2a_dd addtoany_share_save addtoany_share" href="https://www.addtoany.com/share">
                                <span className="a2a_svg a2a_s__default a2a_s_a2a" style={{ backgroundColor: 'rgb(0, 80, 146)', width: '56px', lineHeight: '56px', height: '56px', backgroundSize: '56px', borderRadius: '8px' }}>
                                    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g fill="#FFF">
                                            <path d="M14 7h4v18h-4z"></path>
                                            <path d="M7 14h18v4H7z"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span className="a2a_label a2a_localize" data-a2a-localize="inner,Share">Share</span>
                            </a>
                        </div>
                    </div>
                </aside>

                <div className="container">
                    <div className="single-post__featured">
                        <figure className="image-wrap">
                            <img
                                className="image lazy loaded"
                                alt="UIT University Tech Symposium 2025"
                                width="1200"
                                height="780"
                                src="https://uitu.edu.pk/wp-content/uploads/2023/12/DSC04452.jpg"
                            />
                        </figure>
                    </div>

                    <div className="single-post__content-wrap">
                        <article className="single-post__content post type-post status-publish format-standard has-post-thumbnail hentry">
                            <p><strong>UIT University</strong> is proud to announce the upcoming <strong>Tech Symposium 2025</strong>, to be held at the Main Auditorium. This event will bring together industry leaders, innovators, and students to discuss the future of technology and engineering.</p>

                            <h2>About the Event</h2>
                            <p>The annual Tech Symposium is a flagship event that features keynote speeches, panel discussions, and project showcases. It provides a platform for students to demonstrate their final year projects and network with professionals from top tech companies.</p>

                            <p>Participants will have the opportunity to attend workshops on:
                                <ul>
                                    <li>Artificial Intelligence and Machine Learning</li>
                                    <li>Cybersecurity Trends in 2025</li>
                                    <li>Sustainable Energy Solutions</li>
                                    <li>IoT and Smart Cities</li>
                                </ul>
                            </p>

                            <section className="post-gallery">
                                <div className="post-gallery__image --half">
                                    <figure className="image-wrap">
                                        <img src="https://uitu.edu.pk/wp-content/uploads/2023/12/DSC04478.jpg" alt="Gallery 1" width="1200" height="780" />
                                    </figure>
                                </div>

                                <div className="post-gallery__image --half">
                                    <figure className="image-wrap">
                                        <img src="https://uitu.edu.pk/wp-content/uploads/2023/12/DSC04482.jpg" alt="Gallery 2" width="1200" height="780" />
                                    </figure>
                                </div>
                            </section>

                            <h2>Guest Speakers</h2>
                            <p>We are honored to host distinguished speakers including CEOs of leading tech startups and renowned researchers. They will share insights on emerging technologies and career advice for aspiring engineers.</p>

                            <h2>Registration</h2>
                            <p>Registration is open to all students and faculty. Please visit the student affairs office or register online through the portal. Early bird registration closes on December 10, 2025.</p>

                            <div className="single-post__tags">
                                <p className="text-small text-grey">Tags:</p>
                                <span className="single-post__tag">Technology</span>
                                <span className="single-post__tag">Innovation</span>
                                <span className="single-post__tag">Symposium</span>
                                <span className="single-post__tag">Events</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            {/* Related Events using the EventsSection layout */}
            <EventsSection title="Upcoming Events" />
        </div>
    );
}
