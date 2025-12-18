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
        {
            _type: 'richTextBlock',
            _key: createKey(),
            title: 'Introduction',
            backgroundColor: 'white',
            content: [
                {
                    _type: 'block',
                    _key: createKey(),
                    style: 'normal',
                    markDefs: [],
                    children: [{
                        _type: 'span',
                        _key: createKey(),
                        text: 'The Quality Enhancement Cell (QEC) at UIT University was established to ensure the highest standards of academic quality and to foster a culture of continuous improvement. QEC works closely with all academic departments to implement quality assurance mechanisms that align with the guidelines set forth by the Higher Education Commission (HEC) of Pakistan.'
                    }]
                }
            ]
        },
        {
            _type: 'richTextBlock',
            _key: createKey(),
            title: 'Vision',
            backgroundColor: 'light-blue',
            content: [
                {
                    _type: 'block',
                    _key: createKey(),
                    style: 'normal',
                    markDefs: [],
                    children: [{
                        _type: 'span',
                        _key: createKey(),
                        text: 'To be recognized as a center of excellence in quality assurance, fostering an environment where academic programs meet international standards and produce graduates who excel in their respective fields.'
                    }]
                }
            ]
        },
        {
            _type: 'richTextBlock',
            _key: createKey(),
            title: 'Mission',
            backgroundColor: 'white',
            content: [
                {
                    _type: 'block',
                    _key: createKey(),
                    style: 'normal',
                    markDefs: [],
                    children: [{
                        _type: 'span',
                        _key: createKey(),
                        text: 'To implement and monitor quality enhancement initiatives across all academic and administrative functions of the university, ensuring compliance with HEC guidelines and international best practices.'
                    }]
                }
            ]
        },
        {
            _type: 'richTextBlock',
            _key: createKey(),
            title: 'Objectives',
            backgroundColor: 'light-blue',
            content: [
                {
                    _type: 'block',
                    _key: createKey(),
                    style: 'normal',
                    markDefs: [],
                    children: [{
                        _type: 'span',
                        _key: createKey(),
                        text: '• Develop and implement quality assurance policies and procedures\n• Conduct regular program reviews and assessments\n• Facilitate faculty development and training programs\n• Monitor student feedback and satisfaction\n• Ensure compliance with accreditation requirements\n• Promote a culture of continuous improvement\n• Maintain documentation and quality records\n• Coordinate with external quality assurance bodies'
                    }]
                }
            ]
        },
        {
            _type: 'richTextBlock',
            _key: createKey(),
            title: 'Activity Calendars',
            backgroundColor: 'white',
            content: [
                {
                    _type: 'block',
                    _key: createKey(),
                    style: 'normal',
                    markDefs: [],
                    children: [{
                        _type: 'span',
                        _key: createKey(),
                        text: 'QEC maintains annual activity calendars for quality assurance activities including:\n\n• Faculty Evaluation Surveys (Every Semester)\n• Exit Surveys (End of Academic Year)\n• Alumni Surveys (Annual)\n• Employer Surveys (Annual)\n• Course File Audits (Every Semester)\n• Self-Assessment Reports (Per HEC Schedule)'
                    }]
                }
            ]
        },
        {
            _type: 'richTextBlock',
            _key: createKey(),
            title: 'QEC Team',
            backgroundColor: 'light-blue',
            content: [
                {
                    _type: 'block',
                    _key: createKey(),
                    style: 'normal',
                    markDefs: [],
                    children: [{
                        _type: 'span',
                        _key: createKey(),
                        text: 'Director QEC:\nDr. [Name]\nEmail: qec@uit.edu\n\nAssistant Director:\nMr./Ms. [Name]\nEmail: qec.assistant@uit.edu\n\nQEC Coordinator:\nMr./Ms. [Name]\nEmail: qec.coordinator@uit.edu'
                    }]
                }
            ]
        },
        {
            _type: 'richTextBlock',
            _key: createKey(),
            title: 'UITU Policies',
            backgroundColor: 'white',
            content: [
                {
                    _type: 'block',
                    _key: createKey(),
                    style: 'normal',
                    markDefs: [],
                    children: [{
                        _type: 'span',
                        _key: createKey(),
                        text: '• Academic Integrity Policy\n• Examination Policy\n• Grading Policy\n• Faculty Evaluation Policy\n• Program Review Policy\n• Student Feedback Policy\n• Plagiarism Policy\n• Research Ethics Policy'
                    }]
                }
            ]
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
