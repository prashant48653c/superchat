 'use client'
import React from 'react'
import { FaMicrophone, FaPhone, FaStream, FaVideo } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'

import dynamic from 'next/dynamic'
 
const AdInTake = dynamic(() => import('../../adcomponent/AdInTake'), { ssr: false })


const Rightbar = () => {
  return (
    <section className='rightbar flex w-[25%]  overflow-y-auto flex-col gap-3'>
        <div className="right-icons p-4 flex   justify-evenly items-center">
         <FaPhone title='Audio Call' className='r-btn' size={20}/>
         <FaVideo title='Video Call' className='r-btn' size={20}/>
         <FaStream className='r-btn' size={20}/>
 

         

        </div>

        <div className="right-profiles flex flex-col justify-start">
        <h6 className='text-2xl font-semibold'>Members</h6>
          <div className='gap-2 py-2 my-2 rounded-3xl flex items-center justify-start '>
          <MdAccountCircle size={30}/>
          <p className='text-md'>Michal Jilion</p>
        </div>
        <div className='gap-2 py-2 my-2 rounded-3xl flex items-center justify-start '>
          <MdAccountCircle size={30}/>
          <p className='text-md'>Shrey Gupta</p>
        </div>
        <div className='gap-2 py-2 my-2 rounded-3xl flex items-center justify-start '>
          <MdAccountCircle size={30}/>
          <p className='text-md'>San Lee</p>
        </div>

        </div>

       {/* Ad */}
      <AdInTake dataAdFormat='auto' dataAdSlot='8397997281' dataFullWidthResponsive={true}/>
        
    </section>
  )
}

export default Rightbar