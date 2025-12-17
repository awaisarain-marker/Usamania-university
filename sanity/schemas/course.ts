import { defineField, defineType } from 'sanity'

export const course = defineType({
    name: 'course',
    title: 'Course Program',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Program Title',
            type: 'string',
            description: 'e.g., BS Computer Science, BBA, BE Electrical',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'URL-friendly identifier (e.g., bs-computer-science)',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle/Tagline',
            type: 'string',
            description: 'e.g., Empowering the Next Generation of Tech Leaders',
        }),
        // External URL for card image (grid on admission page)
        defineField({
            name: 'cardImageUrl',
            title: 'Card Image URL (Grid)',
            type: 'url',
            description: 'External image URL for the card in the UIT Academics grid. Paste any image URL here.',
        }),
        // External URL for hero banner
        defineField({
            name: 'heroImageUrl',
            title: 'Hero Banner Image URL',
            type: 'url',
            description: 'External image URL for the big banner at top of course page. Paste any image URL here.',
        }),
        // Upload option for hero image (optional)
        defineField({
            name: 'heroImage',
            title: 'Hero Banner Image (Upload)',
            type: 'image',
            description: 'Or upload an image directly (optional - URL above takes priority)',
            options: {
                hotspot: true,
            },
        }),
        // External URL for overview image
        defineField({
            name: 'overviewImageUrl',
            title: 'Overview Section Image URL',
            type: 'url',
            description: 'External image URL for the overview section',
        }),
        defineField({
            name: 'overviewImage',
            title: 'Overview Section Image (Upload)',
            type: 'image',
            description: 'Or upload an image directly (optional)',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'overviewContent',
            title: 'Overview Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main overview text for the program',
        }),
        defineField({
            name: 'degreeRequirements',
            title: 'Degree Requirements',
            type: 'object',
            fields: [
                { name: 'duration', title: 'Duration (Years)', type: 'number' },
                { name: 'semesters', title: 'Number of Semesters', type: 'number' },
                { name: 'coursesPerSemester', title: 'Courses per Semester', type: 'string' },
                { name: 'totalCredits', title: 'Total Credit Hours', type: 'number' },
                { name: 'totalCourses', title: 'Total Courses', type: 'string' },
            ],
        }),
        defineField({
            name: 'semesterData',
            title: 'Semester Courses',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'semester',
                    title: 'Semester',
                    fields: [
                        { name: 'name', title: 'Semester Name', type: 'string' },
                        { name: 'totalCredits', title: 'Total Credits', type: 'number' },
                        {
                            name: 'courses',
                            title: 'Courses',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    name: 'courseItem',
                                    title: 'Course',
                                    fields: [
                                        { name: 'code', title: 'Course Code', type: 'string' },
                                        { name: 'title', title: 'Course Title', type: 'string' },
                                        { name: 'creditLecture', title: 'Credit (Lecture)', type: 'number' },
                                        { name: 'creditLab', title: 'Credit (Lab)', type: 'number' },
                                        { name: 'total', title: 'Total Credits', type: 'number' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'internship',
            title: 'Internship Info',
            type: 'object',
            fields: [
                { name: 'text', title: 'Description', type: 'string' },
                { name: 'credits', title: 'Credits', type: 'number' },
            ],
        }),
        defineField({
            name: 'peos',
            title: 'Program Educational Objectives (PEOs)',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'plos',
            title: 'Program Learning Outcomes (PLOs)',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'eligibility',
            title: 'Eligibility Criteria',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'admissionTestCriteria',
            title: 'Admission Test Criteria',
            type: 'array',
            of: [{ type: 'text' }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'heroImage',
            cardImageUrl: 'cardImageUrl',
        },
        prepare({ title, subtitle, media, cardImageUrl }) {
            return {
                title,
                subtitle,
                media: media || (cardImageUrl ? undefined : undefined),
            }
        },
    },
})
