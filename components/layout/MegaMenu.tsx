import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronRight, ChevronDown, LayoutGrid } from 'lucide-react';
import { menuData, MenuItem } from './menuData';
import { getNavigation } from '@/sanity/lib/queries';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
    // State for menu items (defaults to hardcoded data)
    const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData);
    const [isPending, startTransition] = useTransition();

    // Determine the default active category (first item's ID)
    const [activeCategory, setActiveCategory] = useState<string>(menuItems[0]?.id || 'about-us');

    // Fetch navigation from Sanity on mount
    useEffect(() => {
        async function fetchMenu() {
            try {
                const data = await getNavigation();
                if (data && data.menuItems && data.menuItems.length > 0) {
                    // Transform Sanity data to match MenuItem interface
                    const sanityMenu: MenuItem[] = data.menuItems.map((item: any) => ({
                        id: item._key,
                        label: item.label,
                        href: item.href,
                        children: item.children?.map((child: any) => ({
                            id: child._key,
                            label: child.label,
                            href: child.href,
                            children: child.children?.map((subChild: any) => ({
                                id: subChild._key,
                                label: subChild.label,
                                href: subChild.href,
                                children: subChild.children?.map((leaf: any) => ({
                                    id: leaf._key,
                                    label: leaf.label,
                                    href: leaf.href
                                }))
                            }))
                        }))
                    }));
                    setMenuItems(sanityMenu);
                    // Update active category if it was using the default
                    if (activeCategory === 'about-us' || !menuItems.find(i => i.id === activeCategory)) {
                        setActiveCategory(sanityMenu[0]?.id || '');
                    }
                }
            } catch (error) {
                console.error('Error fetching navigation from Sanity:', error);
            }
        }
        fetchMenu();
    }, []);

    // Reset active category when menu opens
    useEffect(() => {
        if (isOpen) {
            setActiveCategory(menuItems[0]?.id || '');
        }
    }, [isOpen, menuItems]);

    // Recursive helper to render submenu items
    const renderSubItems = (items: MenuItem[], level: number = 0) => {
        return (
            <ul className={`space-y-2 ${level > 0 ? 'ml-4 border-l border-white/10 pl-4 mt-2' : ''}`}>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.children ? (
                            <div className="mb-2">
                                <span className={`block font-medium ${level === 0 ? 'text-white text-lg border-b border-white/10 pb-2 mb-2 uppercase tracking-wide' : 'text-gray-300 text-base'}`}>
                                    {item.label}
                                </span>
                                {renderSubItems(item.children, level + 1)}
                            </div>
                        ) : (
                            <Link
                                href={item.href || '#'}
                                className={`block transition-colors hover:text-[#ed1c24] ${level === 0 ? 'text-lg text-gray-300' : 'text-sm text-gray-400'}`}
                                onClick={onClose}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    // Find the currently active parent item data
    const activeData = menuItems.find(item => item.id === activeCategory);

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
                                    alt="UIT Logo"
                                    width={110}
                                    height={40}
                                    className="brightness-0 invert max-w-[100px] md:max-w-[110px]"
                                />
                            </div>
                            <div className="flex items-center gap-4 md:gap-6">
                                <Link href="/admission" className="group hidden md:flex items-center gap-2 bg-[#ed1c24] hover:bg-[#d4171f] text-white px-5 py-2.5 transition-all duration-200" onClick={onClose}>
                                    <span className="font-medium text-base">Apply Now</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="bg-white/5 hover:bg-white/10 p-2.5 text-white transition-colors cursor-pointer"
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
                                <div className="space-y-1">
                                    {menuItems.map((item) => (
                                        <div key={item.id} className="border-b border-white/5 last:border-0">
                                            <button
                                                onClick={() => setActiveCategory(activeCategory === item.id ? '' : item.id)}
                                                className={`w-full flex items-center justify-between py-4 px-2 text-left transition-colors cursor-pointer ${activeCategory === item.id ? 'text-[#ed1c24]' : 'text-white'}`}
                                            >
                                                <span className="font-serif text-xl">{item.label}</span>
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeCategory === item.id ? 'rotate-180 text-[#ed1c24]' : 'text-gray-500'}`} />
                                            </button>

                                            {/* Mobile Submenu */}
                                            <AnimatePresence>
                                                {activeCategory === item.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden bg-white/5"
                                                    >
                                                        <div className="p-4">
                                                            {item.children ? renderSubItems(item.children) : (
                                                                <Link href={item.href || '#'} className="block text-gray-300 py-2 hover:text-white" onClick={onClose}>
                                                                    Go to Page
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* DESKTOP LEFT SIDE: Sticky Navigation Menu (lg+) */}
                            <div className="hidden lg:flex lg:col-span-3 flex-col border-r border-white/10 h-full overflow-y-auto no-scrollbar py-8 pr-4">
                                <nav className="space-y-1">
                                    {menuItems.map((item) => (
                                        <Link
                                            href={item.href || '#'}
                                            key={item.id}
                                            onMouseEnter={() => {
                                                startTransition(() => {
                                                    setActiveCategory(item.id);
                                                });
                                            }}
                                            onClick={onClose}
                                            className={`group block py-3 border-l-4 transition-all duration-300 ease-out cursor-pointer pl-6 ${activeCategory === item.id
                                                ? 'border-[#ed1c24] text-white'
                                                : 'border-transparent text-gray-500 hover:text-gray-300 hover:pl-8'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className={`font-serif text-2xl tracking-tight transition-opacity duration-300 ${activeCategory === item.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                                                    }`}>
                                                    {item.label}
                                                </span>
                                                {activeCategory === item.id && (
                                                    <ChevronRight className="w-5 h-5 text-[#ed1c24]" />
                                                )}
                                            </div>
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-10 text-gray-500 text-sm">
                                    <p>© {new Date().getFullYear()} UIT University</p>
                                    <div className="flex gap-4 mt-4">
                                        <Link href="/directory" className="hover:text-white transition-colors" onClick={onClose}>Directory</Link>
                                        <Link href="/map" className="hover:text-white transition-colors" onClick={onClose}>Map</Link>
                                    </div>
                                </div>
                            </div>

                            {/* DESKTOP RIGHT SIDE: Dynamic Content Area (lg+) */}
                            <div className="hidden lg:block lg:col-span-9 bg-[#00152e] relative h-full overflow-y-auto no-scrollbar p-8 xl:p-12">
                                <motion.div
                                    key={activeCategory} // Force re-render animation when category changes
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-6xl mx-auto"
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="h-8 w-1 bg-[#ed1c24]"></span>
                                        <h2 className="font-serif text-5xl text-white tracking-tight">{activeData?.label}</h2>
                                    </div>

                                    {activeData?.children ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                                            {activeData.children.map((child) => (
                                                <div key={child.id} className="space-y-4">
                                                    {/* Level 2 Item - Acts as Column Header if it has children, or a Link if not */}
                                                    {child.children ? (
                                                        <div>
                                                            <h3 className="text-white font-bold text-lg mb-4 tracking-wide uppercase border-b border-white/10 pb-2">
                                                                {child.label}
                                                            </h3>
                                                            {/* Level 3 & 4 Items */}
                                                            <ul className="space-y-3">
                                                                {child.children.map((subChild) => (
                                                                    <li key={subChild.id}>
                                                                        {/* If Level 3 has children (Level 4) */}
                                                                        {subChild.children ? (
                                                                            <div className="mb-4 bg-white/5 border border-white/10 p-4 hover:border-[#ed1c24] transition-colors duration-300">
                                                                                <span className="block text-white font-bold mb-3 uppercase tracking-wide text-sm border-b border-white/10 pb-2">
                                                                                    {subChild.label}
                                                                                </span>
                                                                                <ul className="space-y-2">
                                                                                    {subChild.children.map((subSubChild) => (
                                                                                        <li key={subSubChild.id}>
                                                                                            <Link
                                                                                                href={subSubChild.href || '#'}
                                                                                                className="text-gray-400 hover:text-[#ed1c24] text-sm transition-colors block flex items-center gap-2 group/link"
                                                                                                onClick={onClose}
                                                                                            >
                                                                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/link:bg-[#ed1c24] transition-colors"></span>
                                                                                                {subSubChild.label}
                                                                                            </Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ) : (
                                                                            <Link
                                                                                href={subChild.href || '#'}
                                                                                className="text-gray-400 hover:text-[#ed1c24] text-base transition-colors block"
                                                                                onClick={onClose}
                                                                            >
                                                                                {subChild.label}
                                                                            </Link>
                                                                        )}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ) : (
                                                        /* If Level 2 has no children, render as a boxed link/card */
                                                        <Link
                                                            href={child.href || '#'}
                                                            className="block bg-white/5 border border-white/5 hover:border-[#ed1c24] p-5 transition-all duration-300 hover:bg-white/10 group"
                                                            onClick={onClose}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-white font-medium text-lg group-hover:text-[#ed1c24] transition-colors">
                                                                    {child.label}
                                                                </span>
                                                                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#ed1c24] transition-colors" />
                                                            </div>
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        /* Case: Parent has no children (weird, but possible) */
                                        <div className="text-gray-400">
                                            No sub-menu items available. <Link href={activeData?.href || '#'} className="text-[#ed1c24] hover:underline" onClick={onClose}>Go to page</Link>
                                        </div>
                                    )}

                                </motion.div>
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
