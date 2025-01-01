import Image from 'next/image'
import React from 'react'
import { Varela } from 'next/font/google'
import Link from 'next/link'

const varela = Varela({
    subsets: ['latin'],
    weight: ['400'],
    })

const Hero = () => {
  return (
    <div className=' h-screen md:h-[830px] w-screen  overflow-hidden'>
        {/* main cover bg image */}
      <div className='relative h-full w-full'>
      <Image
        src='/images/forest-hero.png'
        alt='Hero'
     
        layout='fill'
        objectFit='cover'
        />
      </div>
      {/* text div */}
      <div className='absolute z-20 h-[350px] top-60 left-10 md:left-16 w-[80%] md:w-[556px] flex flex-col items-start justify-around md:justify-between '>
        <h1 className={`${varela.className}  md:h-[190px] text w-full text-4xl md:text-[85px] md:leading-[85px] font-normal text-white`}>Welcome to Gates</h1>
        <p className='text-[#FAFAFA] text-[18px] font-medium'>Get the latest news on your favourite mangas, anime and manhwa around the world!</p>
        <div className=' h-[46px]  w-[200px] md:w-[220px] bg-[#FAFAFA] hover:border hover:border-white hover:bg-[#313131]  flex items-center gap-2  px-6 justify-start'>
            <Link href={'/blog'} className='bg-[#313131]  text-white hover:bg-white hover:text-black px-4 py-2'>Blog</Link>
            <p className='text-black text-[16px] font-medium underline  '>Read More</p>
        </div>

      </div>
      {/* rotate image */}
      <div >
        <Image
        src='/images/animegirl.png'
        alt='Hero'
        width={734}
        height={830}
      
         className= ' h-screen md:h-[830px] absolute z-10 top-14 left-1/2 transform -translate-x-1/2 md:left-2/3'
        />
        </div>

      </div>

  )
}

export default Hero
