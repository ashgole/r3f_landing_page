'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box from '../box/Box'
import { OrbitControls } from '@react-three/drei'

const Hero = () => {
    return (
        <>
            <Canvas>
                <OrbitControls/>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box/>
            </Canvas>
        </>
    )
}

export default Hero