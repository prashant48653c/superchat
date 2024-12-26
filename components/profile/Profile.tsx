import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className="profile-box bg-slate-800 flex items-center flex-col   rounded-xl p-4 w-[20rem]">
        <Image width={70} height={70 } className='rounded-lg' alt='profile' src={'/pp.jpg'} />
        <h5 className='text-white text-2xl font-semibold py-2'>Lekhnath Poudel</h5>
        <p className='text-slate-200'>SDE Intern</p>
        <i className='text-sm pb-4 text-slate-300'>245 friends</i>
        <div className='gap-2 flex items-center justify-center'>
        <button className='bg-slate-500 text-white p-2 rounded-lg text-center'>Connect</button>
        <button className='bg-red-500 text-white p-2 rounded-lg text-center'>Deny</button>
    
        </div>
    </div>
  )
}

export default Profile