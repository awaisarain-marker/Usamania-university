'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TabData {
    id: string;
    label: string;
    content: React.ReactNode;
    rightImage: string;
    rightImages?: string[];
    rightQuote: string;
    rightQuoteAuthor: string;
}

const tabs: TabData[] = [
    {
        id: 'who-we-are',
        label: 'Who We Are',
        content: (
            <div>
                <div className="section-title">
                    <h2>Who We Are</h2>
                </div>
                <div className="text-bigger">
                    <p className="text-bold">A Beacon of Educational Excellence</p>
                </div>
                <div className="text-big">
                    <p>The UIT University (UITU) stands as a beacon of educational excellence, established under The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] by the Government of Sindh. Our charter was officially published in The Sindh Government Gazette on May 28, 2018.</p>
                    <p className="mt-4">Following comprehensive charter inspections by the Higher Education Commission (HEC), UITU received its No Objection Certificate (NOC), authorizing us to offer undergraduate programs across four distinguished departments.</p>
                </div>
            </div>
        ),
        rightImage: '/campus-hero.png', // Using the local image we generated
        rightQuote: 'The spirit of the UITU community is unlike anything else I had ever seen.',
        rightQuoteAuthor: 'Viktoria Ivanova (\'22)'
    },
    {
        id: 'governance',
        label: 'Governance',
        content: (
            <div>
                <div className="section-title">
                    <h2>Governance & Leadership</h2>
                </div>
                <div className="text-bigger">
                    <p className="text-bold">Guided by Distinguished Boards</p>
                </div>
                <div className="text-big">
                    <p>Our institution is proudly managed by the Usman Memorial Foundation (UMF), a philanthropic organization established in 1973 in memory of Late Mohammad Usman. The foundation's unwavering commitment to providing quality education drives our mission.</p>
                    <p className="mt-4">Our university is guided by distinguished boards and councils that ensure academic excellence and strategic direction.</p>
                </div>
                <div className="btn-wrap mt-6">
                    <a href="#" className="btn-secondary --red --border --arrow">
                        <span>Leadership Team</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                    </a>
                </div>
            </div>
        ),
        rightImage: 'https://www.aubg.edu/wp-content/uploads/2022/09/Diversity-International-Week.jpg', // Placeholder external
        rightQuote: 'UITU boasts an environment similar to a small globe.',
        rightQuoteAuthor: 'Sieun Lim \'16'
    },
    {
        id: 'mission',
        label: 'Mission',
        content: (
            <div>
                <div className="section-title">
                    <h2>Our Mission</h2>
                </div>
                <div className="text-bigger">
                    <p className="text-bold">Transformative Education</p>
                </div>
                <div className="text-big">
                    <p>To provide transformative education that meets international standards, promote cutting-edge research and innovation, and contribute meaningfully to Pakistan's socio-economic development. We are committed to producing skilled professionals, ethical leaders, and responsible global citizens.</p>
                </div>
            </div>
        ),
        rightImage: 'https://www.aubg.edu/wp-content/uploads/2022/09/AUBG-Entrance.jpg', // Placeholder external
        rightQuote: 'An institution that takes great pride in its mission and in the character of the young people it educates.',
        rightQuoteAuthor: 'H. E. Mr. Martti Ahtisaari'
    },
    {
        id: 'vision',
        label: 'Vision',
        content: (
            <div>
                <div className="section-title">
                    <h2>Our Vision</h2>
                </div>
                <div className="text-bigger">
                    <p className="text-bold">Global Recognition</p>
                </div>
                <div className="text-big">
                    <p>To emerge as a globally recognized center of excellence in higher education, fostering innovation, creativity, and critical thinking. We aspire to nurture future leaders who will drive technological advancement, social progress, and economic development.</p>
                </div>
                <div className="btn-wrap mt-6">
                    <a href="#" className="btn-secondary --red --border --arrow">
                        <span>Strategic Plan</span>
                        <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img"><use href="#arrow"></use></svg>
                    </a>
                </div>
            </div>
        ),
        rightImage: 'https://www.aubg.edu/wp-content/uploads/2022/09/AUBG-Campus-Alley.jpg', // Placeholder external
        rightQuote: 'UITU will provide students with a compelling mix of curricular and co-curricular experiences.',
        rightQuoteAuthor: 'Strategic Vision 2025'
    }
];

interface TabAccordionProps {
    customTabs?: TabData[];
}

export default function TabAccordion({ customTabs }: TabAccordionProps) {
    const [activeTab, setActiveTab] = useState(0);
    const displayTabs = customTabs || tabs;

    return (
        <section className="tab-accordion jsWhyAubg">
            <div className="container">
                <div className="tab-accordion__wrap row">
                    <div className="custom-accordion-tabs nav-tabs col-6 tabs-allowed">
                        <ul role="tablist" className="custom-accordion-tabs__list tabs-tab-list row">
                            {displayTabs.map((tab, index) => (
                                <li key={tab.id} role="presentation" className="custom-accordion-tabs__item jsTabItem">
                                    <button
                                        role="tab"
                                        aria-selected={activeTab === index}
                                        className={`custom-accordion-tabs__link tabs-trigger js-tabs-trigger ${activeTab === index ? 'is-selected' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {displayTabs.map((tab, index) => (
                            <section
                                key={tab.id}
                                role="tabpanel"
                                className={`tabs-panel js-tabs-panel jsTabSection ${activeTab === index ? 'is-open' : ''}`}
                            >
                                <div className="content custom-accordion-tabs__wrap">
                                    {tab.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="testimonial-box col-6">
                        <div className="testimonial-box__image">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                loop={true}
                                className="h-full w-full"
                            >
                                {(displayTabs[activeTab].rightImages || [displayTabs[activeTab].rightImage]).map((imgSrc, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            className="image lazy loaded w-full h-full object-cover"
                                            alt={displayTabs[activeTab].label}
                                            src={imgSrc}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="testimonial-box__quote --ribbon --shadow">
                            <svg width="25" height="25" className="icon icon-quote" aria-hidden="true" role="img">
                                <use href="#quote"></use>
                            </svg>
                            <div className="text-small">
                                <p className="text-bold text-white">
                                    {displayTabs[activeTab].rightQuote}
                                </p>
                            </div>
                            <div className="text-small">
                                <p className="text-white">
                                    {displayTabs[activeTab].rightQuoteAuthor}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
