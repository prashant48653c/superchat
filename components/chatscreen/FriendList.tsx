import React from 'react'
import FriendBox from './FriendBox'
import AiBox from './AiBox'

const FriendList = () => {

  
  return (
    <section className='friendlist overflow-y-scroll flex flex-col w-[25%] rounded-md  '>
      <AiBox/>
        <FriendBox/>
        <FriendBox/>
        <FriendBox/>
        <FriendBox/>
        <FriendBox/>

        <FriendBox/>
        <FriendBox/>

    </section>
  )
}

export default FriendList