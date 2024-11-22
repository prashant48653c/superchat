import Image from 'next/image'
import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { TbFriends } from 'react-icons/tb'

const page = () => {
  return (
    <section className='text-white friend-screen p-4 relative bg-foreground w-full h-full'>
     
        <div className="profile-section  ">
            <div className="profile-images relative w-full">
            <Image width={200} height={200} className='w-[100vw] rounded-3xl h-[25rem]' alt='cover-image' src={'/ballon.jpg'}/>
                <div className='w-[15rem] absolute bottom-[-7rem] left-[2rem] h-[15rem] rounded-full border-[.6rem] border-lime-50  overflow-hidden'>
                <Image className='rounded-full' width={150} height={150} alt='profile-image' src={'/pp.jpg'}/>
                </div>
            
            </div>

           <div className="intro px-[2rem] mt-[10rem] flex flex-col gap-2">
            <h3 className='text-3xl font-semibold' >Prashant Acharya</h3>
            <p>Hello EveryOne! I enjoy playing video games.❤️😁</p>
            </div> 

            <div className=" px-[2rem] stat flex mt-3 gap-2">
                <div className='flex items-center gap-1 '>
                    <FaUserFriends size={20}/>
                    <p className="text-md font-extrabold">234 friends</p>
                </div>
            </div>

        </div>
        </section>
  )
}

export default page