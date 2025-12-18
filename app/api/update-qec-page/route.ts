import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

// Create a write-enabled client
const writeClient = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: 'skKNkjf0Q3pm3EFBIdItvRkcDakA4D9ywo3W8GwKc1pJNmVmcOz8lO6t02PSMy4UjqNh1Z0oDSf3JLoM0ZbKHnOXIPYpv7o4DBDlkSv3YkLJqzFKlW2ynD3cBQ6KWDamA12jE9GDqOqSOFtyVI5QFgFWM516DKpA8wfPDGgOtbnShwNvZqIU',
})

const createKey = () => Math.random().toString(36).substring(2, 15)

// Updated QEC page with full hero content based on actual HTML
const qecPage = {
    title: 'Quality Enhancement Cell (QEC)',
    slug: 'qec',
    seoTitle: 'QEC - Quality Enhancement Cell | UIT University',
    seoDescription: 'Quality Enhancement Cell ensuring academic excellence and continuous improvement at UIT University.',
    sections: [
        {
            _type: 'pageHeroBlock',
            _key: createKey(),
            title: 'Quality Enhancement Cell (QEC)',
            subtitle: 'Ensuring Academic Excellence and Continuous Improvement',
            breadcrumbs: [
                { _key: createKey(), label: 'Home', href: '/' },
                { _key: createKey(), label: 'QEC' }
            ],
            heroButtons: [
                { _key: createKey(), text: 'Introduction', link: '#introduction', style: 'red' },
                { _key: createKey(), text: 'Vision', link: '#vision', style: 'white' },
                { _key: createKey(), text: 'Mission', link: '#mission', style: 'white' },
                { _key: createKey(), text: 'Objectives', link: '#objectives', style: 'white' },
                { _key: createKey(), text: 'Activity Calendars', link: '#activity-calendars', style: 'white' },
                { _key: createKey(), text: 'Organogram', link: '#organogram', style: 'white' },
                { _key: createKey(), text: 'QEC Team', link: '#team', style: 'white' },
                { _key: createKey(), text: 'UITU Policies', link: '#policies', style: 'white' },
            ]
        },
        // Introduction Section - Accordion Style (Image + Expandable Text)
        {
            _type: 'accordionSectionBlock',
            _key: createKey(),
            sectionId: 'introduction',
            imageUrl: 'https://i.pinimg.com/736x/8a/2e/fa/8a2efa5a2ff3cd633de5fe14db6bb4da.jpg',
            imageAlt: 'QEC Introduction',
            title: 'QEC Introduction',
            paragraphs: [
                {
                    _key: createKey(),
                    text: 'Understanding the difficulties that higher education will face in the twenty-first century, the effects of globalization, and the need for a knowledge-based economy, UIT University started the Quality Enhancement Cell in April 2022. The goal is to assist the institution in its efforts to raise the level of instruction and research and make it compliant with global standards. The QEC thinks that pursuing excellence and improving quality must be balanced.'
                },
                {
                    _key: createKey(),
                    text: 'An institution can ensure with confidence and certainty that the standards and quality of its educational program are being upheld and improved by using Quality Assurance (QA). The QEC serves as a focal point for the quality assurance process to hold the standard of higher education and research. In addition, QEC works on academic capacity-building initiatives, public awareness drives, and teacher training to prepare Self-Assessment Reports (SARs) of the multiple teaching programs in their respective departments. In this respect, the QEC strives to preserve the interests of students, educators, employers, and other stakeholders involved in higher education through surveys and feedback.'
                },
                {
                    _key: createKey(),
                    text: 'Moreover, the QEC is concerned with fostering and promoting higher standards of research and education at the university and cultivating public confidence in the quality and integrity of the degrees at the university.'
                }
            ],
            showReadMore: true,
            backgroundColor: 'light'
        },
        // Vision Statement - using visionBoxBlock with paragraph
        {
            _type: 'visionBoxBlock',
            _key: createKey(),
            sectionId: 'vision',
            title: 'Vision Statement',
            contentType: 'paragraph',
            paragraphText: 'To be the pioneer in leading QECs in Pakistan by supporting the academic programs via academic excellence, relevant research, ingenious pedagogies, institutional strengthening, and compliance with HEC and international standards.',
            backgroundColor: 'white',
        },
        // Mission Statement - using visionBoxBlock with bullets
        {
            _type: 'visionBoxBlock',
            _key: createKey(),
            sectionId: 'mission',
            title: 'Mission Statement',
            contentType: 'bullets',
            bulletItems: [
                { _key: createKey(), text: 'To develop and implement a university-wide quality assurance system aligned with the HEC Pakistan\'s QAA standards.' },
                { _key: createKey(), text: 'To support the university in achieving its academic and research goals.' },
                { _key: createKey(), text: 'To promote a culture of continuous quality improvement within the university.' },
                { _key: createKey(), text: 'To build capacity within the university for quality assurance and enhancement.' },
            ],
            backgroundColor: 'white',
        },
        // Objectives - using visionBoxBlock with bullets
        {
            _type: 'visionBoxBlock',
            _key: createKey(),
            sectionId: 'objectives',
            title: 'Objectives',
            contentType: 'bullets',
            bulletItems: [
                { _key: createKey(), text: 'To develop and implement quality assurance standards and procedures for all aspects of the university\'s operations, including teaching, learning, assessment, research, and governance.' },
                { _key: createKey(), text: 'To regularly review the university\'s academic programs and services to ensure they meet the highest standards.' },
                { _key: createKey(), text: 'To support the university in improving the quality of its teaching and learning.' },
                { _key: createKey(), text: 'To provide training and development opportunities to faculty and staff on quality assurance and enhancement.' },
                { _key: createKey(), text: 'To promote a culture of continuous quality improvement within the university through self-assessment, peer review, and other quality assurance mechanisms.' },
                { _key: createKey(), text: 'To work with the HEC and other quality assurance agencies to ensure that the university\'s quality assurance system meets the highest international standards.' },
                { _key: createKey(), text: 'To collaborate with other QECs in Pakistan to share best practices and promote quality assurance in higher education.' },
            ],
            backgroundColor: 'white',
        },
        // Activity Calendars - using visionBoxBlock with files
        {
            _type: 'visionBoxBlock',
            _key: createKey(),
            sectionId: 'activity-calendars',
            title: 'QEC Activity Calendars',
            contentType: 'files',
            fileItems: [
                { _key: createKey(), fileName: 'QAA Calendar 2025-2026', fileUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/11/QAA-Calendar-2025-2026.pdf' },
                { _key: createKey(), fileName: 'QAA Calendar 2024-25', fileUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/11/QAA-Calendar-2024-25.pdf' },
                { _key: createKey(), fileName: 'QEC Calendar for HEC 2023-2024', fileUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/11/QEC-Calendar-for-HEC-2023-2024.pdf' },
            ],
            backgroundColor: 'white',
        },
        // Tabbed Content Section (Organogram, QEC Team, UITU Policies)
        {
            _type: 'tabbedContentBlock',
            _key: createKey(),
            sectionId: 'leadership-section',
            tabs: [
                // Tab 1: Organogram
                {
                    _key: createKey(),
                    tabTitle: 'Organogram',
                    contentType: 'organogram',
                    organogramNodes: [
                        { _key: createKey(), name: 'Vice Chancellor', level: 0, parentIndex: -1 },
                        { _key: createKey(), name: 'Senior Director QEC', level: 1, parentIndex: 0 },
                        { _key: createKey(), name: 'Manager', level: 2, parentIndex: 1 },
                        { _key: createKey(), name: 'Officer Data Analysis', level: 3, parentIndex: 2 },
                        { _key: createKey(), name: 'Data Analyst', level: 4, parentIndex: 3 },
                        { _key: createKey(), name: 'Attendant', level: 3, parentIndex: 2 },
                        { _key: createKey(), name: 'Officer Documentation & Accreditation', level: 3, parentIndex: 2 },
                    ],
                },
                // Tab 2: QEC Team
                {
                    _key: createKey(),
                    tabTitle: 'QEC Team',
                    contentType: 'teamGrid',
                    teamImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/12/edited-photo-2048x1105.webp',
                    teamMembers: [
                        { _key: createKey(), name: 'Muhammad Iftikhar Mubbashir', position: 'Director QEC', phone: '02134978275', email: 'director.qec@uitu.edu.pk' },
                        { _key: createKey(), name: 'Syeda Umme Aeman Kamal', position: 'Manager QEC', phone: '02134978275', email: 'manager.qec@uitu.edu.pk' },
                        { _key: createKey(), name: 'Muhammad Hassan Shahbaz', position: 'Data Analyst', phone: '02134978275', email: 'data.analyst@uitu.edu.pk' },
                        { _key: createKey(), name: 'Muhammad Basit', position: 'MIS/IT Coordinator, QEC (Additional Role)', phone: '02134978275', email: 'mis.coordinator@uitu.edu.pk' },
                        { _key: createKey(), name: 'Zeeshan Sultan', position: 'QEC Automation Officer (Additional Role)', phone: '02134978275', email: 'muzeeshan@uitu.edu.pk' },
                        { _key: createKey(), name: 'Muhammad Latif', position: 'Office Boy', phone: '', email: '' },
                    ],
                },
                // Tab 3: UITU Policies
                {
                    _key: createKey(),
                    tabTitle: 'UITU Policies',
                    contentType: 'policyLinks',
                    policyCategories: [
                        {
                            _key: createKey(),
                            categoryName: 'Policies for Students',
                            policies: [
                                { _key: createKey(), policyName: 'Undergraduate course Equivalency Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/12/Undergraduate-course-Equivalency-Policy.pdf' },
                                { _key: createKey(), policyName: 'Admission Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/Admission-Policy_compressed.pdf' },
                                { _key: createKey(), policyName: 'Dress Code Policy for Students', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Dress-Code-Policy-for-Students.pdf' },
                                { _key: createKey(), policyName: 'Internship Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/Intership-Policy_compressed.pdf' },
                                { _key: createKey(), policyName: 'Registration & Examination Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/12/Registration-And-Examination-Policy-Manual.pdf' },
                                { _key: createKey(), policyName: 'Scholarship Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/05/UIT-UNIVERSITY-SCHOLARSHIP-POLICY-APPROVED-IN-MARCH-2022.pdf' },
                                { _key: createKey(), policyName: 'Policy for Mentoring Female Students at UIT University', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/11/Policy-for-Mentoring-Female-Students-at-UIT-University.pdf' },
                                { _key: createKey(), policyName: 'Policy on Academic Standing Fall 2023', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/04/Policy-on-Academic-Standing-Fall-2023.pdf' },
                                { _key: createKey(), policyName: 'Co-curricular and Extra-curricular Activities and Procedures 2024', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/02/CO-CURRICULAR-AND-EXTRA-CURRICULAR-ACTIVITIES-POLICY-AND-PROCEDURES-2024.pdf' },
                                { _key: createKey(), policyName: 'Academic Advisement', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/03/Academic-Advisement-Policy-Approved-July-2023.pdf' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Academic Policies',
                            policies: [
                                { _key: createKey(), policyName: 'UIT University Research Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/12/UIT-University-Research-Policy-Manual.pdf' },
                                { _key: createKey(), policyName: 'Anti-plagiarism', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/Anti-Plagiarism-Policy.pdf' },
                                { _key: createKey(), policyName: 'CQI Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/CQI-Policy.pdf' },
                                { _key: createKey(), policyName: 'Institution Quality Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/institution-Quality-Policy.pdf' },
                                { _key: createKey(), policyName: 'Policy on Compliance with the Pakistan Qualification Framework', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/Policy-on-Compliance-with-the-pakistan-Qualifacation-Framwork.pdf' },
                                { _key: createKey(), policyName: 'Program, Curriculum and Course Review Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/10/Program-Curriculum-and-Course-Review-Policy.pdf' },
                                { _key: createKey(), policyName: 'Interdisciplinary Research Policy', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/03/Interdisciplinary-Research-v.3-Mar-20-2025.pdf' },
                                { _key: createKey(), policyName: 'Visiting Faculty Policy 2024', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/02/VISITING-FACULTY-POLICY-2024.pdf' },
                                { _key: createKey(), policyName: 'Academic Program Approval and Procedure 2024', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/02/ACADEMIC-PROGRAM-APPROVAL-AND-PROCEDURE-2024.pdf' },
                                { _key: createKey(), policyName: 'Classroom Observation and Policy 2024', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/02/CLASSROOM-OBSERVATION-POLICY-AND-PROCEDURE-2024.pdf' },
                                { _key: createKey(), policyName: 'Faculty Work Load Policy and Procedures', policyUrl: 'https://uitu.edu.pk/wp-content/uploads/2025/02/FACULTY-WORK-LOAD-POLICY-AND-PROCEDURES.pdf' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'General Policies',
                            policies: [
                                { _key: createKey(), policyName: 'Center of Continuing Education (CCE)', policyUrl: '' },
                                { _key: createKey(), policyName: 'Inclusive Access to Academic, Co-Curricular, and Extracurricular Activities', policyUrl: '' },
                                { _key: createKey(), policyName: 'Automation and Digital Transformation Policy', policyUrl: '' },
                                { _key: createKey(), policyName: 'Communication of Approved Policies to all Stakeholders', policyUrl: '' },
                                { _key: createKey(), policyName: 'Document Control & Record Management Policy', policyUrl: '' },
                                { _key: createKey(), policyName: 'Open Door', policyUrl: '' },
                                { _key: createKey(), policyName: 'Social Media Management and Public Information Communication Policy (SMMPIC)', policyUrl: '' },
                                { _key: createKey(), policyName: 'Parking and Allied Services', policyUrl: '' },
                                { _key: createKey(), policyName: 'Employee Leave Policy', policyUrl: '' },
                                { _key: createKey(), policyName: 'Protection of Reporting Discrimination', policyUrl: '' },
                                { _key: createKey(), policyName: 'Grievance Policy and Procedure 2024', policyUrl: '' },
                                { _key: createKey(), policyName: 'Whistleblowing Policy 2024', policyUrl: '' },
                                { _key: createKey(), policyName: 'Resolution Numbering of Regular Meetings 2024', policyUrl: '' },
                                { _key: createKey(), policyName: 'Faculty and Staff Training and Development Policy and Procedures 2024', policyUrl: '' },
                                { _key: createKey(), policyName: 'Non-Discrimination Against Transgender Individuals', policyUrl: '' },
                                { _key: createKey(), policyName: 'Policy on Open Access to Library at UIT University', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: "HEC's Adopted Policies",
                            policies: [
                                { _key: createKey(), policyName: 'Policy for Students with Disabilities 2021', policyUrl: '' },
                                { _key: createKey(), policyName: 'Notification with Adopted Policy on Protection Against Sexual Harrasment HEC', policyUrl: '' },
                                { _key: createKey(), policyName: 'Notification for the adoption of HEC Undergraduate Education policy', policyUrl: '' },
                                { _key: createKey(), policyName: 'Notification for the adoption of HEC Graduate Education policy', policyUrl: '' },
                                { _key: createKey(), policyName: 'Notification for the adoption of HEC Policy for Students with Disabilities', policyUrl: '' },
                            ],
                        },
                        {
                            _key: createKey(),
                            categoryName: 'Archive',
                            policies: [
                                { _key: createKey(), policyName: 'Admission Policy 2024-2025', policyUrl: '' },
                                { _key: createKey(), policyName: 'Quality Assurance Policy', policyUrl: '' },
                                { _key: createKey(), policyName: 'Transfer of Credit Hours', policyUrl: '' },
                                { _key: createKey(), policyName: 'Harassment Act', policyUrl: '' },
                            ],
                        },
                    ],
                },
            ],
        }
    ]
}

export async function GET() {
    try {
        // Find existing QEC page
        const existingPage = await writeClient.fetch(
            `*[_type == "page" && slug.current == "qec"][0]._id`
        )

        if (existingPage) {
            // Delete existing page
            await writeClient.delete(existingPage)
        }

        // Create new page with complete content
        const doc = await writeClient.create({
            _type: 'page',
            title: qecPage.title,
            slug: { _type: 'slug', current: qecPage.slug },
            seoTitle: qecPage.seoTitle,
            seoDescription: qecPage.seoDescription,
            sections: qecPage.sections
        })

        return NextResponse.json({
            success: true,
            message: 'QEC page updated with complete content',
            pageId: doc._id,
            sectionsCount: qecPage.sections.length
        })

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({
            success: false,
            error: errorMessage
        }, { status: 500 })
    }
}
