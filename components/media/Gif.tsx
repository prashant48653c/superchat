'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Gif = () => {
    const[item,setItem]=useState<string[]>([]);
    const[searchTerm,setSearchTerm]=useState('today');


    const getGif=async()=>{
        const gifLink = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=xVgR60pKhY2lCCFZJJ7SSzQ6Svtb2r7j&limit=5`;
        const res = await axios.get(gifLink)
      
        const arr: string[] = res.data.data.map((item: any) => item.images.fixed_height.url);

        
       setItem(arr);
       
    }
    useEffect(()=>{
getGif();
    },[])
  
  return (
    <div className='absolute top-[-25rem] right-0 p-3 bg-slate-700 rounded-xl w-max flex flex-col h-[25rem]'>
        <div className="flex p-2 gap-2 mb-4 rounded-2xl bg-foreground items-center justify-between">

        <input onChange={(e)=> setSearchTerm(e.target.value)} type="text" className='p-2 bg-foreground' placeholder='Search Gifs' />
        <BiSearch onClick={getGif} className='hover:cursor-pointer' size={20}/>
        </div>

        <div className="results flex flex-col overflow-y-scroll ">
            {
                item.map((gif,i)=>{
                  
                    return(
                        <div key={i} className="flex items-center justify-center gap-1 w-full h-full">
                            <img src={gif} className='rounded-xl' style={{ width: '20rem', height: '20rem', objectFit: 'contain' }} alt='gif'/>
                        </div>

                    )
                })
            }
           

            

             

        </div>

    </div>
  )
}

export default Gif