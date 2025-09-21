'use client'
import { ComponentWithGeolocation } from '@/components/utils/LocationTrack'
import { useRouter } from "@/i18n/routing";
import React, { useState } from 'react'
 
import { IoCallOutline } from 'react-icons/io5'
import { MdFullscreen } from 'react-icons/md'

const LocationAlert = () => {
  
    
  return (
    <div className='alert flex justify-between p-4 rounded-xl items-center'>
      <div className="flex gap-3 items-center justify-start">

        <IoCallOutline  size={18} color='white'/>
        <p><b>Bikash Shrestha</b> started a video call.</p>
      </div>
      <div className="mini-icon rounded-full">
                <MdFullscreen  title='Join' size={18}/>
            </div>
          
    </div>
  )
}

export default LocationAlert