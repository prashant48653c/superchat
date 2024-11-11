import React from 'react'
import '../../styles/landing.css'
import Image from 'next/image'
import { whyDetails } from '@/constant/landing'

const arr=['/vid.mp4','/vis.mp4']
const Hero = () => {
return (
<main className='landing '>

<section className="hero">
<div className="header-text">
<div className="badge">New</div>
<p>AI powered chat application</p>
</div>

<div className="reviews">
<div className="review">
⭐⭐⭐⭐⭐
<i>"Better then Whatsapp fr!"</i>
</div>

<div className="review">
⭐⭐⭐⭐⭐
<i>"Better then Discord tbh!"</i>
</div>

<div className="review">
⭐⭐⭐⭐⭐
<i>"Better then Slack too!"</i>
</div>
</div>

<h1 className='header my-4'>Better and slimpified way to chat with love and joy.</h1>

<div className="tags">
<p> All yours

<span className='border text-lime-500 border-lime-300 p-3 rounded-[1rem] mx-3' >Live Chat</span>
<span className='border text-blue-500 border-blue-300 p-3 rounded-[1rem] mr-3'>Video Conference</span>
<span className='border text-orange-400 border-orange-300 p-3 rounded-[1rem] mr-3'>Screen Sharing</span>
<span className='border text-pink-300 border-pink-200 p-3 rounded-[1rem] mr-3'>Voice Messages </span>
and
<span className='border text-orange-400 border-lightblue p-3 rounded-[1rem] mx-3' >AI Partner</span>
in one organized place.
</p>
<b>100% free of cost</b>

</div>

<button className="btn">Get Started</button>
</section>


{/* Why use us  */}
<section className="why w-full  text-center">
<h5  className='heading'>Why SuperChat?</h5>
<p>Because you need a <b>free</b> and <b>easy</b> way to communicate with your customers
</p>
<div className="why-boxs w-full flex item-center justify-center">
{
whyDetails.map((item,i)=>{
return(

<div  key={i}  className="why-box w-full flex flex-col text-center items-center justify-between">
<Image src={item.icon} alt='why-image' height={100} width={100} />
<h6>{item.head}</h6>
<p>{item.para} </p>
</div>



)
})
}

</div>


</section>

{/* reviews  */}
<section className="why w-full  text-center">
<h5  className='heading'>Don't take our word for it though ...
</h5>
<p>See how people consider <b>SuperChat</b> to get closer to their alumni

</p>
<div className="why-boxs w-full flex item-center justify-between">
{
arr.map((item,i)=>{
return(

<div  key={i}  className="why-box w-[48%] flex flex-col text-center items-center justify-between">


      <video className='mx-8 rounded-md h-[30rem]' controls>
        <source src={item} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

</div>



)
})
}

</div>


</section>



</main>
)
}

export default Hero