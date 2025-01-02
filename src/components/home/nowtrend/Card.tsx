import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='w-[330px] h-[440px] flex flex-col justify-between '>
        {/* image */}
         <div>
          <Image src={'/images/trend1.png'} alt='trend' width={330} height={440}/>
         </div>
         {/* text */}
         <div className='flex flex-col gap-2'>
         <div className='w-full flex items-center justify-between'>
                <h1 className='text-[24px] font-semibold text[#313131] '>Attack on titans</h1>
                <p className='text-[12px] font-medium text[#313131] '>1 hour ago</p>
              </div>
              <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
              <div className='w-full flex justify-between'>
                <div>12 min read</div>
                <div className='text-[12px] font-medium text[#313131] underline'>Read More</div>
              </div>
        

     
         </div>
         {/* short story */}
         
    </div>
  )
}

export default Card
