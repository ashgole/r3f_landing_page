import { Edges, Html, useScroll } from '@react-three/drei';
import React, { useRef } from 'react';

const SphereC = () => {
    const scroll = useScroll();
    const meshRef = useRef();
    return (
        <>

            {/* Add the sphere on the right side with ref */}
            <mesh   position={[2, -8, 0]}>
                <sphereGeometry args={[0.5, 32]} />
                <meshStandardMaterial color="yellow" />
                <Edges color="black" lineWidth={2} />
            </mesh>
        </>
    );
};

export default SphereC;
