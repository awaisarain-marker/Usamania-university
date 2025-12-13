export default function WorldClassSection() {
    return (
        <section className="image-cta">
            <div className="container">
                <div className="image-cta__wrap">
                    {/* Head with bordered image */}
                    <div className="image-cta__head">
                        <figure className="image-cta__head-image">
                            <img
                                className="image"
                                alt="World-Class U.S. Education in Europe Image"
                                width="1256"
                                height="605"
                                sizes="(min-width: 75rem) 60rem, (min-width: 50rem) 40rem, (min-width: 40rem) calc(100vw - 10rem), 100vw"
                                srcSet="https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-300x177.jpg 150w, https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-768x452.jpg 300w, https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-1024x603.jpg 600w, https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-1028x605.jpg 1000w"
                                src="https://www.aubg.edu/wp-content/uploads/2024/07/ABF-Website-1028x605.jpg"
                            />
                        </figure>
                    </div>

                    {/* Body content box */}
                    <div className="image-cta__body">
                        <div className="section-title">
                            <h2>An Introduction to Our University</h2>
                        </div>
                        <div className="text-big">
                            <p>
                                The UIT University (UITU) was established vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide Notification in The Sindh Government Gazette on May 28, 2018. The University after due charter inspections by HEC, granted NOC whereby UITU has been initially allowed to start undergraduate programs in four departments namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences. The UIT University is managed by Usman Memorial Foundation (UMF).
                            </p>
                        </div>
                        <a
                            className="btn-secondary --red --border --arrow"
                            href="/about-us"
                        >
                            <span>Learn More About Us</span>
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
