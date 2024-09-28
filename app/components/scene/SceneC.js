import { Scroll, ScrollControls } from '@react-three/drei'
import React from 'react'
import BoxC from '../geometry/BoxC'
import SphereC from '../geometry/SphereC'

const SceneC = () => {
    return (
        <>
            <ScrollControls pages={2} >
                <Scroll>
                    <BoxC />
                    <SphereC />
                </Scroll>
            </ScrollControls>
        </>
    )
}

export default SceneC