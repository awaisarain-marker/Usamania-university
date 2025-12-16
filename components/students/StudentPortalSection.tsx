import React from 'react';

export default function StudentPortalSection() {
    return (
        <div id="student-portal" className="image-cta">
            <div className="container">
                <div className="image-cta__wrap" style={{ backgroundColor: '#e6eef4' }}>
                    {/* Head with bordered image */}
                    <div className="image-cta__head">
                        <figure className="image-cta__head-image">
                            <img
                                className="image"
                                alt="Student Portal"
                                width="1256"
                                height="605"
                                src="https://d2liqplnt17rh6.cloudfront.net/coverImages/f765c743-fb73-4d74-9791-f3c9065f9b43-526.jpeg" // Using same image as Registration for now
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    </div>

                    {/* Body content box */}
                    <div className="image-cta__body" style={{ backgroundColor: '#e6eef4' }}>
                        <div className="section-title">
                            <h2>Student Portal</h2>
                        </div>
                        <div className="text-big">
                            <p>
                                Access your academic records, course schedules, and important university announcements. Log in seamlessly to manage your educational journey and stay connected with campus resources anytime, anywhere.
                            </p>
                        </div>
                        <a
                            className="btn-secondary --red --border --arrow"
                            href="https://eduboard.uit.edu/StudentPortal/Student/EDU_EBS_STU_Login.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Log In to Student Portal</span>
                            <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                <use xlinkHref="#arrow"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
