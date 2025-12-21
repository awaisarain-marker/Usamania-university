import { useState, useEffect } from 'react';
import { getAllPosts } from '@/sanity/lib/queries';
import Link from 'next/link';

interface BlogPost {
    title: string;
    image: string;
    link: string;
    description?: string;
    category: string;
    featured?: boolean;
}

interface BlogSectionProps {
    title?: string;
}

export default function BlogSection({ title = "UIT University Today" }: BlogSectionProps) {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getAllPosts();
                if (data && data.length > 0) {
                    const formattedPosts = data.map((post: any) => ({
                        title: post.title,
                        image: post.mainImageUrl || post.mainImage || "https://www.aubg.edu/wp-content/uploads/2025/12/Professor-Nikos-Fatouros-Teaching-Economics-at-AUBG-2-1-489x318.png", // Fallback image
                        link: `/uit-today/${post.slug}`,
                        description: post.description,
                        category: post.category || "News",
                        featured: false // Logic can be added to determine featured post
                    }));

                    // Set first post as featured if available
                    if (formattedPosts.length > 0) {
                        formattedPosts[0].featured = true;
                    }

                    setPosts(formattedPosts);
                }
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) {
        return <div className="py-20 text-center">Loading news...</div>;
    }

    // Fallback if no posts found
    if (posts.length === 0) {
        return null;
    }

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
                    <Link href="/uit-today" className="btn-secondary --red --arrow --border">
                        <span>UIT University Today</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </Link>
                </div>

                {/* Blog Slider */}
                <div className="blog-section__slider">
                    <div className="slider__wrapper">
                        <div className="blog-section__list">
                            {posts.map((post, index) => (
                                <div key={index} className="blog-section__item">
                                    <Link href={post.link} className="blog-section__item-wrap">
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
                                    </Link>
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
