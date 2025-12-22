'use client';

import React, { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';

interface JobPopupProps {
    job: any; // Using any for Sanity content
    onClose: () => void;
}

export default function JobPopup({ job, onClose }: JobPopupProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (job) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [job]);

    if (!job) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div
                className={`relative bg-white w-full max-w-[1200px] max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-8 md:p-12 transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-[#ed1c24] transition-colors cursor-pointer"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <h2 className="text-3xl font-bold text-[#002856] mb-6">{job.title}</h2>
                <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-500 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-[#002856]">Posted:</span>
                        <span>{job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-[#002856]">Deadline:</span>
                        <span className={job.deadline && job.deadline.toLowerCase().includes('closed') ? 'text-[#ed1c24]' : ''}>{job.deadline}</span>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#002856] prose-a:text-[#ed1c24]">
                    {job.content ? (
                        <PortableText value={job.content} />
                    ) : (
                        <p>No details available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
