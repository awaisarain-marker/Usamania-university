"use client";

import { motion } from "framer-motion";

interface GalleryImage {
    imageUrl: string;
    alt: string;
}

interface CampusExperienceSectionProps {
    title?: string;
    gallery?: GalleryImage[];
}

const defaultGallery: GalleryImage[] = [
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-19-400x400.jpg", alt: "Gallery Image 1" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/All-campus-picnic-400x400.jpg", alt: "Gallery Image 2" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-17-400x400.jpg", alt: "Gallery Image 3" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Commencement-2022-400x400.jpg", alt: "Gallery Image 4" },
    { imageUrl: "https://www.aubg.edu/wp-content/uploads/2022/09/Move-in-day-2022-400x400.jpg", alt: "Gallery Image 5" }
];

export default function CampusExperienceSection({
    title = "Study Hard & Enjoy Your Campus Experience",
    gallery = defaultGallery
}: CampusExperienceSectionProps) {
    // CSS Transform values for each image
    const imageVariants = {
        hidden: (index: number) => {
            if (index === 2) return { opacity: 0, scale: 0.8, rotate: 0 };
            return { x: "-50%", y: "-50%", opacity: 0, scale: 0.8, rotate: 0 };
        },
        visible: (index: number) => {
            const transforms = [
                { x: "-170%", y: "-40%", rotate: -5 },
                { x: "-110%", y: "-45%", rotate: -2 },
                { x: "0%", y: "0%", rotate: 0 },
                { x: "10%", y: "-45%", rotate: 2 },
                { x: "70%", y: "-40%", rotate: 5 }
            ];

            const t = transforms[index] || transforms[2];

            return {
                x: t.x,
                y: t.y,
                rotate: t.rotate,
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1
                }
            } as any;
        }
    };

    // Parse the title to add the ampersand styling
    const titleParts = title.split('&');
    const hasAmpersand = titleParts.length > 1;

    return (
        <section
            className="campus-experience"
            style={{
                backgroundImage: `url('https://www.aubg.edu/wp-content/themes/digitalsilk/assets/_dist/images/grifon.svg')`
            }}
        >
            <div className="container">
                <div className="campus-experience__wrap">
                    <div className="section-title">
                        <h2 className="text-white">
                            {hasAmpersand ? (
                                <>
                                    {titleParts[0]}
                                    <span className="campus-experience__char">&amp;</span>
                                    {titleParts[1]}
                                </>
                            ) : (
                                title
                            )}
                        </h2>
                    </div>

                    <div className="campus-experience__gallery">
                        {gallery.map((image, index) => (
                            <motion.img
                                key={index}
                                custom={index}
                                variants={imageVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="campus-experience__image"
                                alt={image.alt}
                                width="384"
                                height="384"
                                src={image.imageUrl}
                            />
                        ))}
                    </div>

                    <div className="campus-experience__social">
                        {/* Social links can be added here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
