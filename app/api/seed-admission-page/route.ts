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
                // Tab 3: How to Apply - Procedure Steps with editable sections
                {
                    _key: createKey(),
                    tabTitle: 'How to Apply',
                    contentType: 'procedureSteps',
                    procedureTitle: 'How to Apply / Online Admission Procedure',
                    procedureSections: [
                        {
                            _key: createKey(),
                            sectionHeading: 'Registration',
                            accentColor: 'red',
                            bulletPoints: [
                                { _key: createKey(), text: createTextBlock('Register at the admission portal by clicking here.') },
                                { _key: createKey(), text: createTextBlock('Open your email and click on the link received to validate your email address.') },
                                { _key: createKey(), text: createTextBlock('Proceed with the rest of the online application process using the link received.') },
                            ],
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Submission of Application Form',
                            accentColor: 'blue',
                            bulletPoints: [
                                { _key: createKey(), text: createTextBlock('Log-in to the admission portal using your user ID & password.') },
                                { _key: createKey(), text: createTextBlock('Fill in the details and upload a recent photograph. Please note that the photograph must be clear and on white background (see photograph specification).') },
                                { _key: createKey(), text: createTextBlock('Upload all required academic documents.') },
                                { _key: createKey(), text: createTextBlock('Submit the application and download the system-generated fee voucher.') },
                            ],
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Documents Required to Upload with the Application Form',
                            accentColor: 'red',
                            bulletPoints: [
                                { _key: createKey(), text: createTextBlock('SSC marks sheet / O-Level equivalency.') },
                                { _key: createKey(), text: createTextBlock('HSC-Part II consolidated marks sheet / A-Level equivalency.') },
                                { _key: createKey(), text: createTextBlock('SSC Certificate.') },
                                { _key: createKey(), text: createTextBlock('HSC Part-II admit card (for result awaited students).') },
                                { _key: createKey(), text: createTextBlock('CNIC/Form-B.') },
                            ],
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Application Processing Fee',
                            accentColor: 'blue',
                            bulletPoints: [
                                { _key: createKey(), text: createTextBlock('Print out the system-generated fee voucher after application submission.') },
                                { _key: createKey(), text: createTextBlock('Visit any branch of Meezan Bank and pay the admission processing fee PKR 3,000.') },
                                { _key: createKey(), text: createTextBlock('Submit a scanned copy of the paid fee voucher through the admission portal and email at admission@uitu.edu.pk') },
                            ],
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Issuance of Admit Card',
                            accentColor: 'red',
                            sectionDescription: createTextBlock('After receiving all the information and confirmation of the fee receipt by UIT University, an email and SMS alert will be sent to the candidates to print out the admit card.'),
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Entrance Test',
                            accentColor: 'blue',
                            bulletPoints: [
                                { _key: createKey(), text: createTextBlock('The entrance test will be conducted on Saturday January 10, 2026 at 11:00 A.M. at UIT University.') },
                                { _key: createKey(), text: createTextBlock('The candidate must bring the UIT University admit card on the entry test day.') },
                            ],
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Interview',
                            accentColor: 'red',
                            sectionDescription: createTextBlock('The candidate will receive a schedule of the interview via email & SMS.'),
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Merit List',
                            accentColor: 'blue',
                            sectionDescription: createTextBlock('The candidate will receive an email regarding the admission offer.'),
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Submission of Documents',
                            accentColor: 'red',
                            sectionDescription: createTextBlock('The candidate will be asked to visit UIT University to submit the admission fee along with their educational documents in order to receive their UIT University roll number.'),
                        },
                    ],
                    procedureTable: {
                        tableTitle: 'Merit Determination Criteria',
                        tableRows: [
                            { _key: createKey(), criteria: 'Weightage of Pre-Entry Admission test', value: '50%' },
                            { _key: createKey(), criteria: 'Weightage of HSC marks OR equivalent', value: '40%' },
                            { _key: createKey(), criteria: 'Weightage of SSC marks OR equivalent', value: '10%' },
                            { _key: createKey(), criteria: 'Pre-Admission Interviews', value: 'ACCEPT/DECLINE' },
                        ],
                    },
                    procedureInfoBox: {
                        infoTitle: 'Payment of Registration Fee',
                        infoDescription: 'The candidate is required to pay the fee via pay order, using the following details:',
                        infoItems: [
                            { _key: createKey(), label: 'Account Title', value: 'UIT University' },
                            { _key: createKey(), label: 'NTN #', value: '4473774' },
                        ],
                    },
                },
                // Tab 4: Fee Structure - Fee Table with full data
                {
                    _key: createKey(),
                    tabTitle: 'Fee Structure',
                    contentType: 'feeTable',
                    feeTables: [
                        {
                            _key: createKey(),
                            tableTitle: 'Undergraduate Programs – Fee Information',
                            semester: 'Fall 2025 Semester',
                            programs: [
                                { _key: createKey(), srNo: 1, programName: 'BS (Computer Science)', admissionFee: '25,000', securityDeposit: '-', semesterCharges: '9,000', tuitionFeePerCH: '10,870', firstSemCreditHours: '15', firstSemTuitionFee: '163,050', totalFee: '197,050' },
                                { _key: createKey(), srNo: 2, programName: 'BS (Software Engineering)', admissionFee: '25,000', securityDeposit: '-', semesterCharges: '9,000', tuitionFeePerCH: '10,870', firstSemCreditHours: '15', firstSemTuitionFee: '163,050', totalFee: '197,050' },
                                { _key: createKey(), srNo: 3, programName: 'BS (Artificial Intelligence)', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '9,000', tuitionFeePerCH: '8,000', firstSemCreditHours: '15', firstSemTuitionFee: '120,000', totalFee: '169,000' },
                                { _key: createKey(), srNo: 4, programName: 'BS (Data Science)', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '9,000', tuitionFeePerCH: '8,000', firstSemCreditHours: '15', firstSemTuitionFee: '120,000', totalFee: '169,000' },
                                { _key: createKey(), srNo: 5, programName: 'BE Computer Systems', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '10,000', tuitionFeePerCH: '6,700', firstSemCreditHours: '16', firstSemTuitionFee: '107,200', totalFee: '157,200' },
                                { _key: createKey(), srNo: 6, programName: 'BE Electrical', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '10,000', tuitionFeePerCH: '6,700', firstSemCreditHours: '16', firstSemTuitionFee: '107,200', totalFee: '157,200' },
                                { _key: createKey(), srNo: 7, programName: 'BS (Accounting & Finance)', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '10,000', tuitionFeePerCH: '5,000', firstSemCreditHours: '17', firstSemTuitionFee: '85,000', totalFee: '135,000' },
                                { _key: createKey(), srNo: 8, programName: 'BBA', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '10,000', tuitionFeePerCH: '5,400', firstSemCreditHours: '17', firstSemTuitionFee: '91,800', totalFee: '141,800' },
                                { _key: createKey(), srNo: 9, programName: 'B.E. Tech (Computer)', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '10,000', tuitionFeePerCH: '3,000', firstSemCreditHours: '16', firstSemTuitionFee: '48,000', totalFee: '98,000' },
                                { _key: createKey(), srNo: 10, programName: 'B.E. Tech (Software)', admissionFee: '25,000', securityDeposit: '15,000', semesterCharges: '10,000', tuitionFeePerCH: '3,000', firstSemCreditHours: '16', firstSemTuitionFee: '48,000', totalFee: '98,000' },
                            ],
                        },
                        {
                            _key: createKey(),
                            tableTitle: 'Graduate Programs – Fee Information',
                            programs: [
                                { _key: createKey(), srNo: 11, programName: 'MS (Computer Science)', admissionFee: '15,000', securityDeposit: '15,000', semesterCharges: '8,000', tuitionFeePerCH: '9,000', firstSemCreditHours: '12', firstSemTuitionFee: '108,000', totalFee: '146,000' },
                                { _key: createKey(), srNo: 12, programName: 'MS (Electrical Engg.)', admissionFee: '15,000', securityDeposit: '15,000', semesterCharges: '8,000', tuitionFeePerCH: '8,000', firstSemCreditHours: '12', firstSemTuitionFee: '96,000', totalFee: '134,000' },
                                { _key: createKey(), srNo: 13, programName: 'MS (Comm & Net Engg.)', admissionFee: '15,000', securityDeposit: '15,000', semesterCharges: '8,000', tuitionFeePerCH: '8,000', firstSemCreditHours: '12', firstSemTuitionFee: '96,000', totalFee: '134,000' },
                            ],
                        },
                    ],
                    feeNotes: [
                        { _key: createKey(), noteLabel: 'a', noteText: 'An anticipated increase of about 10% in tuition fees is expected every Fall, in alignment with the annual inflation rate.' },
                        { _key: createKey(), noteLabel: 'b', noteText: 'University fees are subject to change without prior notice. The institution reserves the right to revise the fee structure at its discretion.' },
                        { _key: createKey(), noteLabel: 'c', noteText: 'The security deposit for BS (Computer Science) and BS (Software Engineering) programs will be charged in the second semester.' },
                    ],
                },
                // Tab 5: Fee Refund Policy - Procedure Steps with sections and table
                {
                    _key: createKey(),
                    tabTitle: 'Fee Refund Policy',
                    contentType: 'procedureSteps',
                    procedureTitle: 'Fee Refund Policy',
                    procedureSections: [
                        {
                            _key: createKey(),
                            sectionHeading: 'HEC Revised Policy',
                            accentColor: 'blue',
                            sectionDescription: createTextBlock('The Higher Education Commission (HEC) has circulated the revised National Fee-Refund Policy for Higher Education Institutions in Pakistan, updated in 2024.'),
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Refund Guidelines',
                            accentColor: 'red',
                            bulletPoints: [
                                { _key: createKey(), text: createTextBlock('Admission Fee is non-refundable in any case.') },
                                { _key: createKey(), text: createTextBlock('Security deposit is refundable at the time of completion of degree or closing of admission subject to clearance.') },
                                { _key: createKey(), text: createTextBlock('Tuition Fee/Exam Fee/Enrolment Fee/Extra Curricular Charges is refundable in accordance with the guidelines of Higher Education Commission (HEC).') },
                            ],
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Important Notice',
                            accentColor: 'blue',
                            sectionDescription: createTextBlock('Please note that the below said policy will be applicable from the commencement of classes. Days shall be counted including working days and holidays.'),
                        },
                        {
                            _key: createKey(),
                            sectionHeading: 'Pending Results',
                            accentColor: 'red',
                            sectionDescription: createTextBlock('The same policy will apply to candidates offered admissions with pending results as well as in the event of any issues arising in the HSC/A-Level/Equivalent results after the commencement of classes.'),
                        },
                    ],
                    procedureTable: {
                        tableTitle: 'Refund Schedule',
                        tableRows: [
                            { _key: createKey(), criteria: 'Up to 10th day of the commencement of classes', value: '100% Fee Refund' },
                            { _key: createKey(), criteria: 'Up to 15th day of commencement of classes', value: '80% Fee Refund' },
                            { _key: createKey(), criteria: 'Up to 20th day of commencement of classes', value: '60% Fee Refund' },
                            { _key: createKey(), criteria: 'Up to 30th day of commencement of classes', value: '50% Fee Refund' },
                            { _key: createKey(), criteria: '31st day onwards of commencement of classes', value: 'No Refund' },
                        ],
                    },
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
