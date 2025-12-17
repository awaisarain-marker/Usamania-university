import { defineField, defineType } from 'sanity'

export const footer = defineType({
    name: 'footer',
    title: 'Footer Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Settings Name',
            type: 'string',
            initialValue: 'Footer Settings',
            hidden: true,
        }),

        // Copyright Text
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            description: 'e.g., "Copyright 2025. All rights reserved."',
            initialValue: 'Copyright 2025. All rights reserved.',
        }),

        // Taglines
        defineField({
            name: 'universityDescription',
            title: 'University Description',
            type: 'string',
            description: 'e.g., "Pakistan University in Karachi"',
            initialValue: 'Pakistan University in Karachi',
        }),
        defineField({
            name: 'slogan',
            title: 'Slogan',
            type: 'string',
            description: 'e.g., "Expand your world"',
            initialValue: 'Expand your world',
        }),

        // Contact Info
        defineField({
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            fields: [
                { name: 'title', title: 'Institution Name', type: 'string', initialValue: 'UIT University' },
                { name: 'address', title: 'Address', type: 'text', initialValue: 'ST-13, Block 7, Gulshan-e-Iqbal, Abul Hasan Isphahani Road, Off Main University Road, Karachi – 75300' },
                { name: 'email', title: 'Email', type: 'string', initialValue: 'info@uitu.edu.pk' },
                { name: 'phone', title: 'Phone', type: 'string' },
                { name: 'uan', title: 'UAN', type: 'string', initialValue: '(92-21) 111-978-275, 34994305, 34978274-5' },
                { name: 'admissions', title: 'Admissions Phone', type: 'string', initialValue: '0333-0399113' },
            ],
        }),

        // Social Links
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', title: 'Platform Name', type: 'string', options: { list: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'YouTube'] } },
                        { name: 'url', title: 'URL', type: 'url' },
                    ],
                    preview: {
                        select: { title: 'platform', subtitle: 'url' }
                    }
                }
            ],
        }),

        // Quick Links
        defineField({
            name: 'quickLinks',
            title: 'Quick Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Link Label', type: 'string' },
                        { name: 'url', title: 'Link URL', type: 'string' },
                    ],
                }
            ],
        }),

        // Footer Image
        defineField({
            name: 'footerImageUrl',
            title: 'Footer Background Image - Option 1: Paste URL',
            type: 'url',
            description: 'External URL for the footer background image',
            initialValue: 'https://ik.imagekit.io/byat8clceo/Web%20Footer.png',
        }),
        defineField({
            name: 'footerImage',
            title: 'Footer Background Image - Option 2: Upload',
            type: 'image',
            description: 'Or upload an image directly (URL takes priority if set, but upload is recommended)',
            options: { hotspot: true },
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Footer Settings',
            }
        },
    },
})
