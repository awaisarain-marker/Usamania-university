"use client";

import { motion } from "framer-motion";

export default function CampusExperienceSection() {
    const galleryImages = [
        {
            src: "https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-19-400x400.jpg",
            alt: "Gallery Image 1"
        },
        {
            src: "https://www.aubg.edu/wp-content/uploads/2022/09/All-campus-picnic-400x400.jpg",
            alt: "Gallery Image 2"
        },
        {
            src: "https://www.aubg.edu/wp-content/uploads/2022/09/Untitled-design-17-400x400.jpg",
            alt: "Gallery Image 3"
        },
        {
            src: "https://www.aubg.edu/wp-content/uploads/2022/09/Commencement-2022-400x400.jpg",
            alt: "Gallery Image 4"
        },
        {
            src: "https://www.aubg.edu/wp-content/uploads/2022/09/Move-in-day-2022-400x400.jpg",
            alt: "Gallery Image 5"
        }
    ];

    // CSS Transform values for each image
    const imageVariants = {
        hidden: (index: number) => {
            // Center image (index 2) just fades/scales
            if (index === 2) return { opacity: 0, scale: 0.8, rotate: 0 };
            // Others start at the center (50% 50% of container)
            // Since they are absolute top:50% left:50%, translate(-50%, -50%) centers them perfectly
            return { x: "-50%", y: "-50%", opacity: 0, scale: 0.8, rotate: 0 };
        },
        visible: (index: number) => {
            const transforms = [
                // Image 1 (Far Left): Absolute, starts at left: 50%.
                // To reach far left edge (-660px from center), we need x: -170%
                // (-50% centers it, -120% moves it left).
                { x: "-170%", y: "-40%", rotate: -5 },

                // Image 2 (Left):
                // -50% centers it, -60% moves it left. Total -110%.
                { x: "-110%", y: "-45%", rotate: -2 },

                // Image 3 (Center): Relative, starts at 0.
                { x: "0%", y: "0%", rotate: 0 },

                // Image 4 (Right): Absolute, starts at left: 50%.
                // -50% centers it, +60% moves it right. Total +10%.
                { x: "10%", y: "-45%", rotate: 2 },

                // Image 5 (Far Right):
                // -50% centers it, +120% moves it right. Total +70%.
                { x: "70%", y: "-40%", rotate: 5 }
            ];

            const t = transforms[index];

            return {
                x: t.x,
                y: t.y,
                rotate: t.rotate,
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1 // Stagger effect
                }
            } as any; // Cast to any to avoid strict typing issues with Variants for now
        }
    };

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
                            Study Hard
                            <span className="campus-experience__char">&amp;</span>
                            Enjoy Your Campus Experience
                        </h2>
                    </div>

                    <div className="campus-experience__gallery">
                        {galleryImages.map((image, index) => (
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
                                src={image.src}
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
