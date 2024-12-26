import { useGLTF,Sparkles } from '@react-three/drei'
import { FaThermometer } from 'react-icons/fa';
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
const Logo=(props)=> {
   const { nodes, materials } = useGLTF('/models/voxel_computer.glb');
      const meshRef=useRef();
         useFrame(()=>{
            //  meshRef.current.rotation.x+=0.02;
             meshRef.current.rotation.z-=0.05;
         })
         const sparkRef=useRef();
         useFrame(()=>{
             sparkRef.current.rotation.x+=0.01;
             sparkRef.current.rotation.y+=0.01;
         })
  return (
   
    <group {...props} >
        <group scale={0.3} >
     <Sparkles ref={sparkRef} size={1} count={20} scale={3.8} speed={0.1} noise={0.1} position={[-0.2, 0.2, 12.902]} color='#97899c'/>
      <mesh ref={meshRef} 
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        material-color='#eeb8ed'
        position={[0.0, -0.9, 13.002]}
         rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.206, 1.206, 1.234]}
      />
    </group>
   </group>
  )
}

useGLTF.preload('/models/voxel_computer.glb')
export default Logo;