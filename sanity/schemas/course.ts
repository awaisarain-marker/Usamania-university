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
        defineField({
            name: 'heroImage',
            title: 'Hero Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'overviewImage',
            title: 'Overview Section Image',
            type: 'image',
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
        },
    },
})
