import React from 'react'
import Card from './Card'

const NowTrend = () => {
  return (
    <div className='w-screen h-full  md:h-[600px] bg-white'>
         {/* main div */}
         <div className='w-[90%] md:w-[1252px]  flex gap-4 flex-col h-full md:h-[375px] my-20 mx-auto '>
            {/* header */}
         <div className='w-[90%] md:w-full h-14 flex flex-col  items-start  justify-between'>
            <h1 className='text-[24px] font-semibold text[#313131] '>New & Trending</h1>
        <span className='w-full h-[2px] bg-[#D6D6D6]'></span>
         </div>
         {/* body */}
         <div className='grid grid-cols-1  md:grid-cols-3  gap-6 pl-6 md:pl-0  md:gap-4'>

        
         {Array.from({ length: 3}).map((_, index) => (
            <Card key={index} />
          ))}
           </div>


         </div>
      
    </div>
  )
}

export default NowTrend
