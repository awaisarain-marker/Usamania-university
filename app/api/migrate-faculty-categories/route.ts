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

// Map old string values to category document IDs
const categoryMapping: Record<string, string> = {
    'computing-sciences': 'category-computing-sciences',
    'engineering-technology': 'category-engineering-technology',
    'management-social-sciences': 'category-management-social-sciences',
}

export async function GET() {
    const results = []

    try {
        // Fetch all faculty members - we'll check the category type in JS
        const facultyMembers = await writeClient.fetch(`
            *[_type == "facultyMember"] {
                _id,
                name,
                category
            }
        `)

        // Filter to only those with string categories (not references)
        const membersNeedingMigration = facultyMembers.filter((m: any) =>
            typeof m.category === 'string' ||
            (m.category && !m.category._ref)
        )

        console.log(`Found ${membersNeedingMigration.length} faculty members needing migration`)

        for (const member of membersNeedingMigration) {
            // Get the category string - it could be a string or an object without _ref
            const oldCategory = typeof member.category === 'string'
                ? member.category
                : member.category?.current || member.category?.toString()

            const categoryDocId = categoryMapping[oldCategory]

            if (!categoryDocId) {
                results.push({
                    name: member.name,
                    status: 'skipped',
                    message: `Unknown or already migrated category: ${JSON.stringify(member.category)}`
                })
                continue
            }

            try {
                // Update the faculty member to use a reference
                await writeClient.patch(member._id)
                    .set({
                        category: {
                            _type: 'reference',
                            _ref: categoryDocId
                        }
                    })
                    .commit()

                results.push({
                    name: member.name,
                    status: 'updated',
                    message: `Migrated from "${oldCategory}" to reference`
                })
            } catch (error: unknown) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error'
                results.push({
                    name: member.name,
                    status: 'error',
                    message: errorMessage
                })
            }
        }

        return NextResponse.json({
            success: true,
            message: `Processed ${results.length} faculty members`,
            results
        })

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({
            success: false,
            error: errorMessage
        }, { status: 500 })
    }
}
