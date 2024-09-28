'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import SceneC from '../scene/Scene'


const CanvasC = () => {
    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <SceneC />
            </Canvas>
        </>
    )
}

export default CanvasC