'use client';

import { useState, useEffect } from 'react';

export default function StickyNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('academics');

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const heroHeight = 500; // Approximate hero height
            setIsSticky(offset > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        // Build the observer threshold based on device height
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe sections
        const sections = [
            'academics',
            'admission-information',
            'faqs',
            'how-to-apply',


            'fee-structure',
            'fee-refund-policy',

            'admission-test-results',
            'outreach-programs'
        ];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    if (!isSticky) return null;

    const navItems = [
        { id: 'academics', label: 'UIT Academics' },
        { id: 'admission-information', label: 'Admission Information' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'how-to-apply', label: 'How to Apply' },


        { id: 'fee-structure', label: 'Fee Structure' },
        { id: 'fee-refund-policy', label: 'Fee Refund Policy' },

        { id: 'admission-test-results', label: 'Admission Test Results' },
        { id: 'outreach-programs', label: 'Outreach Programs' }
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Height of sticky nav + buffer
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Manually set active section for immediate feedback
            setActiveSection(id);

            // Update URL hash without jumping
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div className="fixed top-[88px] left-0 w-full z-[999] bg-white border-b border-gray-200 animate-fade-in-down transition-all duration-300 shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between">
                    <ul className="flex flex-wrap gap-x-1 items-center sticky-nav-list p-2">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    className={`
                                        block px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-300
                                        ${activeSection === item.id
                                            ? 'bg-[#ed1c24] text-white shadow-md transform -translate-y-0.5'
                                            : 'text-gray-600 hover:text-[#ed1c24] hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="/apply" className="hidden md:flex items-center gap-2 bg-[#ed1c24] text-white px-6 py-2 text-sm font-bold uppercase hover:bg-[#002856] transition-colors duration-300">
                        <span>Apply Now</span>
                        <svg width="16" height="16" className="icon" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
