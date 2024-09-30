import { Scroll, ScrollControls } from '@react-three/drei';
import React from 'react';
import { UI } from '../UI';
import Horse from '.././models/Horse';
import Cow from '.././models/Cow';
import ShibaInu from '.././models/ShibaInu';

const SceneC = () => {
    return (
        <ScrollControls pages={4}> {/* Increased pages to give more scrolling space */}
            <Scroll>
                <Horse />
                <Cow />
                <ShibaInu />
            </Scroll>
            <Scroll html>
                <UI />
            </Scroll>

        </ScrollControls>
    );
};

export default SceneC;
