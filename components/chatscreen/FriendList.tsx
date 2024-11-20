import React from 'react'
import FriendBox from './FriendBox'

const FriendList = () => {
  return (
    <section className='friendlist flex flex-col w-[25%] rounded-md  '>
        <FriendBox/>
        <FriendBox/>
        <FriendBox/>
        <FriendBox/>

    </section>
  )
}

export default FriendList