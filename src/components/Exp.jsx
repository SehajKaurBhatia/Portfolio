import { Canvas } from '@react-three/fiber'
import React, { Suspense,useState } from 'react'
import { workExperiences } from '../index.js'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from './CanvasLoader'
import Me from './ThreeDcomp/Me.jsx'
import { motion } from "framer-motion";
import { AuroraBackground } from './ui/aurora-background.tsx'
const Exp = () => {
     
    const [animationName, setAnimationName] = useState('clapping');

    return (
      <section className="c-space my-20" id="work">
        <div className="w-full text-white-600">
          <p className="head-text">My Work Experience</p>
         
          <div className="work-container ">
          
            {/* <div className="work-canvas bg-white z-50 "> */}
            <AuroraBackground className="work-canvas z-0 bg-white" >
      <motion.div className="z-0"
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut", 
        }}
      
      >
        <div className='h-screen '>
              <Canvas className='h-screen' >
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
  
                <Suspense fallback={<CanvasLoader />}>
                  <Me position={[-0,0.2,0]} scale={1.5} animationName={animationName} />
                </Suspense>
              </Canvas>
              </div>
              </motion.div>
              </AuroraBackground>
            {/* </div> */}
           
            <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                {workExperiences.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                    onPointerOut={() => setAnimationName('clapping')}
                    className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img className="w-full h-full" src={item.icon} alt="" />
                      </div>
  
                      <div className="work-content_bar" />
                    </div>
  
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        
        </div>
      </section>
    );
  };
  export default Exp