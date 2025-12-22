import React from 'react';

interface JobCardProps {
    title: string;
    description: string;
    postedDate: string;
    deadline: string;
    onClick: () => void;
}

export default function JobCard({ title, description, postedDate, deadline, onClick }: JobCardProps) {
    return (
        <div
            className="bg-white border border-gray-200 p-8 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            onClick={onClick}
        >
            <h4 className="text-xl font-bold text-[#002856] mb-4 group-hover:text-[#ed1c24] transition-colors line-clamp-2">{title}</h4>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">{description}</p>

            <div className="mt-auto space-y-2 border-t border-gray-100 pt-5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="font-bold text-[#002856]">Posted on:</span>
                    <span>{postedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="font-bold text-[#002856]">Deadline:</span>
                    <span className={deadline.toLowerCase().includes('closed') ? 'text-[#ed1c24] font-medium' : 'text-[#002856]'}>{deadline}</span>
                </div>
            </div>
        </div>
    );
}
