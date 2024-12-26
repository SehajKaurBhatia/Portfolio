import React from 'react'
import { PiGithubLogoFill } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border=black-300 flex justify-between items-center flex-wrap gap-5'>
<div className='text-white-500' flex gap-2>
    <p>Terms & Conditions</p>
    <p></p>
    <p>Privacy Policy</p>
</div>
<div className='lg:ml-20 flex gap-3'>
    <div className='social-icon'>
        <a href="https://github.com/SehajKaurBhatia" target="_blank">
    <PiGithubLogoFill className='text-white w-6 h-6' />
    </a>
    </div>
    <div className='social-icon' >
        <a href="https://www.linkedin.com/in/sehaj-bhatia-9abb99274/" target="_blank">
<GrLinkedin className='text-white w-6 h-6'/>
</a>
    </div>
    <div className='social-icon'>
        <a href="https://www.instagram.com/accounts/onetap/?next=%2F" target='_blank'>
    <FaInstagramSquare className='text-white w-6 h-6' />
    </a>
    </div>
</div>
<p className='text-white-500'>©️ 2024 Sehaj. All rights reserved.</p>
    </section>
  )
}

export default Footer