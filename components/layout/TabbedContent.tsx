'use client';

import React, { useState } from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';

interface OrgNode {
    name: string;
    level: number;
    parentIndex: number;
}

interface TeamMember {
    name: string;
    position: string;
    phone?: string;
    email?: string;
}

interface Policy {
    policyName: string;
    policyUrl?: string;
}

interface PolicyCategory {
    categoryName: string;
    policies: Policy[];
}

interface FaqItem {
    question: string;
    answer: any[]; // PortableText block content
}

interface BulletPoint {
    text: any[]; // PortableText block content
}

interface ProcedureSection {
    sectionHeading: string;
    sectionDescription?: any[]; // PortableText block content
    bulletPoints?: BulletPoint[];
    accentColor?: 'red' | 'blue';
}

interface ProcedureTableRow {
    criteria: string;
    value: string;
}

interface ProcedureTable {
    tableTitle?: string;
    columnHeader1?: string;
    columnHeader2?: string;
    tableRows?: ProcedureTableRow[];
}

interface ProcedureInfoItem {
    label: string;
    value: string;
}

interface ProcedureInfoBox {
    infoTitle?: string;
    infoItems?: ProcedureInfoItem[];
    infoDescription?: string;
}

interface FeeProgram {
    srNo: number;
    programName: string;
    admissionFee: string;
    securityDeposit: string;
    semesterCharges: string;
    tuitionFeePerCH: string;
    firstSemCreditHours: string;
    firstSemTuitionFee: string;
    totalFee: string;
}

interface FeeTableData {
    tableTitle: string;
    semester?: string;
    programs: FeeProgram[];
}

interface FeeNote {
    noteLabel: string;
    noteText: string;
}

interface CarouselImage {
    imageUrl: string;
    imageCaption?: string;
}

interface CarouselSlide {
    slideTitle: string;
    slideDescription?: string;
    slideImages?: CarouselImage[];
    slideLink?: string;
}

interface Tab {
    tabTitle: string;
    contentType: 'organogram' | 'teamGrid' | 'policyLinks' | 'visionBox' | 'richText' | 'faqAccordion' | 'procedureSteps' | 'feeTable' | 'carousel';
    organogramNodes?: OrgNode[];
    teamImageUrl?: string;
    teamMembers?: TeamMember[];
    policyCategories?: PolicyCategory[];
    richContent?: string;
    faqItems?: FaqItem[];
    // Procedure Steps fields
    procedureTitle?: string;
    procedureSections?: ProcedureSection[];
    procedureTable?: ProcedureTable;
    procedureInfoBox?: ProcedureInfoBox;
    // Fee Table fields
    feeTables?: FeeTableData[];
    feeNotes?: FeeNote[];
    // Carousel fields
    carouselTitle?: string;
    carouselSlides?: CarouselSlide[];
}

interface TabbedContentProps {
    sectionId?: string;
    tabs: Tab[];
}

// Build tree structure from flat nodes
function buildOrgTree(nodes: OrgNode[]) {
    if (!nodes || nodes.length === 0) return null;

    // Group by level
    const levels: Record<number, OrgNode[]> = {};
    nodes.forEach(node => {
        if (!levels[node.level]) levels[node.level] = [];
        levels[node.level].push(node);
    });

    return levels;
}

