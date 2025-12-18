'use client';

import React, { useState } from 'react';

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

interface Tab {
    tabTitle: string;
    contentType: 'organogram' | 'teamGrid' | 'policyLinks' | 'visionBox';
    organogramNodes?: OrgNode[];
    teamImageUrl?: string;
    teamMembers?: TeamMember[];
    policyCategories?: PolicyCategory[];
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
