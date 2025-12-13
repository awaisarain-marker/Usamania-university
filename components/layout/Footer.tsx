'use client';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactInfo = [
        {
            title: "AUBG Main Building",
            address: "1 Georgi Izmirliev Sq., 2700 Blagoevgrad",
            phone: null
        },
        {
            title: "English Language Courses",
            address: "1 Georgi Izmirliev Sq., 2700 Blagoevgrad",
            phone: "+359 73 888 555"
        },
        {
            title: "AUBG Skaptopara Campus",
            address: "4 - 12 Svoboda Bachvarova St., 2700 Blagoevgrad",
            phone: "+359 73 888 111"
        },
        {
            title: "Elieff Center for Education and Culture",
            address: "1 Universitetski Park St., 1700 Sofia",
            phone: null
        }
    ];

    const socialLinks = [
        { href: "https://www.tiktok.com/@aubg_edu", icon: "https://www.aubg.edu/wp-content/uploads/2022/03/tiktok.svg", alt: "TikTok" },
        { href: "https://www.instagram.com/aubg_edu/", icon: "https://www.aubg.edu/wp-content/uploads/2022/08/instagram.svg", alt: "Instagram" },
        { href: "https://www.facebook.com/AUBGcurious", icon: "https://www.aubg.edu/wp-content/uploads/2022/03/facebook.svg", alt: "Facebook" },
        { href: "https://www.linkedin.com/edu/10427", icon: "https://www.aubg.edu/wp-content/uploads/2022/03/linkedin.svg", alt: "LinkedIn" },
        { href: "https://www.youtube.com/user/AUBG1991", icon: "https://www.aubg.edu/wp-content/uploads/2022/03/youtube.svg", alt: "YouTube" }
    ];

    const footerMenuItems = [
        { href: "/staff-and-faculty-members/", label: "Contact us" },
        { href: "/careers/", label: "Careers at AUBG" },
        { href: "/open-tenders/", label: "Open Tenders" },
        { href: "/privacy-notices/", label: "Privacy Notices" }
    ];

    return (
        <footer className="site-footer" role="contentinfo">
            {/* Scroll to Top Button */}
            <div className="scroll-top container active">
                <div className="scroll-top__item" onClick={scrollToTop}>
                    <svg width="25" height="25" className="icon icon-scroll-top scroll-top__icon" aria-hidden="true" role="img">
                        <use xlinkHref="#icon-scroll-top"></use>
                    </svg>
                </div>
            </div>

            {/* Footer Top Content */}
            <div className="footer-top">
                <div className="inner-frame">
                    <div className="row">
                        {/* Left Column - Info & Socials */}
                        <div className="col col-4 footer-top__info">
                            <div className="footer-top__title-top">
                                <p className="text-blue">Pakistan University in Karachi</p>
                            </div>
                            <div className="footer-top__title">
                                <p className="text-blue">Expand your world</p>
                            </div>
                            <div className="footer-top__copyright mb-6">
                                <p className="text-blue">Copyright 2025. All rights reserved.</p>
                            </div>

                            {/* Social Icons moved here */}
                            <div className="socials socials-footer !justify-start">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="social-link"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label={social.alt}
                                    >
                                        <img
                                            width="33"
                                            height="33"
                                            alt={social.alt}
                                            className="social-icon"
                                            src={social.icon}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Grid of Menus & Contact */}
                        <div className="col w-full lg:w-2/3 pl-0 lg:pl-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {/* Column 1: Locations (Existing Contact Info) */}
                                <div className="footer-section">
                                    <h3 className="text-blue font-bold text-xl mb-6 uppercase">Locations</h3>
                                    {contactInfo.map((contact, index) => (
                                        <div key={index} className="mb-6">
                                            <p className="text-blue font-bold text-lg mb-1">{contact.title}</p>
                                            <p className="text-blue text-sm mb-1">{contact.address}</p>
                                            {contact.phone && (
                                                <a href={`tel:${contact.phone}`} className="text-blue font-bold text-sm hover:text-blue transition-colors">{contact.phone}</a>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Column 2: Admissions & Academics */}
                                <div className="footer-section">
                                    <div className="mb-8">
                                        <h3 className="text-blue font-bold text-xl mb-6 uppercase">Admissions</h3>
                                        <ul className="space-y-3">
                                            <li><a href="/admissions/undergraduate" className="text-blue hover:text-blue transition-colors">Undergraduate</a></li>
                                            <li><a href="/admissions/graduate" className="text-blue hover:text-blue transition-colors">Graduate</a></li>
                                            <li><a href="/admissions/tuition-and-aid" className="text-blue hover:text-blue transition-colors">Tuition & Aid</a></li>
                                            <li><a href="/admissions/visit" className="text-blue hover:text-blue transition-colors">Visit Campus</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-blue font-bold text-xl mb-6 uppercase">Academics</h3>
                                        <ul className="space-y-3">
                                            <li><a href="/academics/majors" className="text-blue hover:text-blue transition-colors">Majors & Minors</a></li>
                                            <li><a href="/academics/faculty" className="text-blue hover:text-blue transition-colors">Faculty</a></li>
                                            <li><a href="/academics/calendar" className="text-blue hover:text-blue transition-colors">Academic Calendar</a></li>
                                            <li><a href="/library" className="text-blue hover:text-blue transition-colors">Library</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Column 3: Quick Links & Student Life */}
                                <div className="footer-section">
                                    <div className="mb-8">
                                        <h3 className="text-blue font-bold text-xl mb-6 uppercase">Quick Links</h3>
                                        <ul className="space-y-3">
                                            {footerMenuItems.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.href} className="text-blue hover:text-blue transition-colors">{item.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-blue font-bold text-xl mb-6 uppercase">Student Life</h3>
                                        <ul className="space-y-3">
                                            <li><a href="/student-life/housing" className="text-blue hover:text-blue transition-colors">Housing & Dining</a></li>
                                            <li><a href="/student-life/clubs" className="text-blue hover:text-blue transition-colors">Clubs & Activities</a></li>
                                            <li><a href="/student-life/health" className="text-blue hover:text-blue transition-colors">Health & Wellness</a></li>
                                            <li><a href="/student-life/career-center" className="text-blue hover:text-blue transition-colors">Career Center</a></li>
                                        </ul>
                                    </div>

                                    <div className="mt-8 text-sm">
                                        <a
                                            href="https://digitalsilk.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue group"
                                        >
                                            <span>Web design by </span>
                                            <span className="font-bold underline group-hover:text-blue transition-colors">Digital Silk</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom - Campus Image */}
            <div className="footer-bottom">
                <img
                    className="image"
                    alt="Footer Background"
                    width="1920"
                    height="733"
                    src="https://www.aubg.edu/wp-content/uploads/2022/03/footer-front-bg.png"
                />
            </div>
        </footer>
    );
}
