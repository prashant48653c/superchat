"use client";
import { User } from "@/constant/type";
import useUserStore from "@/store/userStore";
import axiosInstance from "@/utils/axiosInstance";
import UseSocket from "@/utils/socketConnect";
import Image from "next/image";
import React, { act } from "react";
import toast from "react-hot-toast";

const FriendBox = ({ user }: { user: User }) => {
  const socket = UseSocket();
const { setActiveUser,setRoomId,activeRoomId } = useUserStore();

  const handleConnection = async (user:any) => {
    setActiveUser(user)
    const id=user.userId;
    const myId = localStorage.getItem("userId");
   const response= await axiosInstance.post("/room/check",{senderId:myId,receiverId:id})
    console.log(response)
    const roomId=response.data.id;
    setRoomId(roomId)
   socket?.emit("joinGroup",roomId)
  };

  const fetchMessage=async()=>{
    try {
      const id = activeRoomId;
      const res=await axiosInstance.get(`/room/${id}`);
      console.log(res,"Your messages")
    } catch (error) {
      toast.error("Error retriving message");
      console.log(error)
    }
  }

  return (
    <div
      onClick={()=>handleConnection(user)}
      className="flex friendbox mt-5 gap-3 p-3 py-4 m-2 rounded-3xl items-center border border-black relative"
    >
      <div className="absolute top-3 left-0 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
        <b className=" font-extrabold text-sm text-white">1</b>
      </div>
      <div className="absolute top-[66%] left-[17%] w-4 h-4 flex items-center justify-center bg-green-400 rounded-full">
        <b className=" hidden font-extrabold text-sm text-white">1</b>
      </div>

      <Image
        src={"/pp.jpg"}
        width={100}
        height={100}
        className="pp"
        alt="profile-picture"
      />
      <div className="flex mes-detail flex-col justify-start ">
        <h6>{user.fullName} </h6>
        <p className="text-[1rem] ">
          I will be adding you soon to the meetin...
        </p>
      </div>
    </div>
  );
};

export default FriendBox;
