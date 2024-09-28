import { Edges, Html } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three'

const SphereC = () => {
    return (
        <>
            {/* Add text on the left side */}
            <Html position={[-2, -6, 0]} transform occlude>
                <div className='border h-24 w-48 flex justify-center items-center text-xl text-blue-700' >
                    <div>we offer freelance we servicess</div>
                </div>
            </Html>

            {/* Add the box on the right side */}
            <mesh position={[2, -6, 0]}>
                <sphereGeometry args={[0.5, 32]} />
                <meshStandardMaterial color="yellow" side={THREE.DoubleSide} />
            </mesh>
        </>
    );
};

export default SphereC;
