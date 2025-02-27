import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import '@/styles/landing.css'
const layout =({ children }: Readonly<{children: React.ReactNode}>)=> {
  return (
  <main className='main w-full'>
<Navbar/>
     {children}
     <Footer/>
  </main>
  )
}

export default layout