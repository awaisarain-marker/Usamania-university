'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import StickyNav from '@/components/admission/StickyNav';
import AcademicsGrid from '@/components/home/AcademicsGrid';
import LeadershipSection from '@/components/layout/LeadershipSection';
import FaqsAccordion from '@/components/admission/FaqsAccordion';
import Carousel from '@/components/ui/Carousel';

export default function AdmissionPage() {
    return (
        <div className="page-admission">
            <PageHero
                title="Admissions"
                subtitle="Join the future of technology and innovation"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Admission' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#academics" className="btn-secondary --red --border --arrow">
                        <span>Explore Programs</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>
                </div>
            </PageHero>

            <StickyNav />

            <div id="academics">
                <AcademicsGrid />
            </div>

            <div id="admission-info">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <LeadershipSection
                        hideHeader
                        customBottomSection={<></>}
                        customTabs={[
                            {
                                id: 'admission-information',
                                label: 'Admission Information',
                                content: (
                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                        <div className="qec-vision-content-wrap">
                                            <div className="section-title">
                                                <h2>Admission Information</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">
                                                <h3 className="text-2xl font-bold text-[#002856] mb-6">Graduate / Undergraduate Programs</h3>

                                                {/* CS Dept */}
                                                <div className="mb-8">
                                                    <h4 className="text-xl font-bold text-[#ed1c24] mb-3">Department of Computer Science</h4>
                                                    <ul className="list-disc pl-5 mb-4 space-y-1 font-medium">
                                                        <li>BS Computer Science</li>
                                                        <li>BS Software Engineering</li>
                                                    </ul>
                                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856] mb-4">
                                                        <strong className="text-[#002856] block mb-2">Eligibility for BS Programs:</strong>
                                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                                            <li>Passed either Higher Secondary Examination (HSC-II) in Pre-Engineering/Pre-Medical/Science General/Computer Science) from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 marks OR is awaiting his/her final result of HSC-II.</li>
                                                            <li>HSC-II (Pre-medical) students must pass deficiency courses of Mathematics of 6 credit hours within one year of their regular studies.</li>
                                                        </ul>
                                                    </div>

                                                    <h5 className="font-bold text-[#002856] mt-4 mb-2">MS Computer Science</h5>
                                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856]">
                                                        <strong className="text-[#002856] block mb-2">Eligibility:</strong>
                                                        <p className="text-sm">Sixteen years of schooling or 4-year education after HSSC or equivalent (minimum 124 credit hours) from HEC recognized degree awarding institute, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields: Computing, Communication / Telecommunication, Electronics or any other field as deemed relevant by the Admission Committee.</p>
                                                    </div>
                                                </div>

                                                {/* Electrical Dept */}
                                                <div className="mb-8">
                                                    <h4 className="text-xl font-bold text-[#ed1c24] mb-3">Department of Electrical Engineering</h4>

                                                    <h5 className="font-bold text-[#002856] mb-2">MS Electrical Engineering</h5>
                                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856] mb-4">
                                                        <strong className="text-[#002856] block mb-2">Eligibility:</strong>
                                                        <p className="text-sm">Candidate must have a PEC-recognized BE / BS Engg. / BSc Engg. or equivalent degree, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields: Electrical, Electronics, Controls or relevant.</p>
                                                    </div>

                                                    <h5 className="font-bold text-[#002856] mb-2">MS Communication and Network Engineering</h5>
                                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856]">
                                                        <strong className="text-[#002856] block mb-2">Eligibility:</strong>
                                                        <p className="text-sm">Sixteen years of schooling or 4-year education after HSSC or equivalent (minimum 124 credit hours) from HEC recognized degree awarding institute, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields: Computing, Communication / Telecommunication, Electronics or relevant.</p>
                                                    </div>
                                                </div>

                                                {/* Management Dept */}
                                                <div className="mb-10">
                                                    <h4 className="text-xl font-bold text-[#ed1c24] mb-3">Department of Management Sciences</h4>
                                                    <ul className="list-disc pl-5 mb-4 space-y-1 font-medium">
                                                        <li>BBA (Bachelor in Business Administration)</li>
                                                        <li>BS Accounting and Finance</li>
                                                    </ul>
                                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856]">
                                                        <strong className="text-[#002856] block mb-2">Eligibility:</strong>
                                                        <p className="text-sm">Passed either Higher Secondary Examination (HSC-II) or equivalent from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 marks are eligible to apply for admission.</p>
                                                    </div>
                                                </div>

                                                {/* Important Dates */}
                                                <div>
                                                    <h3 className="text-2xl font-bold text-[#002856] mb-6">IMPORTANT DATES</h3>
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-collapse">
                                                            <tbody>
                                                                <tr className="border-b border-gray-200">
                                                                    <td className="py-3 pr-4 font-bold text-[#002856]">Online Application</td>
                                                                    <td className="py-3 font-medium">
                                                                        <a href="https://eduboard.uit.edu/AdmissionPortal/Login" target="_blank" rel="noopener noreferrer" className="animated-link break-all">
                                                                            https://eduboard.uit.edu/AdmissionPortal/Login
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="border-b border-gray-200">
                                                                    <td className="py-3 pr-4 font-bold text-[#002856]">Last date for submission of the online Application form</td>
                                                                    <td className="py-3">Thursday, January 08 2026</td>
                                                                </tr>
                                                                <tr className="border-b border-gray-200">
                                                                    <td className="py-3 pr-4 font-bold text-[#002856]">Entrance Test date</td>
                                                                    <td className="py-3">Saturday, January 10, 2026</td>
                                                                </tr>
                                                                <tr className="border-b border-gray-200">
                                                                    <td className="py-3 pr-4 font-bold text-[#002856]">Entrance Test Time / Venue</td>
                                                                    <td className="py-3">11.00 am / UIT University</td>
                                                                </tr>
                                                                <tr className="border-b border-gray-200">
                                                                    <td className="py-3 pr-4 font-bold text-[#002856]">Start of Academic Session</td>
                                                                    <td className="py-3">February, 2026</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'faqs',
                                label: 'FAQs',
                                content: (
                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                        <div className="qec-vision-content-wrap">
                                            <div className="section-title">
                                                <h2>FAQs</h2>
                                            </div>
                                            <FaqsAccordion />
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'how-to-apply',
                                label: 'How to Apply',
                                content: (
                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                        <div className="qec-vision-content-wrap">
                                            <div className="section-title">
                                                <h2>How to Apply / Online Admission Procedure</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">

                                                <h4 className="font-bold text-[#002856] text-xl mb-3 mt-6">Registration</h4>
                                                <ul className="list-decimal pl-5 space-y-2 mb-6 font-medium">
                                                    <li>Register at the admission portal by clicking here.</li>
                                                    <li>Open your email and click on the link received to validate your email address.</li>
                                                    <li>Proceed with the rest of the online application process using the link received.</li>
                                                </ul>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Submission of Application Form</h4>
                                                <ol className="list-decimal pl-5 space-y-2 mb-6 font-medium">
                                                    <li>Log-in to the admission portal using your user ID & password.</li>
                                                    <li>Fill in the details and upload a recent photograph. Please note that the photograph must be clear and on white background. (see photograph specification).</li>
                                                    <li>Upload all required academic documents.</li>
                                                    <li>Submit the application and download the system-generated fee voucher.</li>
                                                </ol>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Documents Required to upload with the Application Form</h4>
                                                <ul className="list-disc pl-5 space-y-2 mb-6 font-medium">
                                                    <li>SSC marks sheet / O-Level equivalency.</li>
                                                    <li>HSC-Part II consolidated marks sheet / A-Level equivalency.</li>
                                                    <li>SSC Certificate.</li>
                                                    <li>HSC Part-II admit card (for result awaited students).</li>
                                                    <li>CNIC/Form-B.</li>
                                                </ul>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Application Processing Fee</h4>
                                                <ol className="list-decimal pl-5 space-y-2 mb-6 font-medium">
                                                    <li>Print out the system-generated fee voucher after application submission.</li>
                                                    <li>Visit any branch of Meezan Bank and pay the admission processing fee PKR 3,000.</li>
                                                    <li>Submit a scanned copy of the paid fee voucher through the admission portal and email at <a href="mailto:admission@uitu.edu.pk" className="text-[#ed1c24] hover:underline">admission@uitu.edu.pk</a></li>
                                                </ol>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Issuance of Admit Card</h4>
                                                <p className="mb-6">After receiving all the information and confirmation of the fee receipt by UIT University, an email and SMS alert will be sent to the candidates to print out the admit card.</p>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Entrance Test</h4>
                                                <ul className="list-disc pl-5 space-y-2 mb-6 font-medium">
                                                    <li>The entrance test will be conducted on Saturday January 10, 2026 at 11:00 A.M. at UIT University.</li>
                                                    <li>The candidate must bring the UIT University admit card on the entry test day.</li>
                                                </ul>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Interview</h4>
                                                <p className="mb-6">The candidate will receive a schedule of the interview via email & SMS.</p>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Merit List</h4>
                                                <p className="mb-6">The candidate will receive an email regarding the admission offer.</p>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Merit Determination Criteria</h4>
                                                <div className="overflow-x-auto mb-6">
                                                    <table className="w-full text-left border-collapse border border-gray-300">
                                                        <tbody>
                                                            <tr className="border-b border-gray-300">
                                                                <td className="p-3 font-bold border-r border-gray-300">Weightage of Pre-Entry Admission test</td>
                                                                <td className="p-3">50%</td>
                                                            </tr>
                                                            <tr className="border-b border-gray-300">
                                                                <td className="p-3 font-bold border-r border-gray-300">Weightage of HSC marks OR equivalent</td>
                                                                <td className="p-3">40%</td>
                                                            </tr>
                                                            <tr className="border-b border-gray-300">
                                                                <td className="p-3 font-bold border-r border-gray-300">Weightage of SSC marks OR equivalent</td>
                                                                <td className="p-3">10%</td>
                                                            </tr>
                                                            <tr className="bg-gray-100">
                                                                <td className="p-3 font-bold border-r border-gray-300">Pre-Admission Interviews</td>
                                                                <td className="p-3 font-bold text-[#ed1c24]">ACCEPT/DECLINE</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Submission of Documents</h4>
                                                <p className="mb-6">The candidate will be asked to visit UIT University to submit the admission fee along with their educational documents in order to receive their UIT University roll number.</p>

                                                <h4 className="font-bold text-[#002856] text-xl mb-3">Payment of Registration Fee</h4>
                                                <p className="mb-2">The candidate is required to pay the fee via pay order, using the following details:</p>
                                                <ul className="list-disc pl-5 space-y-1 mb-6 font-medium">
                                                    <li><strong>Account title:</strong> UIT University</li>
                                                    <li><strong>NTN #:</strong> 4473774</li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                )
                            },


                            {
                                id: 'fee-structure',
                                label: 'Fee Structure',
                                content: (
                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                        <div className="qec-vision-content-wrap">
                                            <div className="section-title">
                                                <h2>Fee Structure</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">

                                                <h3 className="text-2xl font-bold text-[#002856] mb-4">Undergraduate Programs – Fee Information</h3>
                                                <h4 className="text-xl font-bold text-[#ed1c24] mb-4">Fall 2025 Semester</h4>

                                                <div className="overflow-x-auto mb-10">
                                                    <table className="w-full text-left border-collapse border border-gray-300 text-sm">
                                                        <thead>
                                                            <tr className="bg-[#002856] text-white text-center">
                                                                <th rowSpan={2} className="p-2 border border-gray-400 align-middle">Sr.</th>
                                                                <th rowSpan={2} className="p-2 border border-gray-400 align-middle text-left">Programs</th>
                                                                <th colSpan={2} className="p-2 border border-gray-400">One Time Charges</th>
                                                                <th colSpan={2} className="p-2 border border-gray-400">Semester Fee</th>
                                                                <th colSpan={3} className="p-2 border border-gray-400">Semester Fee at the time of Admission</th>
                                                            </tr>
                                                            <tr className="bg-gray-100 text-[#002856] text-center font-bold">
                                                                <th className="p-2 border border-gray-300">Admission Fee</th>
                                                                <th className="p-2 border border-gray-300">Security Deposit</th>
                                                                <th className="p-2 border border-gray-300">Semester Charges</th>
                                                                <th className="p-2 border border-gray-300">Tuition Fee<br /><span className="text-xs font-normal">(per Credit Hour)</span></th>
                                                                <th className="p-2 border border-gray-300">1st Semester<br /><span className="text-xs font-normal">Credit Hour</span></th>
                                                                <th className="p-2 border border-gray-300">1st Semester<br /><span className="text-xs font-normal">Tuition Fee</span></th>
                                                                <th className="p-2 border border-gray-300">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            {/* Row 1: BS CS */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">1</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BS (Computer Science)</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">-</td>
                                                                <td className="p-2 border-r border-gray-300">9,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,870</td>
                                                                <td className="p-2 border-r border-gray-300">15</td>
                                                                <td className="p-2 border-r border-gray-300">163,050</td>
                                                                <td className="p-2 font-bold text-[#002856]">197,050</td>
                                                            </tr>
                                                            {/* Row 2: BS SE */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">2</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BS (Software Engineering)</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">-</td>
                                                                <td className="p-2 border-r border-gray-300">9,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,870</td>
                                                                <td className="p-2 border-r border-gray-300">15</td>
                                                                <td className="p-2 border-r border-gray-300">163,050</td>
                                                                <td className="p-2 font-bold text-[#002856]">197,050</td>
                                                            </tr>
                                                            {/* Row 3: BS AI */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">3</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BS (Artificial Intelligence)</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">9,000</td>
                                                                <td className="p-2 border-r border-gray-300">8,000</td>
                                                                <td className="p-2 border-r border-gray-300">15</td>
                                                                <td className="p-2 border-r border-gray-300">120,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">169,000</td>
                                                            </tr>
                                                            {/* Row 4: BS DS */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">4</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BS (Data Science)</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">9,000</td>
                                                                <td className="p-2 border-r border-gray-300">8,000</td>
                                                                <td className="p-2 border-r border-gray-300">15</td>
                                                                <td className="p-2 border-r border-gray-300">120,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">169,000</td>
                                                            </tr>
                                                            {/* Row 5: BE Computer Systems */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">5</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BE Computer Systems</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,000</td>
                                                                <td className="p-2 border-r border-gray-300">6,700</td>
                                                                <td className="p-2 border-r border-gray-300">16</td>
                                                                <td className="p-2 border-r border-gray-300">107,200</td>
                                                                <td className="p-2 font-bold text-[#002856]">157,200</td>
                                                            </tr>
                                                            {/* Row 6: BE Electrical */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">6</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BE Electrical</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,000</td>
                                                                <td className="p-2 border-r border-gray-300">6,700</td>
                                                                <td className="p-2 border-r border-gray-300">16</td>
                                                                <td className="p-2 border-r border-gray-300">107,200</td>
                                                                <td className="p-2 font-bold text-[#002856]">157,200</td>
                                                            </tr>
                                                            {/* Row 7: BS Accounting & Finance */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">7</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BS (Accounting & Finance)</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,000</td>
                                                                <td className="p-2 border-r border-gray-300">5,000</td>
                                                                <td className="p-2 border-r border-gray-300">17</td>
                                                                <td className="p-2 border-r border-gray-300">85,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">135,000</td>
                                                            </tr>
                                                            {/* Row 8: BBA */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">8</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">BBA</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,000</td>
                                                                <td className="p-2 border-r border-gray-300">5,400</td>
                                                                <td className="p-2 border-r border-gray-300">17</td>
                                                                <td className="p-2 border-r border-gray-300">91,800</td>
                                                                <td className="p-2 font-bold text-[#002856]">141,800</td>
                                                            </tr>
                                                            {/* Row 9: BE Tech Computer */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">9</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">B.E. Tech (Computer)</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,000</td>
                                                                <td className="p-2 border-r border-gray-300">3,000</td>
                                                                <td className="p-2 border-r border-gray-300">16</td>
                                                                <td className="p-2 border-r border-gray-300">48,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">98,000</td>
                                                            </tr>
                                                            {/* Row 10: BE Tech Software */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">10</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">B.E. Tech (Software)</td>
                                                                <td className="p-2 border-r border-gray-300">25,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">10,000</td>
                                                                <td className="p-2 border-r border-gray-300">3,000</td>
                                                                <td className="p-2 border-r border-gray-300">16</td>
                                                                <td className="p-2 border-r border-gray-300">48,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">98,000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <h3 className="text-2xl font-bold text-[#002856] mb-4">Graduate Programs – Fee Information</h3>
                                                <div className="overflow-x-auto mb-8">
                                                    <table className="w-full text-left border-collapse border border-gray-300 text-sm">
                                                        <thead>
                                                            <tr className="bg-[#002856] text-white text-center">
                                                                <th className="p-2 border border-gray-400 align-middle">Sr.</th>
                                                                <th className="p-2 border border-gray-400 align-middle text-left">Programs</th>
                                                                <th className="p-2 border border-gray-400">Admission Fee</th>
                                                                <th className="p-2 border border-gray-400">Security Deposit</th>
                                                                <th className="p-2 border border-gray-400">Semester Charges</th>
                                                                <th className="p-2 border border-gray-400">Tuition Fee<br /><span className="text-xs font-normal">(per Credit Hour)</span></th>
                                                                <th className="p-2 border border-gray-400">1st Semester<br /><span className="text-xs font-normal">Credit Hours</span></th>
                                                                <th className="p-2 border border-gray-400">1st Semester<br /><span className="text-xs font-normal">Tuition Fee</span></th>
                                                                <th className="p-2 border border-gray-400">Total at the time of Admission</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            {/* Row 1: MS CS */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">11</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">MS (Computer Science)</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">8,000</td>
                                                                <td className="p-2 border-r border-gray-300">9,000</td>
                                                                <td className="p-2 border-r border-gray-300">12</td>
                                                                <td className="p-2 border-r border-gray-300">108,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">146,000</td>
                                                            </tr>
                                                            {/* Row 2: MS Electrical Engg */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">12</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">MS (Electrical Engg.)</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">8,000</td>
                                                                <td className="p-2 border-r border-gray-300">8,000</td>
                                                                <td className="p-2 border-r border-gray-300">12</td>
                                                                <td className="p-2 border-r border-gray-300">96,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">134,000</td>
                                                            </tr>
                                                            {/* Row 3: MS Comm & Net Engg */}
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-2 border-r border-gray-300">13</td>
                                                                <td className="p-2 border-r border-gray-300 text-left font-medium">MS (Comm & Net Engg.)</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">15,000</td>
                                                                <td className="p-2 border-r border-gray-300">8,000</td>
                                                                <td className="p-2 border-r border-gray-300">8,000</td>
                                                                <td className="p-2 border-r border-gray-300">12</td>
                                                                <td className="p-2 border-r border-gray-300">96,000</td>
                                                                <td className="p-2 font-bold text-[#002856]">134,000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="bg-gray-50 p-4 border-l-4 border-[#ed1c24]">
                                                    <h5 className="font-bold text-[#002856] mb-2">Note:</h5>
                                                    <ul className="list-disc pl-5 space-y-1 text-sm font-medium">
                                                        <li>(a) An anticipated increase of about 10% in tuition fees is expected every Fall, in alignment with the annual inflation rate.</li>
                                                        <li>(b) University fees are subject to change without prior notice. The institution reserves the right to revise the fee structure at its discretion.</li>
                                                        <li>(c) The security deposit for BS (Computer Science) and BS (Software Engineering) programs will be charged in the second semester.</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'fee-refund-policy',
                                label: 'Fee Refund Policy',
                                content: (
                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                        <div className="qec-vision-content-wrap">
                                            <div className="section-title">
                                                <h2>Fee Refund Policy</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">

                                                <div className="mb-6">
                                                    <p className="mb-4">The Higher Education Commission (HEC) has circulated the revised National Fee-Refund Policy for Higher Education Institutions in Pakistan, updated in 2024.</p>
                                                    <ul className="list-disc pl-5 space-y-2 mb-4 font-medium">
                                                        <li>Admission Fee is non-refundable in any case.</li>
                                                        <li>Security deposit is refundable at the time of completion of degree or closing of admission subject to clearance.</li>
                                                        <li>Tuition Fee/Exam Fee/Enrolment Fee/Extra Curricular Charges is refundable in accordance with the guidelines of Higher Education Commission (HEC).</li>
                                                    </ul>
                                                    <p className="mb-4 font-medium italic">Please note that the below said policy will be applicable from the commencement of classes. Days shall be counted including working days and holidays.</p>
                                                    <p className="mb-4">The same policy will apply to candidates offered admissions with pending results as well as in the event of any issues arising in the HSC/A-Level/Equivalent results after the commencement of classes.</p>
                                                </div>

                                                <div className="overflow-x-auto mb-6">
                                                    <table className="w-full text-left border-collapse border border-gray-300">
                                                        <thead>
                                                            <tr className="bg-[#002856] text-white">
                                                                <th className="p-3 border border-gray-400">Commencement of Classes</th>
                                                                <th className="p-3 border border-gray-400">Refund % of Tuition Fee</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-gray-700">
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-3 border-r border-gray-300">Up to 10th day of the commencement of classes</td>
                                                                <td className="p-3 font-bold text-[#002856]">100% Fee Refund</td>
                                                            </tr>
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-3 border-r border-gray-300">Up to 15th day of commencement of classes</td>
                                                                <td className="p-3 font-bold text-[#002856]">80% Fee Refund</td>
                                                            </tr>
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-3 border-r border-gray-300">Up to 20th day of commencement of classes</td>
                                                                <td className="p-3 font-bold text-[#002856]">60% Fee Refund</td>
                                                            </tr>
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                                                <td className="p-3 border-r border-gray-300">Up to 30th day of commencement of classes</td>
                                                                <td className="p-3 font-bold text-[#002856]">50% Fee Refund</td>
                                                            </tr>
                                                            <tr className="border-b border-gray-300 hover:bg-gray-50 bg-red-50">
                                                                <td className="p-3 border-r border-gray-300 font-medium text-[#ed1c24]">31st day onwards of commencement of classes</td>
                                                                <td className="p-3 font-bold text-[#ed1c24]">No Refund</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            },

                            {
                                id: 'admission-test-results',
                                label: 'Admission Test Results',
                                content: (
                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                        <div className="qec-vision-content-wrap">
                                            <div className="section-title">
                                                <h2>Admission Test Results</h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-600">

                                                <h3 className="text-xl font-bold text-[#002856] mb-4">Results Archive</h3>

                                                <ul className="mb-6 space-y-4">
                                                    <li>
                                                        <a
                                                            href="https://uitu.edu.pk/wp-content/uploads/2025/10/GAT-result-announcement-Fall-2025.pdf"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="animated-link font-bold text-[#ed1c24] text-lg inline-flex items-center gap-2"
                                                        >
                                                            GAT Fall 2025 NEW
                                                            <svg width="20" height="20" className="opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M19 19V19.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M5 19V19.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M5 16V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M19 16V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="text-gray-400 font-medium text-lg cursor-not-allowed">
                                                            GAT Spring 2025 (Coming Soon)
                                                        </span>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'outreach-programs',
                                label: 'Outreach Programs',
                                content: (
                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                        <div className="qec-vision-content-wrap">
                                            <div className="section-title">
                                                <h2>Outreach Programs</h2>
                                            </div>
                                            <div className="space-y-12">
                                                {[
                                                    {
                                                        title: "Dhoraji Youth Services Foundation invited UIT for Career Counselling Seminar",
                                                        images: ["wfer", "wefwf", "swefwef", "WhatsApp Image 2025-07-09 at 3.33.37 PM", "WhatsApp Image 2025-06-29 at 12.19.05 AM"]
                                                    },
                                                    {
                                                        title: "UIT University visited Govt. National College 2024",
                                                        images: ["WhatsApp Image 2024-11-28 at 12.32.15 PM (1)", "WhatsApp Image 2024-11-28 at 12.32.16 PM", "WhatsApp Image 2024-11-28 at 12.32.18 PM", "WhatsApp Image 2024-11-28 at 12.32.19 PM (1)", "WhatsApp Image 2024-11-28 at 12.32.17 PM"]
                                                    },
                                                    {
                                                        title: "Visit by Study Collegiate to UIT University",
                                                        images: ["IMG_0454", "IMG_0465", "IMG_0467", "IMG_0473", "IMG_0474"]
                                                    },
                                                    {
                                                        title: "UIT University participated in OMJ Freelancer Conference",
                                                        images: ["WhatsApp Image 2024-02-12 at 1.36.59 PM (3)", "WhatsApp Image 2024-02-12 at 1.36.59 PM", "WhatsApp Image 2024-02-12 at 1.37.00 PM", "WhatsApp Image 2024-02-12 at 1.36.58 PM (1)", "WhatsApp Image 2024-02-12 at 1.36.58 PM"]
                                                    },
                                                    {
                                                        title: "Visit by Vision Academy to UIT University",
                                                        images: ["IMG_8947", "Optimized-IMG_9027 (1)", "Optimized-IMG_9002", "Optimized-IMG_9019", "Optimized-IMG_9007"]
                                                    },
                                                    {
                                                        title: "Visit by Quaid e Azam Rangers School & College to UIT University",
                                                        images: ["Optimized-IMG_8669", "Optimized-IMG_8588", "Optimized-IMG_8657", "Optimized-IMG_8650", "Optimized-IMG_8582"]
                                                    },
                                                    {
                                                        title: "UIT University visited Govt. Degree College Sukkur",
                                                        images: ["WhatsApp Image 2024-01-31 at 10.57.47 AM", "WhatsApp Image 2024-01-31 at 10.57.48 AM (1)", "WhatsApp Image 2024-01-31 at 10.57.48 AM (2)", "WhatsApp Image 2024-01-31 at 10.57.48 AM", "WhatsApp Image 2024-01-31 at 10.57.49 AM"]
                                                    },
                                                    {
                                                        title: "EDU Clan 3.0 Tando Muhammad Khan",
                                                        images: ["WhatsApp Image 2023-12-03 at 11.35.36 PM", "WhatsApp Image 2023-12-03 at 11.35.35 PM", "WhatsApp Image 2023-12-03 at 11.35.33 PM", "WhatsApp Image 2023-12-03 at 11.35.31 PM", "Untitled Project"]
                                                    },
                                                    {
                                                        title: "EDU Clan 3.0 Hyderabad",
                                                        images: ["WhatsApp Image 2023-12-02 at 11.57.55 PM", "Untitled Project (2)", "WhatsApp Image 2023-12-02 at 11.20.02 PM", "WhatsApp Image 2023-12-02 at 11.20.12 PM", "WhatsApp Image 2023-12-02 at 11.49.24 PM"]
                                                    },
                                                    {
                                                        title: "Conducted a Counseling Session at Govt. Dehli College",
                                                        images: ["WhatsApp Image 2024-01-31 at 10.49.46 AM", "WhatsApp Image 2024-01-31 at 10.49.45 AM", "WhatsApp Image 2024-01-31 at 10.49.46 AM", "WhatsApp Image 2024-01-31 at 10.49.45 AM", "WhatsApp Image 2024-01-31 at 10.49.46 AM"]
                                                    },
                                                    {
                                                        title: "Participated in The Intellect School Career Fair 2023 Expo",
                                                        images: ["WhatsApp Image 2023-11-14 at 2.40.02 PM", "WhatsApp Image 2023-11-14 at 2.40.04 PM", "WhatsApp Image 2023-11-15 at 12.42.52 PM", "WhatsApp Image 2023-11-15 at 12.42.53 PM", "WhatsApp Image 2023-11-15 at 12.44.17 PM"]
                                                    },
                                                    {
                                                        title: "UIT University visited Govt. National College 2023",
                                                        images: ["WhatsApp Image 2024-01-31 at 10.56.58 AM", "WhatsApp Image 2024-01-31 at 10.56.56 AM", "WhatsApp Image 2024-01-31 at 10.56.57 AM (1)", "WhatsApp Image 2024-01-31 at 10.56.57 AM (2)", "WhatsApp Image 2024-01-31 at 10.56.57 AM"]
                                                    },
                                                    {
                                                        title: "Outreach Visit to Govt. College Gulzar e Hijri",
                                                        images: ["WhatsApp Image 2023-11-22 at 12.23.14 PM (1)", "WhatsApp Image 2023-11-22 at 12.23.17 PM", "WhatsApp Image 2023-11-22 at 12.23.19 PM", "WhatsApp Image 2023-11-22 at 12.23.21 PM", "WhatsApp Image 2023-11-22 at 12.23.29 PM"]
                                                    },
                                                    {
                                                        title: "5th Pakistan Navy Industry Seminar & Exhibition 2023 Expo",
                                                        images: ["WhatsApp Image 2023-11-22 at 5.17.53 PM (1)", "WhatsApp Image 2023-11-22 at 5.17.54 PM", "WhatsApp Image 2023-11-22 at 5.17.55 PM", "WhatsApp Image 2023-11-22 at 5.17.56 PM (1)", "WhatsApp Image 2023-11-22 at 5.17.56 PM"]
                                                    },
                                                    {
                                                        title: "UIT University participated in Dawn Education Expo 2023",
                                                        images: ["WhatsApp Image 2024-01-31 at 10.59.20 AM", "WhatsApp Image 2024-01-31 at 11.00.49 AM (1)", "WhatsApp Image 2024-01-31 at 11.00.49 AM (2)", "WhatsApp Image 2024-01-31 at 11.00.49 AM", "WhatsApp Image 2024-01-31 at 10.51.16 AM"]
                                                    },
                                                    {
                                                        title: "UIT University participated in EDU CLAN 2.0 Tando Muhammad Khan 2022 Expo",
                                                        images: ["WhatsApp Image 2024-01-31 at 11.03.49 AM (2)", "WhatsApp Image 2024-01-31 at 11.03.49 AM", "WhatsApp Image 2024-01-31 at 11.03.50 AM (1)", "WhatsApp Image 2024-01-31 at 11.03.50 AM", "WhatsApp Image 2024-01-31 at 11.03.46 AM (1)"]
                                                    },
                                                    {
                                                        title: "Visit by D'Rajus Coaching Center to UIT University",
                                                        images: ["WhatsApp Image 2024-01-31 at 10.44.19 AM (1)", "WhatsApp Image 2024-01-31 at 10.44.19 AM (2)", "WhatsApp Image 2024-01-31 at 10.44.19 AM", "WhatsApp Image 2024-01-31 at 10.44.20 AM", "WhatsApp Image 2024-01-31 at 10.44.55 AM"]
                                                    },
                                                    {
                                                        title: "UIT University particpated in The Caspian College Education Expo",
                                                        images: ["WhatsApp Image 2024-01-31 at 11.02.13 AM", "WhatsApp Image 2024-01-31 at 11.02.14 AM", "WhatsApp Image 2024-01-31 at 11.02.35 AM (2)", "WhatsApp Image 2024-01-31 at 11.02.35 AM", "WhatsApp Image 2024-01-31 at 11.02.36 AM (1)"]
                                                    },
                                                    {
                                                        title: "UIT University participated in The News Education Expo 2023",
                                                        images: ["WhatsApp Image 2024-01-31 at 10.54.23 AM", "WhatsApp Image 2024-01-31 at 10.54.24 AM", "WhatsApp Image 2024-01-31 at 10.50.39 AM", "WhatsApp Image 2024-01-31 at 10.54.22 AM (1)", "WhatsApp Image 2024-01-31 at 10.54.22 AM"]
                                                    }
                                                ].map((event, index) => (
                                                    <div key={index} className="border-b last:border-0 pb-8 last:pb-0">
                                                        <h3 className="text-2xl font-bold text-[#002856] mb-4">{event.title}</h3>
                                                        <div className="mb-4">
                                                            <Carousel items={event.images.map((img, i) => ({
                                                                id: `${index}-${i}`,
                                                                image: `/images/outreach/${img}.jpg` // Placeholder path
                                                            }))} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        ]}
                    />
                </React.Suspense>
            </div>
        </div>
    );
}
