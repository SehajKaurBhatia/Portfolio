import React,{useRef} from 'react'

import {useFrame} from '@react-three/fiber'
import {OrbitControls, Text,Sparkles} from "@react-three/drei"
import { CircleGeometry } from 'three';

const RotatingCube = () => {
    const meshRef=useRef();
  useFrame(()=>{
    if(meshRef.current){
    meshRef.current.rotation.y+=0.01
    meshRef.current.rotation.x+=-0.01
 } })
  return (
    <>
   
        <mesh ref={meshRef} position={[0,-2,1]}>
        <cylinderGeometry args={[1,1,1]} />
        <meshLambertMaterial color='#e6d700' emissive='#2db490'/>
        <Sparkles count={50} scale={1.7} size={12} speed={0.2} noise={0.2} color='#d9d91f'/>
        </mesh>
        {/* <mesh ref={meshRef}>
        <circleGeometry args={[2,1,1]}/>
        <meshMatcapMaterial color='#e6d700' emissive='#2db490'/>
        </mesh> */}
        
    </>
  )
}

export default RotatingCube