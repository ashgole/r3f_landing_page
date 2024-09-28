import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import React, { useRef } from 'react';

const BoxC = () => {
    const meshRef = useRef();
    const scroll = useScroll();

    return (
        <>
            {/* Add the box on the right side */}
            <mesh ref={meshRef} position={[2, 0, 2]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="yellow" side={THREE.DoubleSide} />
            </mesh>

        </>
    );
};

export default BoxC;
