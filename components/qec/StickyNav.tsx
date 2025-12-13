'use client';

import React, { useEffect, useState } from 'react';

export default function StickyNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            // Threshold: Height of hero to clear (approx 600px - 800px depending on screen)
            // Or simpler: Check if the hero CTA list is out of view. 
            // Better yet, just check scroll Y.
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
        // Intersection Observer for Active State
        const sections = [
            'introduction',
            'vision',
            'mission',
            'objectives',
            'activity-calendars',
            'leadership-section'
        ];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Active when near top-center
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

        // Special handling for Tabs Section (LeadershipSection)
        // If we are scrolling in the tabs area, we might want to highlight the active tab based on what was clicked, 
        // OR simply highlight based on scroll if the previous elements are out of view?
        // Actually, since they are tabs, they are all in one spot. 
        // So 'Organogram', 'Team', 'Policies' share the same scroll area roughly.
        // We will just listen to hash change for those, or check if the generic 'tabs-section' is in view.
        // For now, let's rely on standard ID observation. If the tabs don't have IDs on the wrapper that correspond, we might need to add them.

        return () => observer.disconnect();
    }, []);



    if (!isSticky) return null;

    const navItems = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'vision', label: 'Vision' },
        { id: 'mission', label: 'Mission' },
        { id: 'objectives', label: 'Objectives' },
        { id: 'activity-calendars', label: 'Activity Calendars' },
        { id: 'Organogram', label: 'Organogram' }, // IDs match the Tab IDs used in hash
        { id: 'Team', label: 'QEC Team' },
        { id: 'Policies', label: 'UITU Policies' },
    ];

    return (
        <div className="fixed top-[88px] left-0 w-full z-[999] bg-white border-b border-gray-200 animate-fade-in-down transition-all duration-300">
            <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                <div className="flex items-center justify-start md:justify-center h-16 gap-2 md:gap-4 min-w-max">
                    {navItems.map((item) => {
                        // Logic: 
                        // 1. If it's a standard scroll section (Intro..Activities), use Intersection API (activeSection)
                        // 2. If it's a Tab (Organogram..Policies), use the Hash (currentHash) primarily, 
                        //    BUT only if we are roughly in the leadership section area? 
                        //    Actually, simple priority: If Hash matches a tab, highlight that tab. 
                        //    If no Tab hash, rely on scroll.

                        const isTab = ['Organogram', 'Team', 'Policies'].includes(item.id);
                        let isActive = false;

                        if (isTab) {
                            // If the URL hash matches this tab explicitly
                            if (currentHash.toLowerCase() === item.id.toLowerCase()) {
                                isActive = true;
                            }
                        } else {
                            isActive = activeSection === item.id;
                        }

                        // Override: If the active scroll section is "leadership-section" (which we will add id for),
                        // and the hash corresponds to one of the tabs, keep that tab active.
                        // If hash is empty but we are in leadership section, maybe highlight Organogram (first tab)?
                        if (activeSection === 'leadership-section' && isTab) {
                            if (currentHash.toLowerCase() === item.id.toLowerCase()) isActive = true;
                            if (!currentHash && item.id === 'Organogram') isActive = true; // Default
                        }

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
                                    // Let default behavior happen (hash update + scroll)
                                    // setActiveSection might flash, so we rely on hash loop
                                    if (!isTab) setActiveSection(item.id);
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

// Note: For the tabs (Organogram, Team, Policies) to trigger the intersection correctly,
// they need to be treated carefully since they are in the same physical space (Tabs).
// A better approach for tabs is: IF the viewport is at the "LeadershipSection",
// THEN the *Active Tab* is the one highlighted.
// But StickyNav is usually for scrolling *to* sections.
// If I click "Team", it scrolls to headers and switches tab. 
