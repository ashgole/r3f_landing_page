import { Scroll, ScrollControls } from '@react-three/drei';
import React from 'react';
import { UI } from '../UI';
import Experience from '../experience/Experience';

const SceneC = () => {
    return (
        <ScrollControls pages={5}> {/* Increased pages to give more scrolling space */}
            <Scroll>
                <Experience />
            </Scroll>
            <Scroll html>
                <UI />
            </Scroll>

        </ScrollControls>
    );
};

export default SceneC;
