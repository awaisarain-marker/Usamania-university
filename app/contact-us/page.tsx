'use client';

import { useState, useEffect } from 'react';
import PageHero from '@/components/layout/PageHero';
import { getContactPageContent } from '@/sanity/lib/queries';

// Default data as fallback
const defaultData = {
    heroTitle: 'Contact Us',
    heroSubtitle: 'Get in touch with UIT University',
    heroBgImage: 'https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg',
    address: 'ST-13, Abul Hasan Isphahani Road, Block 7, Gulshan-e-Iqbal (Opposite Safari Park) Karachi 75300.',
    uanNumber: '(92-21) 111-978-275, 34994305, 34978274-5',
    admissionsNumber: '0333-0399113',
    email: 'info@uitu.edu.pk',
    formTitle: 'Feedback',
    formSubmitText: 'Submit',
    formSuccessMessage: 'Thank you for your feedback! We have received your message and will get back to you soon.',
};

export default function ContactUs() {
    const [pageData, setPageData] = useState(defaultData);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getContactPageContent();
                if (data) {
                    setPageData({
                        ...defaultData,
                        ...Object.fromEntries(
                            Object.entries(data).filter(([, value]) => value !== null && value !== undefined)
                        )
                    });
                }
            } catch (error) {
                console.error('Error fetching contact page:', error);
            }
        }
        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    const successMessageParts = pageData.formSuccessMessage.split('!');
    const boldSuccessMessage = successMessageParts[0] + '!';
    const regularSuccessMessage = successMessageParts.slice(1).join('!').trim();

    return (
        <main>
            <PageHero
                title={pageData.heroTitle}
                subtitle={pageData.heroSubtitle}
                bgImage={pageData.heroBgImage}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact Us' }
                ]}
            />

            <section className="py-16 bg-[#e6eef4]">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        {/* Contact Information */}
                        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                            <div className="section-title mb-8">
                                <h2>Get In Touch</h2>
                            </div>

                            {/* Address */}
                            <div className="mb-8">
                                <h3 className="text-[#002856] text-xl font-bold mb-3">Address</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {pageData.address}
                                </p>
                            </div>

                            {/* Contact Number */}
                            <div className="mb-8">
                                <h3 className="text-[#002856] text-xl font-bold mb-3">Contact Number</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>UAN:</strong>{' '}
                                    <a href="tel:+922111978275" className="animated-link text-[#005092] font-bold">(92-21) 111-978-275</a>,{' '}
                                    <a href="tel:+922134994305" className="animated-link text-[#005092] font-bold">34994305</a>,{' '}
                                    <a href="tel:+922134978274" className="animated-link text-[#005092] font-bold">34978274-5</a>
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-2">
                                    <strong>Admissions:</strong>{' '}
                                    <a href="tel:+923330399113" className="animated-link text-[#005092] font-bold">0333-0399113</a>
                                </p>
                            </div>

                            {/* Email */}
                            <div className="mb-8">
                                <h3 className="text-[#002856] text-xl font-bold mb-3">Email</h3>
                                <p className="text-gray-700">
                                    <a href="mailto:info@uitu.edu.pk" className="animated-link text-[#005092] font-bold">info@uitu.edu.pk</a>
                                </p>
                            </div>

                            {/* Google Map */}
                            <div className="mt-8">
                                <h3 className="text-[#002856] text-xl font-bold mb-4">Location</h3>
                                <div className="w-full h-[300px] bg-gray-200 overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8901234567!2d67.10525699999999!3d24.93303599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzU5LjAiTiA2N8KwMDYnMTkuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="UIT University Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="bg-white p-8 shadow-lg">
                                <div className="section-title mb-8">
                                    <h2>{pageData.formTitle}</h2>
                                </div>

                                {submitted ? (
                                    <div className="p-6 bg-green-50 border border-green-200 text-green-700">
                                        <p className="font-bold mb-2">{boldSuccessMessage}</p>
                                        <p>{regularSuccessMessage}</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-wrap -mx-2">
                                            {/* First Name */}
                                            <div className="w-full md:w-1/2 px-2 mb-6">
                                                <label htmlFor="firstName" className="block text-[#002856] font-bold mb-2">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#005092] focus:outline-none transition-colors"
                                                />
                                            </div>

                                            {/* Last Name */}
                                            <div className="w-full md:w-1/2 px-2 mb-6">
                                                <label htmlFor="lastName" className="block text-[#002856] font-bold mb-2">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#005092] focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="mb-6">
                                            <label htmlFor="email" className="block text-[#002856] font-bold mb-2">
                                                Your email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-[#005092] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="mb-6">
                                            <label htmlFor="phone" className="block text-[#002856] font-bold mb-2">
                                                Contact Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="eg: 0300-1234567"
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-[#005092] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div className="mb-6">
                                            <label htmlFor="subject" className="block text-[#002856] font-bold mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-[#005092] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-[#002856] font-bold mb-2">
                                                Your Feedback
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Please type here"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:border-[#005092] focus:outline-none transition-colors resize-vertical"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-secondary --red --border --arrow"
                                        >
                                            <span>{isSubmitting ? 'Submitting...' : pageData.formSubmitText}</span>
                                            <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                                <use href="#arrow"></use>
                                            </svg>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
