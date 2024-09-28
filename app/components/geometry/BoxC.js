import { Edges, Html } from '@react-three/drei';
import React from 'react';

const BoxC = () => {
    return (
        <>
            {/* Add text on the left side */}
            <Html position={[-2, 0, 0]} transform occlude>
                <div className='border h-24 w-48 flex justify-center items-center text-xl text-blue-700' >
                    <div>Ashish Gole</div>
                </div>
            </Html>

            {/* Add the box on the right side */}
            <mesh position={[2, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="yellow" />
            </mesh>
        </>
    );
};

export default BoxC;
