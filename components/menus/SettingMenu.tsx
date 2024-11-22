import React from 'react'
import { LuLogOut } from 'react-icons/lu'
import { MdDarkMode } from 'react-icons/md'

const SettingMenu = () => {
  return (
    <div className="right-profiles border-white border absolute right-[2rem] p-3 z-10 w-[20rem] flex flex-col justify-start">
    <h6 className='text-2xl font-semibold pb-4'>Settings</h6>
      <div className='gap-2 py-2 my-2 rounded-3xl flex items-center justify-start '>
      <MdDarkMode size={22}/>
      <p className='text-md'>Dark Mode</p>
    </div>
   
    <div className='gap-2 py-2 my-2 rounded-3xl flex items-center justify-start '>
      <LuLogOut size={22}/>
      <p className='text-md'>Logout</p>
    </div>

    </div>
  )
}

export default SettingMenu