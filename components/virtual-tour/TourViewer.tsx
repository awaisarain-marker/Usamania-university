'use client';

import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress, Stage, Environment } from '@react-three/drei';
import { Loader2 } from 'lucide-react';

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);

    // Scale fitting logic could be added here if needed
    // For now, we rely on Stage to center and fit the model
    return <primitive object={scene} />;
}

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center p-4 bg-white/90 shadow-lg border border-gray-200 backdrop-blur-sm min-w-[200px]">
                <Loader2 className="w-8 h-8 text-[#ed1c24] animate-spin mb-3" />
                <h3 className="text-[#002856] font-bold text-lg mb-1">Loading Campus</h3>
                <div className="w-full bg-gray-200 h-2.5 mb-2">
                    <div
                        className="bg-[#ed1c24] h-2.5 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-500 font-medium">{progress.toFixed(0)}% ready</p>
                <p className="text-xs text-gray-400 mt-2">This is a large file (332MB), please wait...</p>
            </div>
        </Html>
    );
}

// Preload not possible with dynamic URL unless we know it ahead of time
// useGLTF.preload("/models/un18.glb");

interface TourViewerProps {
    modelUrl?: string | null;
}

export default function TourViewer({ modelUrl }: TourViewerProps) {
    // Use fallback if no URL provided (though in prod it should be provided)
    const finalUrl = modelUrl || "/models/un18.glb";

    return (
        <div className="w-full h-full relative bg-gray-50">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 50, position: [0, 20, 50] }}
                gl={{ preserveDrawingBuffer: true }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <Suspense fallback={<Loader />}>
                    <Stage environment="city" intensity={0.6}>
                        <Model url={finalUrl} />
                    </Stage>
                    <OrbitControls
                        makeDefault
                        autoRotate={false}
                        autoRotateSpeed={0.5}
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 1.5}
                    />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur px-4 py-2 shadow text-sm text-[#002856]">
                <p><strong>Controls:</strong> Left Click to Rotate • Right Click to Pan • Scroll to Zoom</p>
            </div>
        </div>
    );
}


