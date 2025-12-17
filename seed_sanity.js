
const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: 'skKNkjf0Q3pm3EFBIdItvRkcDakA4D9ywo3W8GwKc1pJNmVmcOz8lO6t02PSMy4UjqNh1Z0oDSf3JLoM0ZbKHnOXIPYpv7o4DBDlkSv3YkLJqzFKlW2ynD3cBQ6KWDamA12jE9GDqOqSOFtyVI5QFgFWM516DKpA8wfPDGgOtbnShwNvZqIU',
});

// --- Data from menuData.ts ---
const menuData = [
    {
        id: "about-us",
        label: "About Us",
        children: [
            { id: "who-we-are", label: "Who We Are", href: "/about-us?tab=who-we-are" },
            { id: "vision-mission", label: "Vision & Mission", href: "/about-us?tab=mission" },
            { id: "vc-message", label: "Vice Chancellor’s Message", href: "/about-us?tab=vice-chancellors-message" },
            { id: "board-advisors", label: "Board of Advisors", href: "/about-us?tab=board-of-advisors" },
            { id: "board-governors", label: "Board of Governors", href: "/about-us?tab=board-of-governors" },
            { id: "board-faculties", label: "Board of Faculties", href: "/about-us?tab=board-of-faculties" },
            { id: "academic-council", label: "Academic Council", href: "/about-us?tab=academic-council" },
            { id: "accreditation", label: "Accreditation & Recognition", href: "/about-us?tab=accreditation" },
            { id: "management-team", label: "Management Team", href: "/about-us?tab=management-team" },
            { id: "facilities", label: "Facilities", href: "/about-us?tab=facilities" },
        ]
    },
    {
        id: "faculties",
        label: "Faculties",
        children: [
            { id: "engineering-tech", label: "Engineering and Technology", href: "/faculty" },
            { id: "computing-sciences", label: "Computing Sciences", href: "/faculty/computing-sciences" },
            { id: "management-social", label: "Management and Social Sciences", href: "/faculty" },
        ]
    },
    {
        id: "academics",
        label: "Academics",
        children: [
            {
                id: "office-registrar",
                label: "Office of the Registrar",
                children: [
                    { id: "academic-calendar", label: "Academic Calendar", href: "/academic-calendar" }
                ]
            },
            {
                id: "undergraduate",
                label: "Undergraduate Programs",
                children: [
                    { id: "bs-cs", label: "BS Computer Science", href: "/admission/bs-computer-science" },
                    { id: "bs-se", label: "BS Software Engineering", href: "/admission/bs-software-engineering" },
                    { id: "bs-ai", label: "BS Artificial Intelligence", href: "/admission/bs-artificial-intelligence" },
                    { id: "bs-ds", label: "BS Data Science", href: "/admission/bs-data-science" },
                    {
                        id: "be-electrical",
                        label: "BE Electrical",
                        children: [
                            { id: "electronic", label: "Electronic", href: "/admission/be-electrical-electronic" },
                            { id: "power", label: "Power", href: "/admission/be-electrical-power" }
                        ]
                    },
                    { id: "be-computer-systems", label: "BE Computer Systems", href: "/admission/be-computer-systems" },
                    {
                        id: "be-tech",
                        label: "B.E. Tech",
                        children: [
                            { id: "bet-software", label: "Bachelor of Engineering Technology (Software)", href: "/admission/bet-software" },
                            { id: "bet-computer", label: "Bachelor of Engineering Technology (Computer)", href: "/admission/bet-computer" }
                        ]
                    },
                    { id: "bba", label: "BBA", href: "/admission/bba" },
                    { id: "bs-af", label: "BS Accounting and Finance", href: "/admission/bs-accounting-finance" }
                ]
            },
            {
                id: "graduate",
                label: "Graduate Programs",
                children: [
                    { id: "ms-electrical", label: "MS Electrical Engineering", href: "#" },
                    { id: "ms-cne", label: "MS Communication and Network Engineering", href: "#" },
                    { id: "ms-cs", label: "MS Computer Science", href: "#" }
                ]
            },
            { id: "adm-info", label: "Information", href: "/admission" },
            { id: "adm-faqs", label: "FAQs", href: "/admission" },
            { id: "adm-how-apply", label: "How to Apply", href: "/admission" },
            { id: "adm-sample-test", label: "Sample Test Paper", href: "/admission" },
            { id: "adm-photo-spec", label: "Photographs Specification", href: "/admission" },
            { id: "adm-fee", label: "Fee Structure", href: "/admission" },
            { id: "adm-refund", label: "Fee Refund Policy", href: "/admission" },
            { id: "adm-scholarship", label: "Scholarship Policy", href: "/admission" },
            { id: "adm-test-results", label: "Admission Test Results", href: "/admission" },
            { id: "adm-outreach", label: "Outreach Programs", href: "/admission" }
        ]
    },
    {
        id: "qec",
        label: "QEC",
        children: [
            { id: "qec-intro", label: "Introduction", href: "/qec" },
            { id: "qec-vision", label: "Vision", href: "/qec" },
            { id: "qec-mission", label: "Mission", href: "/qec" },
            { id: "qec-objectives", label: "Objectives", href: "/qec" },
            {
                id: "qec-calendars",
                label: "QEC Activity Calendars",
                children: [
                    { id: "qec-cal-25-26", label: "QEC Activity Calendar 2025-2026", href: "/qec" },
                    { id: "qec-cal-24-25", label: "QEC Activity Calendar 2024-2025", href: "/qec" },
                    { id: "qec-cal-23-24", label: "QEC Activity Calendar 2023-2024", href: "/qec" }
                ]
            },
            { id: "qec-organogram", label: "Organogram", href: "/qec" },
            { id: "qec-team", label: "QEC Team", href: "/qec" },
            { id: "uni-policies", label: "University Policies", href: "/qec" }
        ]
    },
    {
        id: "oric",
        label: "ORIC",
        children: [
            { id: "oric-intro", label: "ORIC Introduction", href: "/oric" },
            { id: "oric-vis-mis", label: "ORIC Vision & Mission", href: "/oric" },
            { id: "oric-organogram", label: "ORIC Organogram", href: "/oric" },
            { id: "oric-news", label: "ORIC News", href: "/oric" },
            { id: "merl-link", label: "Micro Electronic Research Lab (MERL)", href: "/merl" }
        ]
    },
    {
        id: "merl",
        label: "MERL (Chip Design)",
        children: [
            { id: "merl-intro", label: "Introduction", href: "/merl" },
            { id: "merl-offer", label: "What We Offer", href: "/merl" },
            { id: "merl-achievements", label: "Achievements", href: "/merl" },
            { id: "merl-projects", label: "Research & Projects", href: "/merl" },
            { id: "merl-events", label: "Events", href: "/merl" },
            { id: "merl-alumni", label: "Alumni Success", href: "/merl" },
            { id: "merl-scholarships", label: "Scholarships", href: "/merl" }
        ]
    },
    {
        id: "research-projects",
        label: "Research & Projects",
        children: [
            { id: "fyp", label: "Final Year Projects", href: "/final-year-projects" }
        ]
    },
    {
        id: "admissions",
        label: "Admissions",
        children: [
            {
                id: "adm-undergrad",
                label: "Undergraduate Programs",
                children: [
                    { id: "adm-bs-cs", label: "BS Computer Science", href: "/admission/bs-computer-science" },
                    { id: "adm-bs-se", label: "BS Software Engineering", href: "/admission/bs-software-engineering" },
                    { id: "adm-bs-ai", label: "BS Artificial Intelligence", href: "/admission/bs-artificial-intelligence" },
                    { id: "adm-bs-ds", label: "BS Data Science", href: "/admission/bs-data-science" },
                    {
                        id: "adm-be-electrical",
                        label: "BE Electrical",
                        children: [
                            { id: "adm-electronic", label: "Electronic", href: "/admission/be-electrical-electronic" },
                            { id: "adm-power", label: "Power", href: "/admission/be-electrical-power" }
                        ]
                    },
                    { id: "adm-be-cs", label: "BE Computer Systems", href: "/admission/be-computer-systems" },
                    {
                        id: "adm-bet",
                        label: "B.E. Tech",
                        children: [
                            { id: "adm-bet-computer", label: "Bachelor of Engineering Technology (Computer)", href: "/admission/bet-computer" },
                            { id: "adm-bet-software", label: "Bachelor of Engineering Technology (Software)", href: "/admission/bet-software" }
                        ]
                    },
                    { id: "adm-bba", label: "BBA", href: "/admission/bba" },
                    { id: "adm-bs-af", label: "BS Accounting and Finance", href: "/admission/bs-accounting-finance" }
                ]
            },
            {
                id: "adm-grad",
                label: "Graduate Programs",
                children: [
                    { id: "adm-ms-electrical", label: "MS Electrical Engineering", href: "#" },
                    { id: "adm-ms-cne", label: "MS Communication and Network Engineering", href: "#" },
                    { id: "adm-ms-cs", label: "MS Computer Science", href: "#" }
                ]
            },
            { id: "adm-info", label: "Information", href: "/admission" },
            { id: "adm-faqs", label: "FAQs", href: "/admission" },
            { id: "adm-how-apply", label: "How to Apply", href: "/admission" },
            { id: "adm-sample-test", label: "Sample Test Paper", href: "/admission" },
            { id: "adm-photo-spec", label: "Photographs Specification", href: "/admission" },
            { id: "adm-fee", label: "Fee Structure", href: "/admission" },
            { id: "adm-refund", label: "Fee Refund Policy", href: "/admission" },
            { id: "adm-scholarship", label: "Scholarship Policy", href: "/admission" },
            { id: "adm-test-results", label: "Admission Test Results", href: "/admission" },
            { id: "adm-outreach", label: "Outreach Programs", href: "/admission" }
        ]
    },
    {
        id: "students",
        label: "Students",
        children: [
            { id: "student-portal", label: "Student Portal", href: "https://eduboard.uit.edu/StudentPortal/Student/EDU_EBS_STU_Login.aspx" },
            { id: "student-affairs", label: "Student Affairs", href: "/students" },
            {
                id: "library-services",
                label: "Library Services",
                children: [
                    { id: "library", label: "Library", href: "http://library.uit.edu/" },
                    { id: "library-forms", label: "Library Forms", href: "http://library.uit.edu/" }
                ]
            },
            { id: "scholarship", label: "Scholarship", href: "/students" }
        ]
    },
    {
        id: "continuing-education",
        label: "Continuing Education",
        children: [
            { id: "ce-reg-form", label: "Registration Form", href: "/continuing-education" },
            { id: "ce-short-courses", label: "Short Courses", href: "/continuing-education" },
            { id: "ce-workshop", label: "Workshop / Seminar", href: "/continuing-education" },
            { id: "ce-certification", label: "Certification", href: "/continuing-education" }
        ]
    },
    {
        id: "news-media",
        label: "News & Media",
        children: [
            { id: "media-press", label: "Media / Press", href: "/uit-today" },
            { id: "news-events", label: "News and Events", href: "/uit-today" },
            { id: "newsletter", label: "Newsletter", href: "/uit-today" },
            { id: "views-opinions", label: "Views and Opinions", href: "/uit-today" },
            { id: "bio-symposium", label: "Bio Symposium 2023", href: "/uit-today" }
        ]
    },
    {
        id: "corporate-liaison",
        label: "Corporate Liaison",
        children: [
            { id: "mous", label: "MOUs", href: "/corporate-liaison" },
            { id: "job-portal", label: "Job Portal", href: "/corporate-liaison" },
            { id: "alumni-engage", label: "Alumni Engagement", href: "/corporate-liaison" },
            { id: "corp-events", label: "Corporate Liaison Events", href: "/corporate-liaison" },
            { id: "csr", label: "Corporate Social Responsibility", href: "/corporate-liaison" },
            { id: "day-trip", label: "Day Trip Learning", href: "/corporate-liaison" }
        ]
    },
    {
        id: "sdgs",
        label: "SDGs",
        children: [
            { id: "sdg-goals", label: "Sustainable Development Goals", href: "/sustainable-development-goals" },
            { id: "sdg-report", label: "SDGs Report", href: "/sustainable-development-goals" }
        ]
    },
    {
        id: "online-portals",
        label: "Online Portals",
        children: [
            { id: "portal-student", label: "Student Portal", href: "https://eduboard.uit.edu/StudentPortal/Student/EDU_EBS_STU_Login.aspx" },
            { id: "portal-s3", label: "Student Support System S3", href: "https://s3.uitu.edu.pk/" },
            { id: "portal-faculty", label: "Faculty Portal", href: "https://eduboard.uit.edu/FacultyPortal/Faculty/EDU_EBS_FCT_Login.aspx" },
            { id: "portal-fee", label: "Online Fee Payment", href: "https://onlinepayinfo.uit.edu/" },
            { id: "portal-employee", label: "Employee Portal", href: "https://eduboard.uit.edu/EmployeePortal/HRM/Employee_Login.aspx" },
            { id: "portal-library", label: "Library Catalog", href: "http://library.uit.edu/" },
            { id: "portal-webmail", label: "WebMail", href: "https://mail.google.com/" },
            { id: "portal-admission", label: "Admission Portal", href: "https://eduboard.uit.edu/AdmissionPortal/Login" }
        ]
    }
];

