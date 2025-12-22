
export interface SearchResult {
    id: string;
    title: string;
    description: string;
    type: 'Job' | 'Page' | 'Blog' | 'Event';
    url: string;
    date?: string;
}

export const getAllSearchableData = (): SearchResult[] => {
    const results: SearchResult[] = [];

    // Static Pages - Comprehensive List from Menu Structure
    const staticPages: { title: string; description: string; url: string, type?: 'Page' | 'Blog' | 'Event' }[] = [
        // Main Pages
        { title: 'Home', description: 'UIT University Home Page', url: '/' },
        { title: 'Contact Us', description: 'Get in touch with us. Location and contact details.', url: '/contact-us' },

        // About Us Section
        { title: 'About Us', description: 'Overview of UIT University.', url: '/about-us' },
        { title: 'Who We Are', description: 'Learn about our identity and history.', url: '/about-us?tab=who-we-are' },
        { title: 'Vision & Mission', description: 'Our guiding principles and future goals.', url: '/about-us?tab=mission' },
        { title: 'Vice Chancellor’s Message', description: 'Message from the Vice Chancellor.', url: '/about-us?tab=vice-chancellors-message' },
        { title: 'Board of Advisors', description: 'Our advisory board members.', url: '/about-us?tab=board-of-advisors' },
        { title: 'Board of Governors', description: 'Our governing body.', url: '/about-us?tab=board-of-governors' },
        { title: 'Academic Council', description: 'Our academic leadership.', url: '/about-us?tab=academic-council' },
        { title: 'Accreditation & Recognition', description: 'Our accreditations and awards.', url: '/about-us?tab=accreditation' },
        { title: 'Management Team', description: 'Key management personnel.', url: '/about-us?tab=management-team' },
        { title: 'Facilities', description: 'Campus facilities and infrastructure.', url: '/about-us?tab=facilities' },

        // Faculty
        { title: 'Faculty', description: 'Our Distinguished Academic Staff.', url: '/faculty' },
        { title: 'Faculty of Engineering & Technology', description: 'Engineering departments and staff.', url: '/faculty' },
        { title: 'Faculty of Computing Sciences', description: 'Computer Science and Software Engineering faculty.', url: '/faculty/computing-sciences' },
        { title: 'Faculty of Management Sciences', description: 'Business administration and management faculty.', url: '/faculty' },

        // Academics & Admissions (Programs)
        { title: 'Admissions', description: 'Admission Open Springs 2026. Apply Now.', url: '/admission' },
        { title: 'Academic Calendar', description: 'Schedule of academic events and term dates.', url: '/academic-calendar' },

        // Undergraduate Programs
        { title: 'BS Computer Science (BSCS)', description: 'Undergraduate Computer Science program.', url: '/admission/bs-computer-science' },
        { title: 'BS Software Engineering (BSSE)', description: 'Undergraduate Software Engineering program.', url: '/admission/bs-software-engineering' },
        { title: 'BS Artificial Intelligence (BSAI)', description: 'Undergraduate AI program.', url: '/admission/bs-artificial-intelligence' },
        { title: 'BS Data Science (BSDS)', description: 'Undergraduate Data Science program.', url: '/admission/bs-data-science' },
        { title: 'BE Electrical Engineering', description: 'Electrical Engineering program (Electronics/Power).', url: '/admission/be-electrical' }, // Assumed generic link or derived
        { title: 'BE Computer Systems', description: 'Computer Systems Engineering program.', url: '/admission/be-computer-systems' },
        { title: 'B.E. Tech (Software/Computer)', description: 'Bachelor of Engineering Technology.', url: '/admission/bet-computer' },
        { title: 'BBA', description: 'Bachelor of Business Administration.', url: '/admission/bba' },
        { title: 'BS Accounting & Finance', description: 'Accounting and Finance program.', url: '/admission/bs-accounting-finance' },

        // QEC
        { title: 'Quality Enhancement Cell (QEC)', description: 'Ensuring academic quality standards.', url: '/qec' },
        { title: 'QEC Vision & Mission', description: 'QEC goals and objectives.', url: '/qec' },
        { title: 'University Policies', description: 'Rules and regulations.', url: '/qec' },

        // ORIC & Research
        { title: 'ORIC', description: 'Office of Research, Innovation and Commercialization.', url: '/oric' },
        { title: 'Research & Projects', description: 'Research initiatives and projects.', url: '/oric' },
        { title: 'Final Year Projects (FYP)', description: 'Student final year projects gallery.', url: '/final-year-projects' },
        { title: 'MERL', description: 'Micro Electronic Research Lab (Chip Design).', url: '/merl' },
        { title: 'MERL Research', description: 'Research at MERL.', url: '/merl' },

        // Students
        { title: 'Students', description: 'Student affairs and resources.', url: '/students' },
        { title: 'Scholarships', description: 'Financial aid and merit scholarships.', url: '/students' },
        { title: 'Student Affairs', description: 'Support services for students.', url: '/students' },

        // Continuing Education
        { title: 'Continuing Education', description: 'Short courses, workshops, and certifications.', url: '/continuing-education' },
        { title: 'Short Courses', description: 'Professional development courses.', url: '/continuing-education' },

        // Corporate Liaison
        { title: 'Corporate Liaison', description: 'Industry partnerships and placements.', url: '/corporate-liaison' },
        { title: 'Job Portal', description: 'Career opportunities for students/alumni.', url: '/corporate-liaison' },

        // Other
        { title: 'Sustainable Development Goals (SDGs)', description: 'Our commitment to SDGs.', url: '/sustainable-development-goals' },
        { title: 'Careers at UIT', description: 'Job openings at the university.', url: '/careers' },
        { title: 'UIT Today', description: 'News, Blogs, and Articles.', url: '/uit-today' },
        { title: 'Events', description: 'Upcoming University Events.', url: '/events' },
        { title: 'Tenders', description: 'Open tenders and procurement.', url: '/tenders' },
        { title: 'Virtual Tour', description: 'Take a virtual tour of the campus.', url: '/virtual-tour' },
    ];

    staticPages.forEach((page, index) => {
        results.push({
            id: `page-${index}`,
            title: page.title,
            description: page.description,
            type: (page.type as any) || 'Page',
            url: page.url
        });
    });

    // Add Jobs
    // JOBS_DATA usage removed as it was migrated to Sanity. 
    // Global search for jobs will need to be refactored to fetch from Sanity asynchronously if needed.


    return results;
};

export const searchData = (query: string, extraData: SearchResult[] = []): SearchResult[] => {
    if (!query || query.trim().length === 0) return [];

    const lowerQuery = query.toLowerCase().trim();
    const staticData = getAllSearchableData();
    const allData = [...staticData, ...extraData];

    return allData.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    );
};
