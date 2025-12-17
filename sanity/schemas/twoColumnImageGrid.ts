import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'twoColumnImageGrid',
    title: 'Two Column Image Grid',
    type: 'object',
    fields: [
        defineField({
            name: 'imageLeft',
            title: 'Image Left',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'imageLeftUrl',
            title: 'Image Left URL',
            type: 'url',
            description: 'Paste an external image URL here to use instead of uploading an image.',
        }),
        defineField({
            name: 'imageRight',
            title: 'Image Right',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'imageRightUrl',
            title: 'Image Right URL',
            type: 'url',
            description: 'Paste an external image URL here to use instead of uploading an image.',
        }),
    ],
})
