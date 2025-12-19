import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const writeClient = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: 'skKNkjf0Q3pm3EFBIdItvRkcDakA4D9ywo3W8GwKc1pJNmVmcOz8lO6t02PSMy4UjqNh1Z0oDSf3JLoM0ZbKHnOXIPYpv7o4DBDlkSv3YkLJqzFKlW2ynD3cBQ6KWDamA12jE9GDqOqSOFtyVI5QFgFWM516DKpA8wfPDGgOtbnShwNvZqIU',
});

// Generate unique key
function createKey() {
    return Math.random().toString(36).substring(2, 12);
}

const admissionPageData = {
    _type: 'page',
    title: 'Admissions',
    slug: { current: 'admission' },
    seoTitle: 'Admissions - UIT University',
    seoDescription: 'Apply to UIT University. Explore undergraduate and graduate programs in Computer Science, Electrical Engineering, and Management Sciences.',
    sections: [
        // Page Hero
        {
            _type: 'pageHeroBlock',
            _key: createKey(),
            title: 'Admissions',
            subtitle: 'Join the future of technology and innovation',
            bgImage: 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg',
            breadcrumbs: [
                { _key: createKey(), label: 'Home', href: '/' },
                { _key: createKey(), label: 'Admission' }
            ],
            heroButtons: [
                { _key: createKey(), text: 'Explore Programs', href: '#academics', style: 'red' }
            ]
        },
        // Academics Grid Section
        {
            _type: 'academicsGridBlock',
            _key: createKey(),
            title: 'UIT <br /> Academics',
            description: 'Discover the program that sparks your passion and sets you up for success. Your academic journey awaits!',
        },
        // Tabbed Content for Admission Info
        {
            _type: 'tabbedContentBlock',
            _key: createKey(),
            sectionId: 'admission-info',
            tabs: [
                // Tab 1: Admission Information - Rich Text with exact frontend content
                {
                    _key: createKey(),
                    tabTitle: 'Admission Information',
                    contentType: 'richText',
                    richContent: `
<h3 class="text-2xl font-bold text-[#002856] mb-6">Graduate / Undergraduate Programs</h3>

<div class="mb-8">
    <h4 class="text-xl font-bold text-[#ed1c24] mb-3">Department of Computer Science</h4>
    <ul class="list-disc pl-5 mb-4 space-y-1 font-medium">
        <li>BS Computer Science</li>
        <li>BS Software Engineering</li>
    </ul>
    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856] mb-4">
        <strong class="text-[#002856] block mb-2">Eligibility for BS Programs:</strong>
        <ul class="list-disc pl-5 space-y-2 text-sm">
            <li>Passed either Higher Secondary Examination (HSC-II) in Pre-Engineering/Pre-Medical/Science General/Computer Science) from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 marks OR is awaiting his/her final result of HSC-II.</li>
            <li>HSC-II (Pre-medical) students must pass deficiency courses of Mathematics of 6 credit hours within one year of their regular studies.</li>
        </ul>
    </div>

    <h5 class="font-bold text-[#002856] mt-4 mb-2">MS Computer Science</h5>
    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856]">
        <strong class="text-[#002856] block mb-2">Eligibility:</strong>
        <p class="text-sm">Sixteen years of schooling or 4-year education after HSSC or equivalent (minimum 124 credit hours) from HEC recognized degree awarding institute, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields: Computing, Communication / Telecommunication, Electronics or any other field as deemed relevant by the Admission Committee.</p>
    </div>
</div>

<div class="mb-8">
    <h4 class="text-xl font-bold text-[#ed1c24] mb-3">Department of Electrical Engineering</h4>

    <h5 class="font-bold text-[#002856] mb-2">MS Electrical Engineering</h5>
    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856] mb-4">
        <strong class="text-[#002856] block mb-2">Eligibility:</strong>
        <p class="text-sm">Candidate must have a PEC-recognized BE / BS Engg. / BSc Engg. or equivalent degree, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields: Electrical, Electronics, Controls or relevant.</p>
    </div>

    <h5 class="font-bold text-[#002856] mb-2">MS Communication and Network Engineering</h5>
    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856]">
        <strong class="text-[#002856] block mb-2">Eligibility:</strong>
        <p class="text-sm">Sixteen years of schooling or 4-year education after HSSC or equivalent (minimum 124 credit hours) from HEC recognized degree awarding institute, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields: Computing, Communication / Telecommunication, Electronics or relevant.</p>
    </div>
</div>

<div class="mb-10">
    <h4 class="text-xl font-bold text-[#ed1c24] mb-3">Department of Management Sciences</h4>
    <ul class="list-disc pl-5 mb-4 space-y-1 font-medium">
        <li>BBA (Bachelor in Business Administration)</li>
        <li>BS Accounting and Finance</li>
    </ul>
    <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#002856]">
        <strong class="text-[#002856] block mb-2">Eligibility:</strong>
        <p class="text-sm">Passed either Higher Secondary Examination (HSC-II) or equivalent from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 marks are eligible to apply for admission.</p>
    </div>
</div>

<div>
    <h3 class="text-2xl font-bold text-[#002856] mb-6">IMPORTANT DATES</h3>
    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <tbody>
                <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-bold text-[#002856]">Online Application</td>
                    <td class="py-3 font-medium">
                        <a href="https://eduboard.uit.edu/AdmissionPortal/Login" target="_blank" rel="noopener noreferrer" class="animated-link break-all">
                            https://eduboard.uit.edu/AdmissionPortal/Login
                        </a>
                    </td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-bold text-[#002856]">Last date for submission of the online Application form</td>
                    <td class="py-3">Thursday, January 08 2026</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-bold text-[#002856]">Entrance Test date</td>
                    <td class="py-3">Saturday, January 10, 2026</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-bold text-[#002856]">Entrance Test Time / Venue</td>
                    <td class="py-3">11.00 am / UIT University</td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-bold text-[#002856]">Start of Academic Session</td>
                    <td class="py-3">February, 2026</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
                    `,
                },
                // Tab 2: FAQs
                {
                    _key: createKey(),
                    tabTitle: 'FAQs',
                    contentType: 'policyLinks',
                    policyCategories: [
                        {
                            _key: createKey(),
                            categoryName: 'Frequently Asked Questions',
                            policies: [
                                { _key: createKey(), policyName: 'What are the admission requirements?', policyUrl: '' },
                                { _key: createKey(), policyName: 'When is the application deadline?', policyUrl: '' },
                                { _key: createKey(), policyName: 'What is the fee structure?', policyUrl: '' },
                                { _key: createKey(), policyName: 'Are scholarships available?', policyUrl: '' },
                            ],
                        },
                    ],
                },
                // Tab 3: How to Apply
                {
                    _key: createKey(),
                    tabTitle: 'How to Apply',
                    contentType: 'policyLinks',
                    policyCategories: [
                        {
                            _key: createKey(),
                            categoryName: 'Registration',
                            policies: [
                                { _key: createKey(), policyName: '1. Register at the admission portal', policyUrl: 'https://eduboard.uit.edu/AdmissionPortal/Login' },
                                { _key: createKey(), policyName: '2. Validate your email address', policyUrl: '' },
                                { _key: createKey(), policyName: '3. Proceed with online application', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Documents Required',
                            policies: [
                                { _key: createKey(), policyName: 'SSC marks sheet / O-Level equivalency', policyUrl: '' },
                                { _key: createKey(), policyName: 'HSC-Part II consolidated marks sheet / A-Level equivalency', policyUrl: '' },
                                { _key: createKey(), policyName: 'SSC Certificate', policyUrl: '' },
                                { _key: createKey(), policyName: 'HSC Part-II admit card (for result awaited students)', policyUrl: '' },
                                { _key: createKey(), policyName: 'CNIC/Form-B', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Application Processing Fee',
                            policies: [
                                { _key: createKey(), policyName: 'Fee: PKR 3,000 at Meezan Bank', policyUrl: '' },
                                { _key: createKey(), policyName: 'Email paid voucher to admission@uitu.edu.pk', policyUrl: 'mailto:admission@uitu.edu.pk' },
                            ],
                        },
                    ],
                },
                // Tab 4: Fee Structure
                {
                    _key: createKey(),
                    tabTitle: 'Fee Structure',
                    contentType: 'policyLinks',
                    policyCategories: [
                        {
                            _key: createKey(),
                            categoryName: 'Undergraduate Programs - Fall 2025',
                            policies: [
                                { _key: createKey(), policyName: 'BS Computer Science - Total: PKR 197,050', policyUrl: '' },
                                { _key: createKey(), policyName: 'BS Software Engineering - Total: PKR 197,050', policyUrl: '' },
                                { _key: createKey(), policyName: 'BS Artificial Intelligence - Total: PKR 169,000', policyUrl: '' },
                                { _key: createKey(), policyName: 'BS Data Science - Total: PKR 169,000', policyUrl: '' },
                                { _key: createKey(), policyName: 'BE Computer Systems - Total: PKR 157,200', policyUrl: '' },
                                { _key: createKey(), policyName: 'BE Electrical - Total: PKR 157,200', policyUrl: '' },
                                { _key: createKey(), policyName: 'BS Accounting & Finance - Total: PKR 135,000', policyUrl: '' },
                                { _key: createKey(), policyName: 'BBA - Total: PKR 141,800', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Graduate Programs',
                            policies: [
                                { _key: createKey(), policyName: 'MS Computer Science - Total: PKR 146,000', policyUrl: '' },
                                { _key: createKey(), policyName: 'MS Electrical Engineering - Total: PKR 134,000', policyUrl: '' },
                                { _key: createKey(), policyName: 'MS Communication & Network Engineering - Total: PKR 134,000', policyUrl: '' },
                            ],
                        },
                    ],
                },
                // Tab 5: Fee Refund Policy
                {
                    _key: createKey(),
                    tabTitle: 'Fee Refund Policy',
                    contentType: 'policyLinks',
                    policyCategories: [
                        {
                            _key: createKey(),
                            categoryName: 'Refund Schedule',
                            policies: [
                                { _key: createKey(), policyName: 'Up to 10th day - 100% Fee Refund', policyUrl: '' },
                                { _key: createKey(), policyName: 'Up to 15th day - 80% Fee Refund', policyUrl: '' },
                                { _key: createKey(), policyName: 'Up to 20th day - 60% Fee Refund', policyUrl: '' },
                                { _key: createKey(), policyName: 'Up to 30th day - 50% Fee Refund', policyUrl: '' },
                                { _key: createKey(), policyName: '31st day onwards - No Refund', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Important Notes',
                            policies: [
                                { _key: createKey(), policyName: 'Admission Fee is non-refundable', policyUrl: '' },
                                { _key: createKey(), policyName: 'Security deposit is refundable at degree completion', policyUrl: '' },
                            ],
                        },
                    ],
                },
                // Tab 6: Admission Test Results
                {
                    _key: createKey(),
                    tabTitle: 'Admission Test Results',
                    contentType: 'policyLinks',
                    policyCategories: [
                        {
                            _key: createKey(),
                            categoryName: 'Results Archive',
                            policies: [
                                { _key: createKey(), policyName: 'GAT Fall 2025 NEW', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/GAT-result-announcement-Fall-2025.pdf' },
                                { _key: createKey(), policyName: 'GAT Spring 2025 (Coming Soon)', policyUrl: '' },
                            ],
                        },
                    ],
                },
            ],
        },
    ]
}

export async function GET() {
    try {
        // Find existing admission page
        const existingPage = await writeClient.fetch(
            `*[_type == "page" && slug.current == "admission"][0]._id`
        );

        let result;
        if (existingPage) {
            // Update existing page
            result = await writeClient.patch(existingPage)
                .set({
                    title: admissionPageData.title,
                    seoTitle: admissionPageData.seoTitle,
                    seoDescription: admissionPageData.seoDescription,
                    sections: admissionPageData.sections,
                })
                .commit();
        } else {
            // Create new page
            result = await writeClient.create(admissionPageData);
        }

        return NextResponse.json({
            success: true,
            message: 'Admission page updated with content',
            pageId: result._id,
            sectionsCount: admissionPageData.sections.length,
        });
    } catch (error) {
        console.error('Error seeding admission page:', error);
        return NextResponse.json(
            { success: false, error: String(error) },
            { status: 500 }
        );
    }
}
