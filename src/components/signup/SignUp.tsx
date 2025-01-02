import React from 'react'
import Image from 'next/image'

const SignUp = () => {
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

    {/* text div */}
    <div className='absolute inset-0 flex items-center justify-center'>
        {/* inside container */}
    <div className='w-[406px] h-[420px] flex flex-col items-center   md:h-[370px] '>
    {/* input div */}
<div className='w-full h-[320px] flex flex-col gap-6 '>
<div className='w-full h-[60px] bg-[#FAFAFA]/[0.4] flex gap-2 px-4  items-center justify-start '>
<span className='text-[15px] font-medium text-[#FAFAFA] px-4 py-1 bg-[#313131]'>Name</span>
<input type="text" className='bg-white  w-[50%] px-4 py-1 text-[#313131]' placeholder='enter your name' />
</div>
<div className='w-full h-[60px] bg-[#FAFAFA]/[0.4] flex gap-2 px-4  items-center justify-start '>
<span className='text-[15px] font-medium text-[#FAFAFA] px-4 py-1 bg-[#313131]'>Email</span>
<input type="text" className='bg-white  w-[50%] px-4 py-1 text-[#313131]' placeholder='enter your email' />
</div>
<div className='w-full h-[60px] bg-[#FAFAFA]/[0.4] flex gap-2 px-4  items-center justify-start '>
<span className='text-[15px] font-medium text-[#FAFAFA] px-4 py-1 bg-[#313131]'>Password</span>
<input type="text" className='bg-white  w-[50%] px-4 py-1 text-[#313131]' placeholder='enter your password' />
</div>
</div>
{/* button */}
<button className='w-[86px] h-[32px] bg-[#313131] flex rounded-md border border-[#D6D6D6] text-white hover:text-[#313131] hover:bg-white items-center justify-center '> Sign Up</button>

</div>
</div>

              </div>
             
    </div>
  )
}

export default SignUp
