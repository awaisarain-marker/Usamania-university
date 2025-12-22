import React from 'react';
import PageHero from '@/components/layout/PageHero';
import VirtualTourClient from '@/components/virtual-tour/VirtualTourClient';
import { getVirtualTour } from '@/sanity/lib/queries';
import { Globe } from 'lucide-react';

const TOUR_URL = "https://earth.google.com/web/search/UIT+Univeristy+Karachi/@24.92761252,67.10879267,45.71536431a,0d,60y,54.06747529h,84.85784596t,0r/data=CoUBGlcSUQolMHgzZWIzMzhjNzAwNTcxYjA5OjB4ZDg2Nzc5YjI5ZTc3ZjM2YRm4COeugO04QCGlorH298ZQQCoWVUlUIFVuaXZlcnNpdHkgS2FyYWNoaRgBIAEiJgokCcBFiDYQyTtAEcBFiDYQyTvAGYGjJ_Bnn0tAIX6jJ_Bnn0vAQgIIASIbChdDSUhNMG9nS0VJQ0FnSUNjN3ZhWnBBRRAFOgMKATBCAggASg0I____________ARAA";

export default async function VirtualTourPage() {
    const data = await getVirtualTour();
    const modelUrl = data?.modelUrl;

    return (
        <div className="page-virtual-tour">
            <PageHero
                title="Virtual Campus Tour"
                subtitle="Explore our state-of-the-art facilities from anywhere in the world"
                bgImage="https://www.aubg.edu/wp-content/uploads/2022/03/aubg-campus-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Virtual Tour' }
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="section-title mb-8">
                        <h2>Experience UIT University</h2>
                    </div>

                    {/* 3D Model Viewer */}
                    <VirtualTourClient modelUrl={modelUrl} />

                    <div className="section-title mb-8 mt-16">
                        <h2>Google Earth Tour</h2>
                    </div>

                    <a
                        href={TOUR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full aspect-video bg-gray-50 flex flex-col items-center justify-center border border-gray-200 shadow-sm relative overflow-hidden group h-[600px] hover:bg-gray-100 transition-colors cursor-pointer text-center p-8 no-underline"
                    >
                        <div className="bg-white p-6 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Globe className="w-12 h-12 text-[#ed1c24]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#002856] mb-3">Launch Google Earth Tour</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-8">
                            Experience an immersive 3D flyover of the UIT University campus. Click to open in Google Earth.
                        </p>
                        <div className="px-8 py-4 bg-[#002856] text-white font-bold hover:bg-[#ed1c24] transition-colors inline-flex items-center gap-2 text-sm uppercase tracking-wider">
                            Open Tour <span className="text-lg leading-none">&rarr;</span>
                        </div>
                    </a>

                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-[#002856] mb-3">Modern Classrooms</h3>
                            <p className="text-gray-600">Equipped with the latest multimedia technology to enhance learning.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-[#002856] mb-3">Advanced Labs</h3>
                            <p className="text-gray-600">State-of-the-art laboratories for hands-on engineering and science practice.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-[#002856] mb-3">Library & Commons</h3>
                            <p className="text-gray-600">Vibrant spaces for study, research, and collaboration.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

