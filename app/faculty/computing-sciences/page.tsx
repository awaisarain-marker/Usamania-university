'use client';

import React, { useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import { facultyMembers } from './data';
import FacultyPopup from './FacultyPopup';

export default function ComputingSciencesPage() {
    // State for Dean's Card Read More
    const [isExpanded, setIsExpanded] = useState(false);
    // State for Faculty Popup
    const [selectedMember, setSelectedMember] = useState<any>(null);

    const fullText = `The modern world is changing fast and with it the demand for skilled professionals in sufficient numbers. Many earlier acquired skills are becoming obsolete. However, judging by the ubiquity of computers in our daily lives, at home and the Office, it would be fair to say that computing professionals will not be out of jobs in the present or the foreseeable future. This is backed up by reports from IT industry, nationally and globally, showing that persons having a degree in the computing sciences are well among the top most sought-after professionals, with employability not just in the computer and software industry but also in diverse businesses.

To be prepared to effectively reap the benefits of fruitful employment in the computing profession, it is important to have attended a quality undergraduate programme as this has a bearing on the perceived worth of the degree holder to employers. UIT University has a pedigree of 27 years having contributed more than 2,000 computer science and software engineering graduates to Pakistan’s economy over this period. The Faculty of Computing Sciences offers two Undergraduate degree programmes: BS Computer Science, and BS Software Engineering. Both programmes are recognized by the Higher Education Commission. Coupled with a highly qualified and competent faculty, it nurtures a sound grounding in the concepts with emphasis on application in practice and life-long learning. Up-to-date computer lab and library augment the classroom teaching facilities. Close contact is maintained with industry to keep abreast of their expectations from our graduates, and the future directions technology is moving in. To develop a wholesome personality, the programmes also inculcate an awareness of responsibilities as a citizen towards the wellbeing of our Society.

Apart from the plentiful jobs in Pakistan’s burgeoning software industry and internationally, there are attractive opportunities to be exploited by aspiring entrepreneurs and freelancers. The computing sciences are ideal given the nominal capital investment required in software development, IT consulting and training services.

The field of Computing Sciences promises exciting prospects for a career and there is a multitude of job descriptions for graduates to adjust into in line with their personal interest in the field. Based on these reasons, I would encourage you to choose from a Computing degree programme at UIT University and launch yourself on a rewarding and prosperous life journey. Good luck!`;

    // Truncate logic
    const shortText = fullText.slice(0, 400) + "..."; // Adjust as needed
    const displayText = isExpanded ? fullText : shortText;

    return (
        <div className="page-computing-sciences bg-[#e6eef4]">
            <PageHero
                title="Faculty of Computing Sciences"
                subtitle="Innovating the Future with Technology and Research"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Faculty', href: '/faculty' },
                    { label: 'Computing Sciences' }
                ]}
            />

            {/* Main Layout */}
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Faculty Grid */}
                    <div className="lg:w-2/3 pt-12 pb-20">
                        <h2 className="text-3xl text-[#002856] font-bold mb-8 font-lato">Computing Sciences Faculty Members</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {facultyMembers.map((member, index) => {
                                const hasPopup = !!member.popupData;

                                // Image Wrapper Content
                                const ImageContent = (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                );

                                return (
                                    <div key={index} className="faculty-card group">
                                        <div className="aspect-[3/4] overflow-hidden mb-4 bg-gray-200 relative cursor-pointer">
                                            {hasPopup ? (
                                                <div onClick={() => setSelectedMember(member)} className="w-full h-full">
                                                    {ImageContent}
                                                </div>
                                            ) : member.link ? (
                                                <a href={member.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                                    {ImageContent}
                                                </a>
                                            ) : (
                                                <div className="w-full h-full">
                                                    {ImageContent}
                                                </div>
                                            )}
                                        </div>

                                        <h4 className="text-lg font-bold text-[#002856] mb-1 font-lato">
                                            {hasPopup ? (
                                                <span
                                                    onClick={() => setSelectedMember(member)}
                                                    className="cursor-pointer hover:text-[#d32f2f] transition-colors"
                                                >
                                                    {member.name}
                                                </span>
                                            ) : member.link ? (
                                                <a
                                                    href={member.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-[#d32f2f] transition-colors"
                                                >
                                                    {member.name}
                                                </a>
                                            ) : (
                                                member.name
                                            )}
                                        </h4>
                                        <p className="text-sm text-gray-600 font-lato">
                                            <b dangerouslySetInnerHTML={{ __html: member.designation }}></b><br />
                                            {member.qualification}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Overlapping Dean's Card */}
                    <div className="lg:w-1/3 relative z-10 hidden lg:block">
                        {/* This wrapper preserves the specific width and right alignment */}
                        <div className="faculty-memeber-card bg-white shadow-lg p-8 rounded-none ml-auto w-[350px]" style={{ marginTop: '-150px' }}>
                            <div className="flex flex-col gap-8">
                                {/* Image Column */}
                                <div className="w-full flex-shrink-0">
                                    <div className="bg-gray-200 w-full relative h-[250px]">
                                        {/* Placeholder image - replace with actual if provided */}
                                        <img
                                            src="https://uitu.edu.pk/wp-content/uploads/2025/02/Dr-Kashif.png"
                                            alt="Dr. Kashif Mehmood"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-[#002856] mb-2 font-lato">Dr. Kashif Mehmood</h3>
                                    <p className="text-gray-500 mb-6 font-lato italic">Dean, Faculty of Computing Sciences</p>

                                    <div className="prose max-w-none text-gray-700 font-lato mb-6 whitespace-pre-line text-sm">
                                        {displayText}
                                    </div>

                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="inline-flex items-center text-[#d32f2f] hover:text-[#b71c1c] font-bold uppercase tracking-wide transition-colors"
                                    >
                                        {isExpanded ? 'Read Less' : 'Read More'}
                                        <svg className={`w-4 h-4 ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Fallback for Dean's Card (if needed, currently hidden on mobile in left col logic?) 
                    Wait, I hid the right column on mobile with hidden lg:block?
                    Actually, stacking order matters.
                    The user wanted the grid AND the card.
                    I should probably keep the card visible on all screens.
                    Refactoring the responsiveness:
                */}
            </div>

            {/* Mobile View Adjustment: show Dean's card somewhere? 
               Usually we want the Dean's message prominent. 
               Let's just remove 'hidden lg:block' and let flex-col handle it. 
               But 'ml-auto' and negative margin might differ on mobile.
            */}
            <div className="lg:hidden px-4 pb-12">
                {/* Mobile version of Dean's Card */}
                <div className="bg-white shadow-lg p-6 rounded-none w-full mb-8" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
                    <div className="flex flex-col gap-6">
                        <div className="bg-gray-200 w-full relative h-[250px]">
                            <img src="https://uitu.edu.pk/wp-content/uploads/2025/02/Dr-Kashif.png" alt="Dr. Kashif Mehmood" className="w-full h-full object-cover object-top" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#002856] mb-2 font-lato">Dr. Kashif Mehmood</h3>
                            <p className="text-gray-500 mb-6 font-lato italic">Dean, Faculty of Computing Sciences</p>
                            <div className="prose max-w-none text-gray-700 font-lato mb-6 whitespace-pre-line text-sm">
                                {displayText}
                            </div>
                            <button onClick={() => setIsExpanded(!isExpanded)} className="inline-flex items-center text-[#d32f2f] hover:text-[#b71c1c] font-bold uppercase tracking-wide transition-colors">
                                {isExpanded ? 'Read Less' : 'Read More'} <svg className={`w-4 h-4 ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Faculty Popup */}
            <FacultyPopup
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                data={selectedMember}
            />
        </div>
    );
}
