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
