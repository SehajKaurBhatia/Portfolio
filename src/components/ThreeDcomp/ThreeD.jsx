import { OrbitControls, Sparkles, Text } from '@react-three/drei';
import React,{useRef} from 'react'
import {useFrame,Canvas} from '@react-three/fiber'
import { DirectionalLight, IcosahedronGeometry } from 'three';
import ReactLogo from './ReactLogo';
import Logo from './Logo';

const Shape=()=>{
    const meshRef=useRef();
    useFrame(()=>{
        meshRef.current.rotation.x+=0.01;
        meshRef.current.rotation.y+=0.01;
    })
    return(
        <>
        <mesh ref={meshRef} position={[-0.5,1.3,1]}>
            <icosahedronGeometry  args={[1,1,1]}/>
            <meshLambertMaterial color='#FBFCF8' emissive='#a9a9a9'/>
            <Sparkles size={5} count={40} scale={2} speed={0.01} noise={0.1} color='#97899c'/>
        </mesh>
        </>
    )
}
const ThreeD = () => {
  return (
    <div className='xl:absolute xl:left-0 xl:right-0 self-center h-[95px] w-[140px] z-0 '>
        <Canvas className=' z-0'>
        <OrbitControls enablePan enableZoom enableRotate/>
        <directionalLight position={[1,1,5]} intensity={1.5} color={0xffffff}/>
        {/* <Shape/> */}
       {/* <ReactLogo/> */}
       <Logo/>
        </Canvas>
    </div>
  )
}

export default ThreeD

