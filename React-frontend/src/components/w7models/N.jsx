/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\public\models\Temple of Kukulcán.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function N(props) {
  const { nodes, materials } = useGLTF('models/Temple of Kukulcán.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} rotation={[0, 0, 0]} />
      <pointLight position={[0, 250, 14]} intensity={8} color="#fff" />
    </group>
  )
}

useGLTF.preload('models/Temple of Kukulcán.glb')
