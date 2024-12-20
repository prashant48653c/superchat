'use client'
import { BiSend } from 'react-icons/bi'
import { CiImageOn } from 'react-icons/ci'
import VoiceRecorder from '../media/Voice'
import { IoGiftOutline } from 'react-icons/io5'
import Gif from '../media/Gif'
import { useState } from 'react'

const Write = () => {
  const[gifStatus,setGifStatus]=useState(false);
  const[galleryStatus,setGalleryStatus]=useState(false);

  return (

   <div className="keyboard border  border-red-900  flex  gap-8 p-4 rounded-3xl  items-center justify-between px-4">
<input placeholder='Your text' type="text"className='w-[60%] px-3  '/>
<div className='flex items-center justify-center gap-5'>
<IoGiftOutline onClick={()=>setGifStatus(!gifStatus)} title='Gif' size={20}/>
<VoiceRecorder/>

<CiImageOn title='Gallery' size={20}/>
<BiSend title='Send' color='#eee' size={20}/>
</div>

{
  gifStatus && (<Gif />)
}

</div>
  )
}

export default Write