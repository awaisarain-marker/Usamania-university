'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import LeadershipSection from '@/components/layout/LeadershipSection';
import StickyNav from '@/components/tenders/StickyNav';

interface TenderDocument {
    label: string;
    url: string;
    type?: 'pdf' | 'image' | 'excel' | 'link';
}

interface TenderItem {
    title: string;
    content?: React.ReactNode;
    documents?: TenderDocument[];
}

// Helper component for Accordion Items
function TenderAccordion({ items, isClosed = false }: { items: TenderItem[], isClosed?: boolean }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className={`border-b border-gray-200 last:border-0 transition-all duration-300 ${isOpen ? 'bg-[#e6eef4] rounded-lg border border-gray-200 mb-4' : 'hover:bg-[#e6eef4]'}`}
                    >
                        {/* Header / Trigger */}
                        <div
                            className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 cursor-pointer ${isClosed ? 'opacity-80' : ''}`}
                            onClick={() => toggle(index)}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`flex-shrink-0 ${isClosed ? 'text-gray-400' : 'text-[#ed1c24]'} transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                                    {isClosed ? (
                                        <svg width="24" height="24" className="icon" aria-hidden="true" role="img" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" className="icon" aria-hidden="true" role="img">
                                            <use xlinkHref="#arrow-top-right"></use>
                                        </svg>
                                    )}
                                </div>
                                <span className={`font-semibold text-lg ${isClosed ? 'text-gray-600' : 'text-[#002856]'}`}>
                                    {item.title}
                                </span>
                            </div>
                            <div className="flex items-center gap-6 mt-2 md:mt-0">
                                {isClosed ? (
                                    <span className="text-gray-500 font-medium text-sm border border-gray-300 px-3 py-1 rounded-full">
                                        Closed
                                    </span>
                                ) : (
                                    <span className="text-[#ed1c24] font-medium flex items-center gap-2 text-base">
                                        <span>{isOpen ? 'Hide Details' : 'View Details'}</span>
                                        <svg
                                            width="14"
                                            height="14"
                                            className={`icon transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
                                            aria-hidden="true"
                                            role="img"
                                        >
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Expandable Content */}
                        <div
                            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                                <div className="grid md:grid-cols-1 gap-6">
                                    <div className="prose max-w-none text-sm text-[#002856]">
                                        {item.content || (
                                            <p>Details for <strong>{item.title}</strong> will be available shortly.</p>
                                        )}
                                    </div>

                                    {item.documents && item.documents.length > 0 && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <h4 className="font-bold text-[#002856] leading-tight mb-3">Documents & Downloads</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {item.documents.map((doc, i) => (
                                                    <a
                                                        key={i}
                                                        href={doc.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded hover:bg-[#e6eef4] hover:border-[#ed1c24] hover:text-[#ed1c24] transition-colors text-sm font-medium text-gray-700"
                                                    >
                                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                                        {doc.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function TendersPage() {
    return (
        <div className="page-tenders">
            <PageHero
                title="Tenders"
                subtitle="Procurement opportunities and notifications"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Tenders' }
                ]}
            >
                <div className="hero__cta-list">
                    <a href="#Open-Tenders" className="btn-secondary --red --border --arrow">
                        <span>Open Tenders</span>
                        <svg width="25" height="25" className="icon icon-arrow " aria-hidden="true" role="img"><use xlinkHref="#arrow"></use></svg>
                    </a>

                    <a href="#Closed-Tenders" className="btn-link --white">
                        <span>Closed Tenders</span>
                        <svg width="25" height="25" className="icon icon-arrow-top-right " aria-hidden="true" role="img"><use xlinkHref="#arrow-top-right"></use></svg>
                    </a>
                </div>
            </PageHero>

            <StickyNav />

            {/* Main Content Area using LeadershipSection for Tabs */}
            <div id="leadership-section">
                <LeadershipSection
                    hideHeader
                    customBottomSection={<></>}
                    customTabs={[
                        {
                            id: 'Open-Tenders',
                            label: 'Open Tenders',
                            content: (
                                <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                    <div className="qec-vision-content-wrap">
                                        <div className="section-title">
                                            <h2>Open Tenders</h2>
                                        </div>
                                        <TenderAccordion
                                            items={[
                                                {
                                                    title: "Renovation of UIT University Auditorium",
                                                    content: (
                                                        <div className="space-y-4">
                                                            <h3 className="font-bold leading-tight mb-4">Tender / Request for Proposal (RFP) for Renovation of UIT University Auditorium</h3>
                                                            <div>
                                                                <h4 className="font-bold leading-tight mb-2">Introduction</h4>
                                                                <p className="mb-3">At UIT University, Auditorium plays a pivotal role in the academic life at the campus. It promotes cultural and administrative life within the campus. It serves not just as a physical structure, but as a symbolic and functional centerpiece of campus life. As most of the events are held in the Auditorium, it also reflects the image of the University.</p>
                                                                <p className="mb-3">Originally constructed between 1996 and 1999, the Auditorium is now over 26 years old, and most of its core components – structural, electrical, and mechanical – have aged significantly, with only patchwork renovations carried out over the years. Several critical issues now demand urgent attention, including:</p>
                                                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                                                    <li>Structural degradation of the concrete floor and iron frame anchoring, posing safety risks;</li>
                                                                    <li>Termite damage and lifespan expiry of wooden wall panels;</li>
                                                                    <li>Obsolete, bulky seating with space inefficiency and poor ergonomics;</li>
                                                                    <li>Inefficient cooling systems due to aging cassette units and compromised ducting;</li>
                                                                    <li>Inadequate sound and multimedia infrastructure, previously replaced with ad hoc external solutions.</li>
                                                                </ul>
                                                                <p className="mb-3">In view of these pressing needs, the University has decided to initiate the renovation of the Auditorium through a planned, professional, and design-focused approach. To ensure quality and longevity, the following industry-renowned consultants have been engaged:</p>

                                                                <div className="my-4 bg-[#e6eef4] p-4 rounded border-l-4 border-[#ed1c24]">
                                                                    <div className="mb-2">
                                                                        <strong>Architectural Design Consultant:</strong><br />
                                                                        M/s Najmi Bilgram Collaborative Limited, known for its excellence in institutional design and adaptive renovation of education facilities.
                                                                    </div>
                                                                    <div>
                                                                        <strong>MEP (Mechanical, Electrical &amp; Plumbing) Consultant:</strong><br />
                                                                        M/s Excellent Associates, with strong expertise in engineering systems tailored to academic environments has been shortlisted and started working with the Architect.
                                                                    </div>
                                                                </div>

                                                                <p className="mb-3">This initiative reflects the University’s philosophy of “small but qualitative steps” and serves as a cornerstone for broader campus development in the future. The revitalized Auditorium will not only enhance functionality and safety but also symbolize the University’s commitment to modern, student-centric learning spaces.</p>
                                                                <p className="mb-3">By investing in this renovation, UIT University reinforces its dedication to academic excellence, student experience, and institutional growth—one meaningful step at a time.</p>
                                                                <p>The auditorium is not merely a large hall – it is a critical educational and cultural asset. It enhances the vibrancy, visibility, and versatility of university life and is vital to institutional development, student growth, and stakeholder engagement. Investing in its modernization ensures that it continues to serve these roles effectively in a fast-evolving educational landscape.</p>
                                                            </div>
                                                        </div>
                                                    ),
                                                    documents: [
                                                        { label: "Tender Document (PDF)", url: "https://uitu.edu.pk/wp-content/uploads/2025/07/Tender-Auditorium-Renovation-ID-MEP.pdf" }
                                                    ]
                                                },
                                                {
                                                    title: "Supply of Computer Equipment (PC CL-4)",
                                                    content: (
                                                        <div>
                                                            <h3 className="font-bold leading-tight mb-4">REQUEST FOR PROPOSAL: Supply of Computer Equipment - PC CL4</h3>
                                                            {/* If description text was provided it would go here, currently just title provided */}
                                                        </div>
                                                    ),
                                                    documents: [
                                                        { label: "Advertisement (Image)", url: "https://uitu.edu.pk/wp-content/uploads/2025/01/ad.png" },
                                                        { label: "Tender Document (PDF)", url: "https://uitu.edu.pk/wp-content/uploads/2025/01/Tender-Document-PC-CL4.pdf" }
                                                    ]
                                                },
                                                {
                                                    title: "Construction / Renovation of Cafeteria",
                                                    content: (
                                                        <div>
                                                            <h3 className="font-bold leading-tight mb-4">REQUEST FOR PROPOSAL: Document for Construction / Renovation of Cafeteria</h3>
                                                        </div>
                                                    ),
                                                    documents: [
                                                        { label: "Tender Advertisement", url: "https://uitu.edu.pk/wp-content/uploads/2024/09/Tender-Adv-v1-1.png" },
                                                        { label: "Tender Document (PDF)", url: "https://uitu.edu.pk/wp-content/uploads/2024/09/Tender-Document-Cafeteria-Renovation-with-BOQ-v3.pdf" },
                                                        { label: "Financial Proposal (XLSX)", url: "https://uitu.edu.pk/wp-content/uploads/2024/09/Financial-Proposal-BOQ-2.xlsx" }
                                                    ]
                                                }
                                            ]}
                                        />
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'Closed-Tenders',
                            label: 'Closed Tenders',
                            content: (
                                <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0' }}>
                                    <div className="qec-vision-content-wrap">
                                        <div className="section-title">
                                            <h2>Closed Tenders</h2>
                                        </div>
                                        <TenderAccordion
                                            items={[
                                                {
                                                    title: "Supply of Computer Equipment",
                                                    content: (
                                                        <div className="space-y-4">
                                                            <h3 className="font-bold leading-tight mb-4">REQUEST FOR PROPOSAL: Supply of Computer Equipment</h3>
                                                            <div className="text-sm space-y-3">
                                                                <p>The UIT University (UITU) was established vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide Notification in The Sindh Government Gazette on May 28, 2018. The University after due charter inspections by HEC,granted NOC whereby UITU has been initially allowed to start undergraduate programs in four departments namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences.The UIT University is managed by Usman Memorial Foundation (UMF).</p>
                                                                <p>It intends to invite “Request for Proposal” (RFP) from reputed GST/NTN registered firms / companies / suppliers from Karachi or any other city (subject to delivery and availability of support in Karachi) for the supply of Computer / IT equipment and Solid State Drives (SSD) on “For Karachi Basis”.All taxes shall be applicable as per government rules.</p>
                                                                <p>The proposals are required to be submitted in one envelope (single stage single envelope procedure) with the title “Technical Bid” and “Financial Bid” as per Performa. All proposals shall be opened and evaluated by the Procurement Committee.</p>
                                                                <p>The RFP can be obtained from UIT University, Karachi (ST-13, Block 7, Gulshan-e-lqbal,Abul Hasan lsphahaniRoad, Karachi) office from Monday, November 8, 2023 onwards during office hours from 09:00 am to 5:00 pm OR from UIT University’s Website, www.uitu.edu.pk.</p>
                                                                <p>The duly filled-in RFP shall be submitted by or before Thu,23-Nov-2023 at 5:00 pm.The RFP will be opened on Friday, 24-Nov-2023 at 11:00 am on the above-mentioned address in the presence of supplier’s representatives who care to attend.</p>
                                                                <p>All proposals must be accompanied by earnest money @ 1% (in the form of cheaque / PO in favor of UIT University) of total bid value quoted in the Financial Bid.</p>
                                                            </div>
                                                        </div>
                                                    ),
                                                    documents: [
                                                        { label: "Tender Advertisement", url: "https://uitu.edu.pk/wp-content/uploads/2024/02/Tender-Adv.png" },
                                                        { label: "Technical Bid (XLSX)", url: "https://uitu.edu.pk/wp-content/uploads/2024/02/RFP-Desktop-PCs-Technical-Bid.xlsx" },
                                                        { label: "Financial Bid (XLSX)", url: "https://uitu.edu.pk/wp-content/uploads/2024/02/RFP-Desktop-PCs-Financial-Bid-v2.xlsx" }
                                                    ]
                                                },
                                                {
                                                    title: "Disposal of HP Desktop PC",
                                                    documents: [
                                                        { label: "Bid Document (PDF)", url: "https://uitu.edu.pk/wp-content/uploads/2024/05/UIT-University-desktop-computer-bidv3.pdf" }
                                                    ]
                                                },
                                                {
                                                    title: "Cafeteria / Canteen Services",
                                                    documents: [
                                                        { label: "Tender Document (PDF)", url: "https://uitu.edu.pk/wp-content/uploads/2024/02/Tender-Document-UITU-Cafetaria-Service.pdf" }
                                                    ]
                                                },
                                                {
                                                    title: "Disposal of Solar System",
                                                    content: (
                                                        <div className="space-y-4">
                                                            <div className="text-sm space-y-3">
                                                                <p>UIT University (UITU) invites sealed bids for the sale of good working condition “53.1 kW On-Grid Solar System” with the following details on “As is Where is basis” which can be inspected at the given address between 9:00 to 5:00 pm on April 16 to 18, 2024:</p>

                                                                <div className="overflow-x-auto my-4 border border-gray-200 rounded-lg">
                                                                    <table className="w-full text-left text-sm">
                                                                        <thead className="bg-[#e6eef4] uppercase font-bold text-[#002856]">
                                                                            <tr>
                                                                                <th className="px-4 py-3">Sr.</th>
                                                                                <th className="px-4 py-3">Items</th>
                                                                                <th className="px-4 py-3">No.</th>
                                                                                <th className="px-4 py-3">Year*</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="divide-y divide-gray-200">
                                                                            <tr>
                                                                                <td className="px-4 py-3">1</td>
                                                                                <td className="px-4 py-3">Solar PV “JA Solar” Panels of 320-watt</td>
                                                                                <td className="px-4 py-3">134</td>
                                                                                <td className="px-4 py-3">2017</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="px-4 py-3">2</td>
                                                                                <td className="px-4 py-3">On-grid 25 kW SMA Sunny Tripower Inverter (25000TL-302)</td>
                                                                                <td className="px-4 py-3">02</td>
                                                                                <td className="px-4 py-3">2020</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="px-4 py-3">3</td>
                                                                                <td className="px-4 py-3">Surface Mounted MS Structure</td>
                                                                                <td className="px-4 py-3">For 198 Panels</td>
                                                                                <td className="px-4 py-3">2017</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        <tfoot className="bg-[#e6eef4] text-xs italic text-gray-500">
                                                                            <tr>
                                                                                <td colSpan={4} className="px-4 py-2">* Purchase / Installation</td>
                                                                            </tr>
                                                                        </tfoot>
                                                                    </table>
                                                                </div>

                                                                <h4 className="font-bold text-[#002856] leading-tight">Terms and Conditions:</h4>
                                                                <p>Sealed Offers on Plain Paper signed / stamped or company’s letterhead along with contact person’s name, cell / phone number and address accompanied with PO / DD of amount equal to 10% of the Offer Value as earnest money in favour of UIT University along with a photocopy of CNIC should reach the below-mentioned address latest by Monday, April 22, 2024 up to 5:00 pm in a Sealed Envelope marked “Bid for Solar System”.</p>
                                                                <p>The bids will be opened on Tuesday, April 23, 2024 at 11:00 am at UITU’s Head Office in the presence of the available bidders. The bidder will be responsible for amicable removal / dismantling. The successful bidder shall pay balance amount within 3 days and dismantle within 10 days of acceptance of offer. All transfer charges, Government taxes / duties, etc shall be borne by the bidder. Unsuccessful bidder shall receive earnest money instrument within 7 days of intimation from the University.</p>
                                                                <p>UITU reserves the right to accept / reject any or all Offers without assigning any reason. In case of non-deposit of balance amount within 3 days of acceptance of bid, earnest money will be forfeited without further communication. For further information/details, please contact Senior Officer Administration, Mr. Abid Ali on 0311-5087336.</p>
                                                            </div>
                                                        </div>
                                                    ),
                                                    documents: [
                                                        { label: "Solar Panel Image", url: "https://uitu.edu.pk/wp-content/uploads/2024/04/UIT-Solar-Panel-2-1-1.jpg" },
                                                        { label: "Tender Advertisement", url: "https://uitu.edu.pk/wp-content/uploads/2024/04/Tender-Adv-v4-with-logo.png" }
                                                    ]
                                                }
                                            ]}
                                            isClosed={true}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    );
}
