interface WorldClassSectionProps {
    imageUrl?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function WorldClassSection({
    imageUrl = "https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-1028x605.jpg",
    title = "An Introduction to Our University",
    description = "The UIT University (UITU) was established vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide Notification in The Sindh Government Gazette on May 28, 2018. The University after due charter inspections by HEC, granted NOC whereby UITU has been initially allowed to start undergraduate programs in four departments namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences. The UIT University is managed by Usman Memorial Foundation (UMF).",
    buttonText = "Learn More About Us",
    buttonLink = "/about-us"
}: WorldClassSectionProps) {
    return (
        <section className="image-cta">
            <div className="container">
                <div className="image-cta__wrap">
                    {/* Head with bordered image */}
                    <div className="image-cta__head">
                        <figure className="image-cta__head-image">
                            <img
                                className="image"
                                alt="World-Class Education Image"
                                width="1256"
                                height="605"
                                src={imageUrl}
                            />
                        </figure>
                    </div>

                    {/* Body content box */}
                    <div className="image-cta__body">
                        <div className="section-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="text-big">
                            <p>{description}</p>
                        </div>
                        <a
                            className="btn-secondary --red --border --arrow"
                            href={buttonLink}
                        >
                            <span>{buttonText}</span>
                            <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                <use xlinkHref="#arrow"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
