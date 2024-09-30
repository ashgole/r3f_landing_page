'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import {  Html, OrbitControls } from '@react-three/drei'
import SceneC from '../scene/SceneC'


const CanvasC = () => {
    return (
        <>
            <Canvas shadows >
                 <OrbitControls enableZoom={false} enablePan={false} />
                 {/*<axesHelper args={[5]} /> */}

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
                </Suspense>
            </Canvas>
        </>
    )
}

export default CanvasC