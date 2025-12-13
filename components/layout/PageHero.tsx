import React from 'react';
import Link from 'next/link';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
    breadcrumbs?: { label: string; href?: string }[];
    children?: React.ReactNode;
}

export default function PageHero({
    title,
    subtitle,
    bgImage = 'https://www.aubg.edu/wp-content/uploads/2022/08/AUBG-explore-image-01-e1659898995242.jpg',
    breadcrumbs,
    children
}: PageHeroProps) {
    return (
        <section className="hero --small">

            <div className="container">
                <div className="hero__content">
                    <div className="hero__content-wrap">
                        {breadcrumbs && (
                            <nav className="breadcrumbs">
                                {breadcrumbs.map((crumb, index) => (
                                    <React.Fragment key={index}>
                                        {index > 0 && <span className="separator text-small"> / </span>}
                                        {crumb.href ? (
                                            <Link href={crumb.href} className="breadcrumbs__item text-small">
                                                <span>{crumb.label}</span>
                                            </Link>
                                        ) : (
                                            <span className="breadcrumbs__link text-bold text-small">
                                                <span>{crumb.label}</span>
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </nav>
                        )}

                        <div className="page-title">
                            <h1>{title}</h1>
                        </div>

                        {subtitle && (
                            <div className="page-bottom-title">
                                <p>{subtitle}</p>
                            </div>
                        )}
                    </div>

                    {children}
                </div>

                <div className="hero__scroll">
                    <svg width="25" height="25" className="icon icon-scroll" aria-hidden="true" role="img">
                        <use xlinkHref="#icon-scroll-top"></use> {/* Changed to #icon-scroll-top based on Footer usage, or #scroll if defined */}
                    </svg>
                </div>
            </div>
        </section>
    );
}
