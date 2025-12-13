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
                    <Link href="/academics" className="btn-secondary --red --border --arrow ma-margin-right">
                        <span>Academics</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                    </Link>
                    <Link href="/admissions/" className="btn-secondary --border --transparent --arrow">
                        <span>How to apply</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                    </Link>
                </div>

                {/* Text Groups */}
                <div className="hero__groups-list">
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>US + EU</p>
                        </div>
                        <p className="text-bold">diploma</p>
                    </div>
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>40+</p>
                        </div>
                        <p className="text-bold">nationalities represented on campus </p>
                    </div>
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>Liberal Arts</p>
                        </div>
                        <p className="text-bold">education</p>                    </div>
                    <div className="hero__groups-item">
                        <div className="section-title text-white">
                            <p>#1</p>
                        </div>
                        <p className="text-bold">in career success</p>
                    </div>
                </div>

                <div className="hero__list">
                    <a href="https://www.aubg.edu/admissions/bachelors/study-in-europe/" className="hero__item" aria-label="Study in Europe">
                        <div className="hero__item-content">
                            <p className="font-secondary text-small text-bold">Study in Europe</p>
                            <p className="font-secondary text-tiny">Graduate with a U.S. Degree</p>
                            <span className="btn-link --red --small">
                                Learn more
                                <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use href="#arrow-top-right"></use></svg>
                            </span>
                        </div>
                    </a>
                    <a href="https://www.aubg.edu/blagoevgrad-and-bulgaria/" className="hero__item" aria-label="Your European Home Away from Home">
                        <div className="hero__item-img">
                            <figure className="hero__item-img-wrap">
                                <img className="image lazy loaded" alt="Life in Blagoevgrad, Bulgaria, and Beyond Thumb Image" width="96" height="69" src="https://www.aubg.edu/wp-content/uploads/2022/08/Blagoevgrad-96x69.jpg" />
                            </figure>
                        </div>
                        <div className="hero__item-content">
                            <p className="font-secondary text-small text-bold">Your European Home Away from Home</p>
                            <p className="font-secondary text-tiny">Your European Home Away from Home</p>
                            <span className="btn-link --red --small">
                                Explore our location
                                <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use href="#arrow-top-right"></use></svg>
                            </span>
                        </div>
                    </a>
                    <a href="https://www.aubg.edu/admissions/bachelors/cost-aid/loans/loans-for-u-s-students/" className="hero__item" aria-label="FAFSA">
                        <div className="hero__item-img">
                            <figure className="hero__item-img-wrap">
                                <img className="image lazy loaded" alt="Loans for U.S. Students Thumb Image" width="96" height="69" src="https://www.aubg.edu/wp-content/uploads/2022/04/about-hero-background-96x69.jpg" />
                            </figure>
                        </div>
                        <div className="hero__item-content">
                            <p className="font-secondary text-small text-bold">FAFSA</p>
                            <p className="font-secondary text-tiny">Federal Direct Loans</p>
                            <span className="btn-link --red --small">
                                Discover here
                                <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use href="#arrow-top-right"></use></svg>
                            </span>
                        </div>
                    </a>
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
