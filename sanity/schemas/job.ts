import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Job Position',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            description: 'Used for the job card preview',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'postedDate',
            title: 'Posted Date',
            type: 'date',
            options: {
                dateFormat: 'MMMM D, YYYY',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'deadline',
            title: 'Application Deadline',
            type: 'string',
            description: 'e.g. "Closed", "Open until filled", or a specific date',
        }),
        defineField({
            name: 'content',
            title: 'Job Details',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                },
            ],
        }),
    ],
})
