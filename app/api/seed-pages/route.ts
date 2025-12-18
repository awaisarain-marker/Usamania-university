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

// Helper to create a unique _key
const createKey = () => Math.random().toString(36).substring(2, 15)

// All static pages data
const staticPages = [
    // ==========================================
    // CHUNK 1: Main Pages
    // ==========================================
    {
        title: 'Students',
        slug: 'students',
        seoTitle: 'Students | UIT University',
        seoDescription: 'Resources and support for student success at UIT University.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Students',
                subtitle: 'Resources and Support for Student Success',
                bgImage: 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Students' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Student Portal',
                backgroundColor: 'light-blue',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'Access your student portal for course registration, grades, and academic resources. The student portal is your one-stop destination for all academic needs.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Student Affairs',
                backgroundColor: 'white',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'The Office of Student Affairs is dedicated to enhancing the student experience through various programs, services, and activities that complement academic learning.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Library',
                backgroundColor: 'light-blue',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'The UIT University Library provides access to a vast collection of books, journals, and digital resources to support your academic and research endeavors.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Scholarship',
                backgroundColor: 'white',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'UIT University offers various scholarship opportunities to deserving students based on academic merit and financial need.' }]
                    }
                ]
            }
        ]
    },
    {
        title: 'Academic Calendar',
        slug: 'academic-calendar',
        seoTitle: 'Academic Calendar | UIT University',
        seoDescription: 'View the academic calendar for UIT University including important dates and deadlines.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Academic Calendar',
                subtitle: 'Important Dates & Deadlines',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Academic Calendar' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Fall 2024 Semester',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'Classes Begin: September 2, 2024\nMid-Term Exams: October 14-18, 2024\nFinal Exams: December 9-20, 2024\nSemester Ends: December 20, 2024' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Spring 2025 Semester',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'Classes Begin: January 13, 2025\nMid-Term Exams: March 3-7, 2025\nFinal Exams: May 5-16, 2025\nSemester Ends: May 16, 2025' }]
                    }
                ]
            }
        ]
    },
    {
        title: 'MERL',
        slug: 'merl',
        seoTitle: 'MERL - Medical Engineering Research Lab | UIT University',
        seoDescription: 'Medical Engineering Research Lab at UIT University - advancing healthcare through innovation.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Medical Engineering Research Lab',
                subtitle: 'Advancing Healthcare Through Innovation',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'MERL' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'About MERL',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'The Medical Engineering Research Lab (MERL) at UIT University is dedicated to developing innovative medical devices and healthcare solutions. Our multidisciplinary team of engineers, researchers, and medical professionals work together to address critical healthcare challenges.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Research Focus Areas',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: '• Medical Device Development\n• Biomedical Signal Processing\n• Healthcare IoT Solutions\n• Rehabilitation Engineering\n• Diagnostic Technologies' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Research Projects',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'MERL is currently working on several groundbreaking projects including wearable health monitors, AI-based diagnostic tools, and affordable medical devices for underserved communities.' }]
                    }
                ]
            }
        ]
    },
    {
        title: 'Final Year Projects',
        slug: 'final-year-projects',
        seoTitle: 'Final Year Projects | UIT University',
        seoDescription: 'Explore innovative student projects from UIT University final year students.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Final Year Projects',
                subtitle: 'Innovative Student Projects',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Final Year Projects' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'About FYP',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'The Final Year Project (FYP) program at UIT University provides students with the opportunity to apply their knowledge and skills to real-world problems. Students work in teams under faculty supervision to design, develop, and present innovative solutions.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Project Categories',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: '• Software Development\n• Hardware & Embedded Systems\n• Mobile Applications\n• AI & Machine Learning\n• IoT Solutions\n• Web Applications' }]
                    }
                ]
            }
        ]
    },
    // ==========================================
    // CHUNK 2: Offices
    // ==========================================
    {
        title: 'Corporate Liaison',
        slug: 'corporate-liaison',
        seoTitle: 'Corporate Liaison | UIT University',
        seoDescription: 'Connect with industry partners through UIT University Corporate Liaison Office.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Corporate Liaison',
                subtitle: 'Bridging Academia and Industry',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Corporate Liaison' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Our Mission',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'The Corporate Liaison Office serves as the bridge between UIT University and the corporate world. We facilitate partnerships, internship programs, and career opportunities for our students and graduates.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Services',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: '• Career Counseling\n• Internship Placement\n• Job Fairs\n• Industry Partnerships\n• Alumni Engagement\n• Corporate Training Programs' }]
                    }
                ]
            }
        ]
    },
    {
        title: 'ORIC',
        slug: 'oric',
        seoTitle: 'ORIC - Office of Research, Innovation & Commercialization | UIT University',
        seoDescription: 'Office of Research, Innovation and Commercialization at UIT University.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'ORIC',
                subtitle: 'Office of Research, Innovation & Commercialization',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'ORIC' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'About ORIC',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'ORIC is dedicated to fostering a culture of research and innovation at UIT University. We support faculty and students in conducting cutting-edge research and help transform innovative ideas into commercial ventures.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Focus Areas',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: '• Research Grants & Funding\n• Patent & IP Support\n• Industry Collaboration\n• Startup Incubation\n• Technology Transfer\n• Research Publications' }]
                    }
                ]
            }
        ]
    },
    {
        title: 'QEC',
        slug: 'qec',
        seoTitle: 'QEC - Quality Enhancement Cell | UIT University',
        seoDescription: 'Quality Enhancement Cell ensuring academic excellence at UIT University.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'QEC',
                subtitle: 'Quality Enhancement Cell',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'QEC' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'About QEC',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'The Quality Enhancement Cell (QEC) is responsible for ensuring and enhancing the quality of academic programs, research activities, and administrative processes at UIT University.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Key Functions',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: '• Program Accreditation\n• Faculty Evaluation\n• Student Feedback Analysis\n• Curriculum Review\n• Quality Audits\n• Continuous Improvement' }]
                    }
                ]
            }
        ]
    },
    // ==========================================
    // CHUNK 3: Other Pages
    // ==========================================
    {
        title: 'Continuing Education',
        slug: 'continuing-education',
        seoTitle: 'Continuing Education | UIT University',
        seoDescription: 'Professional development and continuing education programs at UIT University.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Continuing Education',
                subtitle: 'Professional Development Programs',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Continuing Education' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Short Courses',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'UIT University offers a variety of short courses designed to enhance professional skills and knowledge. Our courses cover topics in technology, business, and engineering.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Workshops & Seminars',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'Regular workshops and seminars are conducted by industry experts and faculty members on emerging trends and technologies.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Certificate Programs',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'Earn recognized certificates in specialized fields through our certificate programs designed for working professionals.' }]
                    }
                ]
            }
        ]
    },
    {
        title: 'Tenders',
        slug: 'tenders',
        seoTitle: 'Tenders | UIT University',
        seoDescription: 'View current tenders and procurement opportunities at UIT University.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Tenders',
                subtitle: 'Procurement & Tender Notices',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Tenders' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Current Tenders',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'View all current tender notices and procurement opportunities at UIT University. All interested parties are invited to submit their bids as per the specifications mentioned in individual tender documents.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Tender Process',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'All tenders follow PPRA guidelines and are processed through a transparent and competitive bidding process. For queries, please contact the Procurement Department.' }]
                    }
                ]
            }
        ]
    },
    {
        title: 'Sustainable Development Goals',
        slug: 'sustainable-development-goals',
        seoTitle: 'Sustainable Development Goals | UIT University',
        seoDescription: 'UIT University commitment to UN Sustainable Development Goals.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Sustainable Development Goals',
                subtitle: 'Our Commitment to a Better Future',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'SDGs' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Our Commitment',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'UIT University is committed to advancing the United Nations Sustainable Development Goals through education, research, and community engagement. We integrate sustainability principles across our curriculum and operations.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Key Initiatives',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: '• Quality Education (SDG 4)\n• Gender Equality (SDG 5)\n• Decent Work & Economic Growth (SDG 8)\n• Industry, Innovation & Infrastructure (SDG 9)\n• Climate Action (SDG 13)\n• Partnerships for Goals (SDG 17)' }]
                    }
                ]
            }
        ]
    },
    // ==========================================
    // CHUNK 4: Admission Page
    // ==========================================
    {
        title: 'Admission',
        slug: 'admission',
        seoTitle: 'Admission | UIT University',
        seoDescription: 'Apply to UIT University - Learn about admission requirements and programs.',
        sections: [
            {
                _type: 'pageHeroBlock',
                _key: createKey(),
                title: 'Admission',
                subtitle: 'Start Your Journey at UIT University',
                breadcrumbs: [
                    { label: 'Home', href: '/' },
                    { label: 'Admission' }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Why Choose UIT?',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: 'UIT University offers world-class education with modern facilities, experienced faculty, and industry connections. Join us to transform your career and make an impact.' }]
                    }
                ]
            },
            {
                _type: 'richTextBlock',
                _key: createKey(),
                title: 'Admission Requirements',
                content: [
                    {
                        _type: 'block',
                        _key: createKey(),
                        style: 'normal',
                        children: [{ _type: 'span', _key: createKey(), text: '• Completed application form\n• Academic transcripts\n• Entry test score (UAT/SAT)\n• CNIC/B-Form copy\n• Passport-size photographs\n• Interview (if required)' }]
                    }
                ]
            },
            {
                _type: 'faqsAccordionBlock',
                _key: createKey(),
                title: 'Frequently Asked Questions',
                faqs: [
                    { question: 'What are the admission deadlines?', answer: 'Fall admissions: July 31, Spring admissions: December 31. Early applications are encouraged.' },
                    { question: 'Is there a merit scholarship?', answer: 'Yes, UIT offers merit-based scholarships covering up to 100% of tuition fees for exceptional students.' },
                    { question: 'What is the entry test?', answer: 'All applicants must take the UIT Aptitude Test (UAT) or provide SAT scores. Test dates are announced on our website.' },
                    { question: 'Can I transfer from another university?', answer: 'Yes, transfer students are welcome. Credit evaluation will be done based on course equivalency.' }
                ]
            }
        ]
    }
]

export async function GET() {
    const results = []

    for (const page of staticPages) {
        try {
            // Check if page already exists
            const existing = await writeClient.fetch(
                `*[_type == "page" && slug.current == $slug][0]._id`,
                { slug: page.slug }
            )

            if (existing) {
                results.push({ page: page.title, status: 'skipped', message: 'Already exists' })
                continue
            }

            // Create the page
            const doc = await writeClient.create({
                _type: 'page',
                title: page.title,
                slug: { _type: 'slug', current: page.slug },
                seoTitle: page.seoTitle,
                seoDescription: page.seoDescription,
                sections: page.sections
            })

            results.push({ page: page.title, status: 'created', id: doc._id })
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'
            results.push({ page: page.title, status: 'error', message: errorMessage })
        }
    }

    return NextResponse.json({
        success: true,
        message: `Processed ${results.length} pages`,
        results
    })
}
