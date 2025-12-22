import React from 'react';
import PageHero from '@/components/layout/PageHero';
import dynamic from 'next/dynamic';
import { getVirtualTour } from '@/sanity/lib/queries';

const TourViewer = dynamic(() => import('@/components/virtual-tour/TourViewer'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ed1c24] mb-2"></div>
            <p className="text-sm font-medium">Initializing 3D Engine...</p>
        </div>
    )
});

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
                    <div className="w-full aspect-video bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm relative overflow-hidden group h-[600px]">
                        <TourViewer modelUrl={modelUrl} />
                    </div>

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
