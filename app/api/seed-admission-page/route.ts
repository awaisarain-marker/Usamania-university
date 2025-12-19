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

// Create a simple text block for PortableText
function createTextBlock(text: string) {
    return [
        {
            _type: 'block',
            _key: createKey(),
            style: 'normal',
            markDefs: [],
            children: [
                {
                    _type: 'span',
                    _key: createKey(),
                    text: text,
                    marks: [],
                },
            ],
        },
    ];
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
                // Tab 1: Admission Information - Rich Text Content
                {
                    _key: createKey(),
                    tabTitle: 'Admission Information',
                    contentType: 'richText',
                    richContent: `
<h3 class="text-2xl font-bold text-[#002856] mb-6">Graduate / Undergraduate Programs</h3>

<div class="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#ed1c24]">
    <h4 class="text-lg font-bold text-[#002856] mb-4">Eligibility Criteria for Undergraduate Programs</h4>
    <ul class="space-y-2 text-gray-600">
        <li><strong>BE Electrical / Computer Systems:</strong> At least 60% marks in Pre-Engineering</li>
        <li><strong>BS Computer Science / Software Engineering:</strong> At least 50% marks in Pre-Engineering, Science General or Pre-Medical</li>
        <li><strong>B.E. Technology:</strong> HSC-II/DAE in relevant discipline with at least 50% marks</li>
        <li><strong>BBA / BS Accounting & Finance / BS Business Informatics:</strong> HSC-II or equivalent with at least 45% marks</li>
    </ul>
</div>

<div class="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#002856]">
    <h4 class="text-lg font-bold text-[#002856] mb-4">Important Dates</h4>
    <p class="text-gray-600">Admissions are open for Fall 2025. Apply now through our online portal.</p>
</div>

<div class="overflow-x-auto">
    <table class="w-full text-left border-collapse">
        <tbody>
            <tr class="border-b border-gray-200">
                <td class="py-3 pr-4 font-bold text-[#002856]">Online Application</td>
                <td class="py-3 font-medium">
                    <a href="https://eduboard.uit.edu/AdmissionPortal/Login" target="_blank" rel="noopener noreferrer" class="text-[#ed1c24] hover:underline">
                        https://eduboard.uit.edu/AdmissionPortal/Login
                    </a>
                </td>
            </tr>
            <tr class="border-b border-gray-200">
                <td class="py-3 pr-4 font-bold text-[#002856]">Application Fee</td>
                <td class="py-3 font-medium">PKR 3,000</td>
            </tr>
            <tr class="border-b border-gray-200">
                <td class="py-3 pr-4 font-bold text-[#002856]">Contact</td>
                <td class="py-3 font-medium">021-34994305 Ext: 3025, 3087</td>
            </tr>
            <tr class="border-b border-gray-200">
                <td class="py-3 pr-4 font-bold text-[#002856]">WhatsApp</td>
                <td class="py-3 font-medium">0333-0399113</td>
            </tr>
            <tr class="border-b border-gray-200">
                <td class="py-3 pr-4 font-bold text-[#002856]">Email</td>
                <td class="py-3 font-medium">
                    <a href="mailto:admission@uitu.edu.pk" class="text-[#ed1c24] hover:underline">admission@uitu.edu.pk</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                    `,
                },
                // Tab 2: FAQs - FAQ Accordion with structured items
                {
                    _key: createKey(),
                    tabTitle: 'FAQs',
                    contentType: 'faqAccordion',
                    faqItems: [
                        { _key: createKey(), question: '1. When can one apply for admissions at UIT University?', answer: createTextBlock('Admission has started from January, 2025. If an applicant fulfills the admission criteria, he/she can apply for admission via online application at www.uitu.edu.pk') },
                        { _key: createKey(), question: '2. Which Undergraduate programs are offered at UIT University?', answer: createTextBlock('Department of Electrical Engineering: BE Electrical, BE Computer Systems. Department of Computer Science: BS Computer Science, BS Software Engineering. Department of Engineering Technology: B.E. Tech (Computer, Software, Electronics). Department of Management Sciences: BBA, BS Business Informatics, BS Accounting & Finance.') },
                        { _key: createKey(), question: '3. What is the general admission criteria?', answer: createTextBlock('For BE Electrical/CS: 60% in Pre-Engineering. For BS CS/SE: 50% in Pre-Engineering/Science General/Pre-Medical. For BE Tech: HSC-II/DAE with 50%. For Management Sciences: HSC-II with 45%.') },
                        { _key: createKey(), question: '4. How do I proceed with my online application?', answer: createTextBlock('Once you have registered via Online Admission Application, an Admission link will be sent to your e-mail address. You can proceed with the rest of the online application using the link.') },
                        { _key: createKey(), question: '5. What if I am unable to register on Admission Portal?', answer: createTextBlock('Re-check if you have already registered. Use another email if already registered. Check your Junk folder. If problem persists, email admission@uitu.edu.pk or call 021-34994305.') },
                        { _key: createKey(), question: '6. Does UIT allow students to apply whose result has not been announced?', answer: createTextBlock('Yes, UIT UNIVERSITY allows all students who are awaiting for results to be announced.') },
                        { _key: createKey(), question: '7. How can I receive my admit card for entry test?', answer: createTextBlock('After confirmation of receiving application fee from Bank, admit card will be available for printing from the admission portal. Or share the paid slip on WhatsApp 03330399113.') },
                        { _key: createKey(), question: '8. What is the fee Structure at UIT UNIVERSITY?', answer: createTextBlock('The tuition fee is charged as per credit hour. Please refer Fee structure at https://uitu.edu.pk/fee-structure/') },
                        { _key: createKey(), question: '9. How can I Pay Application fee?', answer: createTextBlock('Print out the fee voucher, visit any Meezan Bank branch and pay PKR 3,000. Submit scanned copy through the admission portal or WhatsApp 0333-0399113.') },
                        { _key: createKey(), question: '10. What supporting documents do I need to submit?', answer: createTextBlock('SSC certificate/O-Level, SSC Marks sheet, HSC consolidated Marks sheet (or Admit card for result awaited), Equivalence certificate for A-Level from IBBC.') },
                        { _key: createKey(), question: '11. What type of Scholarships are offered?', answer: createTextBlock('Please refer Scholarships Policy & awards on website.') },
                        { _key: createKey(), question: '12. Does UIT follow an open merit policy?', answer: createTextBlock('Yes, UIT UNIVERSITY only offers open merit admissions. There are no reserved or quota-based seats.') },
                        { _key: createKey(), question: '13. How frequently are fee rates revised?', answer: createTextBlock('Universities may increase fees on annual basis to cover inflation and increased costs.') },
                        { _key: createKey(), question: '14. What if I fail to attain required marks as result awaiting candidate?', answer: createTextBlock('Result-awaiting applicants will be offered provisional admission. If result is less than required, fee will be refunded as per policy.') },
                        { _key: createKey(), question: '15. Can I change application after pressing Submit?', answer: createTextBlock('No, you cannot make changes once submitted. For critical corrections, contact the admission office.') },
                        { _key: createKey(), question: '16. Will I receive confirmation after submitting application?', answer: createTextBlock('Yes, you will receive a text message and an e-mail notification stating the successful submission.') },
                        { _key: createKey(), question: '17. If I passed SAT exam, would I be exempted from Entry Test?', answer: createTextBlock('Yes, if you scored at least 800 in SAT-I and 1500 in SAT-II with Physics, Chemistry/Computer Science and Mathematics/Biology.') },
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
                            categoryName: 'Fee Payment',
                            policies: [
                                { _key: createKey(), policyName: '4. Print fee voucher from portal', policyUrl: '' },
                                { _key: createKey(), policyName: '5. Pay PKR 3,000 at Meezan Bank', policyUrl: '' },
                                { _key: createKey(), policyName: '6. Upload paid voucher to portal', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Required Documents',
                            policies: [
                                { _key: createKey(), policyName: 'SSC Certificate & Marks Sheet', policyUrl: '' },
                                { _key: createKey(), policyName: 'HSC Marks Sheet or Admit Card', policyUrl: '' },
                                { _key: createKey(), policyName: 'CNIC / B-Form Copy', policyUrl: '' },
                                { _key: createKey(), policyName: 'Passport Size Photo', policyUrl: '' },
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
                            categoryName: 'Computing Programs',
                            policies: [
                                { _key: createKey(), policyName: 'BS Computer Science - PKR 3,100 per credit hour', policyUrl: '' },
                                { _key: createKey(), policyName: 'BS Software Engineering - PKR 3,100 per credit hour', policyUrl: '' },
                                { _key: createKey(), policyName: 'BE Computer Systems - PKR 3,500 per credit hour', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Engineering Programs',
                            policies: [
                                { _key: createKey(), policyName: 'BE Electrical Engineering - PKR 3,500 per credit hour', policyUrl: '' },
                                { _key: createKey(), policyName: 'B.E. Technology - PKR 2,800 per credit hour', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Management Programs',
                            policies: [
                                { _key: createKey(), policyName: 'BBA - PKR 2,500 per credit hour', policyUrl: '' },
                                { _key: createKey(), policyName: 'BS Business Informatics - PKR 2,500 per credit hour', policyUrl: '' },
                                { _key: createKey(), policyName: 'BS Accounting & Finance - PKR 2,500 per credit hour', policyUrl: '' },
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
                            categoryName: 'Refund Timeline',
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
            `* [_type == "page" && slug.current == "admission"][0]._id`
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
