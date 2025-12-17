import Link from 'next/link';

interface HeroButton {
    text: string;
    link: string;
    style: 'red' | 'transparent';
}

interface HeroStat {
    value: string;
    label: string;
}

interface HeroQuickLink {
    title: string;
    subtitle: string;
    link: string;
    linkText: string;
    imageUrl?: string | null;
}

interface HeroProps {
    videoUrl?: string;
    title?: string;
    subtitle?: string;
    buttons?: HeroButton[];
    stats?: HeroStat[];
    quickLinks?: HeroQuickLink[];
}

export default function Hero({
    videoUrl = "https://www.aubg.edu/wp-content/uploads/2022/10/campus-tour.mp4",
    title = "Expand your world,",
    subtitle = "shape its future",
    buttons = [
        { text: "Admission", link: "/admission", style: "red" as const },
        { text: "How to apply", link: "/admission#how-to-apply", style: "transparent" as const }
    ],
    stats = [
        { value: "Global Standards", label: "delivered in Pakistan" },
        { value: "5+", label: "nationalities represented on campus" },
        { value: "Education", label: "Relevant, modern learning" },
        { value: "#1", label: "in career success" }
    ],
    quickLinks = [
        { title: "MERL", subtitle: "Medical Engineering Research Lab", link: "/merl", linkText: "Learn more", imageUrl: null },
        { title: "Final Year Projects", subtitle: "Innovative Student Projects", link: "/final-year-projects", linkText: "Explore Projects", imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/08/Blagoevgrad-96x69.jpg" },
        { title: "Scholarship", subtitle: "Financial Aid Opportunities", link: "/students#scholarship", linkText: "Discover here", imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/04/about-hero-background-96x69.jpg" }
    ]
}: HeroProps) {
    return (
        <section className="hero">
            <div className="hero__media">
                <video className="jsHomeVideo hero__video lazy video loaded" autoPlay muted loop playsInline poster="" src={videoUrl} id="html5_video_r7pbe8hd22a">
                    <source type="video/mp4" src={videoUrl} />
                    <source type="video/ogg" src={videoUrl} />
                    <source type="video/mp4" src={videoUrl} />
                </video>
            </div>

            <div className="container">
                <div className="hero__content">
                    <div className="page-title">
                        <h1>{title} <span className="block">{subtitle}</span></h1>
                    </div>
                    {buttons.map((button, index) => (
                        <Link
                            key={index}
                            href={button.link}
                            className={`btn-secondary ${button.style === 'red' ? '--red' : '--transparent'} --border --arrow ${index === 0 ? 'ma-margin-right' : ''}`}
                        >
                            <span>{button.text}</span>
                            <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                        </Link>
                    ))}
                </div>

                {/* Text Groups */}
                <div className="hero__groups-list">
                    {stats.map((stat, index) => (
                        <div key={index} className="hero__groups-item">
                            <div className="section-title text-white">
                                <p>{stat.value}</p>
                            </div>
                            <p className="text-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="hero__list">
                    {quickLinks.map((link, index) => (
                        <Link key={index} href={link.link} className="hero__item" aria-label={link.title}>
                            {link.imageUrl && (
                                <div className="hero__item-img">
                                    <figure className="hero__item-img-wrap">
                                        <img className="image lazy loaded" alt={`${link.title} Thumbnail`} width="96" height="69" src={link.imageUrl} />
                                    </figure>
                                </div>
                            )}
                            <div className="hero__item-content">
                                <p className="font-secondary text-small text-bold">{link.title}</p>
                                <p className="font-secondary text-tiny">{link.subtitle}</p>
                                <span className="btn-link --red --small">
                                    {link.linkText}
                                    <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use href="#arrow-top-right"></use></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
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
