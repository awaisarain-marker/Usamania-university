'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getFooter } from '@/sanity/lib/queries';

export default function Footer() {
    const [footerData, setFooterData] = useState<any>(null);

    useEffect(() => {
        async function fetchFooter() {
            try {
                const data = await getFooter();
                if (data) {
                    setFooterData(data);
                }
            } catch (error) {
                console.error('Error fetching footer data:', error);
            }
        }
        fetchFooter();
    }, []);

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 500px (header/banner height)
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Fallback data
    const defaultContactInfo = {
        title: "UIT University",
        address: "ST-13, Block 7, Gulshan-e-Iqbal, Abul Hasan Isphahani Road, Off Main University Road, Karachi – 75300",
        email: "info@uitu.edu.pk",
        phone: null,
        uan: "(92-21) 111-978-275, 34994305, 34978274-5",
        admissions: "0333-0399113"
    };

    const defaultSocialLinks = [
        { href: "https://www.facebook.com/UITUniversityOfficial", icon: Facebook, alt: "Facebook" },
        { href: "https://x.com/UITUniversity?t=D7cpW-xoK5evI43-SWdnDw&s=09", icon: Twitter, alt: "X (Twitter)" },
        { href: "https://www.linkedin.com/school/uitu/", icon: Linkedin, alt: "LinkedIn" },
        { href: "https://www.instagram.com/invites/contact/?i=injsg9prvu9k&utm_content=2pjgkg6", icon: Instagram, alt: "Instagram" }
    ];

    const defaultFooterMenuItems = [
        { href: "/staff-and-faculty-members/", label: "Contact us" },
        { href: "/careers/", label: "Careers at UIT" },
        { href: "/events/", label: "Events" },
        { href: "/open-tenders/", label: "Open Tenders" },
        { href: "/privacy-notices/", label: "Privacy Notices" }
    ];

    // Use Sanity data or fallback
    const contact = footerData?.contactInfo || defaultContactInfo;
    const copyright = footerData?.copyrightText || "Copyright 2025. All rights reserved.";
    const universityDescription = footerData?.universityDescription || "Pakistan University in Karachi";
    const slogan = footerData?.slogan || "Expand your world";
    // Priority: Uploaded Image > URL > Default
    const bgImage = footerData?.footerImage || footerData?.footerImageUrl || "https://ik.imagekit.io/byat8clceo/Web%20Footer.png";

    // Process social links (map platform names to icons if needed, or just use generic)
    const getSocialIcon = (platform: string) => {
        switch (platform?.toLowerCase()) {
            case 'facebook': return Facebook;
            case 'twitter': return Twitter;
            case 'linkedin': return Linkedin;
            case 'instagram': return Instagram;
            default: return Facebook;
        }
    };

    const socialLinks = footerData?.socialLinks?.map((link: any) => ({
        href: link.url,
        icon: getSocialIcon(link.platform),
        alt: link.platform
    })) || defaultSocialLinks;

    const quickLinks = footerData?.quickLinks || defaultFooterMenuItems;

    return (
        <footer className="site-footer" role="contentinfo">
            {/* Scroll to Top Button - Moved to Left */}
            <div
                className={`scroll-top ${showScrollTop ? 'active' : ''}`}
                style={{
                    right: 'auto',  // Unset right
                    left: '30px',   // Move to left
                    bottom: '30px', // Ensure consistent bottom spacing
                    zIndex: 9999    // Stay on top
                }}
            >
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
                                <p className="text-blue">{universityDescription}</p>
                            </div>
                            <div className="footer-top__title">
                                <p className="text-blue">{slogan}</p>
                            </div>
                            <div className="footer-top__copyright mb-6">
                                <p className="text-blue">{copyright}</p>
                            </div>

                            {/* Social Icons moved here */}
                            <div className="socials socials-footer !justify-start">
                                {socialLinks.map((social: any, index: number) => {
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
                                    <div className="mb-6">
                                        <p className="text-blue font-bold text-lg mb-1">{contact.title}</p>
                                        <p className="text-blue text-sm mb-4 max-w-md">{contact.address}</p>

                                        {contact.email && (
                                            <p className="mb-1">
                                                <a href={`mailto:${contact.email}`} className="text-blue text-sm hover:text-[#ed1c24] transition-colors">{contact.email}</a>
                                            </p>
                                        )}

                                        {contact.phone && (
                                            <p className="mb-1">
                                                <span className="text-blue font-bold text-sm">Phone: </span>
                                                <a href={`tel:${contact.phone}`} className="text-blue text-sm hover:text-[#ed1c24] transition-colors">{contact.phone}</a>
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
                                </div>

                                {/* Column 3: Quick Links (Moved to replace unused cols) */}
                                <div className="footer-section">
                                    <div className="mb-8">
                                        <h3 className="text-blue font-bold text-xl mb-6 uppercase">Quick Links</h3>
                                        <ul className="space-y-3">
                                            {quickLinks.map((item: any, index: number) => (
                                                <li key={index}>
                                                    <a href={item.url || item.href} className="text-blue hover:text-blue transition-colors">{item.label}</a>
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
                    src={bgImage}
                />
            </div>
        </footer>
    );
}
