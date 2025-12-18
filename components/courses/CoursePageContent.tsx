'use client'

import React from 'react'
import PageHero from '@/components/layout/PageHero'
import LeadershipSection from '@/components/layout/LeadershipSection'
import { PortableText } from '@portabletext/react'
import BlogSection from '@/components/home/BlogSection'
import EventsSection from '@/components/home/EventsSection'

interface Course {
    _id: string
    title: string
    slug: string
    subtitle?: string
    heroImage?: string
    overviewImage?: string
    overviewContent?: any[]
    degreeRequirements?: {
        duration?: number
        semesters?: number
        coursesPerSemester?: string
        totalCredits?: number
        totalCourses?: string
    }
    semesterData?: {
        name: string
        totalCredits: number
        courses: {
            code: string
            title: string
            creditLecture: number
            creditLab: number
            total: number
        }[]
    }[]
    internship?: {
        text: string
        credits: number
    }
    peos?: string[]
    plos?: string[]
    eligibility?: any[]
    admissionTestCriteria?: string[]
}

interface CoursePageContentProps {
    course: Course
}

function SemesterTable({ semesterName, courses, totalCredits }: {
    semesterName: string
    courses: NonNullable<Course['semesterData']>[0]['courses']
    totalCredits: number
}) {
    return (
        <div className="mb-8">
            <div className="bg-[#002856] text-white p-4 flex justify-between items-center">
                <h3 className="font-bold text-lg uppercase m-0">{semesterName}</h3>
                <span className="font-bold">Total: {totalCredits} Credits</span>
            </div>
            <table className="w-full border-collapse" style={{ fontSize: '17px' }}>
                <thead className="bg-[#e6eef4]">
                    <tr>
                        <th className="border border-gray-300 p-3 text-left">Code</th>
                        <th className="border border-gray-300 p-3 text-left">Course Title</th>
                        <th className="border border-gray-300 p-3 text-center">Lecture</th>
                        <th className="border border-gray-300 p-3 text-center">Lab</th>
                        <th className="border border-gray-300 p-3 text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {courses?.map((course, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="border border-gray-300 p-3">{course.code}</td>
                            <td className="border border-gray-300 p-3">{course.title}</td>
                            <td className="border border-gray-300 p-3 text-center">{course.creditLecture}</td>
                            <td className="border border-gray-300 p-3 text-center">{course.creditLab}</td>
                            <td className="border border-gray-300 p-3 text-center font-bold">{course.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default function CoursePageContent({ course }: CoursePageContentProps) {
    const defaultHeroImage = 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg'

    const customTabs = [
        {
            id: 'overview',
            label: 'Overview',
            content: (
                <div className="accordion-section__head">
                    {course.overviewImage && (
                        <div className="accordion-section__head-image">
                            <img
                                src={course.overviewImage}
                                alt="Overview"
                                style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                    <div className="accordion-section__head-text -light-bg" style={{ marginTop: course.overviewImage ? '-150px' : '0' }}>
                        <div className="accordion-section__head-text-wrap">
                            <div className="section-title">
                                <h2>Overview</h2>
                            </div>
                            <div className="prose max-w-none text-gray-600">
                                {course.overviewContent && (
                                    <PortableText value={course.overviewContent} />
                                )}

                                {course.degreeRequirements && (
                                    <>
                                        <h3 className="text-[#002856] font-bold text-xl mt-6 mb-4">Degree Requirements</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {course.degreeRequirements.duration && (
                                                <li><strong>Duration of Program (In Years):</strong> {course.degreeRequirements.duration}</li>
                                            )}
                                            {course.degreeRequirements.semesters && (
                                                <li><strong>Number of semesters:</strong> {course.degreeRequirements.semesters}</li>
                                            )}
                                            {course.degreeRequirements.coursesPerSemester && (
                                                <li><strong>Number of courses per semester:</strong> {course.degreeRequirements.coursesPerSemester}</li>
                                            )}
                                            {course.degreeRequirements.totalCredits && (
                                                <li><strong>Total credit hours:</strong> {course.degreeRequirements.totalCredits}</li>
                                            )}
                                            {course.degreeRequirements.totalCourses && (
                                                <li><strong>Total number of courses:</strong> {course.degreeRequirements.totalCourses}</li>
                                            )}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'courses',
            label: 'Courses',
            content: (
                <div className="w-full pt-8">
                    <div className="w-full">
                        {course.semesterData?.map((semester, idx) => (
                            <SemesterTable
                                key={idx}
                                semesterName={semester.name}
                                courses={semester.courses}
                                totalCredits={semester.totalCredits}
                            />
                        ))}

                        {course.internship && (
                            <div className="mb-8">
                                <div className="bg-[#e6eef4] p-4 border-l-4 border-[#ed1c24] flex justify-between items-center rounded-none">
                                    <h3 className="text-[#002856] font-bold text-lg uppercase m-0">{course.internship.text}</h3>
                                    <span className="text-[#ed1c24] font-bold text-lg">{course.internship.credits} Credits</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
        },
        {
            id: 'peos-plos',
            label: "PEO's and PLO's",
            content: (
                <div className="w-full pt-8">
                    <div className="section-title">
                        <h2>PEO&apos;s and PLO&apos;s</h2>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        {course.peos && course.peos.length > 0 && (
                            <>
                                <h3 className="text-[#002856] font-bold text-xl mb-4">Program Educational Objectives</h3>
                                <p>The graduates of the {course.title} program will have the knowledge, understanding and skills to:</p>
                                <ul className="list-disc pl-5 mb-8 space-y-2">
                                    {course.peos.map((peo, idx) => (
                                        <li key={idx}>{peo}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {course.plos && course.plos.length > 0 && (
                            <>
                                <h3 className="text-[#002856] font-bold text-xl mb-4">Student Outcomes:</h3>
                                <p>The students of {course.title} program are expected to attain the following outcomes by the time of graduation:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    {course.plos.map((plo, idx) => (
                                        <li key={idx}>{plo}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )
        },
        {
            id: 'eligibility',
            label: 'Eligibility',
            content: (
                <div className="w-full pt-8">
                    <div className="section-title">
                        <h2>Eligibility</h2>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        {course.eligibility && (
                            <PortableText value={course.eligibility} />
                        )}

                        {course.admissionTestCriteria && course.admissionTestCriteria.length > 0 && (
                            <>
                                <h3 className="text-[#002856] font-bold text-xl mb-4">Pre Entry Admission Test Eligibility Criteria:</h3>
                                <p className="mb-2">Candidates are required to:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    {course.admissionTestCriteria.map((criteria, idx) => (
                                        <li key={idx}>{criteria}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )
        }
    ]

    return (
        <div className={`page-course page-${course.slug}`}>
            <PageHero
                title={course.title}
                subtitle={course.subtitle || ''}
                bgImage={course.heroImage || defaultHeroImage}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission', href: '/admission' },
                    { label: course.title }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#overview" className="btn-secondary --red --border --arrow">
                        <span>Overview</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </a>
                </div>
            </PageHero>

            {/* Overview Section */}
            <div id="overview" className="py-8 md:py-12 bg-[#e6eef4]">
                <div className="container">
                    <div className="section-title text-center mb-12">
                        <h2>Overview</h2>
                    </div>
                </div>
                <LeadershipSection
                    hideHeader
                    customBottomSection={<></>}
                    customTabs={customTabs}
                />
            </div>

            {/* Blog and Events Sections */}
            <BlogSection title="Latest News" />
            <EventsSection title="Upcoming Events" />
        </div>
    )
}
