import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF,Sparkles } from '@react-three/drei'

const ReactLogo=(props)=>{
  const { nodes, materials } = useGLTF('/models/react_logo.glb');
   const meshRef=useRef();
      useFrame(()=>{
          meshRef.current.rotation.x+=0.02;
          meshRef.current.rotation.y+=0.05;
      })
      const sparkRef=useRef();
      useFrame(()=>{
          sparkRef.current.rotation.x+=0.01;
          sparkRef.current.rotation.y+=0.01;
      })
  return (
    <group {...props} >
      <group scale={0.3} >
         <Sparkles ref={sparkRef} size={1} count={20} scale={3.8} speed={0.1} noise={0.1} position={[-0.2, 0.2, 12.102]} color='#97899c'/>
        <mesh ref={meshRef} 
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0.0, -0.2, 11.602]}
          rotation={[0, 6, -2]}
          scale={[0.406, 0.406, 0.734]}
       
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/react_logo.glb')
export default ReactLogo;