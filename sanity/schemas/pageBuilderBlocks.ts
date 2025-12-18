import { defineType, defineField, defineArrayMember } from 'sanity'

// Hero Block - Main hero section with video, stats, and quick links
export const heroBlock = defineType({
    name: 'heroBlock',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            description: 'Background video URL',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', type: 'string', title: 'Button Text' }),
                        defineField({ name: 'link', type: 'string', title: 'Button Link' }),
                        defineField({
                            name: 'style',
                            type: 'string',
                            title: 'Style',
                            options: { list: [{ title: 'Red', value: 'red' }, { title: 'Transparent', value: 'transparent' }] }
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'value', type: 'string', title: 'Value' }),
                        defineField({ name: 'label', type: 'string', title: 'Label' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'quickLinks',
            title: 'Quick Links',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Title' }),
                        defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
                        defineField({ name: 'link', type: 'string', title: 'Link' }),
                        defineField({ name: 'linkText', type: 'string', title: 'Link Text' }),
                        defineField({ name: 'imageUrl', type: 'url', title: 'Image URL' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return { title: title || 'Hero Section', subtitle: 'Video Hero with Stats' }
        },
    },
})

// Page Hero Block - Simple hero for inner pages
export const pageHeroBlock = defineType({
    name: 'pageHeroBlock',
    title: 'Page Hero',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'bgImage', title: 'Background Image URL', type: 'url' }),
        defineField({
            name: 'breadcrumbs',
            title: 'Breadcrumbs',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', type: 'string', title: 'Label' }),
                        defineField({ name: 'href', type: 'string', title: 'Link (optional)' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return { title: title || 'Page Hero', subtitle: 'Inner Page Hero' }
        },
    },
})

// World Class Section Block
export const worldClassBlock = defineType({
    name: 'worldClassBlock',
    title: 'Image CTA Section',
    type: 'object',
    fields: [
        defineField({ name: 'imageUrl', title: 'Image URL', type: 'url' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return { title: title || 'Image CTA Section', subtitle: 'Image with Text & Button' }
        },
    },
})

// Alumni Section Block
export const alumniBlock = defineType({
    name: 'alumniBlock',
    title: 'Alumni Section',
    type: 'object',
    fields: [
        defineField({ name: 'imageUrl', title: 'Background Image URL', type: 'url' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return { title: title || 'Alumni Section', subtitle: 'Alumni Success Stories' }
        },
    },
})

// Testimonials Block
export const testimonialsBlock = defineType({
    name: 'testimonialsBlock',
    title: 'Testimonials Section',
    type: 'object',
    fields: [
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Name' }),
                        defineField({ name: 'location', type: 'string', title: 'Location' }),
                        defineField({ name: 'quote', type: 'string', title: 'Short Quote' }),
                        defineField({ name: 'fullText', type: 'text', title: 'Full Testimonial' }),
                        defineField({ name: 'bgImageUrl', type: 'url', title: 'Background Image URL' }),
                        defineField({ name: 'avatarUrl', type: 'url', title: 'Avatar URL' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { testimonials: 'testimonials' },
        prepare({ testimonials }) {
            const count = testimonials?.length || 0
            return { title: 'Testimonials Section', subtitle: `${count} testimonials` }
        },
    },
})

// CTA Section Block
export const ctaBlock = defineType({
    name: 'ctaBlock',
    title: 'Call to Action Section',
    type: 'object',
    fields: [
        defineField({ name: 'topImageUrl', title: 'Top Image URL', type: 'url' }),
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'titleTop', title: 'Title (Top Line)', type: 'string' }),
        defineField({ name: 'titleBottom', title: 'Title (Bottom Line)', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', type: 'string', title: 'Button Text' }),
                        defineField({ name: 'link', type: 'string', title: 'Button Link' }),
                    ],
                }),
            ],
        }),
        defineField({ name: 'bottomImageUrl', title: 'Bottom Image URL', type: 'url' }),
    ],
    preview: {
        select: { title: 'titleBottom' },
        prepare({ title }) {
            return { title: title || 'CTA Section', subtitle: 'Call to Action' }
        },
    },
})

// Blog Section Block (dynamic - fetches from Sanity)
export const blogSectionBlock = defineType({
    name: 'blogSectionBlock',
    title: 'Blog Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'UIT University Today' }),
    ],
    preview: {
        prepare() {
            return { title: 'Blog Section', subtitle: 'Latest Blog Posts (Dynamic)' }
        },
    },
})

// Events Section Block (dynamic - fetches from Sanity)
export const eventsSectionBlock = defineType({
    name: 'eventsSectionBlock',
    title: 'Events Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Upcoming Events' }),
    ],
    preview: {
        prepare() {
            return { title: 'Events Section', subtitle: 'Upcoming Events (Dynamic)' }
        },
    },
})

// Academics Grid Block
export const academicsGridBlock = defineType({
    name: 'academicsGridBlock',
    title: 'Academics Grid',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'UIT <br /> Academics' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
    ],
    preview: {
        prepare() {
            return { title: 'Academics Grid', subtitle: 'Course Programs (Dynamic)' }
        },
    },
})

