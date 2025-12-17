import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__media">
                <video className="jsHomeVideo hero__video lazy video loaded" autoPlay muted loop playsInline poster="" src="https://www.aubg.edu/wp-content/uploads/2022/10/campus-tour.mp4" id="html5_video_r7pbe8hd22a">
                    <source type="video/mp4" src="https://www.aubg.edu/wp-content/uploads/2022/10/campus-tour.mp4" />
                    <source type="video/ogg" src="https://www.aubg.edu/wp-content/uploads/2022/10/campus-tour.mp4" />
                    <source type="video/mp4" src="https://www.aubg.edu/wp-content/uploads/2022/10/campus-tour.mp4" />
                </video>
            </div>

            <div className="container">
                <div className="hero__content">
                    <div className="page-title">
                        <h1>Expand your world, <span className="block">shape its future</span></h1>
                    </div>
                    <Link href="/admission" className="btn-secondary --red --border --arrow ma-margin-right">
                        <span>Admission</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                    </Link>
                    <Link href="/admission#how-to-apply" className="btn-secondary --border --transparent --arrow">
                        <span>How to apply</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                    </Link>
                </div>

                {/* Text Groups */}
                <div className="hero__groups-list">
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>Global Standards</p>
                        </div>
                        <p className="text-bold">delivered in Pakistan</p>
                    </div>
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>5+</p>
                        </div>
                        <p className="text-bold">nationalities represented on campus </p>
                    </div>
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>Education</p>
                        </div>
                        <p className="text-bold">Relevant, modern learning</p>                    </div>
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>#1</p>
                        </div>
                        <p className="text-bold">in career success</p>
                    </div>
                </div>

                <div className="hero__list">
                    <Link href="/merl" className="hero__item" aria-label="MERL">
                        <div className="hero__item-content">
                            <p className="font-secondary text-small text-bold">MERL</p>
                            <p className="font-secondary text-tiny">Medical Engineering Research Lab</p>
                            <span className="btn-link --red --small">
                                Learn more
                                <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use href="#arrow-top-right"></use></svg>
                            </span>
                        </div>
                    </Link>
                    <Link href="/final-year-projects" className="hero__item" aria-label="Final Year Projects">
                        <div className="hero__item-img">
                            <figure className="hero__item-img-wrap">
                                <img className="image lazy loaded" alt="FYP Thumbnail" width="96" height="69" src="https://www.aubg.edu/wp-content/uploads/2022/08/Blagoevgrad-96x69.jpg" />
                            </figure>
                        </div>
                        <div className="hero__item-content">
                            <p className="font-secondary text-small text-bold">Final Year Projects</p>
                            <p className="font-secondary text-tiny">Innovative Student Projects</p>
                            <span className="btn-link --red --small">
                                Explore Projects
                                <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use href="#arrow-top-right"></use></svg>
                            </span>
                        </div>
                    </Link>
                    <Link href="/students#scholarship" className="hero__item" aria-label="Scholarship">
                        <div className="hero__item-img">
                            <figure className="hero__item-img-wrap">
                                <img className="image lazy loaded" alt="Scholarship Thumbnail" width="96" height="69" src="https://www.aubg.edu/wp-content/uploads/2022/04/about-hero-background-96x69.jpg" />
                            </figure>
                        </div>
                        <div className="hero__item-content">
                            <p className="font-secondary text-small text-bold">Scholarship</p>
                            <p className="font-secondary text-tiny">Financial Aid Opportunities</p>
                            <span className="btn-link --red --small">
                                Discover here
                                <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use href="#arrow-top-right"></use></svg>
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="hero__scroll">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-scroll text-white">
                        <rect x="5" y="2" width="14" height="20" rx="7" />
                        <path d="M12 6v4" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
