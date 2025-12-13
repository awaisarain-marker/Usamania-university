import Link from "next/link";
import Image from "next/image";

const cards = [
    {
        title: "Study in Europe",
        subtitle: "Graduate with a U.S. Diploma",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
        link: "#",
    },
    {
        title: "Your European Home Away from Home",
        subtitle: "Free European Home Away from Home",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
        link: "#",
    },
    {
        title: "FAFSA",
        subtitle: "College Direct Costs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600",
        link: "#",
    },
];

export default function InfoCards() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Link
                            key={index}
                            href={card.link}
                            className="group bg-white border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
                        >
                            <div className="flex items-start p-6 gap-4">
                                <div className="flex-1">
                                    <h3 className="text-primary-blue font-bold text-lg mb-1 group-hover:text-primary-red transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3">{card.subtitle}</p>
                                    <span className="text-primary-red text-sm font-semibold">
                                        Learn more →
                                    </span>
                                </div>
                                <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${card.image}')` }}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
