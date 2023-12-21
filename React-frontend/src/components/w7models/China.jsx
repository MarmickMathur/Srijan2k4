/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\public\models\Great Wall of China.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function China(props) {
  const { nodes, materials } = useGLTF('models/Great Wall of China.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} rotation={[0, 0, 0]} />
      <pointLight position={[0, 250, 14]} intensity={8} color="white" />
    </group>
  )
}

useGLTF.preload('models/Great Wall of China.glb')