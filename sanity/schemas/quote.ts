import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'quote',
    title: 'Quote',
    type: 'object',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
    ],
})
