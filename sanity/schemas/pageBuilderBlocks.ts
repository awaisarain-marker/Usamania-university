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

// Page Hero Block - Hero for inner pages with breadcrumbs and CTA buttons
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
        defineField({
            name: 'heroButtons',
            title: 'Hero Buttons',
            description: 'CTA buttons displayed in the hero section',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', type: 'string', title: 'Button Text' }),
                        defineField({ name: 'link', type: 'string', title: 'Button Link (e.g., #introduction)' }),
                        defineField({
                            name: 'style',
                            type: 'string',
                            title: 'Button Style',
                            options: {
                                list: [
                                    { title: 'Red Button (Primary)', value: 'red' },
                                    { title: 'White Link (Secondary)', value: 'white' },
                                ],
                            },
                            initialValue: 'white',
                        }),
                    ],
                    preview: {
                        select: { text: 'text', style: 'style' },
                        prepare({ text, style }) {
                            return { title: text || 'Button', subtitle: style === 'red' ? 'Primary (Red)' : 'Secondary (White)' }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title', buttons: 'heroButtons' },
        prepare({ title, buttons }) {
            const count = buttons?.length || 0
            return { title: title || 'Page Hero', subtitle: `${count} buttons` }
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

// Accordion Section Block - Image + Expandable Text (like QEC Introduction)
export const accordionSectionBlock = defineType({
    name: 'accordionSectionBlock',
    title: 'Accordion Section (Image + Text)',
    type: 'object',
    fields: [
        defineField({ name: 'sectionId', title: 'Section ID (for navigation)', type: 'string', description: 'e.g., "introduction" for #introduction links' }),
        defineField({ name: 'imageUrl', title: 'Image URL', type: 'url', validation: Rule => Rule.required() }),
        defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string', validation: Rule => Rule.required() }),
        defineField({
            name: 'paragraphs',
            title: 'Paragraphs',
            description: 'Each paragraph will be displayed with proper spacing',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', type: 'text', title: 'Paragraph Text' }),
                    ],
                    preview: {
                        select: { text: 'text' },
                        prepare({ text }) {
                            return { title: text?.substring(0, 80) + '...' || 'Paragraph' }
                        },
                    },
                }),
            ],
        }),
        defineField({ name: 'showReadMore', title: 'Show Read More Button', type: 'boolean', initialValue: true }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Light Background', value: 'light' },
                    { title: 'White Background', value: 'white' },
                ],
            },
            initialValue: 'light',
        }),
    ],
    preview: {
        select: { title: 'title', sectionId: 'sectionId' },
        prepare({ title, sectionId }) {
            return { title: title || 'Accordion Section', subtitle: sectionId ? `#${sectionId}` : 'Image + Text' }
        },
    },
})

