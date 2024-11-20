import React from 'react'
import { AiFillAccountBook, AiFillNotification, AiOutlineNotification } from 'react-icons/ai'
import { BiBell, BiSearch } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { MdAccountCircle } from 'react-icons/md'
import { RiAccountCircleLine } from 'react-icons/ri'

const MiniNav = () => {
  return (
    <nav className='mininav flex items-center justify-between w-full'>
        <h5>Jonathan Wilson</h5>
        <div className="menu flex items-center justify-center gap-6  ">

            <div className='searchbar rounded-full flex gap-3 items-center justify-center'>
            <BiSearch size={20}/>
            <input placeholder='Search' type="text" />
            </div>

            <div title='Settings' className="mini-icon rounded-full">
                <FiSettings size={20}/>
            </div>
            <div title='Notification' className="mini-icon relative rounded-full">
                <BiBell  size={20}/>
                <div className="absolute top-0 left-10 w-7 h-7 flex items-center justify-center bg-red-600 rounded-full">
        <b className=' font-extrabold text-sm text-white'>1</b>
    </div>
            </div>
            <div title='Account' className="mini-icon rounded-full">
                <RiAccountCircleLine size={20}/>
            </div>

        </div>
    </nav>
  )
}

export default MiniNav