// --- Helper to generate random key ---
const randomKey = () => Math.random().toString(36).substring(7);

// --- Data from Footer.tsx ---
const footerData = {
    _id: 'footer-settings', // Fixed ID for singleton
    _type: 'footer',
    title: 'Footer Settings',
    copyrightText: 'Copyright 2025. All rights reserved.',
    universityDescription: 'Pakistan University in Karachi',
    slogan: 'Expand your world',
    contactInfo: {
        title: "UIT University",
        address: "ST-13, Block 7, Gulshan-e-Iqbal, Abul Hasan Isphahani Road, Off Main University Road, Karachi – 75300",
        email: "info@uitu.edu.pk",
        uan: "(92-21) 111-978-275, 34994305, 34978274-5",
        admissions: "0333-0399113"
    },
    socialLinks: [
        { _key: randomKey(), platform: "Facebook", url: "https://www.facebook.com/UITUniversityOfficial" },
        { _key: randomKey(), platform: "Twitter", url: "https://x.com/UITUniversity?t=D7cpW-xoK5evI43-SWdnDw&s=09" },
        { _key: randomKey(), platform: "LinkedIn", url: "https://www.linkedin.com/school/uitu/" },
        { _key: randomKey(), platform: "Instagram", url: "https://www.instagram.com/invites/contact/?i=injsg9prvu9k&utm_content=2pjgkg6" }
    ],
    quickLinks: [
        { _key: randomKey(), label: "Contact us", url: "/staff-and-faculty-members/" },
        { _key: randomKey(), label: "Careers at UIT", url: "/careers/" },
        { _key: randomKey(), label: "Open Tenders", url: "/open-tenders/" },
        { _key: randomKey(), label: "Privacy Notices", url: "/privacy-notices/" }
    ],
    footerImageUrl: "https://ik.imagekit.io/byat8clceo/Web%20Footer.png"
};

