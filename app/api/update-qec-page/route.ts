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
        // QEC Team
        {
            _type: 'visionBoxBlock',
            _key: createKey(),
            sectionId: 'team',
            title: 'QEC Team',
            contentType: 'paragraph',
            paragraphText: 'Director QEC:\nDr. [Name]\nEmail: qec@uit.edu\n\nAssistant Director:\nMr./Ms. [Name]\nEmail: qec.assistant@uit.edu\n\nQEC Coordinator:\nMr./Ms. [Name]\nEmail: qec.coordinator@uit.edu',
            backgroundColor: 'white',
        },
        // UITU Policies
        {
            _type: 'visionBoxBlock',
            _key: createKey(),
            sectionId: 'policies',
            title: 'UITU Policies',
            contentType: 'bullets',
            bulletItems: [
                { _key: createKey(), text: 'Academic Integrity Policy' },
                { _key: createKey(), text: 'Examination Policy' },
                { _key: createKey(), text: 'Grading Policy' },
                { _key: createKey(), text: 'Faculty Evaluation Policy' },
                { _key: createKey(), text: 'Program Review Policy' },
                { _key: createKey(), text: 'Student Feedback Policy' },
                { _key: createKey(), text: 'Plagiarism Policy' },
                { _key: createKey(), text: 'Research Ethics Policy' },
            ],
            backgroundColor: 'white',
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
