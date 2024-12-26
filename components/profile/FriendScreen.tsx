import Image from 'next/image'
import React from 'react'
import Profile from './Profile'

const FriendScreen = () => {
  return (  
    <section className='w-full gap-4 p-4 bg-foreground flex flex-wrap justify-start items-start h-max'>
        
    <Profile  />
    <Profile/>
     


    </section>
  )
}

export default FriendScreen