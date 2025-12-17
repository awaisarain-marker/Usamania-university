import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

const writeClient = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: 'skKNkjf0Q3pm3EFBIdItvRkcDakA4D9ywo3W8GwKc1pJNmVmcOz8lO6t02PSMy4UjqNh1Z0oDSf3JLoM0ZbKHnOXIPYpv7o4DBDlkSv3YkLJqzFKlW2ynD3cBQ6KWDamA12jE9GDqOqSOFtyVI5QFgFWM516DKpA8wfPDGgOtbnShwNvZqIU',
})

const headerData = {
    _type: 'headerSettings',
    title: 'Header Settings',
    logoUrl: 'https://uitu.edu.pk/wp-content/uploads/2023/12/logo_with_text_final__6_-removebg-preview.png',
    announcementText: 'Admission Open Spring 2026!',
    announcementLink: 'https://eduboard.uit.edu/AdmissionPortal/Login',
    announcementVisible: true,
    applyNowText: 'Apply Now',
    applyNowLink: '/admission',
    exploreText: 'Explore',
}

export async function GET() {
    try {
        // Check if header settings already exists
        const existing = await writeClient.fetch(`*[_type == "headerSettings"][0]`)

        if (existing) {
            return NextResponse.json({
                success: true,
                message: 'Header settings already exist! Edit them in Sanity Studio.',
                data: existing
            })
        }

        // Create new header settings
        const result = await writeClient.create(headerData)

        return NextResponse.json({
            success: true,
            message: 'Header settings created with current values!',
            data: result
        })
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
    }
}
