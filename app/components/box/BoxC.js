import { Box } from '@react-three/drei'
import React from 'react'

const BoxC = () => {
    return (
        <>
            <Box position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="yellow" />
            </Box>
        </>
    )
}

export default BoxC