"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Blog {

  ImageUrl: string;
  blogTitle: string;
  blogShortParagraph: string;
  blogRead: string;
  time: number;
  _id: string;
}

const Card = ({blogs}:{blogs:Blog}) => {
 
// console.log(blogs , "blogs from card")
  
    // Add null check for blogs
    // if (!blogs || !blogs._id) {
    //   return null;
    // }

  // console.log(blogs)
  return (
    <div className='w-[350px] h-[540px] flex flex-col justify-between shadow-xl  p-4  '>
        {/* image */}
         <div>
          <Image src={blogs.ImageUrl} alt='trend' width={330} height={254} className='w-full h-[254px]'/>
         </div>
         {/* text */}
         <div className='flex flex-col gap-2'>
         <div className='w-full flex items-center justify-between'>
                <h1 className='text-[24px] font-semibold text[#313131] '>{blogs?.blogTitle}</h1>
                <p className='text-[12px] font-medium text[#313131] '>{blogs?.time} hour ago</p>
              </div>
              <p>{blogs?.blogShortParagraph}</p>
              <div className='w-full flex justify-between'>
                <div>{blogs?.blogRead} min read</div>
                <Link href={`/blog/${blogs._id || '' }`} className='text-[12px] font-medium text[#313131] underline'>Read More</Link>
              </div>
        

     
         </div>
         {/* short story */}
         
    </div>
  )
}

export default Card
