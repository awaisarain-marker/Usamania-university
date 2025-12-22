import React, { useState } from 'react';

interface FacultyMember {
    name: string;
    designation: string;
    imageUrl?: string;
    image?: string;
    email?: string;
    ext?: string;
    overview?: string[];
    qualificationDetails?: string[];
    specialization?: string[];
    experience?: string[];
    certifications?: string[];
    courses?: string[];
    // Legacy support for popupData structure
    popupData?: {
        email?: string;
        ext?: string;
        overview?: string[];
        qualification_details?: string[];
        specialization?: string[];
        experience?: string[];
        certifications?: string[];
        courses?: string[];
    };
}

interface FacultyPopupProps {
    isOpen: boolean;
    onClose: () => void;
    data: FacultyMember | null;
}

export default function FacultyPopup({ isOpen, onClose, data }: FacultyPopupProps) {
    const [activeTab, setActiveTab] = useState('Overview');

    if (!isOpen || !data) return null;

    // Support both new Sanity structure and legacy popupData structure
    const popup = data.popupData || {};
    const email = data.email || popup.email;
    const ext = data.ext || popup.ext;
    const overview = data.overview || popup.overview || [];
    const qualificationDetails = data.qualificationDetails || popup.qualification_details || [];
    const specialization = data.specialization || popup.specialization || [];
    const experience = data.experience || popup.experience || [];
    const certifications = data.certifications || popup.certifications || [];
    const courses = data.courses || popup.courses || [];
    const imageUrl = data.imageUrl || data.image;

    const renderSection = (title: string | null, items: string[] | undefined) => {
        if (!items || items.length === 0) return null;
        return (
            <div className="mb-6">
                {title && <h5 className="font-bold text-[#002856] mb-2">{title}</h5>}
                <ul className="list-disc pl-5 space-y-2">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        );
    };

    const overviewContent = (
        <div>
            {renderSection(null, overview)}
            {renderSection('Qualification', qualificationDetails)}
            {renderSection('Area of Specialization', specialization)}
            {renderSection('Work Experience', experience)}
        </div>
    );

    const tabs = [
        { name: 'Overview', content: overviewContent },
        { name: 'Certifications', content: renderSection(null, certifications) },
        { name: 'Course Taught', content: renderSection(null, courses) }
    ];

    const hasOverviewData = overview.length + qualificationDetails.length + specialization.length + experience.length > 0;

    // Filter out tabs with no content
    const visibleTabs = tabs.filter(tab => {
        if (tab.name === 'Overview') return hasOverviewData;
        return tab.content !== null;
    });

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}>
            <style jsx>{`
                .popup-scroll-hide::-webkit-scrollbar {
                    display: none;
                }
                .popup-scroll-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            <div className="bg-white w-full max-w-5xl rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]" onClick={e => e.stopPropagation()}>

                {/* Left Side: Profile Info */}
                <div className="w-full md:w-1/3 bg-white p-8 border-r border-gray-200 flex flex-col items-center text-center overflow-y-auto popup-scroll-hide">
                    <div className="w-48 h-56 mb-6 shadow-md bg-gray-200">
                        <img src={imageUrl} alt={data.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#002856] mb-2 font-lato">{data.name}</h3>
                    <p className="text-[#d32f2f] font-medium mb-4 uppercase tracking-wide text-sm">{data.designation}</p>

                    <div className="w-full text-left space-y-3 text-sm text-gray-600 mt-4 border-t pt-6">
                        <p><strong>Department of Computer Science</strong></p>
                        {email && (
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href={`mailto:${email}`} className="animated-link text-base">
                                    {email}
                                </a>
                            </p>
                        )}
                        {ext && <p><strong>Ext.:</strong> {ext}</p>}
                    </div>
                </div>

                {/* Right Side: Tabs and Content */}
                <div className="w-full md:w-2/3 flex flex-col bg-white">
                    {/* Header with Close Button */}
                    <div className="flex justify-end p-4">
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="custom-accordion-tabs px-6 mt-4">
                        <ul className="custom-accordion-tabs__list row">
                            {visibleTabs.map((tab) => (
                                <li key={tab.name} className="custom-accordion-tabs__item">
                                    <button
                                        onClick={() => setActiveTab(tab.name)}
                                        className={`custom-accordion-tabs__link cursor-pointer ${activeTab === tab.name ? 'is-selected' : ''}`}
                                    >
                                        {tab.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 p-8 overflow-y-auto popup-scroll-hide md:min-h-[400px]">
                        <div className="animate-fadeIn">
                            <h4 className="text-xl font-bold text-[#002856] mb-4">{activeTab}</h4>
                            <div className="prose max-w-none text-gray-700 text-sm leading-relaxed">
                                {visibleTabs.find(t => t.name === activeTab)?.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
