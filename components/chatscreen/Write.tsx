"use client";
import { BiSend } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import VoiceRecorder from "../media/Voice";
import { IoGiftOutline } from "react-icons/io5";
import Gif from "../media/Gif";
import { useState } from "react";
 
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

import { FaLocationPin } from "react-icons/fa6";
import { ComponentWithGeolocation } from "../utils/LocationTrack";
import { useRouter } from "next/navigation";

const Write = () => {
  const router=useRouter();
  const [status,setStatus]=useState(false)
  const [mapLink,setMapLink]=useState('')
  const [gifStatus, setGifStatus] = useState(false);
  const driverObj = driver({
    showProgress: true,
   
    popoverClass:"driver",
    steps: [
      { element: '.keyboard', popover: { title: 'Write your text!', description: 'This is where you will write your text with additional feature.' } },
      { element: '.gif-icon', popover: { title: 'Add Gif', description: 'Click to get access to different gif and search for it' } },
      { element: '.voice', popover: { title: 'Record Voice', description: 'Record your sweet voice to send to your friend!' } },
      { element: '.gallery', popover: { title: 'Gallery!', description: 'Send your files to your friend.' } },
      { element: '.send', popover: { title: 'Send it!', description: 'Send your messege to your friend.' } },
    ]
  });
  // To show how to use
//  driverObj.drive();
  // const askAI = async (prompt: string) => {
  //   const res = await axios.post(
  //     "http://localhost:9000",
  //     { prompt },
  //     {
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  //   console.log(res);
  // };

  // askAI('who is current pm of nepal');
  return (
    <div className="keyboard border  border-red-900  flex  gap-8 p-4 rounded-3xl  items-center justify-between px-4">
      <input placeholder="Your text" type="text" className="w-[60%] px-3  " />
      <div className="flex items-center justify-center gap-5">
        <IoGiftOutline
        className="gif-icon"
          onClick={() => setGifStatus(!gifStatus)}
          title="Gif"
          size={20}
        />
        <div className="voice">
        <VoiceRecorder />

        </div>
        
        <CiImageOn className="gallery" title="Gallery" size={20} />
        <FaLocationPin onClick={()=>setStatus(!status)} className="gallery" title="Gallery" size={20} />
        <BiSend title="Send" className="send" color="#eee" size={20} />
      </div>
      {
                status?
                (
                    <ComponentWithGeolocation setMapLink={setMapLink}/>
                ):""
            }
      {gifStatus && <Gif />}
    </div>
  );
};

export default Write;