export default function TabbedContent({ sectionId, tabs }: TabbedContentProps) {
    const [activeTab, setActiveTab] = useState(0);

    if (!tabs || tabs.length === 0) return null;

    return (
        <div id={sectionId} className="flexible --border">
            <div className="container">
                <div className="flexible__wrap --white">
                    <article className="flexible__content">
                        <section className="residence">
                            <div className="residence__wrap">
                                <div className="custom-accordion-tabs accordion-tabs js-tabs is-initialized tabs-allowed">
                                    {/* Tab Navigation */}
                                    <ul role="tablist" className="custom-accordion-tabs__list --scroll row tabs-tab-list">
                                        {tabs.map((tab, index) => (
                                            <li key={index} role="presentation" className="custom-accordion-tabs__item">
                                                <button
                                                    role="tab"
                                                    aria-selected={activeTab === index}
                                                    className={`custom-accordion-tabs__link tabs-trigger ${activeTab === index ? 'is-selected' : ''}`}
                                                    onClick={() => setActiveTab(index)}
                                                >
                                                    {tab.tabTitle}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tab Panels */}
                                    {tabs.map((tab, index) => (
                                        <section
                                            key={index}
                                            role="tabpanel"
                                            className={`tabs-panel js-tabs-panel ${activeTab === index ? 'is-open' : 'is-hidden'}`}
                                        >
                                            <div className={`content ${activeTab === index ? 'is-open' : 'is-hidden'}`}>
                                                {/* Organogram Content */}
                                                {tab.contentType === 'organogram' && tab.organogramNodes && (
                                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: 0 }}>
                                                        <div className="qec-vision-content-wrap">
                                                            <div className="section-title">
                                                                <h2>{tab.tabTitle}</h2>
                                                            </div>
                                                            <div className="org-tree flex justify-center overflow-x-auto pb-4">
                                                                <RenderOrgTree nodes={tab.organogramNodes} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Team Grid Content */}
                                                {tab.contentType === 'teamGrid' && (
                                                    <div className="accordion-section__head">
                                                        {tab.teamImageUrl && (
                                                            <div className="accordion-section__head-image">
                                                                <img
                                                                    className="image lazy loaded"
                                                                    alt={tab.tabTitle}
                                                                    src={tab.teamImageUrl}
                                                                />
                                                            </div>
                                                        )}
                                                        <div className="qec-team accordion-section__head-text -light-bg">
                                                            <div className="accordion-section__head-text-wrap">
                                                                <div className="section-title">
                                                                    <h2>{tab.tabTitle}</h2>
                                                                </div>
                                                                <div className="grid gap-4 md:grid-cols-3">
                                                                    {tab.teamMembers?.map((member, i) => (
                                                                        <div key={i} className="p-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                                            <h3 className="text-lg font-bold text-[#002856] mb-1">{member.name}</h3>
                                                                            <p className="text-[#ed1c24] font-medium text-sm mb-3">{member.position}</p>
                                                                            <div className="space-y-1 text-sm text-gray-600">
                                                                                {member.phone && (
                                                                                    <div className="flex items-center gap-2">
                                                                                        <svg width="16" height="16" className="text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                                                        </svg>
                                                                                        <span>{member.phone}</span>
                                                                                    </div>
                                                                                )}
                                                                                {member.email && (
                                                                                    <div className="flex items-center gap-2">
                                                                                        <svg width="16" height="16" className="text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                                                            <polyline points="22,6 12,13 2,6"></polyline>
                                                                                        </svg>
                                                                                        <a href={`mailto:${member.email}`} className="hover:text-[#ed1c24] transition-colors">
                                                                                            {member.email}
                                                                                        </a>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Policy Links Content */}
                                                {tab.contentType === 'policyLinks' && (
                                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: 0 }}>
                                                        <div className="qec-vision-content-wrap">
                                                            <div className="section-title">
                                                                <h2>{tab.tabTitle}</h2>
                                                            </div>
                                                            <div className="space-y-8">
                                                                {tab.policyCategories?.map((category, catIndex) => (
                                                                    <div key={catIndex}>
                                                                        <h3 className="text-xl font-bold text-[#002856] mb-4 border-b border-gray-100 pb-2">
                                                                            {category.categoryName}
                                                                        </h3>
                                                                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                                                            {category.policies?.map((policy, polIndex) => (
                                                                                <a
                                                                                    key={polIndex}
                                                                                    href={policy.policyUrl || '#'}
                                                                                    target={policy.policyUrl ? '_blank' : '_self'}
                                                                                    rel="noopener noreferrer"
                                                                                    className={`flex items-start gap-3 group ${!policy.policyUrl ? 'cursor-default' : ''}`}
                                                                                >
                                                                                    <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                                                                        <svg width="18" height="18" className="icon" aria-hidden="true" role="img">
                                                                                            <use xlinkHref="#arrow-right"></use>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span className={`${policy.policyUrl ? 'text-[#002856] group-hover:text-[#ed1c24]' : 'text-gray-700'} transition-colors font-bold`}>
                                                                                        {policy.policyName}
                                                                                    </span>
                                                                                </a>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Rich Text Content */}
                                                {tab.contentType === 'richText' && tab.richContent && (
                                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: 0 }}>
                                                        <div className="qec-vision-content-wrap">
                                                            <div className="section-title">
                                                                <h2>{tab.tabTitle}</h2>
                                                            </div>
                                                            <div
                                                                className="prose max-w-none text-gray-600"
                                                                dangerouslySetInnerHTML={{ __html: tab.richContent }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* FAQ Accordion Content */}
                                                {tab.contentType === 'faqAccordion' && tab.faqItems && (
                                                    <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: 0 }}>
                                                        <div className="qec-vision-content-wrap">
                                                            <div className="section-title">
                                                                <h2>{tab.tabTitle}</h2>
                                                            </div>
                                                            <div className="js-accordion-content">
                                                                <ul className="accordion space-y-3" aria-label="FAQ accordion">
                                                                    {tab.faqItems.map((faq, faqIndex) => (
                                                                        <li key={faqIndex} className="item-list__box --v2 col-12">
                                                                            <details className="bg-white p-4 rounded-lg border border-gray-200 group">
                                                                                <summary className="font-bold text-[#002856] cursor-pointer list-none flex justify-between items-center">
                                                                                    <span>{faq.question}</span>
                                                                                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                                    </svg>
                                                                                </summary>
                                                                                <div className="mt-3 text-sm text-gray-600 prose prose-sm max-w-none">
                                                                                    {faq.answer && (
                                                                                        <PortableText
                                                                                            value={faq.answer}
                                                                                            components={{
                                                                                                marks: {
                                                                                                    link: ({ children, value }) => (
                                                                                                        <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#ed1c24] hover:underline">
                                                                                                            {children}
                                                                                                        </a>
                                                                                                    ),
                                                                                                },
                                                                                            }}
                                                                                        />
                                                                                    )}
                                                                                </div>
                                                                            </details>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Procedure Steps Content */}
                                                {tab.contentType === 'procedureSteps' && (
                                                    <div className="procedure-steps-content" style={{ width: '100%', maxWidth: '100%' }}>
                                                        {tab.procedureTitle && (
                                                            <h2 className="text-2xl font-bold text-[#002856] mb-6">{tab.procedureTitle}</h2>
                                                        )}

                                                        {/* Procedure Sections */}
                                                        {tab.procedureSections?.map((section, sectionIndex) => (
                                                            <div
                                                                key={sectionIndex}
                                                                className={`mb-8 p-6 bg-gray-50 rounded-lg border-l-4 ${section.accentColor === 'blue' ? 'border-[#002856]' : 'border-[#ed1c24]'}`}
                                                            >
                                                                <h3 className="text-lg font-bold text-[#002856] mb-4">{section.sectionHeading}</h3>

                                                                {/* Section Description */}
                                                                {section.sectionDescription && section.sectionDescription.length > 0 && (
                                                                    <div className="text-gray-600 mb-4 prose prose-sm max-w-none">
                                                                        <PortableText
                                                                            value={section.sectionDescription}
                                                                            components={{
                                                                                marks: {
                                                                                    link: ({ children, value }) => (
                                                                                        <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#ed1c24] hover:underline">
                                                                                            {children}
                                                                                        </a>
                                                                                    ),
                                                                                },
                                                                            }}
                                                                        />
                                                                    </div>
                                                                )}

                                                                {/* Bullet Points */}
                                                                {section.bulletPoints && section.bulletPoints.length > 0 && (
                                                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                                                        {section.bulletPoints.map((bullet, bulletIndex) => (
                                                                            <li key={bulletIndex} className="prose prose-sm max-w-none">
                                                                                {bullet.text && (
                                                                                    <PortableText
                                                                                        value={bullet.text}
                                                                                        components={{
                                                                                            marks: {
                                                                                                link: ({ children, value }) => (
                                                                                                    <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#ed1c24] hover:underline font-medium">
                                                                                                        {children}
                                                                                                    </a>
                                                                                                ),
                                                                                                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                                                                            },
                                                                                            block: {
                                                                                                normal: ({ children }) => <span>{children}</span>,
                                                                                            },
                                                                                        }}
                                                                                    />
                                                                                )}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ))}

                                                        {/* Procedure Table */}
                                                        {tab.procedureTable?.tableRows && tab.procedureTable.tableRows.length > 0 && (
                                                            <div className="mb-8">
                                                                {tab.procedureTable.tableTitle && (
                                                                    <h3 className="text-lg font-bold text-[#002856] mb-4">{tab.procedureTable.tableTitle}</h3>
                                                                )}
                                                                <div className="overflow-x-auto">
                                                                    <table className="w-full text-left border-collapse border border-gray-300">
                                                                        <thead>
                                                                            <tr className="bg-[#002856] text-white">
                                                                                <th className="py-3 px-4 border border-gray-300">{tab.procedureTable.columnHeader1 || 'Criteria'}</th>
                                                                                <th className="py-3 px-4 border border-gray-300 text-center">{tab.procedureTable.columnHeader2 || 'Weightage'}</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {tab.procedureTable.tableRows.map((row, rowIndex) => (
                                                                                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                                                    <td className="py-3 px-4 border border-gray-300">{row.criteria}</td>
                                                                                    <td className="py-3 px-4 border border-gray-300 text-center font-bold text-[#ed1c24]">{row.value}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Info Box */}
                                                        {tab.procedureInfoBox?.infoTitle && (
                                                            <div className="mb-8 p-6 bg-[#002856] rounded-lg text-white">
                                                                <h3 className="text-lg font-bold mb-4">{tab.procedureInfoBox.infoTitle}</h3>
                                                                {tab.procedureInfoBox.infoDescription && (
                                                                    <p className="mb-4">{tab.procedureInfoBox.infoDescription}</p>
                                                                )}
                                                                {tab.procedureInfoBox.infoItems && tab.procedureInfoBox.infoItems.length > 0 && (
                                                                    <div className="bg-white/10 p-4 rounded">
                                                                        {tab.procedureInfoBox.infoItems.map((item, itemIndex) => (
                                                                            <p key={itemIndex} className={itemIndex < tab.procedureInfoBox!.infoItems!.length - 1 ? 'mb-2' : ''}>
                                                                                <strong>{item.label}:</strong> {item.value}
                                                                            </p>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Fee Table Content */}
                                                {tab.contentType === 'feeTable' && (
                                                    <div className="fee-table-content" style={{ width: '100%', maxWidth: '100%' }}>
                                                        {tab.feeTables?.map((feeTable, tableIndex) => (
                                                            <div key={tableIndex} className="mb-10">
                                                                <h3 className="text-xl font-bold text-[#002856] mb-2">{feeTable.tableTitle}</h3>
                                                                {feeTable.semester && (
                                                                    <p className="text-sm text-gray-500 mb-4 font-medium">{feeTable.semester}</p>
                                                                )}
                                                                <div className="overflow-x-auto">
                                                                    <table className="w-full text-sm border-collapse border border-gray-300">
                                                                        <thead>
                                                                            <tr className="bg-[#002856] text-white">
                                                                                <th className="py-2 px-3 border border-gray-300 text-center" rowSpan={2}>Sr.</th>
                                                                                <th className="py-2 px-3 border border-gray-300 text-left" rowSpan={2}>Programs</th>
                                                                                <th className="py-2 px-3 border border-gray-300 text-center" colSpan={2}>One Time Charges</th>
                                                                                <th className="py-2 px-3 border border-gray-300 text-center" colSpan={2}>Semester Fee</th>
                                                                                <th className="py-2 px-3 border border-gray-300 text-center" colSpan={3}>Semester Fee at the time of Admission</th>
                                                                            </tr>
                                                                            <tr className="bg-[#002856]/90 text-white text-xs">
                                                                                <th className="py-2 px-2 border border-gray-300 text-center">Admission<br />Fee</th>
                                                                                <th className="py-2 px-2 border border-gray-300 text-center">Security<br />Deposit</th>
                                                                                <th className="py-2 px-2 border border-gray-300 text-center">Semester<br />Charges</th>
                                                                                <th className="py-2 px-2 border border-gray-300 text-center">Tuition Fee<br />(per CH)</th>
                                                                                <th className="py-2 px-2 border border-gray-300 text-center">1st Sem<br />Credit Hr</th>
                                                                                <th className="py-2 px-2 border border-gray-300 text-center">1st Sem<br />Tuition Fee</th>
                                                                                <th className="py-2 px-2 border border-gray-300 text-center font-bold">Total</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {feeTable.programs?.map((program, rowIndex) => (
                                                                                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center">{program.srNo}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 font-medium">{program.programName}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center">{program.admissionFee}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center">{program.securityDeposit}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center">{program.semesterCharges}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center">{program.tuitionFeePerCH}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center">{program.firstSemCreditHours}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center">{program.firstSemTuitionFee}</td>
                                                                                    <td className="py-2 px-3 border border-gray-300 text-center font-bold text-[#ed1c24]">{program.totalFee}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        ))}

                                                        {/* Fee Notes */}
                                                        {tab.feeNotes && tab.feeNotes.length > 0 && (
                                                            <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
                                                                <h4 className="font-bold text-[#002856] mb-3">Note:</h4>
                                                                <ul className="space-y-2 text-sm text-gray-700">
                                                                    {tab.feeNotes.map((note, noteIndex) => (
                                                                        <li key={noteIndex}>
                                                                            <span className="font-medium">({note.noteLabel})</span> {note.noteText}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Image Carousel Content */}
                                                {tab.contentType === 'carousel' && (
                                                    <div className="carousel-content" style={{ width: '100%', maxWidth: '100%' }}>
                                                        {tab.carouselTitle && (
                                                            <h2 className="text-2xl font-bold text-[#002856] mb-6">{tab.carouselTitle}</h2>
                                                        )}

                                                        {tab.carouselSlides && tab.carouselSlides.length > 0 && (
                                                            <div className="space-y-8">
                                                                {tab.carouselSlides.map((slide, slideIndex) => (
                                                                    <div key={slideIndex} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                                                                        <h3 className="text-lg font-bold text-[#002856] mb-4">{slide.slideTitle}</h3>
                                                                        {slide.slideDescription && (
                                                                            <p className="text-sm text-gray-600 mb-4">{slide.slideDescription}</p>
                                                                        )}

                                                                        {/* Image Gallery for this slide */}
                                                                        {slide.slideImages && slide.slideImages.length > 0 && (
                                                                            <div className={`grid gap-4 ${slide.slideImages.length === 1 ? 'grid-cols-1' : slide.slideImages.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                                                                                {slide.slideImages.map((image, imgIndex) => (
                                                                                    <div key={imgIndex} className="aspect-video overflow-hidden rounded-lg">
                                                                                        <img
                                                                                            src={image.imageUrl}
                                                                                            alt={image.imageCaption || slide.slideTitle}
                                                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                                                        />
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )}

                                                                        {slide.slideLink && (
                                                                            <a
                                                                                href={slide.slideLink}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="inline-block mt-4 text-sm text-[#ed1c24] hover:underline font-medium"
                                                                            >
                                                                                Learn More →
                                                                            </a>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </section>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
}

// Render Organogram Tree
function RenderOrgTree({ nodes }: { nodes: OrgNode[] }) {
    if (!nodes || nodes.length === 0) return null;

    // Build hierarchy
    const root = nodes.find(n => n.parentIndex === -1);
    if (!root) return null;

    const getChildren = (parentIdx: number) => {
        return nodes.filter((_, idx) => {
            const node = nodes[idx];
            return node.parentIndex === parentIdx;
        });
    };

    const renderNode = (node: OrgNode, nodeIndex: number): React.ReactNode => {
        const children = nodes.filter(n => n.parentIndex === nodeIndex);

        return (
            <li key={nodeIndex}>
                <div className="node text-lg font-bold">{node.name}</div>
                {children.length > 0 && (
                    <ul>
                        {children.map((child, idx) => {
                            const childIndex = nodes.findIndex(n => n === child);
                            return renderNode(child, childIndex);
                        })}
                    </ul>
                )}
            </li>
        );
    };

    const rootIndex = nodes.findIndex(n => n === root);

    return (
        <ul>
            {renderNode(root, rootIndex)}
        </ul>
    );
}
