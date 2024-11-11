import React from 'react'
import '../../styles/landing.css'


const Hero = () => {
return (
<main className='landing'>

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

</main>
)
}

export default Hero