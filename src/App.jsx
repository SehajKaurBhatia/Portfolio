import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Text} from "@react-three/drei"
import RotatingCube from './components/RotatingCube';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Exp from './components/Exp';
import './App.css'
function App() {
 

  return (
    <>
    {/* <div class="flex w-screen h-screen items-center">
    <Canvas className="w-screen h-screen  border-4 border-black">
     <OrbitControls enablePan enableRotate enableZoom/>
    <directionalLight position={[1,1,1]} intensity={10} color={0x9cdba6}/>
     <color attach="background" args={['#e75858']}/>
     
     <Text >
      hello three js
      </Text>
     <RotatingCube />
  
    </Canvas>
    </div> */}

    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
      <AboutMe/>
   
    <Project/>
     
        
      <Exp/>
      
   
      
      
      
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}

export default App;
