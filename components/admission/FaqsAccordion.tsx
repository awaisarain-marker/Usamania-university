'use client';

import React, { useState } from 'react';

interface FaqItem {
    title: string;
    content: React.ReactNode;
}

const faqData: FaqItem[] = [
    {
        title: "1. When can one apply for admissions at UIT University?",
        content: (
            <div>
                <p>Admission has started from January, 2025. If an applicant fulfill the admission criteria (eligibility criteria can be seen on website at <a href="https://www.uitu.edu.pk" target="_blank" rel="noopener noreferrer" className="text-[#ed1c24] hover:underline">www.uitu.edu.pk</a> ), he/she can apply for admission via online application. The applicant can access his/her online application from the homepage of UIT’s website <a href="https://www.uitu.edu.pk" target="_blank" rel="noopener noreferrer" className="text-[#ed1c24] hover:underline">www.uitu.edu.pk</a></p>
            </div>
        )
    },
    {
        title: "2. Which Undergraduate programs are offered at UIT University?",
        content: (
            <div>
                <p className="mb-2">UIT University offers the following Undergraduate programs:</p>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">Department of Electrical Engineering</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>BE Electrical (Electronic / Power/ Telecommunication)</li>
                    <li>BE Computer Systems</li>
                </ul>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">Department of Computer Science</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>BS Computer Science</li>
                    <li>BS Software Engineering</li>
                </ul>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">Department of Engineering Technology</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Bachelor of Engineering Technology (Computer)</li>
                    <li>Bachelor of Engineering Technology (Software)</li>
                    <li>Bachelor of Engineering Technology (Electronics)</li>
                </ul>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">Department of Management Sciences</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>BBA (Bachelor in Business Administration)</li>
                    <li>BS Business Informatics</li>
                    <li>BS Accounting & Finance</li>
                </ul>
            </div>
        )
    },
    {
        title: "3. What is the general admission criteria?",
        content: (
            <div>
                <p className="mb-2">All applicants must meet the following criteria to be eligible to apply at UIT</p>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">For B.E. Electrical (Electronic/ Power/ Telecommunication) & B.E. Computer Systems</h4>
                <p>HSC, A-level, Aga Khan Board, Federal Board and other board students with at least 60% or equivalent marks in Pre-Engineering.</p>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">For B.S. (Computer Science) & B.S. (Software Engineering)</h4>
                <p>HSC, A-level, Aga khan board, Federal Board and other board students with at least 50% or equivalent marks in Pre-Engineering, Science General OR Pre-Medical. Pre-Medical students has to pass deficiency courses of Mathematics of 6 credit hours within one year of their regular studies.</p>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">For B.E. Tech (Engineering Technology)</h4>
                <p>Passed either Higher Secondary Examination (HSC-II)/DAE in relevant discipline from any authorized board OR any equivalent foreign examination board with at least 50% or 550 marks OR is awaiting his/her final result.</p>

                <h4 className="font-bold text-[#002856] mt-4 mb-2">For Management Science</h4>
                <p>Passed either Higher Secondary Examination (HSC-II) or equivalent from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 45% or 495 marks OR is awaiting his/her final result.</p>
            </div>
        )
    },
    {
        title: "4. How do I proceed with my online application?",
        content: (
            <div>
                <p>Once you have registered for admissions at UIT UNIVERSITY via Online Admission Application, Admission link will be sent to you on your e-mail address. You can proceed with the rest of the online application using the link. (Please refer admission procedure on website). The Office of Admissions will update applicants accordingly via e-mail regarding the submission of supporting documents and the completion of application in all aspects.</p>
            </div>
        )
    },
    {
        title: "5. What to do, if I am unable to register on Admission Portal? Or e-mail address is already registered?",
        content: (
            <div>
                <p className="mb-2">You have to re-check that either you have already registered with the same e-mail address or not. Use another email if you have already registered with the same email. If you did not receive the log in information, please check your Junk or Spam folder in your email.</p>
                <p>If problem persist, please email at <a href="mailto:admission@uitu.edu.pk" className="text-[#ed1c24] hover:underline">admission@uitu.edu.pk</a> or call 021-34994305 Ext: 3025, 3087, 03330399113</p>
            </div>
        )
    },
    {
        title: "6. Does UIT UNIVERSITY allow the students to apply for admission whose result has not been announced?",
        content: (
            <div>
                <p>Yes, UIT UNIVERSITY allows all the students who are awaiting for results to be announced.</p>
            </div>
        )
    },
    {
        title: "7. How can I receive my admit card for entry test?",
        content: (
            <div>
                <p className="mb-2">After confirmation of receiving application fee from respective Bank, system generated admit card will be available for printing from the admission portal.</p>
                <p className="font-bold text-center my-2">Or</p>
                <p>After submitting the fee kindly share the picture/pdf of paid slip on WhatsApp 03330399113</p>
            </div>
        )
    },
    {
        title: "8. What is the fee Structure at UIT UNIVERSITY?",
        content: (
            <div>
                <p>The tuition fee is charged as per credit hour. (Please refer Fee structure on website at <a href="https://uitu.edu.pk/fee-structure/" target="_blank" rel="noopener noreferrer" className="text-[#ed1c24] hover:underline">https://uitu.edu.pk/fee-structure/</a></p>
            </div>
        )
    },
    {
        title: "9. How can I Pay Application fee?",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Print out the fee voucher (system automatically generates fee voucher after submission of application)</li>
                <li>Visit any branch of Meezan Bank and pay admission processing fee i.e. 3,000/=</li>
                <li>Submit scanned copy of the paid fee voucher through the admission portal or send image of paid voucher on WhatsApp 0333-0399113.</li>
            </ul>
        )
    },
    {
        title: "10. What supporting documents do I need to submit with my online application?",
        content: (
            <div>
                <p className="mb-2">Following documents will be required for Admission process:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>SSC certificate or O-Level certificate</li>
                    <li>SSC Marks sheet</li>
                    <li>HSC consolidated Marks sheet (Students waiting for result must submit scanned copy of (HSC-II) Admit card</li>
                    <li>Equivalence certificate Original A-Level Certificate in case of A-Level, issued by IBBC</li>
                </ul>
            </div>
        )
    },
    {
        title: "11. What type of Scholarships are offered by UIT UNIVERSITY?",
        content: (
            <div>
                <p>(Please refer Scholarships Policy & awards on website)</p>
            </div>
        )
    },
    {
        title: "12. Does UIT UNIVERSITY follow an open merit policy in awarding admission?",
        content: (
            <div>
                <p>Yes, UIT UNIVERSITY only offers open merit admissions. There are no reserved or quota-based seats.</p>
            </div>
        )
    },
    {
        title: "13. How frequently is UIT UNIVERSITY fee rates revised?",
        content: (
            <div>
                <p>Universities may increase fees, on annual basis to cover inflation and increased costs.</p>
            </div>
        )
    },
    {
        title: "14. If I failed to attain the required marks as a result awaiting candidate. What will happen?",
        content: (
            <div>
                <p>Those applicants who are awaiting results and will appear in HSC-2024 will be offered a provisional admission. In case, their result is less than required marks after the announcement of HSC/A-level results, the fee will be refunded as per policy. (Please refer Refund Policy on website)</p>
            </div>
        )
    },
    {
        title: "15. Can I change to the online application once I have pressed the “Submit” button?",
        content: (
            <div>
                <p>No, you cannot make any changes to your application once it has been submitted. However, if some critical information needs to be corrected / altered (address, contact number) you can contact the admission office and put in a request.</p>
            </div>
        )
    },
    {
        title: "16. Will I receive a confirmation after submitting my online application?",
        content: (
            <div>
                <p>Yes, you will receive a text message and an e-mail notification stating the successful submission of your online application.</p>
            </div>
        )
    },
    {
        title: "17. If I have passed SAT-SAT- II exam, and I would I be exempted from Entry Test?",
        content: (
            <div>
                <p>Yes, you can apply based on SAT result If you have scored at least 800 in SAT-I and 1500 in SAT-II with subjects of Physics, Chemistry/Computer Science and Mathematics/Biology. Candidate must submit an application for the exemption along with the evidence to the Admission office.</p>
            </div>
        )
    }
];

export default function FaqsAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="js-accordion-content">
            <ul className="accordion" aria-label="accordion lists items">
                {faqData.map((item, index) => (
                    <li key={index} className={`item-list__box --v2 col-12 accordion__item ${activeIndex === index ? 'is-open' : 'is-closed'}`}>
                        <div className="item-list__box-wrap --scroll">
                            <div className="item-list__box-head --no-avatar">
                                <button
                                    type="button"
                                    className="accordion__button-wrap js-accordion"
                                    aria-label={item.title}
                                    aria-expanded={activeIndex === index}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className={`item-list__box-trigger accordion__button ${activeIndex === index ? 'is-active' : ''}`}></span>
                                    <div className="text-big">
                                        <h3 className="font-secondary text-bold">{item.title}</h3>
                                    </div>
                                </button>
                            </div>
                            <div className="item-list__box-content --no-padding">
                                <div
                                    className="item-list__box-body accordion__content"
                                    style={{
                                        display: 'grid',
                                        gridTemplateRows: activeIndex === index ? '1fr' : '0fr',
                                        opacity: activeIndex === index ? 1 : 0,
                                        transition: 'grid-template-rows 0.3s ease-out, opacity 0.3s ease-out'
                                    }}
                                >
                                    <div style={{ overflow: 'hidden' }}>
                                        <div className="item-list__box-body-wrap accordion__content-wrap text-small pt-5">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
