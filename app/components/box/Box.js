import React from 'react'

const Box = () => {
    return (
        <>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="yellow" />
            </mesh>
        </>
    )
}

export default Box