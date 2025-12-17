import { defineField, defineType } from 'sanity'

export const course = defineType({
    name: 'course',
    title: 'Course Program',
    type: 'document',
    groups: [
        { name: 'basic', title: 'Basic Info', default: true },
        { name: 'images', title: 'Images' },
        { name: 'content', title: 'Content' },
        { name: 'curriculum', title: 'Curriculum' },
        { name: 'admission', title: 'Admission' },
    ],
    fields: [
        // BASIC INFO GROUP
        defineField({
            name: 'title',
            title: 'Program Title',
            type: 'string',
            group: 'basic',
            description: 'e.g., BS Computer Science, BBA, BE Electrical',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            group: 'basic',
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
            group: 'basic',
            description: 'e.g., Empowering the Next Generation of Tech Leaders',
        }),

        // IMAGES GROUP - Card Image (for grid)
        defineField({
            name: 'cardImageUrl',
            title: '📷 Card Image - Option 1: Paste URL',
            type: 'url',
            group: 'images',
            description: 'Paste any external image URL for the card in UIT Academics grid',
        }),
        defineField({
            name: 'cardImage',
            title: '📷 Card Image - Option 2: Upload',
            type: 'image',
            group: 'images',
            description: 'Or upload an image directly (URL takes priority if both provided)',
            options: { hotspot: true },
        }),

        // IMAGES GROUP - Hero Banner
        defineField({
            name: 'heroImageUrl',
            title: '🖼️ Hero Banner - Option 1: Paste URL',
            type: 'url',
            group: 'images',
            description: 'External URL for the big banner at top of course page',
        }),
        defineField({
            name: 'heroImage',
            title: '🖼️ Hero Banner - Option 2: Upload',
            type: 'image',
            group: 'images',
            description: 'Or upload directly (URL takes priority if both provided)',
            options: { hotspot: true },
        }),

        // IMAGES GROUP - Overview Image
        defineField({
            name: 'overviewImageUrl',
            title: '📸 Overview Image - Option 1: Paste URL',
            type: 'url',
            group: 'images',
            description: 'External URL for the overview section image',
        }),
        defineField({
            name: 'overviewImage',
            title: '📸 Overview Image - Option 2: Upload',
            type: 'image',
            group: 'images',
            description: 'Or upload directly (URL takes priority if both provided)',
            options: { hotspot: true },
        }),

        // CONTENT GROUP
        defineField({
            name: 'overviewContent',
            title: 'Overview Content',
            type: 'array',
            group: 'content',
            of: [{ type: 'block' }],
            description: 'Main overview text for the program',
        }),
        defineField({
            name: 'degreeRequirements',
            title: 'Degree Requirements',
            type: 'object',
            group: 'content',
            fields: [
                { name: 'duration', title: 'Duration (Years)', type: 'number' },
                { name: 'semesters', title: 'Number of Semesters', type: 'number' },
                { name: 'coursesPerSemester', title: 'Courses per Semester', type: 'string' },
                { name: 'totalCredits', title: 'Total Credit Hours', type: 'number' },
                { name: 'totalCourses', title: 'Total Courses', type: 'string' },
            ],
        }),
        defineField({
            name: 'peos',
            title: 'Program Educational Objectives (PEOs)',
            type: 'array',
            group: 'content',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'plos',
            title: 'Program Learning Outcomes (PLOs)',
            type: 'array',
            group: 'content',
            of: [{ type: 'text' }],
        }),

        // CURRICULUM GROUP
        defineField({
            name: 'semesterData',
            title: 'Semester Courses',
            type: 'array',
            group: 'curriculum',
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
            group: 'curriculum',
            fields: [
                { name: 'text', title: 'Description', type: 'string' },
                { name: 'credits', title: 'Credits', type: 'number' },
            ],
        }),

        // ADMISSION GROUP
        defineField({
            name: 'eligibility',
            title: 'Eligibility Criteria',
            type: 'array',
            group: 'admission',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'admissionTestCriteria',
            title: 'Admission Test Criteria',
            type: 'array',
            group: 'admission',
            of: [{ type: 'text' }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'cardImage',
        },
    },
})
