"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { motion } from "motion/react";
import axiosInstance from "@/utils/axiosInstance";

const Page = () => {
  const [profile, setProfile] = useState<any>(null);
   const getUser=async()=>{
     const id =localStorage.getItem("userId");
     if(!id) return;
     const res=await axiosInstance.get(`/user/single/${id}`);
     setProfile(res.data)
     console.log(res)
   }
   useEffect(()=>{getUser()},[]);
  const images = [1, 2, 3, 4, 5, 6];
  return (
    <section className="text-white h-min-full friend-screen p-4 relative bg-foreground w-full ">
      <div className="profile-section  ">
        <div className="profile-images relative w-full">
          <Image
            width={200}
            height={200}
            className="w-[100vw] rounded-3xl object-cover h-[25rem]"
            alt="cover-image"
            src={"/ballon.jpg"}
          />
          <motion.div
            whileHover={{ rotate: 180, dur: 1111 }}
            animate={{ rotate: 0 }}
            className="w-[15rem] absolute bottom-[-7rem] bg-green-50 left-[2rem] h-[15rem] rounded-full border-[.6rem] border-lime-50  overflow-hidden"
          >
            <Image
              className="rounded-full"
              width={150}
              height={150}
              alt="profile-image"
              src={"/pp.jpg"}
            />
          </motion.div>
        </div>
        <div className="w-full flex relative justify-end ">
          <div className="flex absolute top-10 right-10">
            <p className=" py-2 px-4 font-semibold hover:bg-blue-400 rounded-lg bg-blue-500 text-white">
              Newbie Chatter
            </p>
          </div>
        </div>

        <div className="intro px-[2rem] mt-[10rem] flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">{profile?.fullName}</h3>
          <p>Hello EveryOne! I enjoy playing video games.❤️😁</p>
        </div>

        <div className=" px-[2rem] stat flex mt-3 gap-2">
          <div className="flex items-center gap-1 ">
            <FaUserFriends size={20} />
            <p className="text-md font-extrabold">234 friends</p>
          </div>
        </div>
      </div>

      <div className="gallery-section flex-wrap p-8 flex gap-12 mt-10 justify-start">
        {images.map((item) => {
          return (
            <motion.div
              drag
              className="bg-slate-800 p-3 rounded-xl"
              key={item}
              dragConstraints={{ left: 0, top: 0, right: 1000, bottom: 1000 }}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              whileTap={{ scale: 0.8 }}
              animate={{ opacity: 1 }}
            >
              <Image
                src={"/ballon.jpg"}
                width={300}
                height={230}
                className="rounded-2xl"
                alt="gallery"
              />
              <div className="w-[30rem] py-3 pt-8">
                <p className="text-2xl">
                  {" "}
                  Had a lot of fun in hot air ballon in Pokhara with a lot of
                  boat riding
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
