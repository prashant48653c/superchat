import Image from 'next/image'
import React from 'react'
import { BiSend } from 'react-icons/bi'
import { FaFileUpload, FaGift, FaMicrophone } from 'react-icons/fa'
import ImgTypeChat from './chattype/ImgTypeChat'
import VoiceTypeChat from './chattype/VoiceTypeChat'
import Alert from './chattype/Alert'
import { CiImageOn } from 'react-icons/ci'
import { IoGiftOutline, IoMicOutline } from 'react-icons/io5'
import VoiceRecorder from '../media/Voice'
import TextChat from './chattype/TextChat'

const ChatBox = () => {
  return (
    <section className='chatbox overflow-y-auto relative flex w-[75%] h-full gap-4 flex-col '>
      

   <ImgTypeChat/>
   <VoiceTypeChat/>
 <TextChat/>
 <TextChat/>

 
<Alert/>
<TextChat/>
<TextChat/>

<Alert/>
 







<div className="keyboard flex w-[60rem] gap-8 p-4 rounded-3xl  items-center justify-between px-4">
<input placeholder='Your text' type="text"className='w-[60%] px-3  '/>
<div className='flex items-center justify-center gap-5'>
<IoGiftOutline title='Gif' size={20}/>
<VoiceRecorder/>

<CiImageOn title='Gallery' size={20}/>
<BiSend title='Notification' color='#eee' size={20}/>
</div>


</div>
    </section>
  )
}

export default ChatBox