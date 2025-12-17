import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Us Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'tabs', title: 'Tab Content' },
        { name: 'journey', title: 'Our Journey' },
        { name: 'leadership', title: 'Leadership' },
        { name: 'accreditations', title: 'Accreditations' },
        { name: 'facilities', title: 'Facilities' },
    ],
    fields: [
        // ===== HERO SECTION =====
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroBgImage',
            title: 'Hero Background Image',
            type: 'url',
            group: 'hero',
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
                    ],
                }),
            ],
        }),

        // ===== TAB CONTENT =====
        defineField({
            name: 'whoWeAreTitle',
            title: 'Who We Are - Title',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'whoWeAreSubtitle',
            title: 'Who We Are - Subtitle',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'whoWeAreContent',
            title: 'Who We Are - Content',
            type: 'text',
            group: 'tabs',
        }),
        defineField({
            name: 'whoWeAreImage',
            title: 'Who We Are - Image',
            type: 'url',
            group: 'tabs',
        }),
        defineField({
            name: 'governanceTitle',
            title: 'Governance - Title',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'governanceSubtitle',
            title: 'Governance - Subtitle',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'governanceContent',
            title: 'Governance - Content',
            type: 'text',
            group: 'tabs',
        }),
        defineField({
            name: 'governanceImage',
            title: 'Governance - Image',
            type: 'url',
            group: 'tabs',
        }),
        defineField({
            name: 'missionTitle',
            title: 'Mission - Title',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'missionSubtitle',
            title: 'Mission - Subtitle',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'missionContent',
            title: 'Mission - Content',
            type: 'text',
            group: 'tabs',
        }),
        defineField({
            name: 'missionImage',
            title: 'Mission - Image',
            type: 'url',
            group: 'tabs',
        }),
        defineField({
            name: 'visionTitle',
            title: 'Vision - Title',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'visionSubtitle',
            title: 'Vision - Subtitle',
            type: 'string',
            group: 'tabs',
        }),
        defineField({
            name: 'visionContent',
            title: 'Vision - Content',
            type: 'text',
            group: 'tabs',
        }),
        defineField({
            name: 'visionImage',
            title: 'Vision - Image',
            type: 'url',
            group: 'tabs',
        }),

        // ===== JOURNEY SECTION =====
        defineField({
            name: 'journeyTitle',
            title: 'Journey Section Title',
            type: 'string',
            group: 'journey',
        }),
        defineField({
            name: 'journeyMilestones',
            title: 'Journey Milestones',
            type: 'array',
            group: 'journey',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'description', title: 'Description', type: 'text' }),
                    ],
                }),
            ],
        }),

        // ===== LEADERSHIP SECTION =====
        defineField({
            name: 'leadershipTitle',
            title: 'Leadership Section Title',
            type: 'string',
            group: 'leadership',
        }),
        defineField({
            name: 'leadershipQuote',
            title: 'Leadership Quote',
            type: 'string',
            group: 'leadership',
        }),
        defineField({
            name: 'vcMessage',
            title: "Vice Chancellor's Message",
            type: 'text',
            group: 'leadership',
        }),
        defineField({
            name: 'vcImage',
            title: "Vice Chancellor's Image",
            type: 'url',
            group: 'leadership',
        }),
        defineField({
            name: 'vcName',
            title: "Vice Chancellor's Name",
            type: 'string',
            group: 'leadership',
        }),
        defineField({
            name: 'boardOfAdvisors',
            title: 'Board of Advisors',
            type: 'array',
            group: 'leadership',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'boardOfGovernors',
            title: 'Board of Governors',
            type: 'array',
            group: 'leadership',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'academicCouncil',
            title: 'Academic Council',
            type: 'array',
            group: 'leadership',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'managementTeam',
            title: 'Management Team',
            type: 'array',
            group: 'leadership',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'ext', title: 'Extension', type: 'string' }),
                        defineField({ name: 'image', title: 'Image URL', type: 'url' }),
                    ],
                }),
            ],
        }),

        // ===== ACCREDITATIONS SECTION =====
        defineField({
            name: 'accreditationsTitle',
            title: 'Accreditations Section Title',
            type: 'string',
            group: 'accreditations',
        }),
        defineField({
            name: 'accreditationsImage',
            title: 'Accreditations Image',
            type: 'url',
            group: 'accreditations',
        }),
        defineField({
            name: 'accreditationsItems',
            title: 'Accreditation Items',
            type: 'array',
            group: 'accreditations',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'content', title: 'Content', type: 'text' }),
                        defineField({ name: 'linkText', title: 'Link Text', type: 'string' }),
                        defineField({ name: 'linkUrl', title: 'Link URL', type: 'url' }),
                    ],
                }),
            ],
        }),

        // ===== FACILITIES SECTION =====
        defineField({
            name: 'facilitiesTitle',
            title: 'Facilities Section Title',
            type: 'string',
            group: 'facilities',
        }),
        defineField({
            name: 'facilitiesTabs',
            title: 'Facilities Tabs',
            type: 'array',
            group: 'facilities',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'id', title: 'Tab ID', type: 'string' }),
                        defineField({ name: 'label', title: 'Tab Label', type: 'string' }),
                        defineField({ name: 'content', title: 'Tab Content (HTML)', type: 'text' }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'About Us Page',
                subtitle: 'About page content',
            }
        },
    },
})
