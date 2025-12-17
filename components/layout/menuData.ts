
export interface MenuItem {
    id: string;
    label: string;
    href?: string;
    children?: MenuItem[];
}

export const menuData: MenuItem[] = [
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
                    { id: "academic-calendar", label: "Academic Calendar", href: "#" }
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
            }
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
