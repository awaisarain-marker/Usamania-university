'use client';

import React, { useEffect, useState } from 'react';

export default function StickyNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.6; // Show earlier than classic sticky
            setIsSticky(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Observer for Active State
        const sections = ['year-2026', 'year-2025', 'year-2024', 'year-2023', 'year-2022'];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    if (!isSticky) return null;

    const navItems = [
        { id: 'year-2026', label: '2026' },
        { id: 'year-2025', label: '2025' },
        { id: 'year-2024', label: '2024' },
        { id: 'year-2023', label: '2023' },
        { id: 'year-2022', label: '2022' },
    ];

    return (
        <div className="fixed top-[88px] left-0 w-full z-[999] bg-white border-b border-gray-200 animate-fade-in-down shadow-sm">
            <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                <div className="flex items-center justify-center h-16 gap-6 min-w-max">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`
                                flex items-center gap-2 px-5 py-2 transition-all duration-300 text-sm font-bold uppercase whitespace-nowrap
                                ${activeSection === item.id
                                    ? 'bg-[#ed1c24] text-white'
                                    : 'text-[#002856] hover:text-[#ed1c24] hover:bg-gray-50'}
                            `}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.id);
                                if (element) {
                                    const headerOffset = 160;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                    // Update URL without jump
                                    history.pushState(null, '', `#${item.id}`);
                                    setActiveSection(item.id);
                                }
                            }}
                        >
                            <span>{item.label}</span>
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
