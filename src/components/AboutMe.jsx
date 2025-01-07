import React,{useState} from 'react'
import me from "/images/Me.png"
import tools from "/images/techstack.jpg"
import Globe from "react-globe.gl"
import Button from './Button'
import g3 from "/images/grid3.png"
import g4 from "/images/grid4.png"
import { MdContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import Spline from '@splinetool/react-spline';
import { CardSpotlight } from './ui/card-spotlight'
const AboutMe= ()  =>{
    const [copy,setCopy]=useState(false);
    const handleCopy=()=>{
        navigator.clipboard.writeText('sebhat1504@gmail.com');
        setCopy(true);
        setTimeout(()=>{
            setCopy(false);
        },2000);
    }
  return (
    
   <section className='sm:px-10 px-5  my-20   ' id="about">
      <CardSpotlight className='pb-0 pt-0 z-0' >
<div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
   {/* card 1 */}
   
    <div className='z-50 col-span-1 xl:row-span-3 mt-[60px]'>
  
        <div className=' grid-container'>
      
            <img src={me} className='w-full sm:h-[276px] h-fit object-contain'/>
<div className=''>
    <p className='grid-headtext'>
        Hi, I'm Sehaj
    </p>
    <p className='grid-subtext'>I’m a penultimate-year B.Tech Computer Science student specializing in full-stack web development, focusing on creating dynamic, interactive, and user-centric applications. I stay current with emerging technologies to deliver scalable, efficient solutions</p>

</div>

        </div>
       
    </div>
   
     {/* card 2 */}
    <div className=' z-50 col-span-1 xl:row-span-3 sm: mt-[0px] md:mt-[60px]' >
        <div className='grid-container'>
            <img src={tools} className='w-full sm:h-[276px] h-fit object-contain'/>
        <div>
            <p className='grid-headtext'>
            TechStack
            </p>
            <p className='grid-subtext'>
            I work with modern frontend frameworks like React and Next.js to build dynamic, responsive user interfaces. For 3D rendering and AR experiences, I utilize Three.js and AR.js
            I use Node.js and Express for scalable backend solutions, integrating RESTful APIs for smooth data exchange.
           
            </p>
        </div>
        </div>

    </div>
     {/* card 3 */}
    <div className='z-50 col-span-1 xl:row-span-4 xl:mt-[60px]'>
        <div className='grid-container2 '>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
            <Globe height={356} width={356} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" labelsData={[{
    lat:12.97,lng:77.59,text:"I'm here!",color:"white",size:100,
}]} />
  


            </div>
            <div className=' pb-[30px]'>
                <p className='grid-headtext'> I work remotely across most timezones</p>
                <p className='grid-subtext'>I'm based in Bengaluru, India and open to remote work worldwide.</p>
              <div className='flex flex-col gap-0 justify-center m-0 p-0'>
               <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                </a>
                <a href="#projects">
                <Button name="View My Work" isBeam containerClass="w-full mt-3"/>
                </a>
                </div>
            </div>
        </div>
    </div>
     {/* card 4*/}
    <div className='z-50 xl:col-span-2 xl:row-span-3'>
        
        <div className='grid-container2 '>
            <img src={g3} className='w-full sm:h-[276px] h-fit object-contain'/>
            <div className='pb-[0px]'>
                
                <p className='grid-headtext'>My passion for coding</p>
            <p className='grid-subtext'>I thrive on solving challenges and transforming ideas into efficient code, seeing coding as both a craft and a creative pursuit.</p>
            </div>
        </div>

    </div>
     {/* card 5 */}
    <div className='w-auto z-50 xl:col-span-1 xl:row-span-2 xl:mt-[-110px]'>
        <div className='w-auto grid-container2 '>
        <img src={g4} className='w-full md:h-[156px] sm: h-[176px] h-fit object-cover sm: object-top '/>
        <div className=' pb-6 sm: mt-[-20px] md:mt-[0px] xl:mt-[0px] space-y-2 xl:space-y-6 xl:pb-[12px] '>
            <p className='grid-subtext text-center'>Contact Me</p>
        <div className='copy-container' onClick={handleCopy}>
        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">sebhat1504@gmail.com</p>
            {copy?
              (
               <IoMdCheckmark className='text-white'/>
               ) :
              (
                 <MdContentCopy className='text-white'/>
            )
           
        }
      
        </div>
        </div>
        </div>
    </div>
    </div>
    </CardSpotlight>

   </section>
  );
};

export default AboutMe;

const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0"
      >
        {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0"
        /> */}
      </svg>
    );
  };
// import React,{useState} from 'react'
// import me from "../assets/images/Me.png"
// import tools from "../assets/images/grid2.png"
// import Globe from "react-globe.gl"
// import Button from './Button'
// import g3 from "../assets/images/grid3.png"
// import g4 from "../assets/images/grid4.png"
// import { MdContentCopy } from "react-icons/md";
// import { IoMdCheckmark } from "react-icons/io";
// import { HoverEffect } from "./ui/card-hover-effect";

// const AboutMe=()=> {
//     const [copy,setCopy]=useState(false);
//     const handleCopy=()=>{
//         navigator.clipboard.writeText('sebhat1504@gmail.com');
//         setCopy(true);
//         setTimeout(()=>{
//             setCopy(false);
//         },2000);
//     }
//   return (
//     (<div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>)
//   );
// }
// export const projects = [
//   {
//     title: "Hi, I'm Sehaj!",
//     description:
//       "With 1 year of experience",
//     link: "https://stripe.com",
//   },
//   {
//     title: " TechStack",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "",
//     description:
//       "I work remotely across most timezones.",
//     link: "https://google.com",
//   },
//   {
//     title: "My passion for coding",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Contact Me",
//     description:
//       "sebhat1504@gmail.com",
//     link: "https://amazon.com",
//   },
  
// ];
// export default AboutMe;