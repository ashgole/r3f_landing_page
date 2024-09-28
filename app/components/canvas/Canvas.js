'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import SceneC from '../scene/SceneC'


const CanvasC = () => {
    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false}/>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <SceneC />
                <Environment  files={'/env/env1.hdr'} background  />
            </Canvas>
        </>
    )
}

export default CanvasC