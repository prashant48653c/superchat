'use client'
import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import { requestNotificationToken } from '@/firebase'
import axiosInstance from '@/utils/axiosInstance'

const FriendScreen = () => {
  const [token,setToken]=useState<string>('')
  const sendTokenToServer = async (token:string) => {
    if (!token) {
      console.warn("No token available to send.");
      return;
    }
  
    try {
      const response = await axiosInstance.post("/auth/saveToken", {token});
        console.log(response.data)
     
    } catch (error) {
      console.error("Error sending token to server:", error);
    }
  };
  
  useEffect(()=>{
    requestNotificationToken().then((token)=>{
      if(!token){
        return
      }
      setToken(token);
      sendTokenToServer(token)
    })
  },[])

  
  const sendFriendRequest=async()=>{
    const res=await axiosInstance.post('/auth/sendNotification',{token,message:"Prashant send you a friend request",toId:Number(11),fromId:Number(10)})
    console.log(res)
  }
  
  return (  
    <section className='w-full gap-4 p-4 bg-foreground flex flex-wrap justify-start items-start h-max'>
        <button onClick={sendFriendRequest}>Send</button>
    {/* <Profile  /> */}
    <Profile/>
     


    </section>
  )
}

export default FriendScreen