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
                // Tab 2: FAQs - Rich Text with all 17 questions
                {
                    _key: createKey(),
                    tabTitle: 'FAQs',
                    contentType: 'richText',
                    richContent: `
<div class="faq-list space-y-4">

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">1. When can one apply for admissions at UIT University?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Admission has started from January, 2025. If an applicant fulfill the admission criteria (eligibility criteria can be seen on website at <a href="https://www.uitu.edu.pk" target="_blank" class="text-[#ed1c24] hover:underline">www.uitu.edu.pk</a>), he/she can apply for admission via online application.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">2. Which Undergraduate programs are offered at UIT University?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p class="mb-2">UIT University offers the following Undergraduate programs:</p>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">Department of Electrical Engineering</h4>
        <ul class="list-disc pl-5 space-y-1"><li>BE Electrical (Electronic / Power/ Telecommunication)</li><li>BE Computer Systems</li></ul>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">Department of Computer Science</h4>
        <ul class="list-disc pl-5 space-y-1"><li>BS Computer Science</li><li>BS Software Engineering</li></ul>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">Department of Engineering Technology</h4>
        <ul class="list-disc pl-5 space-y-1"><li>B.E. Tech (Computer)</li><li>B.E. Tech (Software)</li><li>B.E. Tech (Electronics)</li></ul>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">Department of Management Sciences</h4>
        <ul class="list-disc pl-5 space-y-1"><li>BBA</li><li>BS Business Informatics</li><li>BS Accounting & Finance</li></ul>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">3. What is the general admission criteria?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p class="mb-2">All applicants must meet the following criteria:</p>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">For B.E. Electrical & B.E. Computer Systems</h4>
        <p>HSC, A-level, Aga Khan Board, Federal Board and other board students with at least 60% or equivalent marks in Pre-Engineering.</p>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">For B.S. Computer Science & Software Engineering</h4>
        <p>HSC, A-level, Aga khan board, Federal Board and other board students with at least 50% or equivalent marks in Pre-Engineering, Science General OR Pre-Medical.</p>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">For B.E. Tech (Engineering Technology)</h4>
        <p>Passed HSC-II/DAE in relevant discipline with at least 50% or 550 marks.</p>
        <h4 class="font-bold text-[#002856] mt-4 mb-2">For Management Sciences</h4>
        <p>Passed HSC-II or equivalent with at least 45% or 495 marks.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">4. How do I proceed with my online application?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Once you have registered via Online Admission Application, an Admission link will be sent to your e-mail address. You can proceed with the rest of the online application using the link.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">5. What if I am unable to register on Admission Portal?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Re-check if you have already registered with the same e-mail. Use another email if already registered. Check your Junk or Spam folder. If problem persists, email <a href="mailto:admission@uitu.edu.pk" class="text-[#ed1c24] hover:underline">admission@uitu.edu.pk</a> or call 021-34994305 Ext: 3025, 3087.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">6. Does UIT allow students to apply whose result has not been announced?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Yes, UIT UNIVERSITY allows all the students who are awaiting for results to be announced.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">7. How can I receive my admit card for entry test?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>After confirmation of receiving application fee from Bank, system generated admit card will be available for printing from the admission portal. Or share the paid slip on WhatsApp 03330399113.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">8. What is the fee Structure at UIT UNIVERSITY?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>The tuition fee is charged as per credit hour. Please refer Fee structure on website at <a href="https://uitu.edu.pk/fee-structure/" target="_blank" class="text-[#ed1c24] hover:underline">https://uitu.edu.pk/fee-structure/</a></p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">9. How can I Pay Application fee?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <ul class="list-disc pl-5 space-y-2">
            <li>Print out the fee voucher (automatically generated after submission)</li>
            <li>Visit any branch of Meezan Bank and pay admission processing fee of PKR 3,000</li>
            <li>Submit scanned copy of the paid fee voucher through the admission portal or WhatsApp 0333-0399113</li>
        </ul>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">10. What supporting documents do I need to submit?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <ul class="list-disc pl-5 space-y-1">
            <li>SSC certificate or O-Level certificate</li>
            <li>SSC Marks sheet</li>
            <li>HSC consolidated Marks sheet (or HSC-II Admit card for result awaited students)</li>
            <li>Equivalence certificate for A-Level, issued by IBBC</li>
        </ul>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">11. What type of Scholarships are offered by UIT UNIVERSITY?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Please refer Scholarships Policy & awards on website.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">12. Does UIT follow an open merit policy in awarding admission?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Yes, UIT UNIVERSITY only offers open merit admissions. There are no reserved or quota-based seats.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">13. How frequently is UIT UNIVERSITY fee rates revised?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Universities may increase fees on annual basis to cover inflation and increased costs.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">14. If I failed to attain the required marks as a result awaiting candidate, what will happen?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Applicants awaiting results will be offered provisional admission. If the result is less than required marks, the fee will be refunded as per policy.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">15. Can I change the online application once I have pressed Submit?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>No, you cannot make any changes once submitted. However, for critical information corrections (address, contact number), contact the admission office.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">16. Will I receive a confirmation after submitting my online application?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Yes, you will receive a text message and an e-mail notification stating the successful submission of your online application.</p>
    </div>
</details>

<details class="bg-white p-4 rounded-lg border border-gray-200">
    <summary class="font-bold text-[#002856] cursor-pointer">17. If I have passed SAT exam, would I be exempted from Entry Test?</summary>
    <div class="mt-3 text-sm text-gray-600">
        <p>Yes, if you have scored at least 800 in SAT-I and 1500 in SAT-II with Physics, Chemistry/Computer Science and Mathematics/Biology. Submit an application for exemption along with evidence to the Admission office.</p>
    </div>
</details>

</div>
                    `,
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
