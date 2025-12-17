interface CtaButton {
    text: string;
    link: string;
}

interface CtaSectionProps {
    topImageUrl?: string;
    label?: string;
    titleTop?: string;
    titleBottom?: string;
    description?: string;
    buttons?: CtaButton[];
    bottomImageUrl?: string;
}

export default function CtaSection({
    topImageUrl = "https://www.aubg.edu/wp-content/uploads/2022/03/hats.png",
    label = "Still searching?",
    titleTop = "Let Us Help",
    titleBottom = "You Thrive!",
    description = "Our counselors and students are here to answer all your UIT-related questions about higher Education. Get in touch:",
    buttons = [
        { text: "Talk to our counselors", link: "/offices/admissions-office/" },
        { text: "Talk to our students", link: "/admissions/talk-to-our-students/" }
    ],
    bottomImageUrl = "https://www.aubg.edu/wp-content/uploads/2022/03/students.png"
}: CtaSectionProps) {
    return (
        <section className="cta-section --padding-top">
            {/* Floating Hats Image */}
            <img
                className="cta-section__top-img"
                alt="Students Hats"
                width="1694"
                height="536"
                src={topImageUrl}
            />

            <div className="container">
                <div className="text-small">
                    <p className="text-uppercase text-light-blue">{label}</p>
                </div>

                <div className="cta-section__title-top">
                    <h2 className="font-secondary text-thin">{titleTop}</h2>
                </div>

                <div className="cta-section__title">
                    <h3>{titleBottom}</h3>
                </div>

                <div className="cta-section__paragraph">
                    <p>{description}</p>
                </div>

                {buttons.map((button, index) => (
                    <a key={index} href={button.link} className="btn-secondary --red --arrow --border" target="_blank">
                        <span>{button.text}</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </a>
                ))}
            </div>

            {/* Students Image */}
            <img
                className="cta-section__bottom-img"
                alt="Students"
                width="1920"
                height="996"
                src={bottomImageUrl}
            />
        </section>
    );
}
