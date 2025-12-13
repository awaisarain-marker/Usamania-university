"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`site-header fixed top-0 left-0 w-full transition-all duration-300 z-[9999] px-4 md:px-8 lg:px-8 py-4 lg:py-5 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <nav className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center transition-all duration-300 ease-in-out w-[150px] md:w-[140px] lg:w-[clamp(160px, 0vw, 491px)]"
                            aria-label="company logo that leads to home page"
                        >
                            <img
                                src="https://uitu.edu.pk/wp-content/uploads/2023/12/logo_with_text_final__6_-removebg-preview.png"
                                alt="AUBG"
                                width={491}
                                height={52}
                                className={`max-w-full h-auto transition-all duration-300 ease-in-out ${isScrolled ? '' : 'brightness-0 invert'}`}
                            />
                        </Link>
                    </div>

                    {/* Right: Navigation Items */}
                    <div className="flex items-center justify-end flex-1">
                        {/* Language Switcher */}
                        <div className={`hidden lg:flex items-center ml-4 lg:ml-[clamp(15px,4rem,25px)] mr-auto relative transition-colors duration-300 ${isScrolled ? 'text-[#002856]' : 'text-white'}`}>
                            <Globe className="w-6 h-6 mr-2" aria-hidden="true" />
                            <div className="relative">
                                <button
                                    onClick={() => setIsLangOpen(!isLangOpen)}
                                    className={`hover:opacity-80 transition-opacity ${isScrolled ? 'text-[#002856]' : 'text-white'}`}
                                >
                                    <span>EN</span>
                                </button>
                                {isLangOpen && (
                                    <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-300 min-w-[100px] shadow-lg z-10">
                                        <li>
                                            <Link
                                                href="/bg/"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                            >
                                                BG
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/sq/"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                            >
                                                Albanian
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/ru/"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                            >
                                                Russian
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Search */}
                        <div className="hidden lg:flex items-center flex-row-reverse relative ml-2.5">
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className={`flex items-center justify-center h-10 w-10 lg:h-11 lg:w-11 xl:h-[50px] xl:w-[50px] bg-transparent border transition-all duration-300 ease-in-out p-2 ml-2 ${isScrolled ? 'border-[#002856]/25 text-[#002856] hover:bg-[#002856]/5' : 'border-white/25 text-white hover:bg-white/10'}`}
                                aria-label="Open Search"
                            >
                                <Search className="w-5 h-5" aria-hidden="true" />
                            </button>
                            {/* Search Form */}
                            {isSearchOpen && (
                                <form
                                    method="GET"
                                    action="/"
                                    className="absolute right-14 top-0 h-full transition-all duration-300 max-w-[250px] opacity-100"
                                >
                                    <label className="h-full">
                                        <span className="sr-only">Search for:</span>
                                        <input
                                            type="text"
                                            name="s"
                                            placeholder="Search..."
                                            className="h-full px-2.5 border-none text-base focus:outline-none w-full"
                                            autoFocus
                                        />
                                    </label>
                                </form>
                            )}
                        </div>

                        {/* Donate Button */}
                        <Link
                            href="/donate"
                            className={`hidden lg:flex items-center justify-center h-11 xl:h-[50px] px-4 xl:px-6 ml-2.5 text-sm xl:text-base font-normal border bg-transparent transition-all duration-300 ease-in-out uppercase tracking-wide ${isScrolled ? 'text-[#002856] border-[#002856]/30 hover:bg-[#002856]/5' : 'text-white border-white/30 hover:bg-white/10'}`}
                        >
                            Donate
                        </Link>

                        {/* Apply Now Button */}
                        <Link
                            href="/admissions/"
                            className="hidden md:flex items-center justify-center h-11 xl:h-[50px] px-4 xl:px-6 ml-2.5 bg-[#ed1c24] text-white text-sm xl:text-base font-bold border border-[#ed1c24] hover:bg-red-700 transition-all duration-300 ease-in-out uppercase tracking-wide"
                        >
                            Apply Now
                        </Link>

                        {/* Explore/Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`flex items-center justify-center h-11 xl:h-[50px] px-4 xl:px-6 ml-2.5 cursor-pointer transition-all duration-300 ease-in-out ${isScrolled ? 'border border-[#005092] bg-[#005092] text-white hover:bg-[#003c6e]' : 'border border-white bg-white text-[#005092] hover:bg-gray-100'}`}
                            aria-label="Open extended menu"
                            aria-expanded={isMenuOpen}
                        >
                            <Menu className="w-[19px] mr-0 md:mr-2.5 mb-0.5" aria-hidden="true" />
                            <span className="hidden md:inline uppercase text-sm xl:text-base font-normal tracking-wide">
                                Explore
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
