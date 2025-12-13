import Link from 'next/link';

export default function MerlIntroSection() {
    return (
        <section className="image-cta">
            <div className="container">
                <div className="image-cta__wrap">
                    {/* Head with bordered image */}
                    <div className="image-cta__head">
                        <figure className="image-cta__head-image">
                            <img
                                className="image"
                                alt="MERL Lab Chip Design"
                                width="1256"
                                height="605"
                                src="https://uitu.edu.pk/wp-content/uploads/2024/05/bg-1-1.jpg"
                            />
                        </figure>
                    </div>

                    {/* Body content box */}
                    <div className="image-cta__body">
                        <div className="section-title">
                            <h2>COME JOIN OUR CHIP x AI COURSE FOLLOWED BY TRAINING AT OUR MERL LAB:</h2>
                        </div>
                        <div className="text-big" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                MERL-UITU is the member of international foundations like RISC-V Foundation, OSFPGA Foundation, Chips Alliances, Linux Foundation, Google Summer of Code and Edge Impulse training program.
                            </p>
                            <p>
                                We have a working relationship with PLCT lab in China, UCROSS – USA, TSMC ( as collaboration for PDK access), ARM Developer program, FOSSI Foundation, Cadence (EDA tool provider), Efabless and Skywater technologies.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem', justifyContent: 'center' }}>
                            <Link
                                className="btn-secondary --red --border --arrow"
                                href="#"
                            >
                                <span>Register Now for MERL Chip Design</span>
                                <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                    <use xlinkHref="#arrow"></use>
                                </svg>
                            </Link>

                            <Link
                                className="btn-secondary --red --border --arrow"
                                href="#"
                            >
                                <span>Visit MERL</span>
                                <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                    <use xlinkHref="#arrow"></use>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
