import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

// Create a write-enabled client
const writeClient = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: 'skKNkjf0Q3pm3EFBIdItvRkcDakA4D9ywo3W8GwKc1pJNmVmcOz8lO6t02PSMy4UjqNh1Z0oDSf3JLoM0ZbKHnOXIPYpv7o4DBDlkSv3YkLJqzFKlW2ynD3cBQ6KWDamA12jE9GDqOqSOFtyVI5QFgFWM516DKpA8wfPDGgOtbnShwNvZqIU',
})

// Helper to create portable text block
const createBlock = (text: string) => ({
    _type: 'block',
    _key: Math.random().toString(36).substring(7),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: Math.random().toString(36).substring(7), text, marks: [] }]
})

const courses = [
    {
        _type: 'course',
        title: 'BS Computer Science',
        slug: { _type: 'slug', current: 'bs-computer-science' },
        subtitle: 'Empowering the Next Generation of Tech Leaders',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [
            createBlock('This 4-year program provides a comprehensive foundation in theoretical and algorithmic concepts, data structures, computer network design, information processing, and artificial intelligence. It emphasizes both the mathematical and engineering aspects of computing, preparing students for diverse roles in the tech industry.'),
        ],
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 140,
            totalCourses: '45 (Including Final Year Project)',
        },
        semesterData: [
            {
                _key: 'sem1',
                name: 'Semester 1',
                totalCredits: 15,
                courses: [
                    { _key: 'c1', code: 'CSC101', title: 'Introduction to Computing', creditLecture: 2, creditLab: 1, total: 3 },
                    { _key: 'c2', code: 'CSC102', title: 'Programming Fundamentals', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c3', code: 'ASC116', title: 'Applied Physics', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c4', code: 'HSC121', title: 'Communication Skills', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c5', code: 'HSC102/103', title: 'Islamic Studies / Ethics', creditLecture: 2, creditLab: 0, total: 2 },
                ]
            },
            {
                _key: 'sem2',
                name: 'Semester 2',
                totalCredits: 18,
                courses: [
                    { _key: 'c6', code: 'CSC103', title: 'Object Oriented Programming', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c7', code: 'CSC108', title: 'Discrete Structures', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c8', code: 'CSC111', title: 'Digital Logic Design', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c9', code: 'ASC111', title: 'Calculus & Analytical Geometry', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c10', code: 'HSC111', title: 'English Composition & Comprehension', creditLecture: 3, creditLab: 0, total: 3 },
                ]
            },
            {
                _key: 'sem3',
                name: 'Semester 3',
                totalCredits: 17,
                courses: [
                    { _key: 'c11', code: 'CSC201', title: 'Data Structures & Algorithms', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c12', code: 'CSC202', title: 'Computer Organization & Assembly Language', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c13', code: 'ASC112', title: 'Linear Algebra', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c14', code: 'HSC211', title: 'Technical & Business Writing', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c15', code: 'CSE101', title: 'Software Engineering Principles', creditLecture: 3, creditLab: 0, total: 3 },
                ]
            },
            {
                _key: 'sem4',
                name: 'Semester 4',
                totalCredits: 18,
                courses: [
                    { _key: 'c16', code: 'CSC203', title: 'Operating Systems', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c17', code: 'CSC204', title: 'Database Systems', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c18', code: 'CSC206', title: 'Computer Architecture', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c19', code: 'CIC201', title: 'Artificial Intelligence', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c20', code: 'ASC202', title: 'Multivariate Calculus', creditLecture: 3, creditLab: 0, total: 3 },
                ]
            },
        ],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: [
            'Pursue diverse range of careers, advanced degrees, or professional development in various computing disciplines.',
            'Apply analytical skills, computing principles, and modern technologies to design innovative solutions.',
            'Communicate effectively and work efficiently as an individual and in interdisciplinary teams.',
        ],
        plos: [
            'Completion of an accredited program of study designed to prepare graduates as computing professionals.',
            'Apply knowledge of computing fundamentals and domain knowledge appropriate for computing specialization.',
            'Identify, formulate, and solve complex computing problems using fundamental principles.',
            'Design and evaluate solutions for complex computing problems meeting specified needs.',
            'Create, select, adapt and apply appropriate techniques and modern computing tools.',
        ],
        eligibility: [
            createBlock('Students holding Higher Secondary School Certificate (HSC-II) in Pre-Engineering, Pre-Medical, Science General, Computer Science from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 out of 1100 marks are eligible to apply for admission.'),
            createBlock('Students awaiting the final result of HSC-II can also apply for conditional admission based on HSC-I results.'),
        ],
        admissionTestCriteria: [
            'Pass the university pre-admission entry tests with at least 50% marks',
            'Pass HEC USAT with at least 50% marks',
            'Hold SAT-I score of at least 800',
        ],
    },
    {
        _type: 'course',
        title: 'BS Software Engineering',
        slug: { _type: 'slug', current: 'bs-software-engineering' },
        subtitle: 'Building Tomorrow\'s Digital Solutions',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [
            createBlock('The BS Software Engineering program is designed to produce graduates who can design, develop, and maintain complex software systems. Students learn industry-standard methodologies, agile practices, and cutting-edge development tools.'),
        ],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 136, totalCourses: '44' },
        semesterData: [
            {
                _key: 'sem1',
                name: 'Semester 1',
                totalCredits: 16,
                courses: [
                    { _key: 'c1', code: 'CSE101', title: 'Introduction to Software Engineering', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c2', code: 'CSC102', title: 'Programming Fundamentals', creditLecture: 3, creditLab: 1, total: 4 },
                    { _key: 'c3', code: 'ASC111', title: 'Calculus & Analytical Geometry', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c4', code: 'HSC121', title: 'Communication Skills', creditLecture: 3, creditLab: 0, total: 3 },
                    { _key: 'c5', code: 'HSC102', title: 'Islamic Studies / Ethics', creditLecture: 2, creditLab: 0, total: 2 },
                ]
            },
        ],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Excel in software engineering careers with strong technical skills.', 'Design and develop innovative software solutions.'],
        plos: ['Apply software engineering principles to design complex software systems.', 'Utilize modern tools and methodologies.'],
        eligibility: [createBlock('HSC-II with Pre-Engineering/Computer Science with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'BS Artificial Intelligence',
        slug: { _type: 'slug', current: 'bs-artificial-intelligence' },
        subtitle: 'Pioneering the Future of Intelligent Systems',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('The BS AI program prepares students to design and develop intelligent systems using machine learning, deep learning, and advanced AI techniques.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 136, totalCourses: '44' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Lead AI research and development initiatives.'],
        plos: ['Apply machine learning and AI techniques to complex problems.'],
        eligibility: [createBlock('HSC-II with Pre-Engineering/Computer Science with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'BS Data Science',
        slug: { _type: 'slug', current: 'bs-data-science' },
        subtitle: 'Transforming Data into Actionable Insights',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('The BS Data Science program equips students with skills in statistical analysis, machine learning, and data visualization to extract meaningful insights from large datasets.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 136, totalCourses: '44' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Lead data-driven decision making in organizations.'],
        plos: ['Apply statistical analysis and machine learning to large datasets.'],
        eligibility: [createBlock('HSC-II with Pre-Engineering/Computer Science with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'BE Electrical Engineering (Electronic)',
        slug: { _type: 'slug', current: 'be-electrical-electronic' },
        subtitle: 'Mastering Electronic Systems Design',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('This program focuses on electronic circuit design, embedded systems, signal processing, and communication technologies.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 140, totalCourses: '45' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Excel in electronics design and development careers.'],
        plos: ['Design and analyze electronic circuits and systems.'],
        eligibility: [createBlock('HSC-II with Pre-Engineering with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'BE Electrical Engineering (Power)',
        slug: { _type: 'slug', current: 'be-electrical-power' },
        subtitle: 'Powering the Future of Energy Systems',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('This program prepares students for careers in power generation, transmission, distribution, and renewable energy systems.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 140, totalCourses: '45' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Lead power systems engineering initiatives.'],
        plos: ['Analyze and design power generation and distribution systems.'],
        eligibility: [createBlock('HSC-II with Pre-Engineering with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'BE Computer Systems Engineering',
        slug: { _type: 'slug', current: 'be-computer-systems' },
        subtitle: 'Engineering Hardware-Software Integration',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('This program bridges hardware and software, focusing on embedded systems, IoT, and computer architecture.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 140, totalCourses: '45' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Lead computer systems design and development projects.'],
        plos: ['Design computer architecture and embedded systems.'],
        eligibility: [createBlock('HSC-II with Pre-Engineering with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'B.E. Technology (Software)',
        slug: { _type: 'slug', current: 'bet-software' },
        subtitle: 'Practical Software Development Skills',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('A hands-on program focused on practical software development skills using modern frameworks and tools.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 130, totalCourses: '42' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Excel in software development and IT careers.'],
        plos: ['Develop software applications using modern frameworks.'],
        eligibility: [createBlock('HSC-II or equivalent with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'B.E. Technology (Computer)',
        slug: { _type: 'slug', current: 'bet-computer' },
        subtitle: 'Hands-on Computer Technology Training',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('A practical program focusing on computer hardware, networking, and IT infrastructure management.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 130, totalCourses: '42' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Excel in computer technology and IT support careers.'],
        plos: ['Configure and maintain computer systems and networks.'],
        eligibility: [createBlock('HSC-II or equivalent with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'BBA (Bachelor of Business Administration)',
        slug: { _type: 'slug', current: 'bba' },
        subtitle: 'Developing Future Business Leaders',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('The BBA program develops future business leaders with strong management, marketing, finance, and entrepreneurship skills.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 132, totalCourses: '44' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Lead and manage business organizations effectively.'],
        plos: ['Apply management theories and business principles.'],
        eligibility: [createBlock('HSC-II or equivalent with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
    {
        _type: 'course',
        title: 'BS Accounting & Finance',
        slug: { _type: 'slug', current: 'bs-accounting-finance' },
        subtitle: 'Mastering Financial Excellence',
        cardImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg',
        heroImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewImageUrl: 'https://uitu.edu.pk/wp-content/uploads/2024/08/cs-2048x1152.jpg',
        overviewContent: [createBlock('This program prepares students for careers in accounting, auditing, financial analysis, and corporate finance.')],
        degreeRequirements: { duration: 4, semesters: 8, coursesPerSemester: '5-6', totalCredits: 132, totalCourses: '44' },
        semesterData: [],
        internship: { text: 'Internship after 4th Semester', credits: 3 },
        peos: ['Excel in accounting, finance, and audit careers.'],
        plos: ['Apply accounting principles and financial reporting standards.'],
        eligibility: [createBlock('HSC-II or equivalent with at least 50% marks.')],
        admissionTestCriteria: ['Pass university entry tests with at least 50% marks'],
    },
]

export async function GET() {
    const results = []

    for (const course of courses) {
        try {
            // Check if exists
            const existing = await writeClient.fetch(
                `*[_type == "course" && slug.current == $slug][0]`,
                { slug: course.slug.current }
            )

            if (existing) {
                // Update existing course with new data
                await writeClient.patch(existing._id).set(course).commit()
                results.push({ title: course.title, status: 'updated', message: 'Updated with full content!' })
                continue
            }

            await writeClient.create(course)
            results.push({ title: course.title, status: 'created', message: 'Success!' })
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'
            results.push({ title: course.title, status: 'error', message: errorMessage })
        }
    }

    return NextResponse.json({
        success: true,
        message: `Processed ${results.length} courses`,
        results
    })
}
