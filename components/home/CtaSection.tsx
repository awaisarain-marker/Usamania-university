export default function CtaSection() {
    return (
        <section className="cta-section --padding-top">
            {/* Floating Hats Image */}
            <img
                className="cta-section__top-img"
                alt="Students Hats"
                width="1694"
                height="536"
                src="https://www.aubg.edu/wp-content/uploads/2022/03/hats.png"
            />

            <div className="container">
                <div className="text-small">
                    <p className="text-uppercase text-light-blue">Still searching?</p>
                </div>

                <div className="cta-section__title-top">
                    <h2 className="font-secondary text-thin">Let Us Help</h2>
                </div>

                <div className="cta-section__title">
                    <h3>You Thrive!</h3>
                </div>

                <div className="cta-section__paragraph">
                    <p>Our counselors and students are here to answer all your AUBG-related questions about higher Education in Europe. Get in touch:</p>
                </div>

                <a href="/offices/admissions-office/" className="btn-secondary --red --arrow --border" target="_blank">
                    <span>Talk to our counselors</span>
                    <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                        <use xlinkHref="#arrow"></use>
                    </svg>
                </a>

                <a href="/admissions/talk-to-our-students/" className="btn-secondary --red --arrow --border" target="_blank">
                    <span>talk to our students</span>
                    <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                        <use xlinkHref="#arrow"></use>
                    </svg>
                </a>
            </div>

            {/* Students Image */}
            <img
                className="cta-section__bottom-img"
                alt="Students"
                width="1920"
                height="996"
                src="https://www.aubg.edu/wp-content/uploads/2022/03/students.png"
            />
        </section>
    );
}