// Vision Box Block - For Vision/Mission/Objectives style sections (qec-vision-box)
export const visionBoxBlock = defineType({
    name: 'visionBoxBlock',
    title: 'Vision Box Section',
    type: 'object',
    fields: [
        defineField({ name: 'sectionId', title: 'Section ID (for navigation)', type: 'string', description: 'e.g., "vision" for #vision links' }),
        defineField({ name: 'title', title: 'Section Title', type: 'string', validation: Rule => Rule.required() }),
        defineField({
            name: 'contentType',
            title: 'Content Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Simple Paragraph', value: 'paragraph' },
                    { title: 'Bullet Points (with red arrows)', value: 'bullets' },
                    { title: 'Icon List (with custom icons)', value: 'iconList' },
                    { title: 'Downloadable Files', value: 'files' },
                ],
            },
            initialValue: 'paragraph',
        }),
        // For paragraph type
        defineField({ name: 'paragraphText', title: 'Paragraph Text', type: 'text', hidden: ({ parent }) => parent?.contentType !== 'paragraph' }),
        // For bullets type
        defineField({
            name: 'bulletItems',
            title: 'Bullet Items',
            type: 'array',
            hidden: ({ parent }) => parent?.contentType !== 'bullets',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', type: 'text', title: 'Item Text' }),
                    ],
                    preview: {
                        select: { text: 'text' },
                        prepare({ text }) {
                            return { title: text?.substring(0, 80) + '...' || 'Bullet Item' }
                        },
                    },
                }),
            ],
        }),
        // For icon list type
        defineField({
            name: 'iconItems',
            title: 'Icon List Items',
            type: 'array',
            hidden: ({ parent }) => parent?.contentType !== 'iconList',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            type: 'string',
                            title: 'Icon',
                            options: {
                                list: [
                                    { title: 'Arrow Right', value: 'arrow-right' },
                                    { title: 'Check Mark', value: 'check' },
                                    { title: 'Star', value: 'star' },
                                    { title: 'Circle', value: 'circle' },
                                ],
                            },
                            initialValue: 'arrow-right',
                        }),
                        defineField({ name: 'title', type: 'string', title: 'Item Title' }),
                        defineField({ name: 'description', type: 'text', title: 'Item Description' }),
                    ],
                    preview: {
                        select: { title: 'title', icon: 'icon' },
                        prepare({ title, icon }) {
                            return { title: title || 'Icon Item', subtitle: icon }
                        },
                    },
                }),
            ],
        }),
        // For files type
        defineField({
            name: 'fileItems',
            title: 'Downloadable Files',
            type: 'array',
            hidden: ({ parent }) => parent?.contentType !== 'files',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'fileName', type: 'string', title: 'File Name (e.g., "QAA Calendar 2025-2026")' }),
                        defineField({ name: 'fileUrl', type: 'url', title: 'File URL (PDF link)' }),
                    ],
                    preview: {
                        select: { fileName: 'fileName' },
                        prepare({ fileName }) {
                            return { title: fileName || 'File' }
                        },
                    },
                }),
            ],
        }),
        // Button (optional, can be added to any content type)
        defineField({ name: 'showButton', title: 'Show Button', type: 'boolean', initialValue: false }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            hidden: ({ parent }) => !parent?.showButton
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
            hidden: ({ parent }) => !parent?.showButton
        }),
        defineField({
            name: 'buttonStyle',
            title: 'Button Style',
            type: 'string',
            hidden: ({ parent }) => !parent?.showButton,
            options: {
                list: [
                    { title: 'Red Solid', value: 'red' },
                    { title: 'Red Outline', value: 'red-outline' },
                    { title: 'White Solid', value: 'white' },
                    { title: 'Navy Solid', value: 'navy' },
                    { title: 'Navy Outline', value: 'navy-outline' },
                    { title: 'Link Style (with arrow)', value: 'link' },
                ],
            },
            initialValue: 'red',
        }),
        // Background color
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    { title: 'White', value: 'white' },
                    { title: 'Light Blue (#e6eef4)', value: 'light-blue' },
                    { title: 'Navy Blue (#002856)', value: 'navy' },
                ],
            },
            initialValue: 'white',
        }),
    ],
    preview: {
        select: { title: 'title', contentType: 'contentType', sectionId: 'sectionId' },
        prepare({ title, contentType, sectionId }) {
            const typeLabels: Record<string, string> = {
                paragraph: 'Paragraph',
                bullets: 'Bullet Points',
                iconList: 'Icon List',
                files: 'Files',
            }
            return {
                title: title || 'Vision Box',
                subtitle: `${typeLabels[contentType] || 'Paragraph'}${sectionId ? ` • #${sectionId}` : ''}`
            }
        },
    },
})

