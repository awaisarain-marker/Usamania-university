import { getCourseBySlug, getAllCourseSlugs } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import CoursePageContent from '@/components/courses/CoursePageContent'

export async function generateStaticParams() {
    const courses = await getAllCourseSlugs()
    return courses.map((course: { slug: string }) => ({
        slug: course.slug,
    }))
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const course = await getCourseBySlug(slug)

    if (!course) {
        notFound()
    }

    return <CoursePageContent course={course} />
}
