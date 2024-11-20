import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='footer w-full  mt-14'>
      <div className="flex justify-around items-cente py-8 px-10">
            <ul className="f-lists flex flex-col gap-4 ">
                <b className='text-second text-2xl'>Products</b>
                <li className='text-slate-500'> <FiExternalLink size={15} /> Chat </li>
                <li className='text-slate-500'> <FiExternalLink size={15} /> Themes</li>
                <li className='text-slate-500'> <FiExternalLink size={15} /> Streams</li>

            </ul>

            <ul className="f-lists flex flex-col gap-4 ">
                <b className='text-second text-2xl'>Service</b>
                <li className='text-slate-500'> <FiExternalLink size={15} />Files</li>
                <li className='text-slate-500'> <FiExternalLink size={15} />Analytics</li>
                <li className='text-slate-500'> <FiExternalLink size={15} />Supports</li>

            </ul>

          

            <ul className="f-lists flex flex-col gap-4 ">
                <b className='text-second text-2xl'>Resources</b>
                <li className='text-slate-500 '>
                <FiExternalLink size={15} />
                    Help Center</li>
                <li className='text-slate-500'> <FiExternalLink size={15} />Feedback</li>
                <li className='text-slate-500'> <FiExternalLink size={15} />Blog</li>
                <li className='text-slate-500'> <FiExternalLink size={15} />Stats</li>


            </ul>

            <ul className="f-lists flex flex-col gap-4 ">
                <b className='   text-second text-2xl'>About developer</b>
                <p className='text-slate-400'>
                    You can reach to the developer with the social handles listed below. 
                </p>
                <li className='flex gap-10 items-center justify-start f-icons'>
                   <Link target='_blank' href={'https://www.facebook.com/prashant.acharya.28'} ><FaFacebook color='white' size={22}/></Link>
                    
                   <Link target='_blank' href={'https://www.linkedin.com/in/prashant-acharya1/'} ><FaLinkedin color='white' size={22}/></Link>
                   <Link target='_blank' href={'https://github.com/prashant48653c'} ><FaGithub color='white' size={22}/></Link>

                </li>
                 

            </ul>
        </div> 
        <hr className='mx-11 my-5' />

        <p className='text-slate-200 text-center pt-4'>
        © Copyright 2024 Superchat, inc. All Rights Reserved. Various trademarks held by their respective owners. </p> 
    </footer>
  )
}

export default Footer