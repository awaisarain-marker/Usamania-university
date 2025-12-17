import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'intro', title: 'Introduction Section' },
        { name: 'academics', title: 'Academics Section' },
        { name: 'testimonials', title: 'Testimonials' },
        { name: 'alumni', title: 'Alumni Section' },
        { name: 'cta', title: 'CTA Section' },
        { name: 'campus', title: 'Campus Experience' },
    ],
    fields: [
        // ===== HERO SECTION =====
        defineField({
            name: 'heroVideoUrl',
            title: 'Hero Video URL',
            type: 'url',
            group: 'hero',
            description: 'URL to the background video',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            group: 'hero',
            description: 'Main hero headline',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'string',
            group: 'hero',
            description: 'Second line of the headline',
        }),
        defineField({
            name: 'heroButtons',
            title: 'Hero Buttons',
            type: 'array',
            group: 'hero',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', title: 'Button Text', type: 'string' }),
                        defineField({ name: 'link', title: 'Button Link', type: 'string' }),
                        defineField({
                            name: 'style',
                            title: 'Button Style',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Red (Primary)', value: 'red' },
                                    { title: 'Transparent (Secondary)', value: 'transparent' },
                                ],
                            },
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'heroStats',
            title: 'Hero Stats',
            type: 'array',
            group: 'hero',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'value', title: 'Stat Value', type: 'string' }),
                        defineField({ name: 'label', title: 'Stat Label', type: 'string' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'heroQuickLinks',
            title: 'Hero Quick Links',
            type: 'array',
            group: 'hero',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
                        defineField({ name: 'link', title: 'Link', type: 'string' }),
                        defineField({ name: 'linkText', title: 'Link Text', type: 'string' }),
                        defineField({ name: 'imageUrl', title: 'Image URL', type: 'url' }),
                    ],
                }),
            ],
        }),

        // ===== INTRODUCTION SECTION =====
        defineField({
            name: 'introImageUrl',
            title: 'Introduction Image URL',
            type: 'url',
            group: 'intro',
        }),
        defineField({
            name: 'introTitle',
            title: 'Introduction Title',
            type: 'string',
            group: 'intro',
        }),
        defineField({
            name: 'introDescription',
            title: 'Introduction Description',
            type: 'text',
            group: 'intro',
        }),
        defineField({
            name: 'introButtonText',
            title: 'Introduction Button Text',
            type: 'string',
            group: 'intro',
        }),
        defineField({
            name: 'introButtonLink',
            title: 'Introduction Button Link',
            type: 'string',
            group: 'intro',
        }),

        // ===== ACADEMICS SECTION =====
        defineField({
            name: 'academicsTitle',
            title: 'Academics Title',
            type: 'string',
            group: 'academics',
        }),
        defineField({
            name: 'academicsDescription',
            title: 'Academics Description',
            type: 'text',
            group: 'academics',
        }),

        // ===== TESTIMONIALS SECTION =====
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            group: 'testimonials',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'location', title: 'Location/Description', type: 'string' }),
                        defineField({ name: 'quote', title: 'Short Quote', type: 'text' }),
                        defineField({ name: 'fullText', title: 'Full Testimonial', type: 'text' }),
                        defineField({ name: 'bgImageUrl', title: 'Background Image URL', type: 'url' }),
                        defineField({ name: 'avatarUrl', title: 'Avatar Image URL', type: 'url' }),
                    ],
                }),
            ],
        }),

        // ===== ALUMNI SECTION =====
        defineField({
            name: 'alumniImageUrl',
            title: 'Alumni Background Image URL',
            type: 'url',
            group: 'alumni',
        }),
        defineField({
            name: 'alumniTitle',
            title: 'Alumni Title',
            type: 'string',
            group: 'alumni',
        }),
        defineField({
            name: 'alumniDescription',
            title: 'Alumni Description',
            type: 'text',
            group: 'alumni',
        }),
        defineField({
            name: 'alumniButtonText',
            title: 'Alumni Button Text',
            type: 'string',
            group: 'alumni',
        }),
        defineField({
            name: 'alumniButtonLink',
            title: 'Alumni Button Link',
            type: 'string',
            group: 'alumni',
        }),

        // ===== CTA SECTION =====
        defineField({
            name: 'ctaTopImageUrl',
            title: 'CTA Top Image URL',
            type: 'url',
            group: 'cta',
        }),
        defineField({
            name: 'ctaLabel',
            title: 'CTA Label',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaTitleTop',
            title: 'CTA Title Top',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaTitleBottom',
            title: 'CTA Title Bottom',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaDescription',
            title: 'CTA Description',
            type: 'text',
            group: 'cta',
        }),
        defineField({
            name: 'ctaButtons',
            title: 'CTA Buttons',
            type: 'array',
            group: 'cta',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', title: 'Button Text', type: 'string' }),
                        defineField({ name: 'link', title: 'Button Link', type: 'string' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'ctaBottomImageUrl',
            title: 'CTA Bottom Image URL',
            type: 'url',
            group: 'cta',
        }),

        // ===== CAMPUS EXPERIENCE SECTION =====
        defineField({
            name: 'campusTitle',
            title: 'Campus Section Title',
            type: 'string',
            group: 'campus',
        }),
        defineField({
            name: 'campusGallery',
            title: 'Campus Gallery Images',
            type: 'array',
            group: 'campus',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'imageUrl', title: 'Image URL', type: 'url' }),
                        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Home Page',
                subtitle: 'Main landing page content',
            }
        },
    },
})
