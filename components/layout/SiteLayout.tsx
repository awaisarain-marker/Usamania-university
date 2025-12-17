'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/admin');
    const isStudio = pathname?.startsWith('/studio');

    if (isAdmin || isStudio) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </>
    );
}
