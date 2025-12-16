import PageHero from '@/components/layout/PageHero';
import FacultyGrid from '@/components/faculty/FacultyGrid';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';

export default function FacultyPage() {
    return (
        <div className="page-faculty">
            <PageHero
                title="Faculty"
                subtitle="Our Distinguished Academic Staff"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg" // Placeholder image
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Faculty' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#engineering" className="btn-secondary --red --border --arrow">
                        <span>Engineering & Technology</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                    <a href="/faculty/computing-sciences" className="btn-link --white">
                        <span>Computing Sciences</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>

                    <a href="#management" className="btn-link --white">
                        <span>Management & Social Sciences</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            {/* Faculty Section */}
            <div className="bg-transparent">
                <FacultyGrid />
            </div>

            {/* Blog Section */}
            <BlogSection />

            {/* Events Section */}
            <EventsSection />
        </div>
    );
}
