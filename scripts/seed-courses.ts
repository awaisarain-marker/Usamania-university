/**
 * Seed Script: Import existing courses into Sanity CMS
 * 
 * This script will create all existing courses in your Sanity database.
 * Run with: npx ts-node scripts/seed-courses.ts
 * 
 * IMPORTANT: You need to add a Sanity API token with write permissions
 * Get one from: https://www.sanity.io/manage -> Your Project -> API -> Tokens
 */

import { createClient } from '@sanity/client'

// Create a write-enabled client
const client = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    // Add your token here (with write permissions)
    token: process.env.SANITY_WRITE_TOKEN || '',
})

interface Course {
    _type: 'course'
    title: string
    slug: { _type: 'slug'; current: string }
    subtitle: string
    degreeRequirements: {
        duration: number
        semesters: number
        coursesPerSemester: string
        totalCredits: number
        totalCourses: string
    }
    peos: string[]
    plos: string[]
    admissionTestCriteria: string[]
}

// Course data from existing pages
const courses: Course[] = [
    {
        _type: 'course',
        title: 'BS Computer Science',
        slug: { _type: 'slug', current: 'bs-computer-science' },
        subtitle: 'Empowering the Next Generation of Tech Leaders',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 140,
            totalCourses: '45 (Including Final Year Project)',
        },
        peos: [
            'Pursue diverse range of careers, advanced degrees, or professional development in various computing disciplines.',
            'Apply analytical skills, computing principles, and modern technologies to design innovative and sustainable computing solutions to meet business objectives and societal challenges.',
            'Communicate effectively and work efficiently as an individual and in interdisciplinary teams with high professional and ethical values.',
        ],
        plos: [
            'Completion of an accredited program of study designed to prepare graduates as computing professionals.',
            'Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization.',
            'Identify, formulate, research literature, and solve complex computing problems reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines.',
            'Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs.',
            'Create, select, adapt and apply appropriate techniques, resources, and modern computing tools to complex computing activities.',
            'Function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings.',
            'Communicate effectively with the computing community and with society at large about complex computing activities.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks',
            'Hold a score of at least 800 in SAT-I and secured at least 1500 in relevant subjects',
        ],
    },
    {
        _type: 'course',
        title: 'BS Software Engineering',
        slug: { _type: 'slug', current: 'bs-software-engineering' },
        subtitle: 'Building Tomorrow\'s Digital Solutions',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 136,
            totalCourses: '44 (Including Final Year Project)',
        },
        peos: [
            'Excel in diverse software engineering careers with strong technical and analytical skills.',
            'Design and develop innovative software solutions meeting industry standards.',
            'Demonstrate leadership, teamwork, and ethical professional practices.',
        ],
        plos: [
            'Apply software engineering principles to design, develop, and maintain complex software systems.',
            'Utilize modern software development tools, methodologies, and best practices.',
            'Work effectively in teams to deliver quality software products.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'BS Artificial Intelligence',
        slug: { _type: 'slug', current: 'bs-artificial-intelligence' },
        subtitle: 'Pioneering the Future of Intelligent Systems',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 136,
            totalCourses: '44 (Including Final Year Project)',
        },
        peos: [
            'Lead AI research and development initiatives in industry and academia.',
            'Design intelligent systems that solve real-world problems ethically.',
            'Continuously adapt to emerging AI technologies and methodologies.',
        ],
        plos: [
            'Apply machine learning, deep learning, and AI techniques to complex problems.',
            'Design and implement intelligent agents and autonomous systems.',
            'Evaluate ethical implications of AI systems on society.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'BS Data Science',
        slug: { _type: 'slug', current: 'bs-data-science' },
        subtitle: 'Transforming Data into Actionable Insights',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 136,
            totalCourses: '44 (Including Final Year Project)',
        },
        peos: [
            'Lead data-driven decision making in organizations.',
            'Design data pipelines and analytics solutions for complex business problems.',
            'Apply statistical and machine learning methods to extract insights from data.',
        ],
        plos: [
            'Apply statistical analysis and machine learning to large-scale datasets.',
            'Design data visualization and reporting systems.',
            'Implement data engineering solutions for real-world applications.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'BE Electrical Engineering (Electronic)',
        slug: { _type: 'slug', current: 'be-electrical-electronic' },
        subtitle: 'Mastering Electronic Systems Design',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 140,
            totalCourses: '45 (Including Final Year Project)',
        },
        peos: [
            'Excel in electronics design and development careers.',
            'Apply engineering principles to design innovative electronic systems.',
            'Demonstrate professional ethics and continuous learning.',
        ],
        plos: [
            'Design and analyze electronic circuits and systems.',
            'Apply embedded systems and microcontroller programming.',
            'Implement communication and signal processing systems.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'BE Electrical Engineering (Power)',
        slug: { _type: 'slug', current: 'be-electrical-power' },
        subtitle: 'Powering the Future of Energy Systems',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 140,
            totalCourses: '45 (Including Final Year Project)',
        },
        peos: [
            'Lead power systems engineering and renewable energy initiatives.',
            'Design efficient power generation and distribution systems.',
            'Apply sustainable engineering practices in energy sector.',
        ],
        plos: [
            'Analyze and design power generation and distribution systems.',
            'Apply power electronics and control systems principles.',
            'Implement renewable energy solutions.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'BE Computer Systems Engineering',
        slug: { _type: 'slug', current: 'be-computer-systems' },
        subtitle: 'Engineering Hardware-Software Integration',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 140,
            totalCourses: '45 (Including Final Year Project)',
        },
        peos: [
            'Lead computer systems design and development projects.',
            'Integrate hardware and software solutions for complex systems.',
            'Apply engineering principles to embedded and IoT systems.',
        ],
        plos: [
            'Design computer architecture and embedded systems.',
            'Develop hardware-software co-design solutions.',
            'Implement IoT and real-time systems.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'B.E. Technology (Software)',
        slug: { _type: 'slug', current: 'bet-software' },
        subtitle: 'Practical Software Development Skills',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 130,
            totalCourses: '42 (Including Final Year Project)',
        },
        peos: [
            'Excel in software development and IT careers.',
            'Apply practical programming and development skills.',
            'Demonstrate teamwork and professional practices.',
        ],
        plos: [
            'Develop software applications using modern frameworks.',
            'Apply software testing and quality assurance practices.',
            'Work effectively in agile development teams.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'B.E. Technology (Computer)',
        slug: { _type: 'slug', current: 'bet-computer' },
        subtitle: 'Hands-on Computer Technology Training',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 130,
            totalCourses: '42 (Including Final Year Project)',
        },
        peos: [
            'Excel in computer technology and IT support careers.',
            'Apply practical hardware and networking skills.',
            'Demonstrate problem-solving and technical support abilities.',
        ],
        plos: [
            'Configure and maintain computer systems and networks.',
            'Apply troubleshooting and technical support methodologies.',
            'Implement IT infrastructure solutions.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'BBA (Bachelor of Business Administration)',
        slug: { _type: 'slug', current: 'bba' },
        subtitle: 'Developing Future Business Leaders',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 132,
            totalCourses: '44 (Including Internship)',
        },
        peos: [
            'Lead and manage business organizations effectively.',
            'Apply strategic thinking and decision-making skills.',
            'Demonstrate ethical business practices and leadership.',
        ],
        plos: [
            'Apply management theories and business principles.',
            'Analyze business environments and develop strategies.',
            'Communicate effectively in professional business settings.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Higher Secondary Examination (HSC-II) or equivalent with at least 50% marks',
        ],
    },
    {
        _type: 'course',
        title: 'BS Accounting & Finance',
        slug: { _type: 'slug', current: 'bs-accounting-finance' },
        subtitle: 'Mastering Financial Excellence',
        degreeRequirements: {
            duration: 4,
            semesters: 8,
            coursesPerSemester: '5-6',
            totalCredits: 132,
            totalCourses: '44 (Including Internship)',
        },
        peos: [
            'Excel in accounting, finance, and audit careers.',
            'Apply financial analysis and reporting skills.',
            'Demonstrate ethical professional practices in finance.',
        ],
        plos: [
            'Apply accounting principles and financial reporting standards.',
            'Analyze financial statements and investment opportunities.',
            'Use financial software and analytical tools effectively.',
        ],
        admissionTestCriteria: [
            'Pass the university\'s pre-admission entry tests with at least 50% marks',
            'Higher Secondary Examination (HSC-II) or equivalent with at least 50% marks',
        ],
    },
]

async function seedCourses() {
    console.log('🚀 Starting course seed process...\n')

    if (!client.config().token) {
        console.error('❌ Error: SANITY_WRITE_TOKEN is required!')
        console.log('\nTo get a token:')
        console.log('1. Go to https://www.sanity.io/manage')
        console.log('2. Select your project')
        console.log('3. Go to API -> Tokens')
        console.log('4. Create a token with "Editor" permissions')
        console.log('5. Run: SANITY_WRITE_TOKEN=your-token npx ts-node scripts/seed-courses.ts')
        process.exit(1)
    }

    for (const course of courses) {
        try {
            console.log(`📚 Creating: ${course.title}...`)

            // Check if course already exists
            const existing = await client.fetch(
                `*[_type == "course" && slug.current == $slug][0]`,
                { slug: course.slug.current }
            )

            if (existing) {
                console.log(`   ⏭️  Already exists, skipping.`)
                continue
            }

            await client.create(course)
            console.log(`   ✅ Created successfully!`)
        } catch (error) {
            console.error(`   ❌ Error creating ${course.title}:`, error)
        }
    }

    console.log('\n🎉 Seed process complete!')
    console.log('Visit http://localhost:3000/studio to see your courses.')
}

seedCourses()
