import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'doubleImage',
    title: 'Double Image Row',
    type: 'object',
    fields: [
        defineField({
            name: 'image1',
            title: 'Left Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'caption1',
            title: 'Left Image Caption',
            type: 'string',
        }),
        defineField({
            name: 'image2',
            title: 'Right Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'caption2',
            title: 'Right Image Caption',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'caption1',
            subtitle: 'caption2',
            media: 'image1',
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'Double Image Row',
                subtitle: subtitle || (title ? '' : 'Two images side-by-side'),
                media: media,
            }
        },
    },
})
