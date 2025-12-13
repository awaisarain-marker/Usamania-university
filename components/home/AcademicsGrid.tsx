const programs = [
    {
        title: "Bachelor's Degrees",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/138-480x320.jpg",
        link: "https://www.aubg.edu/academics/bachelor-degrees/",
        alt: "Bachelor's Degrees Academic",
    },
    {
        title: "Summer Programs",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Symmer-Programs-480x338.jpg",
        link: "https://www.aubg.edu/academics/summer-programs/",
        alt: "Summer Programs Academic",
    },
    {
        title: "Exchange programs",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/AUBG-Study-Abroad-480x366.jpg",
        link: "https://www.aubg.edu/academics/study-abroad/",
        alt: "Exchange programs Academic",
    },
    {
        title: "Executive MBA",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/136-e1661700039394-480x318.jpg",
        link: "https://www.aubg.edu/academics/executive-mba/",
        alt: "Executive MBA Academic",
    },
    {
        title: "ELI – English Language Institute",
        image: "https://www.aubg.edu/wp-content/uploads/2022/03/DSC00353-1-480x320.jpg",
        link: "https://www.aubg.edu/academics/english-language-institute/",
        alt: "ELI – English Language Institute Academic",
    },
];

export default function AcademicsGrid() {
    return (
        <section className="academics-section section --center-v">
            <div className="container">
                <div className="row academics-section__list">
                    {/* Heading Column */}
                    <div className="col-4 academics-section__heading --center-v">
                        <div className="section-title">
                            <h2>UIT <br /> Academics</h2>
                        </div>
                        <div className="text-big">
                            <p>Discover the program that sparks your passion and sets you up for success. Your academic journey awaits!</p>
                        </div>
                    </div>

                    {/* Program Cards */}
                    {programs.map((program, index) => (
                        <a
                            key={index}
                            href={program.link}
                            className="col-4 academics-section__item"
                            aria-label={`Go to ${program.title} page`}
                        >
                            <div className="academics-section__item-title">
                                <h3 className="font-secondary">{program.title}</h3>
                            </div>
                            <img
                                className="academics-section__item-image"
                                alt={program.alt}
                                width="481"
                                height="385"
                                src={program.image}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