// --- Helper to transform menuData to Sanity format ---
function transformMenu(items) {
    return items.map(item => ({
        _type: 'menuItem',
        _key: item.id || randomKey(),
        label: item.label,
        href: item.href,
        children: item.children ? transformMenu(item.children) : undefined
    }));
}

// Blog Posts Data
const blogPosts = [
    {
        _type: 'post',
        title: "The Political Imperative: Surviving and Thriving in Power Dynamics at Work",
        slug: { _type: 'slug', current: 'what-to-do-with-a-major-in-business-administration-career-prospects' }, // Fixed slug to match old URL
        publishedAt: new Date().toISOString(),
        author: "Micheal Stratton",
        category: "Academics",
        description: "When I recently spoke with employers, AUBG alumni, and Executive MBA students about power dynamics at work, I began with a simple question...",
        mainImage: undefined,
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "When I recently spoke with employers, AUBG alumni, and Executive MBA students about power dynamics at work, I began with a simple question: What’s the first word that comes to mind when you hear the words “power” and “politics”? The reactions in the room were telling and familiar." }
                ]
            },
            {
                _key: randomKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: randomKey(), _type: 'span', text: "The last dirty word" }]
            },
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "Rosabeth Moss Kanter, a retired Harvard professor, once said, “Power is America’s last dirty word. It is easier to talk about money – and much easier to talk about sex – than it is to talk about power.”" }
                ]
            },
            {
                _key: randomKey(),
                _type: 'quote',
                quote: "Power is America’s last dirty word. It is easier to talk about money – and much easier to talk about sex – than it is to talk about power.",
                author: "Rosabeth Moss Kanter"
            },
            {
                _key: randomKey(),
                _type: 'twoColumnImageGrid',
                // images removed for seeding as we don't have asset IDs
            }
        ]
    },
    {
        _type: 'post',
        title: "Economics for a New Generation: Professor Nikos Fatouros Teaches for the Future",
        slug: { _type: 'slug', current: 'economics-for-a-new-generation' },
        publishedAt: new Date().toISOString(),
        author: "UIT Admin",
        category: "Economics",
        description: "Professor Nikos Fatouros joined UIT University in the 2024/2025 academic year and is already serving as the Interim Chair of the Economics Department.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "Professor Nikos Fatouros joined UIT University in the 2024/2025 academic year and is already serving as the Interim Chair of the Economics Department. His research interests go beyond traditional economics." }
                ]
            }
        ]
    },
    {
        _type: 'post',
        title: "Ashod Derandonyan ('01) Championing Accessibility Support",
        slug: { _type: 'slug', current: 'ashod-derandonyan-championing-accessibility' },
        publishedAt: new Date().toISOString(),
        author: "UIT Alumni Association",
        category: "Alumni",
        description: "Ashod Derandonyan ('01) is making waves in the community by championing accessibility support for the Deaf and Hard of Hearing.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "Ashod Derandonyan ('01) is making waves in the community by championing accessibility support for the Deaf and Hard of Hearing." }
                ]
            }
        ]
    },
    {
        _type: 'post',
        title: "The 2025 Study Trip to Brussels Explores National Security in the EU",
        slug: { _type: 'slug', current: 'the-2025-study-trip-to-brussels-explores-national-security-in-the-eu' },
        publishedAt: new Date().toISOString(),
        author: "European Studies Dept",
        category: "European Studies",
        description: "Students from the European Studies department visited Brussels to explore national security issues within the EU context.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "Students from the European Studies department visited Brussels to explore national security issues within the EU context." }
                ]
            }
        ]
    },
    {
        _type: 'post',
        title: "What to Do with a Major in Economics: Career Prospects and Future Jobs",
        slug: { _type: 'slug', current: 'what-to-do-with-a-major-in-economics' },
        publishedAt: new Date().toISOString(),
        author: "Career Center",
        category: "Economics",
        description: "Explore the diverse career paths available to Economics majors, from finance and policy to data analysis.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "Explore the diverse career paths available to Economics majors, from finance and policy to data analysis." }
                ]
            }
        ]
    },
    {
        _type: 'post',
        title: "What to Do with a Major in Political Science & International Relations and European Studies",
        slug: { _type: 'slug', current: 'what-to-do-with-a-major-in-political-science' },
        publishedAt: new Date().toISOString(),
        author: "Career Center",
        category: "Politics",
        description: "A degree in Political Science opens doors to careers in government, diplomacy, international organizations, and more.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "A degree in Political Science opens doors to careers in government, diplomacy, international organizations, and more." }
                ]
            }
        ]
    },
    {
        _type: 'post',
        title: "Advancements in Artificial Intelligence: A 2025 Perspective",
        slug: { _type: 'slug', current: 'advancements-in-artificial-intelligence-2025' },
        publishedAt: new Date().toISOString(),
        author: "CS Department",
        category: "Academics",
        description: "An overview of the latest breakthroughs in AI and their implications for the future of technology and society.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "An overview of the latest breakthroughs in AI and their implications for the future of technology and society." }
                ]
            }
        ]
    },
    {
        _type: 'post',
        title: "Alumni Success Story: From UIT to Silicon Valley",
        slug: { _type: 'slug', current: 'alumni-success-story-from-uit-to-silicon-valley' },
        publishedAt: new Date().toISOString(),
        author: "Alumni Relations",
        category: "Alumni",
        description: "Meet the UIT graduates who are making their mark in the tech capital of the world.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "Meet the UIT graduates who are making their mark in the tech capital of the world." }
                ]
            }
        ]
    },
    {
        _type: 'post',
        title: "The Future of European Politics",
        slug: { _type: 'slug', current: 'the-future-of-european-politics' },
        publishedAt: new Date().toISOString(),
        author: "European Studies Dept",
        category: "European Studies",
        description: "Analyzing the shifting political landscape in Europe and what it means for the future of the union.",
        body: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [
                    { _key: randomKey(), _type: 'span', text: "Analyzing the shifting political landscape in Europe and what it means for the future of the union." }
                ]
            }
        ]
    }
];

