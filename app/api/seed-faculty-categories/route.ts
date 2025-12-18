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

const categories = [
    {
        _id: 'category-computing-sciences',
        _type: 'facultyCategory',
        title: 'Computing Sciences',
        slug: { _type: 'slug', current: 'computing-sciences' },
        order: 1,
    },
    {
        _id: 'category-engineering-technology',
        _type: 'facultyCategory',
        title: 'Engineering & Technology',
        slug: { _type: 'slug', current: 'engineering-technology' },
        order: 2,
    },
    {
        _id: 'category-management-social-sciences',
        _type: 'facultyCategory',
        title: 'Management & Social Sciences',
        slug: { _type: 'slug', current: 'management-social-sciences' },
        order: 3,
    },
]

export async function GET() {
    const results = []

    // First, create the categories
    for (const category of categories) {
        try {
            // Check if exists
            const existing = await writeClient.fetch(
                `*[_type == "facultyCategory" && slug.current == $slug][0]`,
                { slug: category.slug.current }
            )

            if (existing) {
                // Update existing
                await writeClient.patch(existing._id).set({
                    title: category.title,
                    order: category.order,
                }).commit()
                results.push({ title: category.title, type: 'category', status: 'updated' })
            } else {
                await writeClient.createOrReplace(category)
                results.push({ title: category.title, type: 'category', status: 'created' })
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'
            results.push({ title: category.title, type: 'category', status: 'error', message: errorMessage })
        }
    }

    // Now update existing faculty departments to reference the categories
    const facultyDepts = [
        { slug: 'computing-sciences', categoryId: 'category-computing-sciences' },
        { slug: 'engineering-technology', categoryId: 'category-engineering-technology' },
        { slug: 'management-social-sciences', categoryId: 'category-management-social-sciences' },
    ]

    for (const dept of facultyDepts) {
        try {
            const existing = await writeClient.fetch(
                `*[_type == "faculty" && slug.current == $slug][0]`,
                { slug: dept.slug }
            )

            if (existing) {
                await writeClient.patch(existing._id).set({
                    category: { _type: 'reference', _ref: dept.categoryId }
                }).commit()
                results.push({ title: `Faculty (${dept.slug})`, type: 'faculty-ref', status: 'updated' })
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'
            results.push({ title: `Faculty (${dept.slug})`, type: 'faculty-ref', status: 'error', message: errorMessage })
        }
    }

    return NextResponse.json({
        success: true,
        message: `Processed ${results.length} items`,
        results
    })
}
