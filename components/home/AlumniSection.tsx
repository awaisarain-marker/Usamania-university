export default function AlumniSection() {
    return (
        <section className="container alumini-success-container">
            <div className="testimonial-box --full">
                <div className="testimonial-box__image">
                    <img
                        className="image"
                        alt="Alumni Success Background"
                        width="1357"
                        height="650"
                        src="https://www.aubg.edu/wp-content/uploads/2023/05/alumni-success.png"
                    />
                </div>

                <div className="testimonial-box__quote --ribbon --shadow">
                    <div className="section-title">
                        <h2 className="text-white">Alumni Success</h2>
                    </div>

                    <div className="text-big">
                        <p className="text-white">Read more about the remarkable achievements of the UIT alumni</p>
                    </div>

                    <a href="https://www.aubg.edu/aubg-today/category/alumni/" className="btn-secondary --red --arrow --border">
                        <span>Check our alumni success stories</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
