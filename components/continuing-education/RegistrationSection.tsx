import React from 'react';

export default function RegistrationSection() {
    return (
        <section className="image-cta" id="registration">
            <div className="container">
                <div className="image-cta__wrap">
                    {/* Head with bordered image */}
                    <div className="image-cta__head">
                        <figure className="image-cta__head-image">
                            <img
                                className="image"
                                alt="Registration Form"
                                width="1256"
                                height="605"
                                src="https://d2liqplnt17rh6.cloudfront.net/coverImages/f765c743-fb73-4d74-9791-f3c9065f9b43-526.jpeg"
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    </div>

                    {/* Body content box */}
                    <div className="image-cta__body">
                        <div className="section-title">
                            <h2>Registration Form</h2>
                        </div>
                        <div className="text-big">
                            <p>
                                Download our registration form to enroll in continuing education courses. Take the first step towards advancing your professional skills and career opportunities today.
                            </p>
                        </div>
                        <a
                            className="btn-secondary --red --border --arrow"
                            href="https://uitu.edu.pk/wp-content/uploads/2024/01/Reg.FormUITU-NEW.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Download Registration Form</span>
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
