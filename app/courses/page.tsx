import { getAllCourses } from '@/sanity/lib/queries'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'

interface Course {
    _id: string
    title: string
    slug: string
    subtitle?: string
    heroImage?: string
}

export default async function CoursesPage() {
    const courses: Course[] = await getAllCourses()

    return (
        <div className="page-courses">
            <PageHero
                title="Our Programs"
                subtitle="Explore our diverse range of undergraduate programs"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Programs' }
                ]}
            />

            <section className="py-16 bg-[#e6eef4]">
                <div className="container">
                    <div className="section-title text-center mb-12">
                        <h2>Available Programs</h2>
                    </div>

                    {courses.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg mb-4">No courses have been added yet.</p>
                            <p className="text-gray-500">Visit the <a href="/studio" className="text-[#ed1c24] underline">Sanity Studio</a> to add courses.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course) => (
                                <Link
                                    key={course._id}
                                    href={`/courses/${course.slug}`}
                                    className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={course.heroImage || 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg'}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-[#002856] font-bold text-xl mb-2 group-hover:text-[#ed1c24] transition-colors">
                                            {course.title}
                                        </h3>
                                        {course.subtitle && (
                                            <p className="text-gray-600">{course.subtitle}</p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
