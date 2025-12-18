import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'faculty',
    title: 'Faculty',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Faculty Title',
            type: 'string',
            description: 'Name of the faculty (e.g., "Faculty of Computing Sciences")',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            description: 'URL-friendly identifier (e.g., "computing-sciences")',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'A brief tagline for the faculty',
        }),
        defineField({
            name: 'heroImageUrl',
            title: 'Hero Image URL',
            type: 'url',
            description: 'Background image for the hero section',
        }),
        defineField({
            name: 'category',
            title: 'Faculty Category',
            type: 'reference',
            to: [{ type: 'facultyCategory' }],
            description: 'Select the category - faculty members with this category will be displayed',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'facultyGridTitle',
            title: 'Faculty Grid Title',
            type: 'string',
            description: 'Title shown above the faculty grid (e.g., "Computing Sciences Faculty Members")',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which to display (lower numbers first)',
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Title',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
        },
    },
})
