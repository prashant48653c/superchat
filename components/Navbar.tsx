import { links } from '@/constant/landing';
import React from 'react'
import { RiChat1Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className='nav w-full flex items-center justify-between' >
<div className="logo flex items-end justify-center gap-3">
<RiChat1Line size={28} />
<b>SuperChat</b>
</div>

<ul className="links flex justify-start items-center gap-4">
    {
        links.map((item)=>{
            return <li  key={item}>{item}</li>
        })
        
    }
    <li  ><a href="https://prashant1.netlify.app/">Developer</a></li>
</ul>



    </nav>
  )
}

export default Navbar