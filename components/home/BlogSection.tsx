const blogPosts = [
    {
        title: "Economics for a New Generation: Professor Nikos Fatouros Teaches for the Future",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/Professor-Nikos-Fatouros-Teaching-Economics-at-AUBG-2-1-489x318.png",
        link: "https://www.aubg.edu/aubg-today/economics-for-a-new-generation-professor-nikos-fatouros-teaches-for-the-future/",
        description: "Professor Nikos Fatouros joined UIT University in the 2024/2025 academic year and is already serving as the Interim Chair of the Economics Department. His research interests go ...",
        category: "Economics",
        featured: true,
    },
    {
        title: "Ashod Derandonyan ('01) Championing Accessibility Support for the Deaf and Hard of Hearing Community",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/Ashod-Derandonyan-'01-at-the-AUBG-Civic-Society-Forum-in-2025-254x165.png",
        link: "https://www.aubg.edu/aubg-today/ashod-derandonyan-01-championing-accessibility-support-for-the-deaf-and-hard-of-hearing-community/",
        category: "Alumni",
    },
    {
        title: "The 2025 Study Trip to Brussels Explores National Security in the EU",
        image: "https://www.aubg.edu/wp-content/uploads/2025/12/AUBG-European-Studies-Study-Trip-to-Brussels-2025-1-254x165.png",
        link: "https://www.aubg.edu/aubg-today/the-2025-eur-study-trip-to-brussels-explores-national-security-in-the-eu/",
        category: "European Studies",
    },
    {
        title: "What to Do with a Major in Economics: Career Prospects and Future Jobs",
        image: "https://www.aubg.edu/wp-content/uploads/2025/11/What-to-Do-with-a-Major-in-Economics-254x165.png",
        link: "https://www.aubg.edu/aubg-today/what-to-do-with-a-major-in-economics-career-prospects-and-future-jobs/",
        category: "Economics",
    },
    {
        title: "What to Do with a Major in Political Science & International Relations and European Studies",
        image: "https://www.aubg.edu/wp-content/uploads/2025/11/What-to-Do-with-a-Major-in-Political-Science-254x165.png",
        link: "https://www.aubg.edu/aubg-today/what-to-do-with-a-major-in-political-science-international-relations/",
        category: "Politics",
    },
];

interface BlogSectionProps {
    title?: string;
}

export default function BlogSection({ title = "UIT University Today" }: BlogSectionProps) {
    return (
        <section className="blog-section">
            <div className="container">
                {/* Header */}
                <div className="blog-section__heading row">
                    <div className="blog-section__heading-text">
                        <div className="section-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="text-big">
                            <p>Discover what it's like to study at one of Pakistan's top universities, and explore our latest developments, student achievements, and alumni success stories.</p>
                        </div>
                    </div>
                    <a href="/uit-today" className="btn-secondary --red --arrow --border">
                        <span>UIT University Today</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </a>
                </div>

                {/* Blog Slider */}
                <div className="blog-section__slider">
                    <div className="slider__wrapper">
                        <div className="blog-section__list">
                            {blogPosts.map((post, index) => (
                                <div key={index} className="blog-section__item">
                                    <a href={post.link} className="blog-section__item-wrap">
                                        <figure className="blog-section__item-media">
                                            <img
                                                className="image"
                                                alt={`${post.title} featured image`}
                                                src={post.image}
                                            />
                                        </figure>
                                        <div className="blog-section__item-content">
                                            <div className="blog-section__item-title">
                                                <h3 className="font-secondary text-bold">{post.title}</h3>
                                            </div>
                                            {post.description && (
                                                <div className="blog-section__item-desc">
                                                    <p>{post.description}</p>
                                                </div>
                                            )}
                                            <div className="blog-section__item-footer">
                                                <span className="text-uppercase text-bold text-light-blue">{post.category}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="slider__pagination">
                        <span className="slider__pagination-fill"></span>
                    </div>

                    {/* Navigation */}
                    <div className="slider__navigation">
                        <button className="slider__prev" aria-label="Previous slide">
                            <svg width="25" height="25" className="icon icon-arrow-left" aria-hidden="true" role="img">
                                <use xlinkHref="#arrow-left"></use>
                            </svg>
                        </button>
                        <button className="slider__next" aria-label="Next slide">
                            <svg width="25" height="25" className="icon icon-arrow-right" aria-hidden="true" role="img">
                                <use xlinkHref="#arrow-right"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
