import { loginDetail, signupDetail } from '@/constant/landing'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section className='signup w-full py-20 flex flex-col h-max border-green-500 border-1  items-center'>
<h6 className='text-5xl font-semibold my-7' >Welcome back!</h6>
<form action="" className="form flex flex-col gap-6 items-center">

   
    
    {
        loginDetail.map((item)=>{
            return (
                <div key={item.placeholder} className="input-item flex items-start flex-col  ">
                <label className='invisible' htmlFor="name">Enter your full name</label>
                <input placeholder={item.placeholder}  className='border-slate-400 p-3 text-2xl border rounded-sm w-[40rem] h-20' required type={item.type} />
                </div>
            )
        })
    }

    

    <button className='btn my-9 mb-9'>Login</button>

</form>
<b>Don't have an account? 
     <Link href={'/pages/signup'} className='underline' > Create an account</Link>
     </b>
    </section>
  )
}

export default Login