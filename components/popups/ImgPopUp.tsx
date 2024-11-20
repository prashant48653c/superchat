'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';
import {saveAs} from 'file-saver'
interface imgType{
    imageLink:string;
}


const ImgPopUp = ({imageLink}:imgType) => {
  const downloadTrigger=()=>{
      const fileUrl='https://www.wwe.com/f/styles/gallery_img_l/public/all/2017/06/001_913254--d98b46778b938e891caf6b821dcd502a.jpg';
     saveAs(fileUrl,'photo.jpg');
    
  }
  const[status,setStatus]=useState(true);
  const toggleImage=()=>{
    setStatus(!status);
  }
  return (
    <div  className={`absolute pop-img left-[10rem] bottom-16 z-10 p-5 rounded-lg ${status ? '' : 'hidden'}`}>

        <Image width={500} height={500} alt='image' className='rounded-2xl' src={imageLink} />
        <div className="flex gap-5 items-center justify-self-center p-8">
        <div className="mini-icon rounded-full">
                <AiOutlineClose title='Close' onClick={toggleImage} size={20}/>
            </div>
        <div className="mini-icon rounded-full">
                <BiDownload title='Download' onClick={downloadTrigger} size={20}/>
            </div>


        </div>
    </div>
  ) 
}

export default ImgPopUp