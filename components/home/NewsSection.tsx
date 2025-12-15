import Link from "next/link";
import { Calendar } from "lucide-react";

const newsItems = [
    {
        id: 1,
        title: "UIT Hosts Annual Business Conference",
        date: "Dec 01, 2025",
        category: "Events",
        image: "https://placehold.co/600x400/002F6C/white?text=Business+Conference",
    },
    {
        id: 2,
        title: "Student Wins International Coding Competition",
        date: "Nov 28, 2025",
        category: "Achievements",
        image: "https://placehold.co/600x400/A6192E/white?text=Coding+Win",
    },
    {
        id: 3,
        title: "New Exchange Programs Announced for 2026",
        date: "Nov 25, 2025",
        category: "Academics",
        image: "https://placehold.co/600x400/00B5E2/white?text=Exchange+Programs",
    },
];

export default function NewsSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-blue mb-2">Latest News & Events</h2>
                        <div className="w-16 h-1 bg-primary-red"></div>
                    </div>
                    <Link href="#" className="hidden md:block text-primary-red font-bold hover:text-red-700 transition-colors">
                        View All News
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <Link key={item.id} href="#" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                />
                                <div className="absolute top-4 left-4 bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <Calendar size={14} className="mr-2" />
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-red transition-colors mb-2">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="#" className="text-primary-red font-bold hover:text-red-700 transition-colors">
                        View All News
                    </Link>
                </div>
            </div>
        </section>
    );
}
