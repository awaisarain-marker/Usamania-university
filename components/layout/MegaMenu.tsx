import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronRight, BookOpen, GraduationCap, DollarSign, MapPin, Calendar, Lock, LayoutGrid } from 'lucide-react';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
    const [activeCategory, setActiveCategory] = useState('Admissions');

    // Menu Categories for the Left Sidebar
    const menuItems = [
        { name: "Admissions", id: "Admissions" },
        { name: "About", id: "About" },
        { name: "Academics", id: "Academics" },
        { name: "Student Life", id: "Student" },
        { name: "Careers", id: "Careers" },
        { name: "Alumni", id: "Alumni" },
        { name: "Corporate", id: "Corporate" },
        { name: "Media", id: "Media" },
    ];

    // Data for "Admissions" (Cards View)
    const admissionsData = {
        title: "Start Your Journey",
        heading: "Admissions",
        description: "Join a diverse community of scholars, innovators, and leaders. Discover how your potential can shape the future at AUBG.",
        cards: [
            { icon: <BookOpen className="w-6 h-6" />, title: "Undergraduate", desc: "Majors, minors & programs", href: "/admissions/undergraduate" },
            { icon: <GraduationCap className="w-6 h-6" />, title: "Graduate", desc: "Masters, PhD & certificates", href: "/admissions/graduate" },
            { icon: <DollarSign className="w-6 h-6" />, title: "Tuition & Aid", desc: "Scholarships & grants", href: "/admissions/tuition-and-aid" },
            { icon: <MapPin className="w-6 h-6" />, title: "Visit Campus", desc: "Tours & open houses", href: "/admissions/visit" },
        ]
    };

    // Data for other sections (Column View)
    const genericMenuData: { [key: string]: { title: string, columns: { title: string, links: { name: string, href: string }[] }[] } } = {
        'About': {
            title: 'About AUBG',
            columns: [
                {
                    title: "Overview",
                    links: [
                        { name: 'About Us', href: '/about-us' },
                        { name: 'Contact', href: '/contact' },
                        { name: 'News & Events', href: '/news-and-events' },
                    ]
                },
                {
                    title: "Governance",
                    links: [
                        { name: 'Views & Opinions', href: '/views-and-opinions' },
                        { name: 'Sustainable Development Goals', href: '/sdg' },
                        { name: 'SDGs Report', href: '/sdg-report' },
                    ]
                },
                {
                    title: "Official",
                    links: [
                        { name: 'QEC', href: '/qec' },
                        { name: 'ORIC', href: '/oric' },
                        { name: 'Tenders', href: '/tenders' },
                    ]
                }
            ]
        },
        'Academics': {
            title: 'Academic Excellence',
            columns: [
                {
                    title: "Programs",
                    links: [
                        { name: 'Academics', href: '/academics' },
                        { name: 'Short Courses', href: '/short-courses' },
                        { name: 'Workshops', href: '/workshops' },
                    ]
                },
                {
                    title: "Resources",
                    links: [
                        { name: 'Faculty', href: '/faculty' },
                        { name: 'Library Catalog', href: '/library' },
                        { name: 'MERL', href: '/merl' },
                    ]
                },
                {
                    title: "Events",
                    links: [
                        { name: 'Certificate Distribution', href: '/certificates' },
                        { name: 'Bio Symposium 2023', href: '/bio-symposium' },
                    ]
                }
            ]
        },
        'Student': {
            title: 'Student Life',
            columns: [
                {
                    title: "Campus Life",
                    links: [
                        { name: 'Student Life', href: '/student-life' },
                        { name: 'Clubs & Activities', href: '/clubs' },
                        { name: 'Housing', href: '/housing' },
                    ]
                },
                {
                    title: "Support",
                    links: [
                        { name: 'Student Portal', href: '/student-portal' },
                        { name: 'Student Support S3', href: '/s3' },
                    ]
                }
            ]
        },
        'Careers': {
            title: 'Career Development',
            columns: [
                {
                    title: "Opportunities",
                    links: [
                        { name: 'Careers', href: '/careers' },
                        { name: 'Internships', href: '/internships' },
                    ]
                },
                {
                    title: "Portals",
                    links: [
                        { name: 'Job Portal', href: '/job-portal' },
                        { name: 'Employee Portal', href: '/employee-portal' },
                    ]
                }
            ]
        },
        'Alumni': {
            title: 'Alumni Network',
            columns: [
                {
                    title: "Connect",
                    links: [
                        { name: 'Alumni Engagement', href: '/alumni' },
                        { name: 'Alumni Stories', href: '/alumni-stories' },
                    ]
                },
                {
                    title: "Support",
                    links: [
                        { name: 'Give Back', href: '/give' },
                    ]
                }
            ]
        },
        'Corporate': {
            title: 'Corporate Partnerships',
            columns: [
                {
                    title: "Collaboration",
                    links: [
                        { name: 'Corporate Liaison Events', href: '/corporate-events' },
                        { name: 'CSR', href: '/csr' },
                    ]
                },
                {
                    title: "Learning",
                    links: [
                        { name: 'Day Trip Learning', href: '/day-trip' },
                    ]
                }
            ]
        },
        'Media': {
            title: 'Media & Press',
            columns: [
                {
                    title: "News",
                    links: [
                        { name: 'Media / Press', href: '/media' },
                        { name: 'Newsletter', href: '/newsletter' },
                    ]
                },
                {
                    title: "Resources",
                    links: [
                        { name: 'Brand Assets', href: '/brand' },
                        { name: 'Contact PR', href: '/pr' },
                    ]
                }
            ]
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] bg-[#00152e] text-white overflow-hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="border-b border-white/10 bg-[#00152e] z-50 relative shrink-0">
                        <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center h-[80px]">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://uitu.edu.pk/wp-content/uploads/2023/12/logo_with_text_final__6_-removebg-preview.png"
                                    alt="AUBG Logo"
                                    width={110}
                                    height={40}
                                    className="brightness-0 invert max-w-[100px] md:max-w-[110px]"
                                />
                            </div>
                            <div className="flex items-center gap-4 md:gap-6">
                                <Link href="/apply" className="group hidden md:flex items-center gap-2 bg-[#ed1c24] hover:bg-[#d4171f] text-white px-5 py-2.5 rounded-full transition-all duration-200">
                                    <span className="font-medium text-base">Apply Now</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="bg-white/5 hover:bg-white/10 p-2.5 rounded-full text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 container mx-auto px-4 lg:px-8 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

                            {/* MOBILE NAVIGATION (< lg) */}
                            <div className="lg:hidden col-span-1 h-full overflow-y-auto no-scrollbar py-6">
                                <div className="space-y-2">
                                    {menuItems.map((item) => (
                                        <div key={item.id} className="border-b border-white/10 last:border-0">
                                            <button
                                                onClick={() => setActiveCategory(activeCategory === item.id ? '' : item.id)}
                                                className={`w-full flex items-center justify-between py-4 px-2 text-left transition-colors ${activeCategory === item.id ? 'text-[#ed1c24]' : 'text-white'}`}
                                            >
                                                <span className="font-serif text-2xl">{item.name}</span>
                                                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeCategory === item.id ? 'rotate-90 text-[#ed1c24]' : 'text-gray-500'}`} />
                                            </button>

                                            {/* Mobile Submenu */}
                                            <AnimatePresence>
                                                {activeCategory === item.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden bg-white/5 rounded-lg mb-4"
                                                    >
                                                        <div className="p-4 space-y-6">
                                                            {/* Admissions Content for Mobile */}
                                                            {item.id === 'Admissions' && (
                                                                <div className="space-y-4">
                                                                    <p className="text-gray-300 text-sm mb-4">{admissionsData.description}</p>
                                                                    <div className="grid grid-cols-1 gap-3">
                                                                        {admissionsData.cards.map((card, idx) => (
                                                                            <Link key={idx} href={card.href} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" onClick={onClose}>
                                                                                <div className="text-[#ed1c24]">{card.icon}</div>
                                                                                <div>
                                                                                    <div className="text-white font-medium text-sm">{card.title}</div>
                                                                                    <div className="text-gray-400 text-xs">{card.desc}</div>
                                                                                </div>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Generic Content for Mobile */}
                                                            {item.id !== 'Admissions' && genericMenuData[item.id] && (
                                                                <div className="space-y-6">
                                                                    {genericMenuData[item.id].columns.map((col, idx) => (
                                                                        <div key={idx}>
                                                                            <h4 className="text-[#ed1c24] text-xs font-bold uppercase tracking-wider mb-3">{col.title}</h4>
                                                                            <ul className="space-y-2">
                                                                                {col.links.map((link, lIdx) => (
                                                                                    <li key={lIdx}>
                                                                                        <Link href={link.href} className="block text-gray-300 hover:text-white py-1" onClick={onClose}>
                                                                                            {link.name}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile Footer Links */}
                                <div className="mt-8 pt-8 border-t border-white/10 space-y-4 px-2">
                                    <Link href="/apply" className="flex items-center justify-center gap-2 bg-[#ed1c24] text-white w-full py-3 rounded-lg font-medium" onClick={onClose}>
                                        Apply Now
                                    </Link>
                                    <div className="flex justify-center gap-6 text-gray-400 text-sm">
                                        <Link href="/directory" className="hover:text-white">Directory</Link>
                                        <Link href="/map" className="hover:text-white">Map</Link>
                                    </div>
                                </div>
                            </div>

                            {/* DESKTOP LEFT SIDE: Sticky Navigation Menu (lg+) */}
                            <div className="hidden lg:flex lg:col-span-3 flex-col border-r border-white/10 h-full overflow-y-auto no-scrollbar py-8 pr-4">
                                <nav className="space-y-1">
                                    {menuItems.map((item) => (
                                        <div
                                            key={item.id}
                                            onMouseEnter={() => setActiveCategory(item.id)}
                                            className={`group block py-4 border-l-4 transition-all duration-300 ease-out cursor-pointer pl-6 ${activeCategory === item.id
                                                ? 'border-[#ed1c24] text-white'
                                                : 'border-transparent text-gray-500 hover:text-gray-300 hover:pl-8'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className={`font-serif text-3xl tracking-tight transition-opacity duration-300 ${activeCategory === item.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                                                    }`}>
                                                    {item.name}
                                                </span>
                                                {activeCategory === item.id && (
                                                    <ChevronRight className="w-5 h-5 text-[#ed1c24]" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-10 text-gray-500 text-base">
                                    <p>© {new Date().getFullYear()} AUBG</p>
                                    <div className="flex gap-4 mt-4">
                                        <Link href="/directory" className="hover:text-white transition-colors">Directory</Link>
                                        <Link href="/map" className="hover:text-white transition-colors">Map</Link>
                                    </div>
                                </div>
                            </div>

                            {/* DESKTOP RIGHT SIDE: Dynamic Content Area (lg+) */}
                            <div className="hidden lg:block lg:col-span-9 bg-[#00152e] relative h-full overflow-y-auto no-scrollbar p-8 xl:p-12">

                                {/* ADMISSIONS CONTENT (Cards View) */}
                                {activeCategory === 'Admissions' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-5xl mx-auto"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="h-8 w-1 bg-[#ed1c24] rounded-full"></span>
                                            <span className="text-[#ed1c24] font-semibold tracking-widest text-sm uppercase">{admissionsData.title}</span>
                                        </div>

                                        <h2 className="font-serif text-6xl text-white mb-6 tracking-tight">{admissionsData.heading}</h2>
                                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-light">
                                            {admissionsData.description}
                                        </p>

                                        {/* Cards Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                            {admissionsData.cards.map((card, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={card.href}
                                                    className="group bg-[#00224a] border border-white/5 hover:border-[#ed1c24]/50 p-6 rounded-xl flex items-start gap-5 transition-all duration-300 hover:bg-[#002f6c]"
                                                >
                                                    <div className="bg-[#ed1c24]/10 p-3 rounded-lg text-[#ed1c24] group-hover:bg-[#ed1c24] group-hover:text-white transition-colors">
                                                        {card.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg mb-1">{card.title}</h3>
                                                        <p className="text-gray-400 text-base">{card.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Event Banner */}
                                        <div className="w-full border-t border-white/10 pt-8">
                                            <Link href="/open-house" className="group flex items-center gap-6 bg-gradient-to-r from-[#00224a] to-transparent p-1 rounded-2xl hover:from-[#002f6c] transition-all">
                                                <div className="bg-gray-800 h-20 w-20 rounded-xl flex items-center justify-center shrink-0 border border-white/10 overflow-hidden relative">
                                                    <img
                                                        src="https://www.aubg.edu/wp-content/uploads/2022/04/about-hero-background-96x69.jpg"
                                                        alt="Event"
                                                        className="object-cover w-full h-full opacity-70"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-[#ed1c24] text-sm font-semibold tracking-wide uppercase mb-1 block">Upcoming Event</span>
                                                    <h4 className="text-white text-xl font-serif">Fall Open House 2024</h4>
                                                    <p className="text-gray-400 text-base mt-1 group-hover:text-gray-200 transition-colors">Experience campus life firsthand this October.</p>
                                                </div>
                                                <div className="ml-auto pr-6 text-gray-500 group-hover:text-[#ed1c24] transition-colors">
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}

                                {/* GENERIC CONTENT (Columns View) */}
                                {activeCategory !== 'Admissions' && genericMenuData[activeCategory] && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-5xl mx-auto"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="h-8 w-1 bg-[#ed1c24] rounded-full"></span>
                                            <h2 className="font-serif text-5xl text-white tracking-tight">{genericMenuData[activeCategory].title}</h2>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                                            {genericMenuData[activeCategory].columns.map((col, idx) => (
                                                <div key={idx} className="space-y-8">
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg mb-4 tracking-wide uppercase border-b border-white/10 pb-2">
                                                            {col.title}
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {col.links.map((link, lIdx) => (
                                                                <li key={lIdx}>
                                                                    <Link
                                                                        href={link.href}
                                                                        className="text-gray-400 hover:text-[#ed1c24] text-lg transition-colors block"
                                                                    >
                                                                        {link.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Fallback for undefined categories */}
                                {activeCategory !== 'Admissions' && !genericMenuData[activeCategory] && (
                                    <div className="h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#ed1c24]">
                                                <LayoutGrid className="w-8 h-8" />
                                            </div>
                                            <h2 className="font-serif text-4xl text-white mb-4">Content Area</h2>
                                            <p className="text-xl text-gray-500 max-w-md mx-auto">Select a menu item from the left to view details.</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    <style jsx global>{`
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .no-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
