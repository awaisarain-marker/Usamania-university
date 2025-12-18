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

const facultyDepartments = [
    {
        _type: 'faculty',
        title: 'Faculty of Computing Sciences',
        slug: { _type: 'slug', current: 'computing-sciences' },
        subtitle: 'Innovating the Future with Technology and Research',
        heroImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg',
        categorySlug: 'computing-sciences',
        facultyGridTitle: 'Computing Sciences Faculty Members',
        order: 1,
    },
    {
        _type: 'faculty',
        title: 'Faculty of Engineering & Technology',
        slug: { _type: 'slug', current: 'engineering-technology' },
        subtitle: 'Building Tomorrow\'s Infrastructure Today',
        heroImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg',
        categorySlug: 'engineering-technology',
        facultyGridTitle: 'Engineering & Technology Faculty Members',
        order: 2,
    },
    {
        _type: 'faculty',
        title: 'Faculty of Management & Social Sciences',
        slug: { _type: 'slug', current: 'management-social-sciences' },
        subtitle: 'Developing Leaders for a Global Economy',
        heroImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg',
        categorySlug: 'management-social-sciences',
        facultyGridTitle: 'Management & Social Sciences Faculty Members',
        order: 3,
    },
]

export async function GET() {
    const results = []

    for (const dept of facultyDepartments) {
        try {
            // Check if exists
            const existing = await writeClient.fetch(
                `*[_type == "faculty" && slug.current == $slug][0]`,
                { slug: dept.slug.current }
            )

            if (existing) {
                // Update existing
                await writeClient.patch(existing._id).set(dept).commit()
                results.push({ title: dept.title, status: 'updated', message: 'Updated!' })
                continue
            }

            await writeClient.create(dept)
            results.push({ title: dept.title, status: 'created', message: 'Success!' })
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'
            results.push({ title: dept.title, status: 'error', message: errorMessage })
        }
    }

    return NextResponse.json({
        success: true,
        message: `Processed ${results.length} faculty departments`,
        results
    })
}
