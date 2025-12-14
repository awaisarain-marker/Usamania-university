'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Users, Menu as MenuIcon, X, LogOut, Globe } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={20} /> },
        { name: 'Courses', href: '/admin/courses', icon: <BookOpen size={20} /> },
        { name: 'Staff', href: '/admin/staff', icon: <Users size={20} /> },
        { name: 'Menu', href: '/admin/menu', icon: <MenuIcon size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#002856] text-white transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:static lg:inset-0`}
            >
                <div className="flex items-center justify-between h-16 px-6 bg-[#001f42] border-b border-white/10">
                    <span className="text-xl font-bold tracking-wider uppercase">Admin Panel</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[#ed1c24] text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#001f42]">
                    <Link href="/" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white transition-colors">
                        <Globe size={20} />
                        <span>View Website</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between h-16 px-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <MenuIcon size={24} />
                        </button>
                        <span className="font-semibold text-gray-900">Admin Dashboard</span>
                        <div className="w-6" /> {/* Spacer */}
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
