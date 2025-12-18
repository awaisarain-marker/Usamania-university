'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PageHero from '@/components/layout/PageHero';
import FacultyPopup from '@/components/faculty/FacultyPopup';
import { getFacultyBySlug, getFacultyByCategory } from '@/sanity/lib/queries';

interface FacultyMember {
    _id: string;
    name: string;
    designation: string;
    qualification: string;
    imageUrl: string;
    category: string;
    externalLink?: string;
    order?: number;
    isDean?: boolean;
    deanMessage?: string;
    email?: string;
    ext?: string;
    overview?: string[];
    qualificationDetails?: string[];
    specialization?: string[];
    experience?: string[];
    certifications?: string[];
    courses?: string[];
}

interface FacultyDepartment {
    _id: string;
    title: string;
    slug: string;
    subtitle?: string;
    heroImageUrl?: string;
    categorySlug: string;
    facultyGridTitle?: string;
}

export default function FacultyDepartmentPage() {
    const params = useParams();
    const slug = params.slug as string;

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);
    const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
    const [department, setDepartment] = useState<FacultyDepartment | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch department info from Sanity
                const deptData = await getFacultyBySlug(slug);

                if (deptData) {
                    setDepartment(deptData);
                    // Fetch faculty members for this category
                    const membersData = await getFacultyByCategory(deptData.categorySlug);
                    setFacultyMembers(membersData);
                } else {
                    // Fallback for when Sanity doesn't have the data yet
                    // Use slug as category slug directly
                    const membersData = await getFacultyByCategory(slug);
                    setFacultyMembers(membersData);

                    // Create a fallback department object
                    const titleMap: Record<string, string> = {
                        'computing-sciences': 'Faculty of Computing Sciences',
                        'engineering-technology': 'Faculty of Engineering & Technology',
                        'management-social-sciences': 'Faculty of Management & Social Sciences',
                    };
                    setDepartment({
                        _id: 'fallback',
                        title: titleMap[slug] || `Faculty of ${slug.replace(/-/g, ' ')}`,
                        slug: slug,
                        subtitle: 'Innovating the Future with Technology and Research',
                        categorySlug: slug,
                        facultyGridTitle: `${slug.replace(/-/g, ' ')} Faculty Members`,
                    });
                }
            } catch (error) {
                console.error('Error fetching faculty data:', error);
            } finally {
                setLoading(false);
            }
        }

        if (slug) {
            fetchData();
        }
    }, [slug]);

    // Find the Dean for the sidebar
    const dean = facultyMembers.find(m => m.isDean);
    const deanMessage = dean?.deanMessage || '';
    const shortText = deanMessage.slice(0, 400) + (deanMessage.length > 400 ? "..." : "");
    const displayText = isExpanded ? deanMessage : shortText;

    // Check if a member has popup data
    const hasPopupData = (member: FacultyMember) => {
        return !!(member.email || member.overview?.length || member.qualificationDetails?.length ||
            member.specialization?.length || member.experience?.length ||
            member.certifications?.length || member.courses?.length);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-red"></div>
            </div>
        );
    }

    if (!department) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Faculty department not found.</p>
            </div>
        );
    }

    const defaultHeroImage = 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg';

    return (
        <div className={`page-faculty-${slug} bg-[#e6eef4]`}>
            <PageHero
                title={department.title}
                subtitle={department.subtitle || ''}
                bgImage={department.heroImageUrl || defaultHeroImage}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Faculty', href: '/faculty' },
                    { label: department.title.replace('Faculty of ', '') }
                ]}
            />

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Faculty Grid */}
                    <div className="lg:w-2/3 pt-12 pb-20">
                        <h2 className="text-3xl text-[#002856] font-bold mb-8 font-lato">
                            {department.facultyGridTitle || `${department.title} Faculty Members`}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {facultyMembers.filter(m => !m.isDean).map((member) => {
                                const hasPopup = hasPopupData(member);

                                const ImageContent = (
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                );

                                return (
                                    <div key={member._id} className="faculty-card group">
                                        <div className="aspect-[3/4] overflow-hidden mb-4 bg-gray-200 relative cursor-pointer">
                                            {hasPopup ? (
                                                <div onClick={() => setSelectedMember(member)} className="w-full h-full">
                                                    {ImageContent}
                                                </div>
                                            ) : member.externalLink ? (
                                                <a href={member.externalLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
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
                                            ) : member.externalLink ? (
                                                <a
                                                    href={member.externalLink}
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

                    {/* Right Column: Dean's Card */}
                    {dean && (
                        <div className="lg:w-1/3 relative z-10 hidden lg:block">
                            <div className="faculty-memeber-card bg-white shadow-lg p-8 rounded-none ml-auto w-[350px]" style={{ marginTop: '-150px' }}>
                                <div className="flex flex-col gap-8">
                                    <div className="w-full flex-shrink-0">
                                        <div className="bg-gray-200 w-full relative h-[250px]">
                                            <img
                                                src={dean.imageUrl}
                                                alt={dean.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <h3 className="text-2xl font-bold text-[#002856] mb-2 font-lato">{dean.name}</h3>
                                        <p className="text-gray-500 mb-6 font-lato italic">{dean.designation}</p>

                                        <div className="prose max-w-none text-gray-700 font-lato mb-6 whitespace-pre-line text-sm">
                                            {displayText}
                                        </div>

                                        {deanMessage.length > 400 && (
                                            <button
                                                onClick={() => setIsExpanded(!isExpanded)}
                                                className="inline-flex items-center text-[#d32f2f] hover:text-[#b71c1c] font-bold uppercase tracking-wide transition-colors"
                                            >
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                                <svg className={`w-4 h-4 ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Dean's Card */}
            {dean && (
                <div className="lg:hidden px-4 pb-12">
                    <div className="bg-white shadow-lg p-6 rounded-none w-full mb-8" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
                        <div className="flex flex-col gap-6">
                            <div className="bg-gray-200 w-full relative h-[250px]">
                                <img src={dean.imageUrl} alt={dean.name} className="w-full h-full object-cover object-top" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#002856] mb-2 font-lato">{dean.name}</h3>
                                <p className="text-gray-500 mb-6 font-lato italic">{dean.designation}</p>
                                <div className="prose max-w-none text-gray-700 font-lato mb-6 whitespace-pre-line text-sm">
                                    {displayText}
                                </div>
                                {deanMessage.length > 400 && (
                                    <button onClick={() => setIsExpanded(!isExpanded)} className="inline-flex items-center text-[#d32f2f] hover:text-[#b71c1c] font-bold uppercase tracking-wide transition-colors">
                                        {isExpanded ? 'Read Less' : 'Read More'} <svg className={`w-4 h-4 ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Faculty Popup */}
            <FacultyPopup
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                data={selectedMember}
            />
        </div>
    );
}
