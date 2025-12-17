'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactInfo = [
        {
            title: "UIT University",
            address: "ST-13, Block 7, Gulshan-e-Iqbal, Abul Hasan Isphahani Road, Off Main University Road, Karachi – 75300",
            email: "info@uitu.edu.pk",
            phone: null,
            uan: "(92-21) 111-978-275, 34994305, 34978274-5",
            admissions: "0333-0399113"
        }
    ];

    const socialLinks = [
        { href: "https://www.facebook.com/UITUniversityOfficial", icon: Facebook, alt: "Facebook" },
        { href: "https://x.com/UITUniversity?t=D7cpW-xoK5evI43-SWdnDw&s=09", icon: Twitter, alt: "X (Twitter)" },
        { href: "https://www.linkedin.com/school/uitu/", icon: Linkedin, alt: "LinkedIn" },
        { href: "https://www.instagram.com/invites/contact/?i=injsg9prvu9k&utm_content=2pjgkg6", icon: Instagram, alt: "Instagram" }
    ];

    const footerMenuItems = [
        { href: "/staff-and-faculty-members/", label: "Contact us" },
        { href: "/careers/", label: "Careers at UIT" },
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
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="social-link"
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                            aria-label={social.alt}
                                        >
                                            <Icon className="social-icon text-[#002856] hover:text-[#ed1c24] transition-colors" size={33} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side - Grid of Menus & Contact */}
                        <div className="col w-full lg:w-2/3 pl-0 lg:pl-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {/* Column 1: Locations (Existing Contact Info) */}
                                <div className="footer-section col-span-2">
                                    <h3 className="text-blue font-bold text-xl mb-6 uppercase">Locations</h3>
                                    {contactInfo.map((contact, index) => (
                                        <div key={index} className="mb-6">
                                            <p className="text-blue font-bold text-lg mb-1">{contact.title}</p>
                                            <p className="text-blue text-sm mb-4 max-w-md">{contact.address}</p>

                                            {contact.email && (
                                                <p className="mb-1">
                                                    <a href={`mailto:${contact.email}`} className="text-blue text-sm hover:text-[#ed1c24] transition-colors">{contact.email}</a>
                                                </p>
                                            )}

                                            {contact.uan && (
                                                <p className="mb-1">
                                                    <span className="text-blue font-bold text-sm">UAN: </span>
                                                    <span className="text-blue text-sm">{contact.uan}</span>
                                                </p>
                                            )}

                                            {contact.admissions && (
                                                <p className="mb-1">
                                                    <span className="text-blue font-bold text-sm">Admissions: </span>
                                                    <a href={`tel:${contact.admissions}`} className="text-blue text-sm hover:text-[#ed1c24] transition-colors">{contact.admissions}</a>
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Column 3: Quick Links (Moved to replace unused cols) */}
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
                    src="https://ik.imagekit.io/byat8clceo/Web%20Footer.png"
                />
            </div>
        </footer>
    );
}