// Campus Experience Block
export const campusExperienceBlock = defineType({
    name: 'campusExperienceBlock',
    title: 'Campus Experience Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Study Hard & Enjoy Your Campus Experience' }),
        defineField({
            name: 'gallery',
            title: 'Gallery Images',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'imageUrl', type: 'url', title: 'Image URL' }),
                        defineField({ name: 'alt', type: 'string', title: 'Alt Text' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return { title: title || 'Campus Experience', subtitle: 'Gallery Section' }
        },
    },
})

// Faculty Grid Block
export const facultyGridBlock = defineType({
    name: 'facultyGridBlock',
    title: 'Faculty Grid',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Our <br /> Faculty' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
    ],
    preview: {
        prepare() {
            return { title: 'Faculty Grid', subtitle: 'Faculty Categories' }
        },
    },
})

// FAQs Accordion Block
export const faqsAccordionBlock = defineType({
    name: 'faqsAccordionBlock',
    title: 'FAQs Accordion',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Frequently Asked Questions' }),
        defineField({
            name: 'faqs',
            title: 'FAQ Items',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'question', type: 'string', title: 'Question' }),
                        defineField({ name: 'answer', type: 'text', title: 'Answer' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { faqs: 'faqs' },
        prepare({ faqs }) {
            const count = faqs?.length || 0
            return { title: 'FAQs Accordion', subtitle: `${count} questions` }
        },
    },
})

// Spacer Block - for adding whitespace
export const spacerBlock = defineType({
    name: 'spacerBlock',
    title: 'Spacer',
    type: 'object',
    fields: [
        defineField({
            name: 'height',
            title: 'Height',
            type: 'string',
            options: {
                list: [
                    { title: 'Small (20px)', value: 'small' },
                    { title: 'Medium (40px)', value: 'medium' },
                    { title: 'Large (80px)', value: 'large' },
                ],
            },
            initialValue: 'medium',
        }),
    ],
    preview: {
        select: { height: 'height' },
        prepare({ height }) {
            return { title: 'Spacer', subtitle: height || 'Medium' }
        },
    },
})

// Rich Text Block - for custom content
export const richTextBlock = defineType({
    name: 'richTextBlock',
    title: 'Rich Text Content',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section Title (optional)', type: 'string' }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                defineArrayMember({ type: 'block' }),
                defineArrayMember({ type: 'image' }),
            ],
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    { title: 'White', value: 'white' },
                    { title: 'Light Blue', value: 'light-blue' },
                    { title: 'Dark Blue', value: 'dark-blue' },
                ],
            },
            initialValue: 'white',
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare({ title }) {
            return { title: title || 'Rich Text Content', subtitle: 'Custom Content Block' }
        },
    },
})

// ============================================
// ABOUT PAGE COMPONENTS
// ============================================

// Tab Accordion Block - Tabbed content section
export const tabAccordionBlock = defineType({
    name: 'tabAccordionBlock',
    title: 'Tab Accordion',
    type: 'object',
    fields: [
        defineField({
            name: 'tabs',
            title: 'Tabs',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'id', type: 'string', title: 'Tab ID (e.g., "mission")' }),
                        defineField({ name: 'label', type: 'string', title: 'Tab Label' }),
                        defineField({ name: 'content', type: 'text', title: 'Tab Content' }),
                        defineField({ name: 'rightImage', type: 'url', title: 'Right Image URL' }),
                        defineField({ name: 'rightQuote', type: 'text', title: 'Quote Text' }),
                        defineField({ name: 'rightQuoteAuthor', type: 'string', title: 'Quote Author' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { tabs: 'tabs' },
        prepare({ tabs }) {
            const count = tabs?.length || 0
            return { title: 'Tab Accordion', subtitle: `${count} tabs` }
        },
    },
})

// Leadership Section Block
export const leadershipBlock = defineType({
    name: 'leadershipBlock',
    title: 'Leadership Section',
    type: 'object',
    fields: [
        defineField({ name: 'hideHeader', title: 'Hide Header', type: 'boolean', initialValue: false }),
    ],
    preview: {
        prepare() {
            return { title: 'Leadership Section', subtitle: 'University Leadership Team' }
        },
    },
})

// Facilities Section Block
export const facilitiesBlock = defineType({
    name: 'facilitiesBlock',
    title: 'Facilities Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Our Facilities' }),
    ],
    preview: {
        prepare() {
            return { title: 'Facilities Section', subtitle: 'Campus Facilities Showcase' }
        },
    },
})

// Journey Timeline Block
export const journeyTimelineBlock = defineType({
    name: 'journeyTimelineBlock',
    title: 'Journey Timeline',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Our Journey' }),
        defineField({
            name: 'milestones',
            title: 'Milestones',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Milestone Title' }),
                        defineField({ name: 'description', type: 'text', title: 'Description' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { milestones: 'milestones' },
        prepare({ milestones }) {
            const count = milestones?.length || 0
            return { title: 'Journey Timeline', subtitle: `${count} milestones` }
        },
    },
})

// Export all blocks
export const pageBuilderBlocks = [
    heroBlock,
    pageHeroBlock,
    worldClassBlock,
    alumniBlock,
    testimonialsBlock,
    ctaBlock,
    blogSectionBlock,
    eventsSectionBlock,
    academicsGridBlock,
    campusExperienceBlock,
    facultyGridBlock,
    faqsAccordionBlock,
    spacerBlock,
    richTextBlock,
    // About page blocks
    tabAccordionBlock,
    leadershipBlock,
    facilitiesBlock,
    journeyTimelineBlock,
]

