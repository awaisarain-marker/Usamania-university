'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyClassUpdater() {
    const pathname = usePathname();

    useEffect(() => {
        // Convert pathname to a class-friendly string
        // e.g., "/" -> "page-home"
        // "/about-us" -> "page-about-us"
        // "/merl" -> "page-merl"
        const pageName = pathname === '/'
            ? 'home'
            : pathname.replace(/\//g, '-').replace(/^-|-$/g, '');

        const className = `page-${pageName}`;

        document.body.classList.add(className);

        return () => {
            document.body.classList.remove(className);
        };
    }, [pathname]);

    return null;
}
