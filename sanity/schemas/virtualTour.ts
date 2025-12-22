import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'virtualTour',
    title: 'Virtual Tour',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Virtual Tour 3D Model',
        }),
        defineField({
            name: 'modelFile',
            title: '3D Model File (.glb)',
            type: 'file',
            options: {
                accept: '.glb'
            },
            description: 'Upload the .glb file for the virtual tour (max 500MB+ depending on plan, but usually sufficient for 331MB)',
        }),
    ],
})
