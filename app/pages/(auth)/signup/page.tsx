import { signupDetail } from '@/constant/landing'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <section className='signup w-full py-7 flex flex-col h-max border-green-500 border-1  items-center'>
<h6 className='text-5xl font-semibold my-7' >Create a completely free account</h6>
<form action="" className="form flex flex-col gap-6 items-center">

   
    
    {
        signupDetail.map((item)=>{
            return (
                <div key={item.placeholder} className="input-item flex items-start flex-col  ">
                <label className='invisible' htmlFor="name">Enter your full name</label>
                <input placeholder={item.placeholder}  className='border-slate-400 p-3 text-2xl border rounded-sm w-[40rem] h-20' required type={item.type} />
                </div>
            )
        })
    }

    

    <button className='btn my-5 mb-9'>Sign up for free</button>

</form>
<b>Already have an account?
    <Link href={'/pages/login'} className='underline' > Sign In</Link>
     </b>
    </section>
  )
}

export default Signup