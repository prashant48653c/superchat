'use client'
import ImgPopUp from '@/components/popups/ImgPopUp'
import Image from 'next/image'
import React, { useState } from 'react'

const ImgTypeChat = () => {
  const[status,setStatus]=useState(false);
  const toggleImage=()=>{
    console.log("Image clicked!")
    setStatus(!status);
  }
  return (
    <>
         <div  className="img-message-container p-4">
      <Image onClick={toggleImage} className='image-messege' width={100} height={200} alt='image-message' src={'/ballon.jpg'} />
    </div>
    {/* Conditional rendering of the popup */}
    {status && (
        <ImgPopUp imageLink={'/ballon.jpg'} />
      )}
  
    </>
  )
}

export default ImgTypeChat