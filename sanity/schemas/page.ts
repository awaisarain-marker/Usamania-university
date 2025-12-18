import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
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
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Title for search engines (optional, defaults to page title)',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            description: 'Description for search engines',
        }),
        defineField({
            name: 'sections',
            title: 'Page Sections',
            description: 'Drag and drop sections to build your page',
            type: 'array',
            of: [
                { type: 'heroBlock' },
                { type: 'pageHeroBlock' },
                { type: 'worldClassBlock' },
                { type: 'alumniBlock' },
                { type: 'testimonialsBlock' },
                { type: 'ctaBlock' },
                { type: 'blogSectionBlock' },
                { type: 'eventsSectionBlock' },
                { type: 'academicsGridBlock' },
                { type: 'campusExperienceBlock' },
                { type: 'facultyGridBlock' },
                { type: 'faqsAccordionBlock' },
                { type: 'spacerBlock' },
                { type: 'richTextBlock' },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug.current',
        },
        prepare({ title, slug }) {
            return {
                title: title || 'Untitled Page',
                subtitle: `/${slug || ''}`,
            }
        },
    },
})
