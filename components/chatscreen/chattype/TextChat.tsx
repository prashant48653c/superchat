import Image from 'next/image'
import React from 'react'

const TextChat = () => {
return (

<div className='flex justify-between gap-2 items-start'>
<div className='flex  justify-between gap-3'>
<div className=' flex items-start justify-center '>
<Image className='  rounded-full' width={60} height={60} alt='image of profile picture' src={'/pp1.png'} />
</div>
<div className="flex pl-2  flex-col  gap-3">
<h5 className='text-2xl font-semibold max-w-full'>Conner Garcia</h5>
<p >I hope this message finds you in great health and spirits. I’ve been thinking about you a lot lately, and I felt the urge to put my thoughts into words. </p>
</div>
<div>
<p className="time w-20">6:00 pm</p>
</div>
</div>
</div>
)
}

export default TextChat