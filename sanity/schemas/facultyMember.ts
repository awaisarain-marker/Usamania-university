import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
    name: 'facultyMember',
    title: 'Faculty Members',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'designation',
            title: 'Designation',
            type: 'string',
            description: 'Position/title (e.g., "Professor", "Assistant Professor")',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'qualification',
            title: 'Qualification',
            type: 'string',
            description: 'Degree/credentials (e.g., "PhD (Computer Science)")',
        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'url',
            description: 'Profile photo URL',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'facultyCategory' }],
            description: 'Select the faculty category this member belongs to',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'externalLink',
            title: 'External Profile Link',
            type: 'url',
            description: 'Link to external profile page (optional)',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which to display (lower numbers first)',
        }),
        defineField({
            name: 'isDean',
            title: 'Is Dean?',
            type: 'boolean',
            description: 'Mark as Dean for special display',
            initialValue: false,
        }),
        defineField({
            name: 'deanMessage',
            title: "Dean's Message",
            type: 'text',
            description: 'Full message from the Dean (only if Is Dean is checked)',
            hidden: ({ document }) => !document?.isDean,
        }),

        // Popup Data Fields
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'ext',
            title: 'Extension',
            type: 'string',
        }),
        defineField({
            name: 'overview',
            title: 'Overview',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            description: 'Overview points (each item is a bullet point)',
        }),
        defineField({
            name: 'qualificationDetails',
            title: 'Qualification Details',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            description: 'Detailed list of qualifications',
        }),
        defineField({
            name: 'specialization',
            title: 'Area of Specialization',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
            name: 'experience',
            title: 'Work Experience',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
            name: 'certifications',
            title: 'Certifications',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
            name: 'courses',
            title: 'Courses Taught',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Name',
            name: 'nameAsc',
            by: [{ field: 'name', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'designation',
            category: 'category',
        },
        prepare({ title, subtitle, category }) {
            const categoryLabels: Record<string, string> = {
                'computing-sciences': 'Computing Sciences',
                'engineering-technology': 'Engineering & Technology',
                'management-social-sciences': 'Management & Social Sciences',
            };
            return {
                title,
                subtitle: `${subtitle} | ${categoryLabels[category] || category}`,
            }
        },
    },
})
