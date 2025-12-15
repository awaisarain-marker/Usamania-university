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

        let element = document.getElementById(id);
        // If the specific section ID isn't found, check if it's a tab inside the admission-info container
        if (!element) {
            const container = document.getElementById('admission-info');
            if (container) {
                element = container;
            }
        }

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
            // Dispatch hashchange event so LeadershipSection (tabs) can react
            window.dispatchEvent(new Event('hashchange'));
        }
    };

    return (
        <div className="fixed top-[88px] left-0 w-full z-[999] bg-white border-b border-gray-200 animate-fade-in-down transition-all duration-300">
            <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                <div className="flex items-center justify-start md:justify-center h-16 gap-2 md:gap-4 min-w-max">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleNavClick(e, item.id)}
                            className={`
                                flex items-center gap-2 px-5 py-2 transition-all duration-300 text-sm font-bold uppercase whitespace-nowrap
                                ${activeSection === item.id
                                    ? 'bg-[#ed1c24] text-white'
                                    : 'text-[#002856] hover:text-[#ed1c24] hover:bg-gray-50'
                                }
                            `}
                        >
                            <span>{item.label}</span>
                            {activeSection === item.id && (
                                <svg width="20" height="20" className="w-5 h-5 fill-current" aria-hidden="true" role="img">
                                    <use xlinkHref="#arrow"></use>
                                </svg>
                            )}
                        </a>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.3s ease-out forwards;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