async function seedData() {
    try {
        // 1. Seed Footer (Force replace to fix keys)
        console.log('Seeding Footer...');
        await client.createOrReplace(footerData);
        console.log('Footer updated with keys.');

        // 2. Seed Navigation
        console.log('Seeding Navigation...');
        const existingNav = await client.fetch('*[_type == "navigation"][0]');
        if (!existingNav) {
            const navData = {
                _type: 'navigation',
                title: 'Main Navigation',
                menuItems: transformMenu(menuData)
            };
            await client.create(navData);
            console.log('Navigation created.');
        } else {
            console.log('Navigation already exists, skipping.');
        }

        // 3. Seed Blog Posts
        console.log('Seeding Blog Posts...');
        for (const post of blogPosts) {
            const existing = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: post.slug.current });
            if (!existing) {
                await client.create(post);
                console.log(`Created post: ${post.title}`);
            } else {
                // Update existing post to fix missing keys
                await client.patch(existing._id).set({ body: post.body }).commit();
                console.log(`Updated post (fixed keys): ${post.title}`);
            }
        }

        // 4. Seed Events
        console.log('Seeding Events...');
        const events = [
            {
                _type: 'event',
                title: "UIT University Tech Symposium 2025",
                slug: { _type: 'slug', current: 'tech-symposium-2025' },
                date: "2025-12-20T09:00:00Z",
                location: "Main Auditorium",
                mainImageUrl: "https://uitu.edu.pk/wp-content/uploads/2023/12/DSC04452.jpg",
                body: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [
                            { _type: 'span', text: "UIT University is proud to announce the upcoming Tech Symposium 2025, to be held at the Main Auditorium. This event will bring together industry leaders, innovators, and students to discuss the future of technology and engineering." }
                        ]
                    },
                    {
                        _type: 'block',
                        style: 'h2',
                        children: [{ _type: 'span', text: "About the Event" }]
                    },
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [
                            { _type: 'span', text: "The annual Tech Symposium is a flagship event that features keynote speeches, panel discussions, and project showcases." }
                        ]
                    },
                    {
                        _type: 'twoColumnImageGrid',
                        imageLeftUrl: "https://uitu.edu.pk/wp-content/uploads/2023/12/DSC04478.jpg",
                        imageRightUrl: "https://uitu.edu.pk/wp-content/uploads/2023/12/DSC04482.jpg"
                    }
                ]
            },
            {
                _type: 'event',
                title: "Intro To Photography Exhibition",
                slug: { _type: 'slug', current: 'intro-to-photography-exhibition' },
                date: "2025-12-09T19:00:00Z",
                location: "Main Building",
                mainImageUrl: "https://placehold.co/600x400?text=Photography",
                body: [
                    {
                        _type: 'block',
                        style: 'normal',
                        children: [
                            { _type: 'span', text: "Join us for an evening of artistic expression as our students showcase their best photography work." }
                        ]
                    }
                ]
            }
        ];

        for (const event of events) {
            const existing = await client.fetch(`*[_type == "event" && slug.current == $slug][0]`, { slug: event.slug.current });
            if (!existing) {
                await client.create(event);
                console.log(`Created event: ${event.title}`);
            } else {
                console.log(`Event already exists: ${event.title}`);
            }
        }

        console.log('Seeding complete!');
    } catch (err) {
        console.error('Seeding failed:', err.message);
    }
}

seedData();
