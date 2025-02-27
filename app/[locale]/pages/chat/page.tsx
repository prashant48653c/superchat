import React from 'react'
import '@/styles/chat.css'
import FriendList from '@/components/chatscreen/FriendList'
import MiniNav from '@/components/chatscreen/MiniNav'
import ChatBox from '@/components/chatscreen/ChatBox'
import Rightbar from '@/components/chatscreen/Rightbar'
import WholeChatBar from '@/components/chatscreen/WholeChatBar'
const ChatScreen = () => {
  return (
    <main className='chatscreen p-6 rounded-md gap-10 h-full w-full flex justify-start'>
       <FriendList/>

      <WholeChatBar/>


    </main>
  )
}

export default ChatScreen