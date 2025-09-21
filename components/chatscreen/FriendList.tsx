"use client";
import React, { useEffect, useState } from "react";
import FriendBox from "./FriendBox";
import AiBox from "./AiBox";
import axiosInstance from "@/utils/axiosInstance";
import { User } from "@/constant/type";

 
const FriendList = () => {
  const [users, setUsers] = useState<User[]>([]); // ✅ Ensure it's an array

  const getAllFriend = async () => {
    try {
      const id=localStorage.getItem("userId");
      const res = await axiosInstance.get(`/user/${id}`);
      console.log(res.data);
      setUsers(res.data); // ✅ Ensure response data is correctly set
    } catch (error) {
      console.error("Error fetching friends:", error);
    }
  };

  useEffect(() => {
    getAllFriend();
  }, []);

  return (
    <section className="friendlist overflow-y-scroll flex flex-col w-[25%] rounded-md">
      <AiBox />

      {users?.map((user) => (
        <FriendBox key={user?.userId} user={user} /> // ✅ Added key & passed user prop
      ))}
    </section>
  );
};

export default FriendList;
