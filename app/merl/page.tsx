
import PageHero from '@/components/layout/PageHero';
import MerlIntroSection from '@/components/home/MerlIntroSection';
import LeadershipSection from '@/components/layout/LeadershipSection';
import Carousel from '@/components/ui/Carousel';
import MerlEventsSection from '@/components/home/MerlEventsSection';
import MerlResearchProjects from "@/components/home/MerlResearchProjects";

export default function MerlPage() {
    return (
        <main>
            <PageHero
                title="Micro Electronics Research Lab (MERL)"
                subtitle="Fostering innovation in chip design education"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'MERL' }
                ]}
            />

            <MerlIntroSection />

            <LeadershipSection
                hideHeader
                customBottomSection={<MerlEventsSection />}
                customTabs={[
                    {
                        id: 'Introduction',
                        label: 'Introduction',
                        content: (
                            <div className="accordion-section__head">
                                <div className="accordion-section__head-text -light-bg" style={{ width: '100%', maxWidth: '100%', marginTop: '0px', paddingTop: '0px' }}>
                                    <div className="accordion-section__head-text-wrap">
                                        <div className="section-title">
                                            <h2>Introduction</h2>
                                        </div>
                                        <div className="space-y-6 text-gray-700">
                                            <div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">Welcome!</h3>
                                                <p>
                                                    MERL-UITU stands at the forefront of chip design education, fostering a dynamic environment where innovation converges with academic excellence. Recognizing the transformative power of chip technology, we have partnered with UIT to empower the next generation of engineers.
                                                </p>
                                                <p className="mt-4">
                                                    Following the groundbreaking memorandum of understanding signed in December 2018, MERL-UITU has become a pioneer in open-source chip design education across Pakistan. This initiative extends to undergraduate students, providing them with a pathway to success in this ever-evolving field.
                                                </p>
                                                <p className="mt-4">
                                                    Our globally recognized curriculum, meticulously crafted by renowned academic leaders, leverages best-in-class resources. This ensures students acquire the most cutting-edge chip design techniques, equipping them with the skills to become future leaders in the industry.
                                                </p>
                                                <p className="mt-4">
                                                    More than just education, MERL-UITU offers an enriching journey of discovery and innovation. Here, you’ll unlock the limitless possibilities of chip design and become a key player in shaping the future of technology.
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">Background</h3>
                                                <p>
                                                    There is an ongoing revolution in designing Computer Chips utilizing open source RISC-V ISA and EDA tools, which continues to gain momentum. UIT MERL recognized this early on and encashed on this initiative by signing an MOU in December 2018 with Adinwest, Arizona, to teach open source Chip Designing to students in Pakistan including undergraduates. There is a huge market for this, which is expected to grow to $ one trillion by 2030.
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">What We Offer</h3>
                                                <p>
                                                    Globally accepted proven pathways for learning Chip Design for Pakistan’s students, both from Electrical Engineering and Computer Science programs.
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">Open-Source Education</h3>
                                                <p>
                                                    At UIT University’s Micro Electronics Research Lab (MERL), we are dedicated to developing coursework that equips students with the skills needed to thrive in large open-source software communities. Our summer program offers intensive courses where students gain hands-on experience and benefit from exceptional mentorship opportunities provided by both academic experts and industry leaders. These experiences often lead our students to become prominent open-source contributors. In addition, MERL organizes guest lectures on open-source topics and hosts an annual workshop series dedicated to open-source software.
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">Our Strength</h3>
                                                <p>
                                                    Our academic leadership has created a system, which leverages best in class sources for learning state of the art Chip Designing techniques. Our track record of imparting Chip Designing has been Steller and globally lauded.
                                                </p>
                                                <p className="mt-4">
                                                    Our team has worked with licensed Cadence software and open source tools and have the ability to effectively utilize these tools.
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">Achievements</h3>
                                                <p>
                                                    MERL-UITU is the only Organization from Pakistan, which is hosting Google Summer of Code and Linux Foundation Mentorship program (LFX). Our mentors have successfully mentored mentees from Egypt, India, USA and Pakistan voluntarily.
                                                </p>
                                                <p className="mt-4">
                                                    The first completely open-source Microprocessor Chips taped out from Pakistan called “Ibtida” and “Ghazi” were made by UITU MERL students in 2021 and the inauguration ceremony was held on March 5, 2022, which was attended by the President of Pakistan, Mr. Arif Alvi. These chips were funded by Google.
                                                </p>
                                                <p className="mt-4">
                                                    Since then our students have done 9 Tape Outs, all were designed by our undergraduate students.
                                                </p>
                                                <p className="mt-4">
                                                    Around 30 global scholarships have been awarded to the undergraduate students of UITU MERL by Google Summer of Code and Linux Foundation. These student were paid $ 3,000 and $ 1,500 per scholarship for contributing to the international projects of different open-source organizations worldwide.
                                                </p>
                                                <p className="mt-4">
                                                    Some of our students are doing freelance online jobs earning $30 per hour.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'Google Summer of Code',
                        label: 'Google Summer of Code',
                        content: (
                            <div className="accordion-section__head">
                                <div className="accordion-section__head-text -light-bg" style={{ width: '100%', maxWidth: '100%', marginTop: '0px', paddingTop: '0px' }}>
                                    <div className="accordion-section__head-text-wrap">
                                        <div className="section-title">
                                            <h2>Google Summer of Code</h2>
                                        </div>
                                        <div className="space-y-6 text-gray-700">
                                            <div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">
                                                    Join Our Fundamentals of Chip Designing Course In Summer Followed by Training at Our MERL Lab.
                                                </h3>
                                                <p>
                                                    MERL-UITU is the member of international foundations like RISC-V Foundation, OSFPGA Foundation, Chips Alliances, Linux Foundation, Google Summer of Code and Edge Impulse training program.
                                                </p>
                                                <p className="mt-4">
                                                    We have a working relationship with PLCT lab in China, UCROSS – USA, TSMC ( as collaboration for PDK access), ARM Developer program, FOSSI Foundation, Cadence (EDA tool provider), Efabless and Skywater Technologies.
                                                </p>
                                            </div>

                                            <div>
                                                <div className="mt-8 mb-8">
                                                    <Carousel items={[
                                                        { id: '1', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC1.jpg' },
                                                        { id: '2', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC2.jpg' },
                                                        { id: '3', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC3.jpg' },
                                                        { id: '4', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC4.jpg' },
                                                        { id: '5', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC5.jpg' },
                                                        { id: '6', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC8.jpg' },
                                                        { id: '7', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC7.jpg' },
                                                        { id: '8', image: 'https://uitu.edu.pk/wp-content/uploads/2024/09/GSOC6.jpg' },
                                                        { id: '9', image: 'https://uitu.edu.pk/wp-content/uploads/2024/10/GSOC22_5.png' },
                                                        { id: '10', image: 'https://uitu.edu.pk/wp-content/uploads/2024/10/GSOC22_4.png' },
                                                        { id: '11', image: 'https://uitu.edu.pk/wp-content/uploads/2024/10/GSOC22_3.png' },
                                                        { id: '12', image: 'https://uitu.edu.pk/wp-content/uploads/2024/10/GSOC22_2.png' },
                                                        { id: '13', image: 'https://uitu.edu.pk/wp-content/uploads/2024/10/GSOC22_1.png' },
                                                    ]} />
                                                </div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">
                                                    Pakistan’s Only Organization Selected as a Mentor Organization in Google Summer of Code
                                                </h3>
                                                <p>
                                                    We're thrilled to announce that four outstanding undergraduate students from the Micro Electronics Research Lab (MERL) at UIT University have been selected for the prestigious Google Summer of Code (GSoC) 2024, 2023 and 2022! A huge congratulations to Muddassir Ali, Syed Hassan Ul Haq, Hamna Mohiuddin, and Muhammad Latif for their remarkable achievement. GSoC is a highly competitive global program that offers students the opportunity to contribute to open-source projects under the guidance of top developers, and being selected is a testament to the talent and hard work of these exceptional students.
                                                </p>
                                                <p className="mt-4">
                                                    This achievement is not only a personal milestone for Muddassir, Syed, Hamna, and Muhammad, but also a significant accomplishment for MERL. The lab has always been committed to nurturing the brightest minds in Pakistan, offering students cutting-edge research opportunities and hands-on experience in microelectronics and related fields. MERL’s ongoing mission to promote technological innovation and develop homegrown talent continues to bear fruit as these students prepare to represent both UIT University and Pakistan on a global stage. Their participation in GSoC underscores the increasing visibility of Pakistani talent in international technology arenas.
                                                </p>
                                                <p className="mt-4">
                                                    The Google Summer of Code program provides an incredible platform for students to work on real-world open-source projects, collaborate with experienced mentors, and make meaningful contributions to the tech community. Muddassir, Syed, Hamna, Muhammad, Abdul, Qurrat ul Ain, Mahnoor, Shahzaib, Miss Rameen Anwar, Kinza Qamar Zaman, Nameer Iqbal Ansari, Nimra Khan, and Talha Ahmed. will now have the chance to hone their skills, expand their professional networks, and engage with developers from across the globe. Their involvement in this prestigious initiative not only enriches their academic and professional experiences but also positions them as future leaders in technology, driving innovation and change.
                                                </p>
                                                <p className="mt-4">
                                                    As these four brilliant individuals embark on their GSoC journey, we wish them the best of luck. We are confident that they will make valuable contributions to their respective projects and continue to make both MERL and Pakistan proud. Their success is a source of inspiration for the entire student body, reminding us all of the incredible potential within our community.
                                                </p>
                                            </div>

                                            <div>
                                                <div className="mt-4 mb-8">
                                                    <Carousel items={[
                                                        { id: '6', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/achiev-2.png' },
                                                    ]} />
                                                </div>
                                                <h3 className="text-[36px] font-bold text-[#002856] leading-[1.2] tracking-[-0.5px] mb-[20px]">
                                                    MERL-UITU’s Team Lead Dr. Ali Ahmed invited to Pakistan Semiconductor Summit
                                                </h3>
                                                <p>
                                                    Dr. Ali Ahmed, Team lead MERL attended the Pakistan Semiconductor Summit, sponsored by GSME He was part of the Panel: Building the Talent Pool, He shared his experience of how he managed to create talent pool in Karachi thorough Micro Electronics Research Lab at UIT University.
                                                </p>
                                                <p className="mt-4">
                                                    In Karachi, specifically two companies are doing really well Xcelerium, led by Raheel Khan and DreamBig Semiconductor Inc. led by Sohail Syed both have their presence in Karachi. Both are housed at NED University of Engineering and Technology and MERL alumnus are active part of both startups. He further stated that he is fortunate enough to have worked with both founders, for talent pool building, they are committed to excellence. He also mentioned Dr Arsalan, Semiconductor veteran at Habib University who is also doing great work in semiconductors.
                                                </p>
                                                <p className="mt-4">
                                                    He mentioned the role of Dr. Syed Roomi Naqvi, who is the director of MERL and really helped us in running the show through his leadership. He also mentioned the name of Engr Farhan Ahmed Karim, who led the team at MERL-UIT with him, without teamwork it is not possible to create an impact.
                                                </p>
                                                <p className="mt-4">
                                                    He further said that Internationally, our students who graduated from Micro Electronics Research Lab at UIT University are working full time at Imagination Technologies, onsemi, Semidynamics, Intensivate and Barcelona Supercomputing Center. Few are doing fully funded PhD. at University of California, Santa Cruz, University of Arkansas, Sungkyunkwan University.
                                                </p>
                                                <p className="mt-4">
                                                    He emphasized that a total 24 paid international scholarships had been won by our undergraduate students, this include Google Summer of Code and The Linux Foundation mentorship programs. MERL is also the host organization for Google Summer of Code and The Linux Foundation program for the last three years.
                                                </p>
                                                <p className="mt-4">
                                                    Dr. Ali Ahmed thanked all semiconductor fraternity working in Pakistan, they are doing great work, may Allah bless them.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'Merl Alumni Success',
                        label: 'Merl Alumni Success',
                        content: (
                            <div>
                                <div className="mt-8 mb-8">
                                    <Carousel items={[
                                        { id: '1', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0003-1-scaled.jpg' },
                                        { id: '2', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0004-1-scaled.jpg' },
                                        { id: '3', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0005-1-scaled.jpg' },
                                        { id: '4', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0006-1-scaled.jpg' },
                                        { id: '5', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0007-1-scaled.jpg' },
                                        { id: '6', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0008-1-scaled.jpg' },
                                        { id: '7', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0009-1-scaled.jpg' },
                                        { id: '8', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0010-1-scaled.jpg' },
                                        { id: '9', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0011-1-scaled.jpg' },
                                        { id: '10', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0012-1-scaled.jpg' },
                                        { id: '11', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0013-1-scaled.jpg' },
                                        { id: '12', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0014-1-scaled.jpg' },
                                        { id: '13', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0015-1-scaled.jpg' },
                                        { id: '14', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0016-1-scaled.jpg' },
                                        { id: '15', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0017-1-scaled.jpg' },
                                        { id: '16', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0018-1-scaled.jpg' },
                                        { id: '17', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0019-1-scaled.jpg' },
                                    ]} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#002856] mb-2 tracking-wide">
                                    Job Opportunities Secured By MERL UIT Students
                                </h3>
                                <p>
                                    At MERL-UITU, we pride ourselves on fostering an environment that equips graduates to excel in both local and international arenas. Our alumni’s success is a testament to the robust academic foundation and hands-on experience they gain here, positioning them to secure coveted roles in prestigious organizations. Internationally, our graduates are at the forefront of technological innovation, working with industry giants such as Imagination Technologies, onsemi, Semidynamics, Intensivate, and the Barcelona Supercomputing Center. These institutions recognize the talent and expertise nurtured at MERL-UITU, and our alumni continue to push boundaries, contributing to groundbreaking developments in fields like semiconductor design, high-performance computing, and next-generation technologies.
                                </p>
                                <p className="mt-4">
                                    Closer to home, MERL-UITU graduates are not just finding employment—they are leading innovation. At Xcelerium and DreamBig Semiconductor Inc., both based at NED University, our alumni are shaping the future of Pakistan's tech landscape. These companies are driving advancements in semiconductor technology and are pivotal players in the nation’s rapidly growing tech sector. The success of our graduates, both locally and globally, reflects the strength of MERL-UITU’s curriculum and the strong ties we maintain with industry leaders. With every new achievement, our alumni continue to solidify MERL-UITU’s reputation as a hub for technological excellence and innovation, opening doors for future generations of graduates.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: 'Scholarships',
                        label: 'Scholarships',
                        content: (
                            <div>
                                <div className="mt-8 mb-8">
                                    <Carousel items={[
                                        { id: '1', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0021-1-scaled.jpg' },
                                        { id: '2', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0022-1-scaled.jpg' },
                                        { id: '3', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0023-1-scaled.jpg' },
                                        { id: '4', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0024-1-scaled.jpg' },
                                    ]} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#002856] mb-2 tracking-wide">
                                    Fully-Funded International Masters & PhD Scholarships
                                </h3>
                                <p>
                                    At MERL-UITU, our students continue to set remarkable standards of academic excellence, securing fully funded international scholarships for prestigious master's and PhD programs. These scholarships are a testament to their hard work, dedication, and the comprehensive education they receive at UITU. Our students have earned places at some of the world’s most renowned institutions, including the University of California, Santa Cruz, the University of Arkansas, and Sungkyunkwan University. These fully funded scholarships not only highlight their academic prowess but also open doors for them to contribute to groundbreaking research and global knowledge exchange.
                                </p>
                                <p className="mt-4">
                                    We take immense pride in the success stories of our graduates as they transition from MERL-UITU to influential roles within the international academic and research community. Their achievements reflect the strength of our programs and the supportive environment we cultivate for academic exploration and innovation. As they embark on these exciting opportunities, they carry the MERL-UITU legacy with them, contributing to global research initiatives and making meaningful impacts in their fields. Their success further cements our reputation as a leading institution in fostering academic talent and producing world-class researchers.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: 'Mentorships',
                        label: 'Mentorships',
                        content: (
                            <div>
                                <div className="mt-8 mb-8">
                                    <Carousel items={[
                                        { id: '1', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/ment-gsoc-4-768x1024.png' },
                                        { id: '2', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/ment-gsoc-1-768x1024.png' },
                                        { id: '3', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/ment-gsoc-2-768x1024.png' },
                                        { id: '4', image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/ment-gsoc-3-768x1024.png' },
                                    ]} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#002856] mb-2 tracking-wide">
                                    Google Summer of Code Contributors
                                </h3>
                                <p>
                                    Our MERL-UITU team lead, Dr. Ali Ahmed, was recently invited to the Pakistan Semiconductor Summit in Islamabad, sponsored by GSME and led by Farhat Jahangir. Dr. Ahmed participated in the panel on “Building the Talent Pool,” where he highlighted the success of MERL-UITU in nurturing talent in Karachi. He discussed how our graduates are actively contributing to leading companies like Xcelerium and DreamBig Semiconductor Inc., based at NED University. He also emphasized the role of Dr. Syed Roomi Naqvi’s leadership and Dr. Farhan Ahmed Karim’s teamwork in achieving our goals. Dr. Ahmed proudly shared that our graduates have secured prestigious positions at top international tech organizations and are pursuing fully funded PhDs at renowned universities. He also mentioned our significant achievements, including 24 paid international scholarships from Google Summer of Code and The Linux Foundation mentorship programs.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: 'LFX Mentorship Contributors',
                        label: 'LFX Mentorship Contributors',
                        content: (
                            <div className="accordion-section__head">
                                <div className="accordion-section__head-image">
                                    <img src="https://i.pinimg.com/1200x/36/d8/c3/36d8c358694ab8b5944595a9693b388a.jpg" alt="LFX Mentorship" style={{ width: '100%' }} />
                                </div>
                                <div className="accordion-section__head-text -light-bg">
                                    <div className="accordion-section__head-text-wrap">
                                        <div className="section-title">
                                            <h2>LFX Mentorship Contributors</h2>
                                        </div>
                                        <p>
                                            Several outstanding students have recently secured mentorship opportunities through the esteemed LFX Mentorships program. This remarkable achievement underscores the commitment to providing unparalleled opportunities for students’ growth and development. The LFX Mentorships program offers invaluable guidance and support from industry experts, empowering students to further hone their skills and expertise in their respective research field.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                ]}
            />


            {/* Tapeouts & Research Section */}
            <section className="py-16 bg-[#00224a] text-white">
                <div className="container">
                    <div>
                        <h2 className="font-serif text-[50px] leading-none mb-6">Tapeouts & Research</h2>
                        <div className="max-w-none">
                            <p className="mb-4 text-gray-300">
                                MERL-UITU proudly celebrates the groundbreaking accomplishments of its students, who have achieved a series of remarkable tapeouts, solidifying their place at the forefront of technological innovation in Pakistan. Among these achievements is the development of the country’s first Verilog-based microprocessor, a significant milestone in the nation’s technological history. Additionally, our students have designed and fabricated an innovative System on a Chip (SoC) for the Google-sponsored Open MPW shuttles. This SoC incorporates a 3-stage version of the Buraq Core RV32IMC, complete with essential features like IRQ, Multiply, Divide, and a compressed ISA—ideal for embedded applications. These projects, in collaboration with industry leaders like Efabless and SkyWater, represent a pivotal advancement in the field of RISC-V-based SoCs, laying the groundwork for future developments.
                            </p>
                            <p className="mb-4 text-gray-300">
                                Our students’ success extends beyond these singular projects, with other groundbreaking tapeouts including the CHISEL-based "Ibtida" chip, the Azadi SoC, and the SoC-Now, all of which showcase their ingenuity and technical prowess. These achievements not only demonstrate the high caliber of education at MERL-UITU but also underscore our students' ability to push the boundaries of microprocessor and SoC design. As we continue to foster innovation and creativity in our research labs, these projects serve as a testament to MERL-UITU’s commitment to producing cutting-edge technology and its contributions to the global RISC-V ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Projects Section */}
            <MerlResearchProjects />
        </main>
    );
}
