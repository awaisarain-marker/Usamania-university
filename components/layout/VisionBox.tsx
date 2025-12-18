'use client';

import React from 'react';

interface BulletItem {
    text: string;
}

interface IconItem {
    icon: string;
    title: string;
    description?: string;
}

interface FileItem {
    fileName: string;
    fileUrl: string;
}

interface VisionBoxProps {
    sectionId?: string;
    title: string;
    contentType: 'paragraph' | 'bullets' | 'iconList' | 'files';
    paragraphText?: string;
    bulletItems?: BulletItem[];
    iconItems?: IconItem[];
    fileItems?: FileItem[];
    showButton?: boolean;
    buttonText?: string;
    buttonLink?: string;
    buttonStyle?: 'red' | 'red-outline' | 'white' | 'navy' | 'navy-outline' | 'link';
    backgroundColor?: 'white' | 'light-blue' | 'navy';
}

export default function VisionBox({
    sectionId,
    title,
    contentType = 'paragraph',
    paragraphText,
    bulletItems = [],
    iconItems = [],
    fileItems = [],
    showButton = false,
    buttonText,
    buttonLink,
    buttonStyle = 'red',
    backgroundColor = 'white',
}: VisionBoxProps) {
    const bgColors: Record<string, string> = {
        'white': '',
        'light-blue': 'bg-[#e6eef4]',
        'navy': 'bg-[#002856]',
    };

    const textColor = backgroundColor === 'navy' ? 'text-white' : 'text-[#002856]';

    const buttonClasses: Record<string, string> = {
        'red': 'btn-secondary --red --arrow',
        'red-outline': 'btn-secondary --red --border --arrow',
        'white': 'btn-secondary --white --arrow',
        'navy': 'btn-secondary --navy --arrow',
        'navy-outline': 'btn-secondary --navy --border --arrow',
        'link': 'btn-link --red',
    };

    return (
        <div id={sectionId} style={{ marginTop: '3rem' }}>
            <div className={`qec-vision-box ${bgColors[backgroundColor]}`} style={{ width: '100%', maxWidth: '100%', marginTop: 0 }}>
                <div className="qec-vision-content-wrap">
                    <div className="section-title">
                        <h2 className={textColor}>{title}</h2>
                    </div>
                    <div className="text-big">
                        {/* Paragraph Content */}
                        {contentType === 'paragraph' && paragraphText && (
                            <p className={textColor}>{paragraphText}</p>
                        )}

                        {/* Bullet Points with Red Arrows */}
                        {contentType === 'bullets' && bulletItems.map((item, index) => (
                            <div key={index} className={`flex items-start gap-4 ${index > 0 ? 'mt-4' : ''}`}>
                                <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                    <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                        <use xlinkHref="#arrow-right"></use>
                                    </svg>
                                </div>
                                <p className={textColor}>{item.text}</p>
                            </div>
                        ))}

                        {/* Icon List */}
                        {contentType === 'iconList' && iconItems.map((item, index) => (
                            <div key={index} className={`flex items-start gap-4 ${index > 0 ? 'mt-4' : ''}`}>
                                <div className="flex-shrink-0 mt-1 text-[#ed1c24]">
                                    <svg width="20" height="20" className="icon" aria-hidden="true" role="img">
                                        <use xlinkHref={`#${item.icon}`}></use>
                                    </svg>
                                </div>
                                <div>
                                    {item.title && <strong className={textColor}>{item.title}</strong>}
                                    {item.description && <p className={`${textColor} mt-1`}>{item.description}</p>}
                                </div>
                            </div>
                        ))}

                        {/* Downloadable Files */}
                        {contentType === 'files' && (
                            <div className="flex flex-col gap-4">
                                {fileItems.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-200 last:border-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 text-[#ed1c24]">
                                                <svg width="24" height="24" className="icon" aria-hidden="true" role="img">
                                                    <use xlinkHref="#arrow-top-right"></use>
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-[#002856] text-lg">{file.fileName}</span>
                                        </div>
                                        <div className="flex items-center gap-6 mt-2 md:mt-0">
                                            <a
                                                href={file.fileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#ed1c24] hover:text-[#002856] transition-colors font-medium flex items-center gap-2 text-base"
                                            >
                                                <span>View PDF</span>
                                                <svg width="14" height="14" className="icon" aria-hidden="true" role="img">
                                                    <use xlinkHref="#arrow-right"></use>
                                                </svg>
                                            </a>
                                            <a
                                                href={file.fileUrl}
                                                download
                                                className="text-[#ed1c24] hover:text-[#002856] transition-colors font-medium flex items-center gap-2 text-base"
                                            >
                                                <span>Download</span>
                                                <svg width="14" height="14" className="icon rotate-90" aria-hidden="true" role="img">
                                                    <use xlinkHref="#arrow"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Optional Button */}
                    {showButton && buttonText && buttonLink && (
                        <div className="mt-6">
                            <a href={buttonLink} className={buttonClasses[buttonStyle] || buttonClasses['red']}>
                                <span>{buttonText}</span>
                                <svg width="25" height="25" className="icon icon-arrow" aria-hidden="true" role="img">
                                    <use xlinkHref="#arrow"></use>
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
