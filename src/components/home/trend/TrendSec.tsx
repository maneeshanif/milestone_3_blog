"use client";
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface TrendSecProps {
  blogTitle: string,
  time: number,
  blogShortParagraph: string,
  blogParagraph: string,
  blogRead: string,
  ImageUrl: string
}

const TrendSec = () => {
  const [blogs, setBlogs] = React.useState<TrendSecProps[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await client.fetch(`*[_type == 'actionblog'] {
        "ImageUrl": blogImage.asset->url,
        blogTitle,
        time,
        blogShortParagraph,
        blogParagraph,
        blogRead
        }`) 
      setBlogs(res)
     
    }
    fetchBlogs()
  }, [])
  return (
    <div className='w-screen h-full  md:h-[900px] bg-white'>
        {/* main div */}
        <div className='w-[90%] md:w-[1252px]  flex gap-4 flex-col h-full md:h-[775px] my-20 mx-auto '>
            {/* header */}
         <div className='w-[90%] md:w-full h-14 flex flex-col  items-start  justify-between'>
            <h1 className='text-[24px] font-semibold text[#313131] '>Actions of the week</h1>
        <span className='w-full h-[2px] bg-[#D6D6D6]'></span>
         </div>
       {/* body */}
       <div className='w-full h-[1500px] md:h-[764px] grid grid-cols-1 gap-2 md:gap-0 grid-rows-4 md:grid-cols-2 md:grid-rows-2  '>
        {/* card 1 */}
        <div className='w-full relative h-full  border border-black' >
            <Image  
             src={blogs[1]?.ImageUrl}
             alt='Hero' layout='fill'
             objectFit='cover'className='w-full absolute h-full z-10'/>
        
        </div>
        {/* card 2 */}
        <div className='w-full h-full relative  border border-black' >
            {/* cover image */}
            <div className='w-full h-full relative'>
            <Image
            src='/images/forest-hero.png'
            alt='Hero'
            layout='fill'
            objectFit='cover'
            className='w-full absolute h-full z-10'
            />
              {/* text */}
              <div className='w-[90%] md:w-[471.1px] h-[80%]  flex flex-col justify-between absolute z-20  p-4 md:p-14 mt-8 mx-5 md:mt-10 md:mx-20  bg-white/40'>
              <div className='w-full flex items-center justify-between'>
                <h1 className='text-[24px] font-semibold text[#313131] '>{blogs[1]?.blogTitle}</h1>
                <p className='text-[12px] font-medium text[#313131] '>{blogs[1]?.time} hour ago</p>
              </div>
              <p className='text-[16px] font-medium text[#313131] overflow-hidden '>{blogs[1]?.blogShortParagraph}</p>
              <div className='w-full flex justify-between'>
                <div>{blogs[1]?.blogRead} min read</div>
                <div className='text-[12px] font-medium text[#313131] underline'>Read More</div>
              </div>
            </div>

            </div>
          
        </div>
        {/* card 3 */}
        <div className='w-full h-full relative bg-red-300 border border-black' >
            {/* cover image */}
            <div className='w-full h-full relative'>
            <Image
            src='/images/forest-hero.png'
            alt='Hero'
            layout='fill'
            objectFit='cover'
            className='w-full absolute h-full z-10'
            />
              {/* text */}
              <div className='w-[90%] md:w-[471.1px] h-[80%]  flex flex-col justify-between absolute z-20  p-4 md:p-14 mt-8 mx-5 md:mt-10 md:mx-20  bg-white/40'>
              <div className='w-full flex items-center justify-between'>
                <h1 className='text-[24px] font-semibold text[#313131] '>{blogs[0]?.blogTitle}</h1>
                <p className='text-[12px] font-medium text[#313131] '>{blogs[0]?.time} hour ago</p>
              </div>
              <p className='text-[16px] font-medium text[#313131] overflow-hidden '>{blogs[0]?.blogShortParagraph}</p>
              <div className='w-full flex justify-between'>
                <div>{blogs[0]?.blogRead} min read</div>
                <div className='text-[12px] font-medium text[#313131] underline'>Read More</div>
              </div>
            </div>

            </div>
          
        </div>
        {/* card 4 */}
        <div className='w-full relative h-full  border border-black' >
            <Image  
             src={blogs[0]?.ImageUrl}
             alt='Hero' layout='fill'
             objectFit='cover'className='w-full absolute h-full z-10'/>
        
        </div>
        </div>


        </div>
        
      
    </div>
  )
}

export default TrendSec
