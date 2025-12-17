"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { client } from "@/sanity/lib/client";

interface HeaderSettings {
    logoUrl?: string;
    logo?: string;
    announcementText?: string;
    announcementLink?: string;
    announcementVisible?: boolean;
    applyNowText?: string;
    applyNowLink?: string;
    exploreText?: string;
}

// Default values (fallback if Sanity data not loaded)
const defaultSettings: HeaderSettings = {
    logoUrl: 'https://uitu.edu.pk/wp-content/uploads/2023/12/logo_with_text_final__6_-removebg-preview.png',
    announcementText: 'Admission Open Springs 2026!',
    announcementLink: 'https://eduboard.uit.edu/AdmissionPortal/Login',
    announcementVisible: true,
    applyNowText: 'Apply Now',
    applyNowLink: '/admission',
    exploreText: 'Explore',
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [settings, setSettings] = useState<HeaderSettings>(defaultSettings);
    const pathname = usePathname();

    // Force dark header (white background, dark text) on blog & event pages
    const isDarkHeader = isScrolled || pathname?.startsWith('/uit-today') || pathname?.startsWith('/events');

    // Fetch header settings from Sanity
    useEffect(() => {
        async function fetchSettings() {
            try {
                const data = await client.fetch(`
                    *[_type == "headerSettings"][0] {
                        logoUrl,
                        "logo": logo.asset->url,
                        announcementText,
                        announcementLink,
                        announcementVisible,
                        applyNowText,
                        applyNowLink,
                        exploreText
                    }
                `);
                console.log('Sanity Header Settings:', data);
                if (data) {
                    setSettings({ ...defaultSettings, ...data });
                }
            } catch (error) {
                console.error('Error fetching header settings:', error);
            }
        }
        fetchSettings();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use logo URL or uploaded logo
    const logoSrc = settings.logoUrl || settings.logo || defaultSettings.logoUrl;

    return (
        <>
            <header className={`site-header fixed top-0 left-0 w-full transition-all duration-300 z-[9999] px-4 md:px-8 lg:px-8 py-4 lg:py-5 ${isDarkHeader ? 'bg-white border-b border-gray-200' : 'bg-transparent'}`}>
                <nav className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center transition-all duration-300 ease-in-out w-[150px] md:w-[140px] lg:w-[clamp(160px, 0vw, 491px)]"
                            aria-label="company logo that leads to home page"
                        >
                            <img
                                src={logoSrc}
                                alt="UIT University"
                                width={491}
                                height={52}
                                className={`max-w-full h-auto transition-all duration-300 ease-in-out ${isDarkHeader ? '' : 'brightness-0 invert'}`}
                            />
                        </Link>
                    </div>

                    {/* Right: Navigation Items */}
                    <div className="flex items-center justify-end flex-1">
                        {/* Admission Open / Announcement Button */}
                        {settings.announcementVisible !== false && (
                            <Link
                                href={settings.announcementLink || defaultSettings.announcementLink!}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`hidden lg:flex items-center justify-center h-11 xl:h-[50px] px-4 xl:px-6 ml-4 lg:ml-[clamp(15px,4rem,25px)] mr-auto text-sm xl:text-base font-bold transition-all duration-300 ease-in-out uppercase tracking-wide relative overflow-hidden group ${isDarkHeader
                                    ? 'text-white bg-[#ed1c24] hover:bg-[#c41219]'
                                    : 'text-white bg-[#ed1c24] hover:bg-[#c41219]'
                                    }`}
                            >
                                <span className="relative z-10 whitespace-nowrap">
                                    {settings.announcementText || defaultSettings.announcementText}
                                </span>
                                {/* Animation Effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] animate-[shimmer_2s_infinite] skew-x-12" />
                                <span className="absolute inset-0 border-2 border-white/50 animate-pulse rounded-sm" />
                            </Link>
                        )}

                        {/* Language Switcher */}
                        <div className={`hidden lg:flex items-center ml-2 relative transition-all duration-300 ease-in-out whitespace-nowrap ${isDarkHeader ? 'text-[#002856]' : 'text-white'}`}>
                            <Globe className="w-6 h-6 mr-2" aria-hidden="true" />
                            <span className="font-medium">EN</span>
                        </div>

                        {/* Search */}
                        <div className="hidden lg:flex items-center relative ml-2.5">
                            {/* Search Form - Expands to push content */}
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isSearchOpen ? 'w-[250px] opacity-100' : 'w-0 opacity-0'}`}>
                                <form
                                    method="GET"
                                    action="/"
                                    className="h-full w-full flex items-center"
                                >
                                    <label className="h-full w-full block m-0">
                                        <span className="sr-only">Search for:</span>
                                        <input
                                            type="text"
                                            name="s"
                                            placeholder="Search..."
                                            className="h-10 lg:h-11 xl:h-[50px] w-full px-4 border-none text-base text-black bg-white focus:outline-none placeholder:text-gray-500 rounded-none"
                                            autoFocus={isSearchOpen}
                                        />
                                    </label>
                                </form>
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className={`flex items-center justify-center h-10 w-10 lg:h-11 lg:w-11 xl:h-[50px] xl:w-[50px] bg-transparent border-0 transition-all duration-300 ease-in-out p-2 z-10 ${isDarkHeader ? 'text-[#002856]' : 'text-white'}`}
                                aria-label={isSearchOpen ? "Close Search" : "Open Search"}
                            >
                                {isSearchOpen ? (
                                    <X className="w-5 h-5" aria-hidden="true" />
                                ) : (
                                    <Search className="w-5 h-5" aria-hidden="true" />
                                )}
                            </button>
                        </div>

                        {/* Apply Now Button */}
                        <Link
                            href={settings.applyNowLink || defaultSettings.applyNowLink!}
                            className="hidden md:flex items-center justify-center h-11 xl:h-[50px] px-4 xl:px-6 ml-2.5 bg-[#ed1c24] text-white text-sm xl:text-base font-bold border border-[#ed1c24] hover:bg-red-700 transition-all duration-300 ease-in-out uppercase tracking-wide"
                        >
                            {settings.applyNowText || defaultSettings.applyNowText}
                        </Link>

                        {/* Explore/Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`flex items-center justify-center h-11 xl:h-[50px] px-4 xl:px-6 ml-2.5 cursor-pointer transition-all duration-300 ease-in-out ${isDarkHeader ? 'border border-[#005092] bg-[#005092] text-white hover:bg-[#003c6e]' : 'border border-white bg-white text-[#005092] hover:bg-gray-100'}`}
                            aria-label="Open extended menu"
                            aria-expanded={isMenuOpen}
                        >
                            <Menu className="w-[19px] mr-0 md:mr-2.5 mb-0.5" aria-hidden="true" />
                            <span className="hidden md:inline uppercase text-sm xl:text-base font-normal tracking-wide">
                                {settings.exploreText || defaultSettings.exploreText}
                            </span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Full Screen Navigation Menu - Replaced by MegaMenu */}
            <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
