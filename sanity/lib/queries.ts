import { client } from './client'

// Get all courses
export async function getAllCourses() {
    return client.fetch(`
        *[_type == "course"] | order(title asc) {
            _id,
            title,
            "slug": slug.current,
            subtitle,
            "heroImage": heroImage.asset->url
        }
    `)
}

// Get a single course by slug
export async function getCourseBySlug(slug: string) {
    return client.fetch(`
        *[_type == "course" && slug.current == $slug][0] {
            _id,
            title,
            "slug": slug.current,
            subtitle,
            "heroImage": heroImage.asset->url,
            "overviewImage": overviewImage.asset->url,
            overviewContent,
            degreeRequirements,
            semesterData,
            internship,
            peos,
            plos,
            eligibility,
            admissionTestCriteria
        }
    `, { slug })
}

// Get all course slugs for static generation
export async function getAllCourseSlugs() {
    return client.fetch(`
        *[_type == "course"] {
            "slug": slug.current
        }
    `)
}

// Get navigation menu
export async function getNavigation() {
    return client.fetch(`
        *[_type == "navigation"][0] {
            menuItems[] {
                _key,
                label,
                href,
                children[] {
                    _key,
                    label,
                    href,
                    children[] {
                        _key,
                        label,
                        href,
                        children[] {
                            _key,
                            label,
                            href
                        }
                    }
                }
            }
        }
    `)
}

// Get header settings
export async function getHeaderSettings() {
    return client.fetch(`
        *[_type == "headerSettings"][0] {
            logoUrl,
            "logo": logo.asset->url,
            announcementText,
            announcementLink,
            announcementVisible,
            applyNowText,
            applyNowLink,
            exploreText
        }
    `)
}

// Get footer settings
export async function getFooter() {
    return client.fetch(`
        *[_type == "footer"][0] {
            copyrightText,
            universityDescription,
            slogan,
            contactInfo,
            socialLinks,
            quickLinks,
            footerImageUrl,
            "footerImage": footerImage.asset->url
        }
    `)
}

// Blog Queries
export async function getAllPosts() {
    return client.fetch(`
        *[_type == "post"] | order(publishedAt desc) {
            title,
            "slug": slug.current,
            description,
            publishedAt,
            author,
            category,
            "mainImage": mainImage.asset->url,
            mainImageUrl,
            externalUrl
        }
    `)
}

export async function getPostBySlug(slug: string) {
    return client.fetch(`
        *[_type == "post" && slug.current == $slug][0] {
            title,
            "slug": slug.current,
            description,
            publishedAt,
            author,
            category,
            "mainImage": mainImage.asset->url,
            mainImageUrl,
            body[] {
                ...,
                _type == "image" => {
                    "url": asset->url,
                    "alt": alt,
                    "caption": caption
                },
                _type == "twoColumnImageGrid" => {
                    "imageLeft": imageLeft.asset->url,
                    "imageLeftAlt": imageLeft.alt,
                    "imageLeftUrl": imageLeftUrl,
                    "imageRight": imageRight.asset->url,
                    "imageRightAlt": imageRight.alt,
                    "imageRightUrl": imageRightUrl
                },
                _type == "quote" => {
                    quote,
                    author
                }
            }
        }
    `, { slug })
}

// Event Queries
export async function getAllEvents() {
    return client.fetch(`
        *[_type == "event"] | order(date desc) {
            title,
            "slug": slug.current,
            date,
            location,
            "mainImage": mainImage.asset->url,
            mainImageUrl,
            externalUrl
        }
    `)
}

export async function getEventBySlug(slug: string) {
    return client.fetch(`
        *[_type == "event" && slug.current == $slug][0] {
            title,
            "slug": slug.current,
            date,
            location,
            "mainImage": mainImage.asset->url,
            mainImageUrl,
            body[] {
                ...,
                _type == "image" => {
                    "url": asset->url,
                    "alt": alt,
                    "caption": caption
                },
                _type == "twoColumnImageGrid" => {
                    "imageLeft": imageLeft.asset->url,
                    "imageLeftAlt": imageLeft.alt,
                    "imageLeftUrl": imageLeftUrl,
                    "imageRight": imageRight.asset->url,
                    "imageRightAlt": imageRight.alt,
                    "imageRightUrl": imageRightUrl
                },
                _type == "quote" => {
                    quote,
                    author
                }
            }
        }\r
    `, { slug })
}

