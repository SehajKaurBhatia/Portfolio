import React,{Suspense, useState} from 'react'
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import ThreeD from './ThreeDcomp/ThreeD';
import ReactLogo from './ThreeDcomp/ReactLogo';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from './CanvasLoader';

const NavItems=()=>{
    return(
        <ul className="nav-ul">
  {[
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ].map((item, index) => (
    <li key={index} className="nav-li">
      <a href={item.link} className="nav-li_a">{item.name}</a>
    </li>
  ))}
</ul>
    )
}
const NavBar = () => {
    const [isopen,setOpen]=useState(false);
    const handleToggle=()=>{
        setOpen(!isopen);
        
    }
  return (
    <>
   
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 text-white'>
    <div className='max-w-7xl mx-auto'>
<div className=' flex justify-between items-center mx-auto c-space py-6'>
    <div className=' z-50 flex items-center gap-5 '>
        {/* <Canvas>
            <Suspense fallback={<CanvasLoader/>}>
        <ReactLogo/>
        </Suspense>
        </Canvas> */}
       
<ThreeD className=" self-center"/>
<a href="/" className='text-neutral-500 font-bold text-2xl hover:text-violet-400 place-content-center'>Sehaj</a>
</div>
{isopen?(
    <AiOutlineClose className="hover:cursor-pointer md:hidden  sm: absolute top-5 right-5 z-50"onClick={handleToggle}/>
):(
<FaHamburger className="hover:cursor-pointer md:hidden"onClick={handleToggle} />
)}
 {/* Navigation Items - Only show on small screens when open */}
 <nav className={`sm:flex ${isopen ? "block" : "hidden"} `}>
              <NavItems />
            </nav>

</div>
    </div>
    </header>
    </>
  )
}

export default NavBar