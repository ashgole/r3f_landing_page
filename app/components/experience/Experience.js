import { AccumulativeShadows, Environment, Gltf, RandomizedLight, Sky } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import { degToRad } from 'three/src/math/MathUtils'
import Horse from '.././models/Horse';
import Cow from '.././models/Cow';
import Dog from '../models/Dog'

const Experience = () => {
    // const { lightposition } = useControls({
    //     lightposition: {
    //         value: [0, 0, 0], // default position
    //         step: 0.1, // adjust the step size for finer control
    //         min: -10,
    //         max: 10,
    //     },
    // });
    const [isMobile, setIsMobile] = useState(false)
    const [yPosition, setYPosition] = useState(0)
    const [xPosition, setXPosition] = useState(5)
    const [yRotaion, setYRotaion] = useState(-60)
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768) // Any width <= 768px is considered mobile
        }
        handleResize() // Run on component mount
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const restaurantScalingFactor = Math.min(Math.max(window.innerWidth / 1300, 0.5), 1.2)

    return (
        <>
            <group
             position={isMobile ? [0, 1, 0]:[0, 0, 0]}
              scale={restaurantScalingFactor} rotation-y={degToRad(-7)} rotation-x={degToRad(25)}>
                <Gltf src="models/Restaurant.glb" scale={0.3} castShadow />
                <AccumulativeShadows
                    temporal
                    frames={35}
                    alphaTest={0.75}
                    scale={10}
                    position={[0, 0, 0]}
                    color="#EFBD4E"
                >
                    <RandomizedLight castShadow amount={8} frames={30} position={[5, 5, -5]} />
                </AccumulativeShadows>
            </group>

            {/* horse */}
            <group
                rotation-y={degToRad(yRotaion)}
                position={isMobile ? [xPosition - 4, yPosition - 7.5, 0] : [xPosition, yPosition - 9.6, -2]}
                scale={isMobile ? scale - 0.5 : scale}
            >
                <Horse />
            </group>

            {/* cow */}
            <group
                rotation-y={degToRad(yRotaion)}
                position={isMobile ? [xPosition - 4, yPosition - 16, 0] : [xPosition, yPosition - 17, -2]}
                scale={isMobile ? scale - 0.5 : scale - 0.2}
            >
                <Cow />
            </group>

            {/* dog */}
            <group
                rotation-y={degToRad(yRotaion)}
                position={isMobile ? [xPosition - 4, yPosition - 22, 0] : [xPosition, yPosition - 25, -2]}
                scale={isMobile ? scale - 0.2 : scale}
            >
                <Dog />
            </group>

            <Environment preset="sunset" />
            {/* <Environment files={'./env/env1.hdr'} background /> */}
            <Sky />
        </>
    )
}

export default Experience