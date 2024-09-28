import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useState } from 'react'

const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/animals/Cow.gltf')
  const { actions } = useAnimations(animations, group)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (actions) {
        actions['Walk']?.play()
    }
}, [actions])

  // Detect if the user is on a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Any width <= 768px is considered mobile
    }
    handleResize() // Run on component mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <group
      rotation-y={Math.PI + 90}
      position={isMobile ? [1, -6, 0] : [5, -10, -2]} // Move it slightly upwards on mobile
      scale={isMobile ? 0.5 : 1} // Scale down the model on mobile
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Scene">
        <group name="AnimalArmature">
          <group name="Cow">
            <skinnedMesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Main}
              skeleton={nodes.Cube.skeleton}
            />
            <skinnedMesh
              name="Cube_1"
              geometry={nodes.Cube_1.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Cube_1.skeleton}
            />
            <skinnedMesh
              name="Cube_2"
              geometry={nodes.Cube_2.geometry}
              material={materials.Hooves}
              skeleton={nodes.Cube_2.skeleton}
            />
            <skinnedMesh
              name="Cube_3"
              geometry={nodes.Cube_3.geometry}
              material={materials.Muzzle}
              skeleton={nodes.Cube_3.skeleton}
            />
            <skinnedMesh
              name="Cube_4"
              geometry={nodes.Cube_4.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube_4.skeleton}
            />
            <skinnedMesh
              name="Cube_5"
              geometry={nodes.Cube_5.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube_5.skeleton}
            />
            <skinnedMesh
              name="Cube_6"
              geometry={nodes.Cube_6.geometry}
              material={materials.Horns}
              skeleton={nodes.Cube_6.skeleton}
            />
          </group>
          <primitive object={nodes.Body} />
          <primitive object={nodes.IKBackLegL} />
          <primitive object={nodes.IKFrontLegL} />
          <primitive object={nodes.IKBackLegR} />
          <primitive object={nodes.IKFrontLegR} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('././models/animals/Cow.gltf')

export default Model
