'use client';

import React, { useEffect, useState } from 'react';

export default function StickyNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('overview');

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.8; // Approximate hero height
            setIsSticky(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        const handleHash = () => {
            setCurrentHash(window.location.hash.replace('#', ''));
        };
        window.addEventListener('hashchange', handleHash);
        handleHash(); // init
        return () => window.removeEventListener('hashchange', handleHash);
    }, []);

    useEffect(() => {
        const sections = [
            'registration',
            'short-courses',
            'workshop-seminar',
            'certificate-distribution'
        ];

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
        { id: 'registration', label: 'Registration' },
        { id: 'short-courses', label: 'Short Courses' },
        { id: 'workshop-seminar', label: 'Workshop / Seminar' },
        { id: 'certificate-distribution', label: 'Certificate Distribution' }
    ];

    return (
        <div className="fixed top-[88px] left-0 w-full z-[999] bg-white border-b border-gray-200 animate-fade-in-down transition-all duration-300">
            <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                <div className="flex items-center justify-start md:justify-center h-16 gap-2 md:gap-4 min-w-max">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`
                                    flex items-center gap-2 px-5 py-2 transition-all duration-300 text-sm font-bold uppercase whitespace-nowrap
                                    ${isActive
                                        ? 'bg-[#ed1c24] text-white'
                                        : 'text-[#002856] hover:text-[#ed1c24] hover:bg-gray-50'}
                                `}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(item.id);
                                    if (element) {
                                        const headerOffset = 156; // 88px (header) + 64px (nav)
                                        const elementPosition = element.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.scrollY - headerOffset;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });

                                        history.pushState(null, '', `#${item.id}`);
                                        window.dispatchEvent(new Event('hashchange'));
                                        setCurrentHash(item.id);
                                        setActiveSection(item.id);
                                    }
                                }}
                            >
                                <span>{item.label}</span>
                                {isActive && (
                                    <svg width="20" height="20" className="w-5 h-5 fill-current" aria-hidden="true" role="img">
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                )}
                            </a>
                        );
                    })}
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
