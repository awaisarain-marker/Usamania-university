'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import { searchData, SearchResult } from '@/lib/searchData';

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const results = searchData(query);
    const router = useRouter();

    return (
        <div className="page-search bg-[#e6eef4] min-h-screen">
            <PageHero
                title="Search Results"
                subtitle={`Showing results for "${query}"`}
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Search' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container max-w-5xl mx-auto px-4">
                    {results.length > 0 ? (
                        <div className="space-y-6">
                            {results.map((result) => (
                                <div
                                    key={result.id}
                                    className="bg-white p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-[#ed1c24] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                                            {result.type}
                                        </span>
                                        {result.date && (
                                            <span className="text-sm text-gray-500">
                                                {result.date}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#002856] mb-3 group-hover:text-[#ed1c24] transition-colors">
                                        <Link href={result.url}>{result.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {result.description}
                                    </p>
                                    <Link
                                        href={result.url}
                                        className="text-[#ed1c24] font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Read More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white border border-gray-200 p-12">
                            <div className="text-[#002856] mb-4">
                                <svg className="w-16 h-16 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#002856] mb-3">No Results Found</h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                We couldn't find any matches for "{query}". Please try checking your spelling or using different keywords.
                            </p>
                            <Link
                                href="/"
                                className="btn-secondary --red --border inline-block"
                            >
                                Return Home
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <SearchContent />
        </Suspense>
    );
}
