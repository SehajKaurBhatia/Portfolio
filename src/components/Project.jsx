import React,{Suspense, useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import {myProjects} from "../index.js"
import { TiLocationArrow } from "react-icons/ti";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { Canvas } from '@react-three/fiber';
import { Center,OrbitControls } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import DemoComp from './ThreeDcomp/DemoComp.jsx';
const Project = () => {
    const [color, setColor] = useState('#ff0000');
    const [selectInd,setSelectInd]=useState(0);
    const currentProject=myProjects[selectInd];
    const projCount=myProjects.length;
    
    const handleNavigation=(direction)=>{
        setSelectInd((prevIndex)=>{
            if(direction==='previous'){
                    return prevIndex=== 0?projCount-1:prevIndex-1;
                
            }
            else{
                return prevIndex===projCount-1?0:prevIndex+1;
            }
        })
    }
    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
      }, [selectInd]);
  return (
    <section className='c-space my-20' id="projects">
        <p className='head-text'>My Work</p>
    <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
            <div className='absolute top-0 right-0'>
                <img src={currentProject.spotlight} className='w-full h-96 object-cover rounded-xl'/>
            </div>
            <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={myProjects[0].logoStyle}>
                <img src={currentProject.logo} className='w-10 h-10 shadow-sm'/>
            </div>
            <div className='flec flex-col gap-5 text-white-600 my-5'>
                <p className='text-white text-2xl font-semibold animatedText'>
                    {currentProject.title}
                </p>
                <p className='animatedText'>
                    {currentProject.desc}
                </p>
                <p className='animatedText'>
                    {currentProject.subdesc}
                </p>
            </div>
            <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
                {currentProject.tags.map((tag,index)=>(
                    <div key={index} className='tech-logo'>
                        <img src={tag.path}/>
                    </div>
                ))}
            </div>
            <a  target="_blank" rel="norefferer" href={currentProject.href} className='flex items-center gap-2 cursor-pointer text-white-600'>
                <p >Check live site</p>
                <TiLocationArrow className='text-purple-400 w-5 h-5'/>
            </a>
            </div>
            <div className='flex justify-between items-center mt-7'>
                <button className='arrow-btn' onClick={()=>handleNavigation('previous')}>
                <MdOutlineArrowCircleLeft className=' w-10 h-10 text-purple-300'/>
                </button>
                <button className='arrow-btn' onClick={()=>handleNavigation('next')}>
                <MdOutlineArrowCircleRight className=" w-10 h-10 text-purple-300"/>
                </button>
            </div>
        </div>
        <div className='flex border border-black-300 bg-black-200 rounded-lg h-96 md:h-full '>
        {/* <input className='bg-white-500 mx-0 my-0 p-0'
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      /> */}
      
                <Canvas className=''>
                    <ambientLight intensity={10} color="#b890ba" />
                    <directionalLight position={[10, 10, 5]}  />
                  
                     <OrbitControls enablePan enableZoom={false} enableRotate maxPolarAngle={Math.PI/2}/>
                    <Center>
                        <Suspense fallback={<CanvasLoader/>}>
                            <group scale={2} position={[-0.3,-2.5,-2]} rotation={[0.01,0,0]}>
                                <DemoComp texture={currentProject.texture}/>
                            </group>
                        </Suspense>
                    </Center>
                </Canvas>
        </div>
    </div>
    </section>
  )
}

export default Project