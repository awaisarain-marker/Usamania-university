'use client';

import dynamic from 'next/dynamic';

const TourViewer = dynamic(() => import('@/components/virtual-tour/TourViewer'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ed1c24] mb-2"></div>
            <p className="text-sm font-medium">Initializing 3D Engine...</p>
        </div>
    )
});

interface VirtualTourClientProps {
    modelUrl?: string;
}

export default function VirtualTourClient({ modelUrl }: VirtualTourClientProps) {
    return (
        <div className="w-full aspect-video bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm relative overflow-hidden group h-[600px]">
            <TourViewer modelUrl={modelUrl} />
        </div>
    );
}
