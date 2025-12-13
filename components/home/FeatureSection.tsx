import Link from "next/link";
import Image from "next/image";

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
    ctaText?: string;
    ctaLink?: string;
    bgColor?: "white" | "gray";
}

export default function FeatureSection({
    title,
    description,
    imageSrc,
    imageAlt,
    imagePosition = "left",
    ctaText = "Learn More",
    ctaLink = "#",
    bgColor = "white",
}: FeatureSectionProps) {
    return (
        <section className={`py-16 md:py-24 ${bgColor === "gray" ? "bg-light-gray" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className={`flex flex-col md:flex-row items-center gap-12 ${imagePosition === "right" ? "md:flex-row-reverse" : ""}`}>

                    {/* Image */}
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                        {/* Using a placeholder div if imageSrc is a placeholder URL, otherwise Image component */}
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${imageSrc}')` }}
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-primary-blue mb-6">{title}</h2>
                        <div className="w-16 h-1 bg-primary-red mb-6"></div>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            {description}
                        </p>
                        <Link
                            href={ctaLink}
                            className="inline-block text-primary-red font-bold uppercase tracking-wide hover:text-red-700 transition-colors border-b-2 border-primary-red pb-1"
                        >
                            {ctaText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
