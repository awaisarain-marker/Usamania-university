import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

const writeClient = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: 'skKNkjf0Q3pm3EFBIdItvRkcDakA4D9ywo3W8GwKc1pJNmVmcOz8lO6t02PSMy4UjqNh1Z0oDSf3JLoM0ZbKHnOXIPYpv7o4DBDlkSv3YkLJqzFKlW2ynD3cBQ6KWDamA12jE9GDqOqSOFtyVI5QFgFWM516DKpA8wfPDGgOtbnShwNvZqIU',
})

// Helper to add _key to items for Sanity arrays
function addKeys(items: MenuItem[]): MenuItem[] {
    return items.map((item, index) => ({
        ...item,
        _key: `item-${index}-${Math.random().toString(36).substr(2, 9)}`,
        children: item.children ? addKeys(item.children) : undefined,
    }))
}

interface MenuItem {
    _key?: string
    label: string
    href?: string
    children?: MenuItem[]
}

// Current menu data from the website
const menuData: MenuItem[] = [
    {
        label: "About Us",
        children: [
            { label: "Who We Are", href: "/about-us?tab=who-we-are" },
            { label: "Vision & Mission", href: "/about-us?tab=mission" },
            { label: "Vice Chancellor's Message", href: "/about-us?tab=vice-chancellors-message" },
            { label: "Board of Advisors", href: "/about-us?tab=board-of-advisors" },
            { label: "Board of Governors", href: "/about-us?tab=board-of-governors" },
            { label: "Board of Faculties", href: "/about-us?tab=board-of-faculties" },
            { label: "Academic Council", href: "/about-us?tab=academic-council" },
            { label: "Accreditation & Recognition", href: "/about-us?tab=accreditation" },
            { label: "Management Team", href: "/about-us?tab=management-team" },
            { label: "Facilities", href: "/about-us?tab=facilities" },
        ]
    },
    {
        label: "Faculties",
        children: [
            { label: "Engineering and Technology", href: "/faculty" },
            { label: "Computing Sciences", href: "/faculty/computing-sciences" },
            { label: "Management and Social Sciences", href: "/faculty" },
        ]
    },
    {
        label: "Academics",
        children: [
            {
                label: "Office of the Registrar",
                children: [
                    { label: "Academic Calendar", href: "/academic-calendar" }
                ]
            },
            {
                label: "Undergraduate Programs",
                children: [
                    { label: "BS Computer Science", href: "/admission/bs-computer-science" },
                    { label: "BS Software Engineering", href: "/admission/bs-software-engineering" },
                    { label: "BS Artificial Intelligence", href: "/admission/bs-artificial-intelligence" },
                    { label: "BS Data Science", href: "/admission/bs-data-science" },
                    {
                        label: "BE Electrical",
                        children: [
                            { label: "Electronic", href: "/admission/be-electrical-electronic" },
                            { label: "Power", href: "/admission/be-electrical-power" }
                        ]
                    },
                    { label: "BE Computer Systems", href: "/admission/be-computer-systems" },
                    {
                        label: "B.E. Tech",
                        children: [
                            { label: "Software", href: "/admission/bet-software" },
                            { label: "Computer", href: "/admission/bet-computer" }
                        ]
                    },
                    { label: "BBA", href: "/admission/bba" },
                    { label: "BS Accounting and Finance", href: "/admission/bs-accounting-finance" }
                ]
            },
            {
                label: "Graduate Programs",
                children: [
                    { label: "MS Electrical Engineering", href: "#" },
                    { label: "MS Communication and Network Engineering", href: "#" },
                    { label: "MS Computer Science", href: "#" }
                ]
            }
        ]
    },
    {
        label: "QEC",
        children: [
            { label: "Introduction", href: "/qec" },
            { label: "Vision", href: "/qec" },
            { label: "Mission", href: "/qec" },
            { label: "Objectives", href: "/qec" },
            {
                label: "QEC Activity Calendars",
                children: [
                    { label: "QEC Activity Calendar 2025-2026", href: "/qec" },
                    { label: "QEC Activity Calendar 2024-2025", href: "/qec" },
                    { label: "QEC Activity Calendar 2023-2024", href: "/qec" }
                ]
            },
            { label: "Organogram", href: "/qec" },
            { label: "QEC Team", href: "/qec" },
            { label: "University Policies", href: "/qec" }
        ]
    },
    {
        label: "ORIC",
        children: [
            { label: "ORIC Introduction", href: "/oric" },
            { label: "ORIC Vision & Mission", href: "/oric" },
            { label: "ORIC Organogram", href: "/oric" },
            { label: "ORIC News", href: "/oric" },
            { label: "Micro Electronic Research Lab (MERL)", href: "/merl" }
        ]
    },
    {
        label: "MERL (Chip Design)",
        children: [
            { label: "Introduction", href: "/merl" },
            { label: "What We Offer", href: "/merl" },
            { label: "Achievements", href: "/merl" },
            { label: "Research & Projects", href: "/merl" },
            { label: "Events", href: "/merl" },
            { label: "Alumni Success", href: "/merl" },
            { label: "Scholarships", href: "/merl" }
        ]
    },
    {
        label: "Research & Projects",
        children: [
            { label: "Final Year Projects", href: "/final-year-projects" }
        ]
    },
    {
        label: "Admissions",
        children: [
            { label: "Information", href: "/admission" },
            { label: "FAQs", href: "/admission" },
            { label: "How to Apply", href: "/admission" },
            { label: "Sample Test Paper", href: "/admission" },
            { label: "Photographs Specification", href: "/admission" },
            { label: "Fee Structure", href: "/admission" },
            { label: "Fee Refund Policy", href: "/admission" },
            { label: "Scholarship Policy", href: "/admission" },
            { label: "Admission Test Results", href: "/admission" },
            { label: "Outreach Programs", href: "/admission" }
        ]
    },
    {
        label: "Students",
        children: [
            { label: "Student Portal", href: "https://eduboard.uit.edu/StudentPortal/Student/EDU_EBS_STU_Login.aspx" },
            { label: "Student Affairs", href: "/students" },
            {
                label: "Library Services",
                children: [
                    { label: "Library", href: "http://library.uit.edu/" },
                    { label: "Library Forms", href: "http://library.uit.edu/" }
                ]
            },
            { label: "Scholarship", href: "/students" }
        ]
    },
    {
        label: "Continuing Education",
        children: [
            { label: "Registration Form", href: "/continuing-education" },
            { label: "Short Courses", href: "/continuing-education" },
            { label: "Workshop / Seminar", href: "/continuing-education" },
            { label: "Certification", href: "/continuing-education" }
        ]
    },
    {
        label: "News & Media",
        children: [
            { label: "Media / Press", href: "/uit-today" },
            { label: "News and Events", href: "/uit-today" },
            { label: "Newsletter", href: "/uit-today" },
            { label: "Views and Opinions", href: "/uit-today" },
            { label: "Bio Symposium 2023", href: "/uit-today" }
        ]
    },
    {
        label: "Corporate Liaison",
        children: [
            { label: "MOUs", href: "/corporate-liaison" },
            { label: "Job Portal", href: "/corporate-liaison" },
            { label: "Alumni Engagement", href: "/corporate-liaison" },
            { label: "Corporate Liaison Events", href: "/corporate-liaison" },
            { label: "Corporate Social Responsibility", href: "/corporate-liaison" },
            { label: "Day Trip Learning", href: "/corporate-liaison" }
        ]
    },
    {
        label: "SDGs",
        children: [
            { label: "Sustainable Development Goals", href: "/sustainable-development-goals" },
            { label: "SDGs Report", href: "/sustainable-development-goals" }
        ]
    },
    {
        label: "Online Portals",
        children: [
            { label: "Student Portal", href: "https://eduboard.uit.edu/StudentPortal/Student/EDU_EBS_STU_Login.aspx" },
            { label: "Student Support System S3", href: "https://s3.uitu.edu.pk/" },
            { label: "Faculty Portal", href: "https://eduboard.uit.edu/FacultyPortal/Faculty/EDU_EBS_FCT_Login.aspx" },
            { label: "Online Fee Payment", href: "https://onlinepayinfo.uit.edu/" },
            { label: "Employee Portal", href: "https://eduboard.uit.edu/EmployeePortal/HRM/Employee_Login.aspx" },
            { label: "Library Catalog", href: "http://library.uit.edu/" },
            { label: "WebMail", href: "https://mail.google.com/" },
            { label: "Admission Portal", href: "https://eduboard.uit.edu/AdmissionPortal/Login" }
        ]
    },
    {
        label: "Virtual Tour",
        href: "/virtual-tour"
    }
]

export async function GET() {
    try {
        // Delete ALL existing navigation documents first
        const allNavs = await writeClient.fetch(`*[_type == "navigation"]._id`)
        for (const id of allNavs) {
            await writeClient.delete(id)
        }

        // Create navigation document with specific ID that matches config
        await writeClient.createOrReplace({
            _id: 'navigation',
            _type: 'navigation',
            title: 'Main Navigation',
            menuItems: addKeys(menuData)
        })

        return NextResponse.json({
            success: true,
            message: 'Navigation menu created with all 14 mega menu categories!',
            itemCount: menuData.length,
            categories: menuData.map(m => m.label)
        })
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
    }
}
