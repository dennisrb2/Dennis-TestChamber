/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 body_1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/body_1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.dart_body.geometry} material={materials.throwing_dart_body} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/body_1.glb')
