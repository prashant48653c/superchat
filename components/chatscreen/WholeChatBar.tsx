'use client'
import MiniNav from './MiniNav'
import ChatBox from './ChatBox'
import Rightbar from './Rightbar'

const WholeChatBar = () => {
  return (
    <section className="chat-nav  w-full ">
        <MiniNav/>
        <section className="chat-rightbar mt-4 w-full flex gap-4 justify-between ">
            <ChatBox/>
            <Rightbar/>
        </section>
       </section>
  )
}

export default WholeChatBar