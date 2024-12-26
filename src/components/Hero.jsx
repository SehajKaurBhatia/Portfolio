import React from 'react'
import Spline from '@splinetool/react-spline';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeD from './ThreeDcomp/ThreeD';
import Button from './Button';

const Hero = () => {
    const words=`Hi I'm Sehaj. \n I build websites.`;
   
  return (
    <>
    <section className='min-h-screen   w-full flex flex-col ' >
<div className='flex w-full  mx-auto  mt-20 sm: mt-36'>
<div className="sm: text-[12px] xl:text-[16px] flex flex-col z-50  text-neutral-500" style={{ whiteSpace: 'pre-line' }}>
    <TextGenerateEffect words={words} />
    <a href="#about">
    <Button   name="Let's Work Together" isBeam containerClass="mt-5 cursor-pointer z-50"/>
    </a>
    
</div>

<div className=' w-full h-full absolute   inset-0 xl:mt-1 sm: ml-[5px] md:ml-0 mt-[80px]'>


   {/* <Canvas>
    <OrbitControls enablePan enableZoom enableRotate/>
            <directionalLight position={[1,1,1]} intensity={10} color={0x9cdba6}/>
  
  
   </Canvas> */}
  
  {/* <Spline

        scene="https://prod.spline.design/iKtQHe0QK4MxrLNs/scene.splinecode" 

      /> */}
  {/* <Spline scene="https://prod.spline.design/TLwcubxixmeAer-Z/scene.splinecode" /> */}
  

  <Spline className='' scene="https://prod.spline.design/tpiTLKWK019PTrBI/scene.splinecode" />
 

  






</div>
</div>
    </section>
   
    </>
    
  )
}

export default Hero