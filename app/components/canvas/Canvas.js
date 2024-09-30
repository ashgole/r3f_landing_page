'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import {  Html } from '@react-three/drei'
import SceneC from '../scene/SceneC'


const CanvasC = () => {
    return (
        <>
            <Canvas shadows >
                 {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
                 {/*<axesHelper args={[5]} /> */}

                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={
                    <Html fullscreen>
                    <div className="text-center p-4 flex flex-col justify-center items-center text-blue-400 border w-screen h-screen">
                      <div className="text-3xl mb-4">Loading, please wait...</div>
                      <p className="text-lg ">
                        Welcome to our Pet Companions Showcase! 🐾
                      </p>
                      <p className="mt-2 text-sm">
                        Explore the world of beloved animals like horses, cows, and Shiba Inus. Get to know their unique qualities and how they enrich our lives.
                        We're loading your experience, and it will be worth the wait!
                      </p>
                    </div>
                  </Html>

                }>
                      <SceneC />
                </Suspense>
            </Canvas>
        </>
    )
}

export default CanvasC