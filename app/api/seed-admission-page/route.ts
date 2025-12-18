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
    metaTitle: 'Admissions - UIT University',
    metaDescription: 'Apply to UIT University. Explore undergraduate and graduate programs in Computer Science, Electrical Engineering, and Management Sciences.',
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
                // Tab 1: Admission Information
                {
                    _key: createKey(),
                    tabTitle: 'Admission Information',
                    contentType: 'policyLinks',
                    policyCategories: [
                        {
                            _key: createKey(),
                            categoryName: 'Department of Computer Science',
                            policies: [
                                { _key: createKey(), policyName: 'BS Computer Science', policyUrl: '/courses/bs-computer-science' },
                                { _key: createKey(), policyName: 'BS Software Engineering', policyUrl: '/courses/bs-software-engineering' },
                                { _key: createKey(), policyName: 'BS Artificial Intelligence', policyUrl: '/courses/bs-artificial-intelligence' },
                                { _key: createKey(), policyName: 'BS Data Science', policyUrl: '/courses/bs-data-science' },
                                { _key: createKey(), policyName: 'MS Computer Science', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Department of Electrical Engineering',
                            policies: [
                                { _key: createKey(), policyName: 'BE Computer Systems', policyUrl: '/courses/be-computer-systems' },
                                { _key: createKey(), policyName: 'BE Electrical (Power)', policyUrl: '/courses/be-electrical-power' },
                                { _key: createKey(), policyName: 'BE Electrical (Electronic)', policyUrl: '/courses/be-electrical-electronic' },
                                { _key: createKey(), policyName: 'MS Electrical Engineering', policyUrl: '' },
                                { _key: createKey(), policyName: 'MS Communication and Network Engineering', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Department of Management Sciences',
                            policies: [
                                { _key: createKey(), policyName: 'BBA (Bachelor in Business Administration)', policyUrl: '/courses/bba' },
                                { _key: createKey(), policyName: 'BS Accounting and Finance', policyUrl: '/courses/bs-accounting-finance' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Important Dates',
                            policies: [
                                { _key: createKey(), policyName: 'Online Application: https://eduboard.uit.edu/AdmissionPortal/Login', policyUrl: 'https://eduboard.uit.edu/AdmissionPortal/Login' },
                                { _key: createKey(), policyName: 'Last date for submission: Thursday, January 08 2026', policyUrl: '' },
                                { _key: createKey(), policyName: 'Entrance Test: Saturday, January 10, 2026 at 11:00 AM', policyUrl: '' },
                                { _key: createKey(), policyName: 'Start of Academic Session: February, 2026', policyUrl: '' },
                            ],
                        },
                    ],
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
                    metaTitle: admissionPageData.metaTitle,
                    metaDescription: admissionPageData.metaDescription,
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
