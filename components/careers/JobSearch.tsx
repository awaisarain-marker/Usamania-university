import React from 'react';

interface JobSearchProps {
    onSearch: (query: string) => void;
}

export default function JobSearch({ onSearch }: JobSearchProps) {
    return (
        <div className="w-full max-w-2xl mx-auto mb-12">
            <div className="relative group">
                <input
                    type="text"
                    placeholder="Search for job opportunities..."
                    className="w-full p-4 pr-12 text-lg text-[#002856] placeholder-gray-400 bg-white border border-gray-300 focus:outline-none focus:border-[#002856] focus:ring-1 focus:ring-[#002856] transition-all rounded-none"
                    onChange={(e) => onSearch(e.target.value)}
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-6 bg-[#002856] text-white hover:bg-[#ed1c24] transition-colors duration-300 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
