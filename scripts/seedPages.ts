/**
 * Sanity Seed Script - Home and About Us Pages
 * 
 * Run this with: npx sanity exec scripts/seedPages.ts --with-user-token
 * Or use: npx ts-node scripts/seedPages.ts (requires SANITY_AUTH_TOKEN env var)
 * 
 * This populates the Home Page and About Us Page with default content
 * matching what currently shows on the frontend.
 */

import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'a2yn5s3t',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_AUTH_TOKEN,
})

// Home Page Content (matching app/page.tsx defaults)
const homePageData = {
    _id: 'homePage',
    _type: 'homePage',

    // Hero Section
    heroVideoUrl: 'https://ik.imagekit.io/byat8clceo/herosection%20video.mp4',
    heroTitle: 'Expand your world,',
    heroSubtitle: 'shape its future',
    heroButtons: [
        { _key: 'btn1', text: 'Admission', link: '/admission', style: 'red' },
        { _key: 'btn2', text: 'How to apply', link: '/admission#how-to-apply', style: 'transparent' },
    ],
    heroStats: [
        { _key: 'stat1', value: 'Global Standards', label: 'delivered in Pakistan' },
        { _key: 'stat2', value: '5+', label: 'nationalities represented on campus' },
        { _key: 'stat3', value: 'Education', label: 'Relevant, modern learning' },
        { _key: 'stat4', value: '#1', label: 'in career success' },
    ],
    heroQuickLinks: [
        { _key: 'ql1', title: 'MERL', subtitle: 'Medical Engineering Research Lab', link: '/merl', linkText: 'Learn more', imageUrl: null },
        { _key: 'ql2', title: 'Final Year Projects', subtitle: 'Innovative Student Projects', link: '/final-year-projects', linkText: 'Explore Projects', imageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/08/Blagoevgrad-96x69.jpg' },
        { _key: 'ql3', title: 'Scholarship', subtitle: 'Financial Aid Opportunities', link: '/students#scholarship', linkText: 'Discover here', imageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/04/about-hero-background-96x69.jpg' },
    ],

    // Introduction Section
    introImageUrl: 'https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-1028x605.jpg',
    introTitle: 'An Introduction to Our University',
    introDescription: 'The UIT University (UITU) was established vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide Notification in The Sindh Government Gazette on May 28, 2018. The University after due charter inspections by HEC, granted NOC whereby UITU has been initially allowed to start undergraduate programs in four departments namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences. The UIT University is managed by Usman Memorial Foundation (UMF).',
    introButtonText: 'Learn More About Us',
    introButtonLink: '/about-us',

    // Academics Section
    academicsTitle: 'UIT Academics',
    academicsDescription: 'Discover the program that sparks your passion and sets you up for success. Your academic journey awaits!',

    // Testimonials
    testimonials: [
        {
            _key: 'test1',
            name: 'Daniel Flashenburg (\'28)',
            location: 'Easton, MA',
            quote: 'The benefits are endless. A tight-knit, fun, and intelligent community awaits you',
            fullText: 'Do it! The benefits are endless. A tight-knit, fun, and intelligent community awaits you, and experiences you couldn\'t even dream of at a school in the US are ahead-- all the while you are receiving the same level of education at an (often times) monumentally less expensive cost.',
            bgImageUrl: 'https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flashenburg-AUBG-Testimonial-945x700.png',
            avatarUrl: 'https://www.aubg.edu/wp-content/uploads/2025/06/Daniel-Flasheburg-profile-150x150.png',
        },
        {
            _key: 'test2',
            name: 'Owen Kemerer (\'25)',
            location: 'Burlington, VT',
            quote: 'I had the opportunity to take a trip to Brussels as part of a European Studies class.',
            fullText: 'One of my favorite moments at UIT University was during the fall semester of my senior year. I had the opportunity to take a trip to Brussels as part of a European Studies class. I was standing waiting for the metro talking to some friends from Ukraine and Bulgaria. In that moment I realized how surreal my whole experience at UIT University has been. I am an American who has been lucky enough to live on another continent for four years and meet people from all over the world.',
            bgImageUrl: 'https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-25-1-945x700.png',
            avatarUrl: 'https://www.aubg.edu/wp-content/uploads/2025/06/Owen-Kemerer-profile-photo-150x150.png',
        },
    ],

    // Alumni Section
    alumniImageUrl: 'https://www.aubg.edu/wp-content/uploads/2023/05/alumni-success.png',
    alumniTitle: 'Alumni Success',
    alumniDescription: 'Read more about the remarkable achievements of the UIT alumni',
    alumniButtonText: 'Check our alumni success stories',
    alumniButtonLink: '/corporate-liaison#alumni-engagement',

    // CTA Section
    ctaTopImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/hats.png',
    ctaLabel: 'Still searching?',
    ctaTitleTop: 'Let Us Help',
    ctaTitleBottom: 'You Thrive!',
    ctaDescription: 'Our counselors and students are here to answer all your UIT-related questions about higher Education. Get in touch:',
    ctaButtons: [
        { _key: 'cta1', text: 'Talk to our counselors', link: '/offices/admissions-office/' },
        { _key: 'cta2', text: 'Talk to our students', link: '/admissions/talk-to-our-students/' },
    ],
    ctaBottomImageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/03/students.png',

    // Campus Experience
    campusTitle: 'Study Hard & Enjoy Your Campus Experience',
    campusGallery: [
        { _key: 'cg1', imageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-19-400x400.jpg', alt: 'Gallery Image 1' },
        { _key: 'cg2', imageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/09/All-campus-picnic-400x400.jpg', alt: 'Gallery Image 2' },
        { _key: 'cg3', imageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-17-400x400.jpg', alt: 'Gallery Image 3' },
        { _key: 'cg4', imageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/09/Commencement-2022-400x400.jpg', alt: 'Gallery Image 4' },
        { _key: 'cg5', imageUrl: 'https://www.aubg.edu/wp-content/uploads/2022/09/Move-in-day-2022-400x400.jpg', alt: 'Gallery Image 5' },
    ],
}

// About Page Content (matching app/about-us/page.tsx defaults)
const aboutPageData = {
    _id: 'aboutPage',
    _type: 'aboutPage',

    // Hero Section
    heroTitle: 'About UIT University',
    heroSubtitle: 'Excellence in Education, Innovation in Research',
    heroBgImage: '/campus-hero.png',
    heroButtons: [
        { _key: 'btn1', text: 'Plan for growth and development', link: '#' },
        { _key: 'btn2', text: 'Skaptopara III Expansion', link: '#' },
    ],

    // Journey Section
    journeyTitle: 'Our Journey',
    journeyMilestones: [
        { _key: 'jm1', title: 'Foundation Legacy', description: 'Usman Memorial Foundation established in memory of Late Mohammad Usman.' },
        { _key: 'jm2', title: 'Institute Birth', description: 'Usman Institute of Technology (UIT) established, beginning our journey in technical education.' },
        { _key: 'jm3', title: 'Academic Growth', description: 'Affiliation with NED University of Engineering and Technology, expanding our horizons.' },
        { _key: 'jm4', title: 'University Status', description: 'Chartered as independent UIT University under Sindh Act, achieving full autonomy.' },
    ],
}

async function seedPages() {
    console.log('🌱 Starting Sanity seed...')

    try {
        // Create or replace Home Page
        console.log('📄 Creating Home Page...')
        await client.createOrReplace(homePageData)
        console.log('✅ Home Page created successfully!')

        // Create or replace About Page
        console.log('📄 Creating About Us Page...')
        await client.createOrReplace(aboutPageData)
        console.log('✅ About Us Page created successfully!')

        console.log('🎉 Seed completed successfully!')
    } catch (error) {
        console.error('❌ Seed failed:', error)
        process.exit(1)
    }
}

seedPages()
