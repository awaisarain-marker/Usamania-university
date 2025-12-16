import React from 'react';
import Carousel from '@/components/ui/Carousel';

const certificateEvents = [
    {
        title: "CCNA with Cyber Security",
        images: [
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.33.47-PM-2.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.33.47-PM-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.33.47-PM.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.33.46-PM-2.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.33.46-PM-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.33.46-PM.jpeg"
        ]
    },
    {
        title: "Ai Powered Video Editing",
        images: [
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.21-PM-2.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.21-PM-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.21-PM.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.20-PM-2.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.20-PM-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.20-PM.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.24-PM.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.23-PM-2.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.23-PM-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.23-PM-scaled.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.22-PM-3.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.22-PM-2.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.22-PM-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-12.26.22-PM.jpeg"
        ]
    },
    {
        title: "Data Science Fundamentals",
        images: [
            "https://uitu.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-12.34.30-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-12.34.31.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-12.34.32.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-12.34.33.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-12.34.30.jpeg"
        ]
    },
    {
        title: "MERN Stack Web Development",
        images: [
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.22.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.24.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.24-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.23.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.24-2.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.25.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.13.02.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.22-1.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-28-at-13.17.22-2.jpeg"
        ]
    },
    {
        title: "Cyber Security",
        images: [
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.42.45.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.44.01.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.44.43.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.46.09.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.45.23.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.47.32.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-13.29.39.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.41.38.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.43.25.jpeg",
            "https://uitu.edu.pk/wp-content/uploads/2025/04/WhatsApp-Image-2025-02-26-at-12.42.12.jpeg"
        ]
    }
];

export default function CertificateDistributionSection() {
    return (
        <section className="section py-8 md:py-12 bg-[#e6eef4]" id="certificate-distribution">
            <div className="container mx-auto px-4">
                <div className="qec-vision-box" style={{ width: '100%', maxWidth: '100%', marginTop: '0', backgroundColor: '#fff' }}>
                    <div className="qec-vision-content-wrap">
                        <div className="section-title text-center mb-8">
                            <h2>Certificate Distribution</h2>
                        </div>

                        <div className="space-y-12">
                            {certificateEvents.map((event, index) => (
                                <div key={index} className="border-b border-gray-300 last:border-0 pb-8 last:pb-0">
                                    <div className="mb-4">
                                        <Carousel
                                            sectionTitle={event.title}
                                            items={event.images.map((img, i) => ({
                                                id: `${index}-${i}`,
                                                image: img,
                                                title: "" // No individual image titles in the prompt, or they were "WhatsApp Image..."
                                            }))}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
