'use client'
import Image from "next/image"
import { useEffect } from "react"

 type adBanner={
  dataAdSlot:string,
  dataAdFormat:string,
  dataFullWidthResponsive:boolean
 }
const AdInTake = ({dataAdSlot,dataAdFormat,dataFullWidthResponsive}:adBanner) => {
    useEffect(()=>{
      try {
        ((window as any).adsbygoogle=(window as any).adsbygoogle || []).push({})  
      } catch (error) {
        console.log("Err at advertisement",error)
      }


    },[])
    
  return (
    
      <div className="ad-container overflow-x-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5597598848182147"
          data-ad-slot={dataAdSlot}
          data-ad-format={dataAdFormat}
          data-full-width-responsive={dataFullWidthResponsive.toString()}
        ></ins>
        <div className="right-profiles flex flex-col justify-start">
          <h6 className='text-2xl font-semibold'>Ads</h6>
          <div className='py-2 rounded-3xl flex h-max items-center justify-start'>
            <Image src='/ad.png' className='ad-img' height={200} width={300} alt='ad' />
          </div>
        </div>
      </div>
    )
  }
  
  export default AdInTake