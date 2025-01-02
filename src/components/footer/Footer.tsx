import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-[508px] w-screen bg-[#313131] md:h-[400px]'>
        <div className='md:h-[400px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-36  px-8 py-7 md:px-24 md:pt-14'>
            {/* logo */}
          <div className=' md:w-[519px]'>
            <Image src={'/images/logo.png'} alt='trend' width={95} height={84}/>
            <p className='text-[#FAFAFA] text-[16px] font-medium mt-4'>Gates is a blog that focuses on Japanese art and anime. They feature information on Otaku conventions and other anime topics. Hear from famous anime filmmakers and artists as well as plenty of news about the art of cartoon creation in the Japanese culture.</p>
          </div>
          {/* cta */}
          <div className=' h-[46px]  w-[200px] md:w-[230px] bg-[#FAFAFA]/[0.5] hover:border hover:border-white hover:bg-[#313131]  flex items-center gap-2  px-6 justify-start'>
            <Link href={'/contact'} className='bg-[#313131]  text-white hover:bg-white hover:text-black px-4 py-2'>Click</Link>
            <p className='text-black text-[15px] font-medium underline   '>Contact us</p>
        </div>
        </div>
        <div className='w-full h-16 flex items-center justify-start bg-[#313131] border-t-2 border-[#D6D6D6]'>
             <p className='text-[#FAFAFA] text-[16px] font-medium mx-8  my-14 md:mx-20'>@copyright 2025 Gates. All rights reserved to M.anees</p>
        </div>
    </div>
  )
}

export default Footer
