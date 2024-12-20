
import React from 'react'
import { BiSend } from 'react-icons/bi'
import ImgTypeChat from './chattype/ImgTypeChat'
import VoiceTypeChat from './chattype/VoiceTypeChat'
import Alert from './chattype/Alert'
import { CiImageOn } from 'react-icons/ci'
import { IoGiftOutline, IoMicOutline } from 'react-icons/io5'
import VoiceRecorder from '../media/Voice'
import TextChat from './chattype/TextChat'
import Write from './Write'

const ChatBox = () => {
  return (
    <section className='chatbox overflow-y-auto relative flex w-[75%] h-full gap-4 flex-col '>
<TextChat />

      <ImgTypeChat />
      <VoiceTypeChat />
      <TextChat />
      <TextChat />
      <Alert />
      <TextChat />
      <TextChat />
      <Alert />



      <div className="w-full h-[5rem] relative flex border border-lime-900 items-center justify-center">

        <Write />

      </div>




    </section>
  )
}

export default ChatBox