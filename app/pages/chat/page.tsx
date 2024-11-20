import React from 'react'
import '@/styles/chat.css'
import FriendList from '@/components/chatscreen/FriendList'
import MiniNav from '@/components/chatscreen/MiniNav'
import ChatBox from '@/components/chatscreen/ChatBox'
import Rightbar from '@/components/chatscreen/Rightbar'
const ChatScreen = () => {
  return (
    <main className='chatscreen p-6 rounded-md gap-10 h-full w-full flex justify-start'>
       <FriendList/>

       <section className="chat-nav  w-full ">
        <MiniNav/>
        <section className="chat-rightbar mt-4 w-full flex gap-4 justify-between ">
            <ChatBox/>
            <Rightbar/>
        </section>
       </section>


    </main>
  )
}

export default ChatScreen