// Organogram Block - For organizational hierarchy tree
export const organogramBlock = defineType({
    name: 'organogramBlock',
    title: 'Organogram (Org Chart)',
    type: 'object',
    fields: [
        defineField({ name: 'sectionId', title: 'Section ID', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Organogram' }),
        defineField({
            name: 'nodes',
            title: 'Organization Nodes',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Position/Name' }),
                        defineField({ name: 'level', type: 'number', title: 'Level (0=Top, 1=Second, etc.)' }),
                        defineField({ name: 'parentIndex', type: 'number', title: 'Parent Node Index (-1 for root)' }),
                    ],
                    preview: {
                        select: { name: 'name', level: 'level' },
                        prepare({ name, level }) {
                            return { title: name || 'Node', subtitle: `Level ${level}` }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title', nodes: 'nodes' },
        prepare({ title, nodes }) {
            return { title: title || 'Organogram', subtitle: `${nodes?.length || 0} positions` }
        },
    },
})

// Team Grid Block - For team member cards
export const teamGridBlock = defineType({
    name: 'teamGridBlock',
    title: 'Team Grid',
    type: 'object',
    fields: [
        defineField({ name: 'sectionId', title: 'Section ID', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Our Team' }),
        defineField({ name: 'imageUrl', title: 'Header Image URL', type: 'url' }),
        defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
        defineField({
            name: 'members',
            title: 'Team Members',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Name' }),
                        defineField({ name: 'position', type: 'string', title: 'Position/Role' }),
                        defineField({ name: 'phone', type: 'string', title: 'Phone Number' }),
                        defineField({ name: 'email', type: 'string', title: 'Email Address' }),
                    ],
                    preview: {
                        select: { name: 'name', position: 'position' },
                        prepare({ name, position }) {
                            return { title: name || 'Member', subtitle: position }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title', members: 'members' },
        prepare({ title, members }) {
            return { title: title || 'Team Grid', subtitle: `${members?.length || 0} members` }
        },
    },
})

// Policy Links Block - For categorized policy documents
export const policyLinksBlock = defineType({
    name: 'policyLinksBlock',
    title: 'Policy Links',
    type: 'object',
    fields: [
        defineField({ name: 'sectionId', title: 'Section ID', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Policies' }),
        defineField({
            name: 'categories',
            title: 'Policy Categories',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'categoryName', type: 'string', title: 'Category Name' }),
                        defineField({
                            name: 'policies',
                            title: 'Policies',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'policyName', type: 'string', title: 'Policy Name' }),
                                        defineField({ name: 'policyUrl', type: 'string', title: 'Policy URL or Path' }),
                                    ],
                                    preview: {
                                        select: { policyName: 'policyName' },
                                        prepare({ policyName }) {
                                            return { title: policyName || 'Policy' }
                                        },
                                    },
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: { categoryName: 'categoryName', policies: 'policies' },
                        prepare({ categoryName, policies }) {
                            return { title: categoryName || 'Category', subtitle: `${policies?.length || 0} policies` }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title', categories: 'categories' },
        prepare({ title, categories }) {
            return { title: title || 'Policy Links', subtitle: `${categories?.length || 0} categories` }
        },
    },
})

// Tabbed Content Block - Container for tabs with different content
export const tabbedContentBlock = defineType({
    name: 'tabbedContentBlock',
    title: 'Tabbed Content Section',
    type: 'object',
    fields: [
        defineField({ name: 'sectionId', title: 'Section ID', type: 'string' }),
        defineField({
            name: 'tabs',
            title: 'Tabs',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'tabTitle', type: 'string', title: 'Tab Title' }),
                        defineField({
                            name: 'contentType',
                            title: 'Content Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Organogram', value: 'organogram' },
                                    { title: 'Team Grid', value: 'teamGrid' },
                                    { title: 'Policy Links', value: 'policyLinks' },
                                    { title: 'Vision Box', value: 'visionBox' },
                                    { title: 'Rich Text (HTML)', value: 'richText' },
                                    { title: 'FAQ Accordion', value: 'faqAccordion' },
                                    { title: 'Procedure Steps', value: 'procedureSteps' },
                                ],
                            },
                        }),
                        // Rich Text content (HTML)
                        defineField({
                            name: 'richContent',
                            title: 'Rich Content (supports HTML)',
                            type: 'text',
                            rows: 15,
                            hidden: ({ parent }) => parent?.contentType !== 'richText',
                            description: 'You can use HTML for complex layouts with tables, styled boxes, etc.',
                        }),
                        // FAQ Accordion content
                        defineField({
                            name: 'faqItems',
                            title: 'FAQ Items',
                            type: 'array',
                            hidden: ({ parent }) => parent?.contentType !== 'faqAccordion',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'question', type: 'string', title: 'Question' }),
                                        defineField({
                                            name: 'answer',
                                            type: 'array',
                                            title: 'Answer',
                                            of: [
                                                {
                                                    type: 'block',
                                                    styles: [{ title: 'Normal', value: 'normal' }],
                                                    marks: {
                                                        decorators: [
                                                            { title: 'Bold', value: 'strong' },
                                                            { title: 'Italic', value: 'em' },
                                                        ],
                                                        annotations: [
                                                            {
                                                                name: 'link',
                                                                type: 'object',
                                                                title: 'Link',
                                                                fields: [
                                                                    { name: 'href', type: 'url', title: 'URL' },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        }),
                                    ],
                                    preview: {
                                        select: { question: 'question' },
                                        prepare({ question }) {
                                            return { title: question || 'FAQ Item' }
                                        },
                                    },
                                }),
                            ],
                        }),
                        // Procedure Steps content (for How to Apply, etc.)
                        defineField({
                            name: 'procedureTitle',
                            title: 'Procedure Title',
                            type: 'string',
                            hidden: ({ parent }) => parent?.contentType !== 'procedureSteps',
                        }),
                        defineField({
                            name: 'procedureSections',
                            title: 'Procedure Sections',
                            type: 'array',
                            hidden: ({ parent }) => parent?.contentType !== 'procedureSteps',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'sectionHeading', type: 'string', title: 'Section Heading' }),
                                        defineField({
                                            name: 'sectionDescription',
                                            type: 'array',
                                            title: 'Section Description (optional)',
                                            of: [
                                                {
                                                    type: 'block',
                                                    styles: [{ title: 'Normal', value: 'normal' }],
                                                    marks: {
                                                        decorators: [
                                                            { title: 'Bold', value: 'strong' },
                                                            { title: 'Italic', value: 'em' },
                                                        ],
                                                        annotations: [
                                                            {
                                                                name: 'link',
                                                                type: 'object',
                                                                title: 'Link',
                                                                fields: [
                                                                    { name: 'href', type: 'url', title: 'URL' },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        }),
                                        defineField({
                                            name: 'bulletPoints',
                                            title: 'Bullet Points',
                                            type: 'array',
                                            of: [
                                                defineArrayMember({
                                                    type: 'object',
                                                    fields: [
                                                        defineField({
                                                            name: 'text',
                                                            type: 'array',
                                                            title: 'Bullet Text',
                                                            of: [
                                                                {
                                                                    type: 'block',
                                                                    styles: [{ title: 'Normal', value: 'normal' }],
                                                                    marks: {
                                                                        decorators: [
                                                                            { title: 'Bold', value: 'strong' },
                                                                            { title: 'Italic', value: 'em' },
                                                                        ],
                                                                        annotations: [
                                                                            {
                                                                                name: 'link',
                                                                                type: 'object',
                                                                                title: 'Link',
                                                                                fields: [
                                                                                    { name: 'href', type: 'url', title: 'URL' },
                                                                                ],
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        }),
                                                    ],
                                                    preview: {
                                                        select: { text: 'text' },
                                                        prepare({ text }) {
                                                            const block = text?.[0];
                                                            const textContent = block?.children?.map((c: any) => c.text).join('') || 'Bullet point';
                                                            return { title: textContent.substring(0, 50) + (textContent.length > 50 ? '...' : '') };
                                                        },
                                                    },
                                                }),
                                            ],
                                        }),
                                        defineField({
                                            name: 'accentColor',
                                            title: 'Accent Color',
                                            type: 'string',
                                            options: {
                                                list: [
                                                    { title: 'Red', value: 'red' },
                                                    { title: 'Blue', value: 'blue' },
                                                ],
                                            },
                                            initialValue: 'red',
                                        }),
                                    ],
                                    preview: {
                                        select: { heading: 'sectionHeading' },
                                        prepare({ heading }) {
                                            return { title: heading || 'Section' };
                                        },
                                    },
                                }),
                            ],
                        }),
                        // Table data for procedures (like Merit Criteria)
                        defineField({
                            name: 'procedureTable',
                            title: 'Procedure Table (optional)',
                            type: 'object',
                            hidden: ({ parent }) => parent?.contentType !== 'procedureSteps',
                            fields: [
                                defineField({ name: 'tableTitle', type: 'string', title: 'Table Title' }),
                                defineField({
                                    name: 'tableRows',
                                    title: 'Table Rows',
                                    type: 'array',
                                    of: [
                                        defineArrayMember({
                                            type: 'object',
                                            fields: [
                                                defineField({ name: 'criteria', type: 'string', title: 'Criteria' }),
                                                defineField({ name: 'value', type: 'string', title: 'Value/Weightage' }),
                                            ],
                                            preview: {
                                                select: { criteria: 'criteria', value: 'value' },
                                                prepare({ criteria, value }) {
                                                    return { title: `${criteria}: ${value}` };
                                                },
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        // Info Box for procedures (like Payment details)
                        defineField({
                            name: 'procedureInfoBox',
                            title: 'Info Box (optional)',
                            type: 'object',
                            hidden: ({ parent }) => parent?.contentType !== 'procedureSteps',
                            fields: [
                                defineField({ name: 'infoTitle', type: 'string', title: 'Info Box Title' }),
                                defineField({
                                    name: 'infoItems',
                                    title: 'Info Items',
                                    type: 'array',
                                    of: [
                                        defineArrayMember({
                                            type: 'object',
                                            fields: [
                                                defineField({ name: 'label', type: 'string', title: 'Label' }),
                                                defineField({ name: 'value', type: 'string', title: 'Value' }),
                                            ],
                                            preview: {
                                                select: { label: 'label', value: 'value' },
                                                prepare({ label, value }) {
                                                    return { title: `${label}: ${value}` };
                                                },
                                            },
                                        }),
                                    ],
                                }),
                                defineField({
                                    name: 'infoDescription',
                                    type: 'text',
                                    title: 'Description (optional)',
                                    rows: 3,
                                }),
                            ],
                        }),
                        // Organogram content
                        defineField({
                            name: 'organogramNodes',
                            title: 'Organogram Nodes',
                            type: 'array',
                            hidden: ({ parent }) => parent?.contentType !== 'organogram',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'name', type: 'string', title: 'Position/Name' }),
                                        defineField({ name: 'level', type: 'number', title: 'Level (0=Top)' }),
                                        defineField({ name: 'parentIndex', type: 'number', title: 'Parent Index (-1 for root)' }),
                                    ],
                                }),
                            ],
                        }),
                        // Team Grid content
                        defineField({ name: 'teamImageUrl', title: 'Team Image URL', type: 'url', hidden: ({ parent }) => parent?.contentType !== 'teamGrid' }),
                        defineField({
                            name: 'teamMembers',
                            title: 'Team Members',
                            type: 'array',
                            hidden: ({ parent }) => parent?.contentType !== 'teamGrid',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'name', type: 'string', title: 'Name' }),
                                        defineField({ name: 'position', type: 'string', title: 'Position' }),
                                        defineField({ name: 'phone', type: 'string', title: 'Phone' }),
                                        defineField({ name: 'email', type: 'string', title: 'Email' }),
                                    ],
                                }),
                            ],
                        }),
                        // Policy Links content
                        defineField({
                            name: 'policyCategories',
                            title: 'Policy Categories',
                            type: 'array',
                            hidden: ({ parent }) => parent?.contentType !== 'policyLinks',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'categoryName', type: 'string', title: 'Category Name' }),
                                        defineField({
                                            name: 'policies',
                                            title: 'Policies',
                                            type: 'array',
                                            of: [
                                                defineArrayMember({
                                                    type: 'object',
                                                    fields: [
                                                        defineField({ name: 'policyName', type: 'string', title: 'Policy Name' }),
                                                        defineField({ name: 'policyUrl', type: 'string', title: 'Policy URL or Path' }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: { tabTitle: 'tabTitle', contentType: 'contentType' },
                        prepare({ tabTitle, contentType }) {
                            return { title: tabTitle || 'Tab', subtitle: contentType }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { tabs: 'tabs' },
        prepare({ tabs }) {
            return { title: 'Tabbed Content', subtitle: `${tabs?.length || 0} tabs` }
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
    // Content blocks
    accordionSectionBlock,
    visionBoxBlock,
    organogramBlock,
    teamGridBlock,
    policyLinksBlock,
    tabbedContentBlock,
]
