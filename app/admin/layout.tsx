'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Menu as MenuIcon,
    X,
    Globe,
    Calendar,
    FileText,
    Search,
    ChevronRight,
    Bell,
    User
} from 'lucide-react';
import './admin.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    // Generate Breadcrumbs
    const pathSegments = pathname?.split('/').filter(Boolean) || [];
    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        return { name: segment.charAt(0).toUpperCase() + segment.slice(1), href };
    });

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={18} /> },
        { name: 'Courses', href: '/admin/courses', icon: <BookOpen size={18} /> },
        { name: 'Faculty', href: '/admin/faculty', icon: <Users size={18} /> },
        { name: 'Menu', href: '/admin/menu', icon: <MenuIcon size={18} /> },
        { name: 'Blogs', href: '/admin/blogs', icon: <FileText size={18} /> },
        { name: 'Events', href: '/admin/events', icon: <Calendar size={18} /> },
    ];

    return (
        <div className="admin-shell min-h-screen bg-white flex font-sans text-neutral-900">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-neutral-200 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}
            >
                {/* Brand */}
                <div className="h-16 flex items-center px-6 border-b border-neutral-100">
                    <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center font-bold mr-3">A</div>
                    <span className="font-semibold text-sm tracking-tight text-neutral-900">Admin Workspace</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden ml-auto text-neutral-400">
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                    <p className="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Platform</p>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                    ? 'bg-neutral-100 text-neutral-900'
                                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                                    }`}
                            >
                                <span className={isActive ? 'text-black' : 'text-neutral-400 group-hover:text-black'}>{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-neutral-100">
                    <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors">
                        <Globe size={18} text-neutral-400 />
                        <span>Open Website</span>
                    </Link>
                </div>
            </aside>

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 bg-white/80 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-neutral-500">
                            <MenuIcon size={24} />
                        </button>

                        {/* Breadcrumbs */}
                        <div className="hidden md:flex items-center text-sm text-neutral-500">
                            <span className="hover:text-neutral-900 cursor-pointer">Admin</span>
                            {breadcrumbs.map((crumb, i) => (
                                <React.Fragment key={crumb.href}>
                                    <ChevronRight size={14} className="mx-2 text-neutral-400" />
                                    <span className={i === breadcrumbs.length - 1 ? 'font-medium text-neutral-900' : 'hover:text-neutral-900 cursor-pointer'}>
                                        {crumb.name}
                                    </span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="h-9 pl-9 pr-4 rounded-md border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-64 transition-all"
                            />
                        </div>
                        <button className="text-neutral-400 hover:text-neutral-900 relative">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200">
                            <User size={16} className="text-neutral-600" />
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto bg-white p-4 lg:p-8">
                    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
