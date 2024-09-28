'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import SceneC from '../scene/SceneC'


const CanvasC = () => {
    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false} enableRotate={false}/>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <SceneC />
                <Environment preset="forest" background />
            </Canvas>
        </>
    )
}

export default CanvasC