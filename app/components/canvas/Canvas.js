'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Environment, Html, OrbitControls } from '@react-three/drei'
import SceneC from '../scene/SceneC'


const CanvasC = () => {
    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={
                    <Html fullscreen>
                        <div className="flex justify-center items-center text-blue-400 border w-screen h-screen">
                            Loading, please wait...
                        </div>
                    </Html>
                }>
                    {/* This fallback will display while the environment is loading */}
                    <SceneC />
                    <Environment files={'./env/env1.hdr'} background />
                </Suspense>
            </Canvas>
        </>
    )
}

export default CanvasC