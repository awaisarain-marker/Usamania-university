'use client';

import React, { useState, useRef, useEffect } from 'react';

// Simplified ExpandableText component
interface ExpandableTextProps {
    children: React.ReactNode;
}

function ExpandableText({ children }: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('200px'); // Initial collapsed height

    useEffect(() => {
        if (expanded) {
            setHeight(`${contentRef.current?.scrollHeight}px`);
        } else {
            setHeight('200px');
        }
    }, [expanded]);

    const toggle = () => setExpanded(!expanded);

    return (
        <div className="jsExpandableText relative">
            <div
                ref={contentRef}
                style={{
                    maxHeight: height,
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease-in-out',
                }}
            >
                {children}
            </div>
            {!expanded && (
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
            <button
                className="btn-secondary --red --arrow --border mt-6 cursor-pointer"
                onClick={toggle}
            >
                <span>{expanded ? 'Read Less' : 'Read More'}</span>
                <svg
                    width="25"
                    height="25"
                    className="icon icon-arrow"
                    aria-hidden="true"
                    role="img"
                    style={{
                        transform: expanded ? 'rotate(-90deg)' : 'rotate(90deg)',
                        transition: 'transform 0.3s'
                    }}
                >
                    <use xlinkHref="#arrow"></use>
                </svg>
            </button>
        </div>
    );
}

export default function LibrarySection() {
    return (
        <div id="library" className="flexible --border">
            <div className="container">
                <div className="flexible__wrap --white">
                    <article className="flexible__content">
                        <section className="residence">
                            <div className="residence__wrap">
                                <div className="residence__content">
                                    {/* Heading */}
                                    <div className="section-title mb-6">
                                        <h2>Library</h2>
                                    </div>

                                    {/* Video Embed */}
                                    <div className="mb-8 aspect-w-16 aspect-h-9">
                                        <iframe
                                            width="100%"
                                            height="450"
                                            src="https://www.youtube.com/embed/Ia0S3XBXXAE"
                                            title="UIT University Library Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full rounded-none shadow-md"
                                        ></iframe>
                                    </div>

                                    {/* Content with Read More */}
                                    <ExpandableText>
                                        <div className="prose max-w-none text-gray-600">
                                            <p className="mb-4">
                                                UIT University Library and Learning Resource Center (LRC) offers the following services:
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Circulation Services / Lending</h3>
                                            <p className="mb-4">
                                                Under this service, books, serials (magazines, journals, newsletters, etc.), thesis dissertations, research papers, etc., are provided to the users.
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Book Bank</h3>
                                            <p className="mb-4">
                                                Students can get textbooks for the whole semester at 30% of the cost of the book price on a first-come-first-served basis from Book Bank.
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Library Collection</h3>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li><strong>General Collection:</strong> This collection comprises books related to different courses of academic programs.</li>
                                                <li><strong>Reference Collection:</strong> This collection comprises ready references such as Encyclopedias, Dictionaries, Directories, Thesaurus, Handbook, Almanac, Index, etc.</li>
                                                <li><strong>Institutional Repository:</strong> This section comprises institutional repository materials such as Project Reports, Lab Manuals, and UITU Magazines.</li>
                                                <li><strong>Audio/Visual Collection:</strong> This section maintains the records of audio and visual data of books.</li>
                                            </ul>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Personal Collection</h3>
                                            <p className="mb-4">This section is comprised of books in recognition of individual’s services to education and learning:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                                <li><strong>Usman Collection:</strong> Mohammad Usman was the eldest son of Haji Hasham, who died on 15-Feb-1973, in the recognition of whom the “Usman Memorial Foundation” and “Usman Institute of Technology” were established. This is the most precious collection of books on economics, politics and literature that were earlier in the personal use of the Late Mohammad Usman.</li>
                                                <li><strong>Dr Muhammad Waseem Collection:</strong> Dr Waseem served UIT as its Director for seven (7) years. This collection is comprised of books on Science donated by him.</li>
                                                <li><strong>Zubair bin Umer Sidique Collection:</strong> Mr Zubair served UIT in the different capacities in Senior Management Positions for thirteen (13) years. This collection is comprised of books on literature donated by him.</li>
                                                <li><strong>Gifted Collection of Faculty, Alumni and Students:</strong> This collection is comprised of books donated by the faculty, alumni and students of UIT and UITU.</li>
                                            </ul>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Periodicals & Journals</h3>
                                            <p className="mb-4">
                                                UITU Library acquires to more than 50 International & Local Journals, including IEEE and ACM, yearly for its users. The latest periodicals are available in the magazine display section for reference and the back issues are kept in the archive section in the form of the bound volume.
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Latest Arrivals</h3>
                                            <p className="mb-4">
                                                Under this service, library users are informed about the new / latest books, materials etc, and their editions. <br />
                                                <a href="http://library.uit.edu/" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold inline-block mt-1">Visit Library Website</a>
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">OPAC / Online Book Reservation</h3>
                                            <p className="mb-4">
                                                With this service, the user can reserve the appropriate books via: <a href="https://forms.gle/J6vRHBXvJbB5rHsB9" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">Online Reservation Form</a> for a duration of 24 hours.
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Inter Library Loan Services (ILLS)</h3>
                                            <p className="mb-4">
                                                Under this service, the library arranges those books and literary resources which are not available to us from other libraries through ILLS. Such arrangements are executed through an agreement or mutual understanding.
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Selective Dissemination of Information (SDI)</h3>
                                            <p className="mb-4">
                                                This is an “alerting service” by which academic departments can seek the Library’s assistance in getting information about the latest developments, books, magazines / journals, literature and other literary materials available locally and globally in the specified area of interest.
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Current Awareness Services (CAS)</h3>
                                            <p className="mb-4">
                                                Under this service, Library Current Awareness Service is the dissemination of information that will keep its users well-informed and up-to-date in their fields of primary interest and related subjects. The Current Awareness Service (CAS) helps the user by keeping him up-to-date and well-informed with the latest information on a particular field and the related field. It means what one should read, saving the reader time. It also serves as a rapid survey of retrospective literature.
                                            </p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-2 mt-6">Reference Service</h3>
                                            <p className="mb-4">This service has been provided to the library users who are looking for necessary assistance in the following:</p>
                                            <ul className="list-disc pl-5 mb-4 space-y-1">
                                                <li>Identifying and locating library materials</li>
                                                <li>Using the catalog</li>
                                                <li>Using computers to access information</li>
                                                <li>Using basic reference sources</li>
                                                <li>Providing physical details, web links, information about the literary materials, and general knowledge from where such materials can be accessed.</li>
                                            </ul>

                                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-[#002856] mb-4">Library Facility</h3>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        <li>Online Public Access Catalogue (OPAC)</li>
                                                        <li>Online Book Reservation</li>
                                                        <li>Wifi / Internet</li>
                                                        <li>Network Printing</li>
                                                        <li>Tutorial Room / Resource Centre</li>
                                                        <li>Camera Surveillance</li>
                                                        <li>Section of Personal Belongings</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-[#002856] mb-4">Library Hours</h3>
                                                    <p className="mb-2"><strong>Monday to Friday:</strong> 08:30 AM to 05:00 PM</p>
                                                    <p className="text-sm italic">The library will remain closed on Saturdays, Sundays and all Gazette / Public Holidays.</p>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-[#002856] mb-4 mt-8">General Rules & Regulations of the Library</h3>
                                            <p className="mb-4">It is expected from the library users to comply with following Rules and Regulations:</p>
                                            <ul className="list-disc pl-5 mb-8 space-y-2">
                                                <li><strong>Silence:</strong> The library is a place for learning with concentration, so 'Silence' is inevitable. All mobile phones, iPods, and other such devices should be kept on silent mode.</li>
                                                <li><strong>Dignity:</strong> Library is meant for acquiring knowledge. Therefore, listening music, watching drama and relaxing or sleeping and other such activities must be avoided.</li>
                                                <li><strong>Personal Belongingness:</strong> Library has limited space for self-study, therefore handbags, shoulder bags, briefcases and other such storage carrier are not allowed within the library premises.</li>
                                                <li><strong>Reservations:</strong> The blocking, holding and reserving seats are not allowed in the library.</li>
                                                <li><strong>Eatable Items:</strong> Library is exclusively for study and learning. Therefore, it is barred for all types of eating, drinking, and chewing.</li>
                                                <li><strong>Physical Resources:</strong> The library is equipped with expensive furniture, fixtures, equipment, books, etc, and it is the responsibility of the user to use it with extensive care.</li>
                                                <li><strong>Non-compliance:</strong> In case of disregarding any of the Rules and Regulations and otherwise causing a disturbance or affecting the Library's congenial environment then the user may immediately be asked to vacate the library premises.</li>
                                            </ul>

                                            <h3 className="text-xl font-bold text-[#002856] mb-4 mt-8">Contact us</h3>
                                            <p className="mb-1"><strong>Phone:</strong> +92 21 3499 4305, Ext: 3023</p>
                                            <p className="mb-1"><strong>Email:</strong> <a href="mailto:library@uitu.edu.pk" className="text-[#ed1c24] hover:underline">library@uitu.edu.pk</a>, <a href="mailto:librarian@uitu.edu.pk" className="text-[#ed1c24] hover:underline">librarian@uitu.edu.pk</a></p>
                                            <p className="mb-4"><strong>Address:</strong> ST-13, Block 7, Gulshan-e-Iqbal, Abul Hasan Isphahani Road, Off Main University Road, Karachi -75300, Pakistan.</p>
                                            <p className="mb-8"><strong>Map Location:</strong> <a href="https://goo.gl/maps/9T6SKps5C81sMv5dA" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">View on Google Maps</a></p>

                                            <h3 className="text-xl font-bold text-[#002856] mb-4 mt-8">Library Officials</h3>
                                            <p className="mb-4">We are welcome to our users query and feel happy to help them out in their studies, please feel free to contact us in the following way.</p>

                                            <div className="overflow-x-auto mb-10">
                                                <table className="w-full text-left border-collapse border border-gray-300 text-sm table-fixed">
                                                    <thead>
                                                        <tr className="bg-[#002856] text-white">
                                                            <th className="p-3 border border-gray-400 w-1/4">Name</th>
                                                            <th className="p-3 border border-gray-400 w-1/4">Designation</th>
                                                            <th className="p-3 border border-gray-400 w-1/4">Email</th>
                                                            <th className="p-3 border border-gray-400 w-1/4">Contact</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b border-gray-300 hover:bg-white bg-gray-50/50">
                                                            <td className="p-3 border border-gray-300 font-bold text-[#002856]">Nuzhat Farzana</td>
                                                            <td className="p-3 border border-gray-300">Librarian</td>
                                                            <td className="p-3 border border-gray-300"><a href="mailto:nfarzana@uitu.edu.pk" className="text-[#ed1c24] hover:underline">nfarzana@uitu.edu.pk</a></td>
                                                            <td className="p-3 border border-gray-300">+92 21 34994305, Ext. 3023</td>
                                                        </tr>
                                                        <tr className="border-b border-gray-300 hover:bg-white bg-white">
                                                            <td className="p-3 border border-gray-300 font-bold text-[#002856]">Saqib Ahmed</td>
                                                            <td className="p-3 border border-gray-300">Deputy Librarian</td>
                                                            <td className="p-3 border border-gray-300"><a href="mailto:saqahmed@uitu.edu.pk" className="text-[#ed1c24] hover:underline">saqahmed@uitu.edu.pk</a></td>
                                                            <td className="p-3 border border-gray-300">+92 21 34994305, Ext. 3027</td>
                                                        </tr>
                                                        <tr className="border-b border-gray-300 hover:bg-white bg-gray-50/50">
                                                            <td className="p-3 border border-gray-300 font-bold text-[#002856]">Ahson Raza</td>
                                                            <td className="p-3 border border-gray-300">Assistant Librarian</td>
                                                            <td className="p-3 border border-gray-300"><a href="mailto:araza@uitu.edu.pk" className="text-[#ed1c24] hover:underline">araza@uitu.edu.pk</a></td>
                                                            <td className="p-3 border border-gray-300">Ext. 3111</td>
                                                        </tr>
                                                        <tr className="border-b border-gray-300 hover:bg-white bg-white">
                                                            <td className="p-3 border border-gray-300 font-bold text-[#002856]">Yasir Ali</td>
                                                            <td className="p-3 border border-gray-300">Assistant Librarian</td>
                                                            <td className="p-3 border border-gray-300"><a href="mailto:yali@uitu.edu.pk" className="text-[#ed1c24] hover:underline">yali@uitu.edu.pk</a></td>
                                                            <td className="p-3 border border-gray-300">+92 21 34994305, Ext. 3083</td>
                                                        </tr>
                                                        <tr className="border-b border-gray-300 hover:bg-white bg-gray-50/50">
                                                            <td className="p-3 border border-gray-300 font-bold text-[#002856]">Siraj Saeed</td>
                                                            <td className="p-3 border border-gray-300">Assistant Librarian</td>
                                                            <td className="p-3 border border-gray-300"><a href="mailto:Ssaeed@uitu.edu.pk" className="text-[#ed1c24] hover:underline">Ssaeed@uitu.edu.pk</a></td>
                                                            <td className="p-3 border border-gray-300">Ext. 3027</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </ExpandableText>

                                    <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-200">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#002856] mb-6">E-Resources</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <a href="https://hecpk.summon.serialssolutions.com/" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        HEC Summon
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.digitallibrary.edu.pk/UITKhi.html" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        HEC Digital Library
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://dl.acm.org/" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        ACM Digital Library
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://el.sindhculture.gov.pk/" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        Free E-books
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://welib.org/" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        Free E-books PDF
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#002856] mb-6">Library Forms</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScaIxzXASVMWYnPR6tfLrP_p-UT8CmLPhKh3fIcIiJbOfinyA/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        Library Membership form
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWZWH8-FAk0v_7VAr482xDS7wdC81OGzvmzTpcvMal4JMylA/formResponse" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        Library Book Bank form
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSclEasCya2i6uJLuBgGCxMBSOJjadc9waykS8mlVVZesSBIBQ/viewform" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        Book Request Form
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd53nwLzpi-2GYMrfyD4tMfvNjiKyKlNBr3KAQBhsMMUPNzGQ/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer" className="animated-link text-[#ed1c24] font-bold">
                                                        E-books and E- Articles Form
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
}
