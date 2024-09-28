import {  Scroll, ScrollControls } from '@react-three/drei'
import React from 'react'
import BoxC from '../box/BoxC'

const SceneC = () => {
    return (
        <>
            <ScrollControls pages={3} damping={0.5}>
                <Scroll>
                    <BoxC />
                </Scroll>
            </ScrollControls>
        </>
    )
}

export default SceneC