import React from 'react'
import { LuLogOut } from 'react-icons/lu'
import { MdAccountCircle, MdDarkMode } from 'react-icons/md'

const NotificationMenu = () => {
  return (
    <div className="right-profiles border-white border absolute right-[5rem] p-3 z-10 w-[28rem] flex flex-col justify-start">
    <h6 className='text-2xl font-semibold pb-4'>Notifications</h6>
      <div className='gap-2 py-2 my-2 rounded-3xl flex items-center justify-start '>
      <MdAccountCircle size={22}/>
      <p className='text-md'>Mahesh replied to your storey.</p>
    </div>
   
    <div className='gap-2 py-2 my-2 rounded-3xl flex items-center justify-start '>
      <MdAccountCircle size={22}/>
      <p className='text-md'>Jonathan posted a new picture.</p>
    </div>
    

    </div>
  )
}

export default NotificationMenu