// Page Query - fetch any page by slug
export async function getPageContent(slug: string) {
    return client.fetch(`
        *[_type == "page" && slug.current == $slug][0] {
            pageTitle,
            "slug": slug.current,
            
            // Hero Section
            heroBgImage,
            heroVideoUrl,
            heroTitle,
            heroSubtitle,
            heroButtons,
            heroStats,
            heroQuickLinks,
            
            // Introduction Section
            introImageUrl,
            introTitle,
            introDescription,
            introButtonText,
            introButtonLink,
            
            // Academics Section
            academicsTitle,
            academicsDescription,
            
            // Testimonials
            testimonials,
            
            // Alumni Section
            alumniImageUrl,
            alumniTitle,
            alumniDescription,
            alumniButtonText,
            alumniButtonLink,
            
            // CTA Section
            ctaTopImageUrl,
            ctaLabel,
            ctaTitleTop,
            ctaTitleBottom,
            ctaDescription,
            ctaButtons,
            ctaBottomImageUrl,
            
            // Campus Experience
            campusTitle,
            campusGallery
        }
    `, { slug })
}

// Get Home Page Content
export async function getHomePageContent() {
    return client.fetch(`
        *[_type == "homePage"][0] {
            // Hero Section
            heroVideoUrl,
            heroTitle,
            heroSubtitle,
            heroButtons,
            heroStats,
            heroQuickLinks,
            
            // Introduction Section
            introImageUrl,
            introTitle,
            introDescription,
            introButtonText,
            introButtonLink,
            
            // Academics Section
            academicsTitle,
            academicsDescription,
            
            // Testimonials
            testimonials,
            
            // Alumni Section
            alumniImageUrl,
            alumniTitle,
            alumniDescription,
            alumniButtonText,
            alumniButtonLink,
            
            // CTA Section
            ctaTopImageUrl,
            ctaLabel,
            ctaTitleTop,
            ctaTitleBottom,
            ctaDescription,
            ctaButtons,
            ctaBottomImageUrl,
            
            // Campus Experience
            campusTitle,
            campusGallery
        }
    `)
}

// Get About Page Content
export async function getAboutPageContent() {
    return client.fetch(`
        *[_type == "aboutPage"][0] {
            // Hero
            heroTitle,
            heroSubtitle,
            heroBgImage,
            heroButtons,
            
            // Tabs
            whoWeAreTitle,
            whoWeAreSubtitle,
            whoWeAreContent,
            whoWeAreImage,
            governanceTitle,
            governanceSubtitle,
            governanceContent,
            governanceImage,
            missionTitle,
            missionSubtitle,
            missionContent,
            missionImage,
            visionTitle,
            visionSubtitle,
            visionContent,
            visionImage,
            
            // Journey
            journeyTitle,
            journeyMilestones,
            
            // Leadership
            leadershipTitle,
            leadershipQuote,
            vcMessage,
            vcImage,
            vcName,
            boardOfAdvisors,
            boardOfGovernors,
            academicCouncil,
            managementTeam,
            
            // Accreditations
            accreditationsTitle,
            accreditationsImage,
            accreditationsItems,
            
            // Facilities
            facilitiesTitle,
            facilitiesTabs
        }
    `)
}

// Faculty Queries
export async function getFacultyByCategory(category: string) {
    return client.fetch(`
        *[_type == "facultyMember" && category == $category] | order(order asc, name asc) {
            _id,
            name,
            designation,
            qualification,
            imageUrl,
            category,
            externalLink,
            order,
            isDean,
            deanMessage,
            email,
            ext,
            overview,
            qualificationDetails,
            specialization,
            experience,
            certifications,
            courses
        }
    `, { category })
}

export async function getAllFaculty() {
    return client.fetch(`
        *[_type == "facultyMember"] | order(category asc, order asc, name asc) {
            _id,
            name,
            designation,
            qualification,
            imageUrl,
            category,
            externalLink,
            order,
            isDean,
            deanMessage,
            email,
            ext,
            overview,
            qualificationDetails,
            specialization,
            experience,
            certifications,
            courses
        }
    `)
}

