import FriendScreen from '@/components/profile/FriendScreen'
import React from 'react'

const page = () => {
  return (
    <section className='friend-screen p-4 relative bg-foreground w-full h-full'>
      <div className="absolute max-w-full top-4 right-4">
        <button className='bg-slate-800 text-white rounded-3xl  hover:bg-slate-600 text-center border p-4'>Back to chat</button>
      </div>
      <h2 className='py-4 bg-foreground text-3xl text-white font-semibold'>Friend Request:</h2>
      <FriendScreen />

      <h2 className='py-4 bg-foreground text-3xl text-white font-semibold'>You may know:</h2>

      <FriendScreen  />

    </section>
  )
}

export default page