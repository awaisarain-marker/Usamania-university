import Link from 'next/link';

interface AlumniSectionProps {
    imageUrl?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function AlumniSection({
    imageUrl = "https://www.aubg.edu/wp-content/uploads/2023/05/alumni-success.png",
    title = "Alumni Success",
    description = "Read more about the remarkable achievements of the UIT alumni",
    buttonText = "Check our alumni success stories",
    buttonLink = "/corporate-liaison#alumni-engagement"
}: AlumniSectionProps) {
    return (
        <section className="container alumini-success-container">
            <div className="testimonial-box --full">
                <div className="testimonial-box__image">
                    <img
                        className="image"
                        alt="Alumni Success Background"
                        width="1357"
                        height="650"
                        src={imageUrl}
                    />
                </div>

                <div className="testimonial-box__quote --ribbon --shadow">
                    <div className="section-title">
                        <h2 className="text-white">{title}</h2>
                    </div>

                    <div className="text-big">
                        <p className="text-white">{description}</p>
                    </div>

                    <Link href={buttonLink} className="btn-secondary --red --arrow --border">
                        <span>{buttonText}</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
