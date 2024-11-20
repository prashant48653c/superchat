import Image from 'next/image'
import React from 'react'
 

const FriendBox = () => {
return (
<div className='flex friendbox mt-5 gap-3 p-3 py-4 m-2 rounded-3xl items-center border border-black relative'>

    <div className="absolute top-3 left-0 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
        <b className=' font-extrabold text-sm text-white'>1</b>
    </div>
    <div className="absolute top-[66%] left-[17%] w-4 h-4 flex items-center justify-center bg-green-400 rounded-full">
        <b className=' hidden font-extrabold text-sm text-white'>1</b>
    </div>



<Image src={'/pp.jpg'} width={100} height={100} className='pp' alt='profile-picture' />
<div className="flex flex-col justify-start ">
    <h6>Richard Wilson </h6>
    <p className='text-[1rem] '>I will be adding you soon to the meetin...</p>
</div>
</div>
)
}

export default FriendBox