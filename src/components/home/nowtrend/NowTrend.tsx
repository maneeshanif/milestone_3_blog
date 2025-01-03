  "use client";

  import React, { useEffect, useState } from 'react'
  import Card from './Card'
  import { client } from '@/sanity/lib/client';
import { Blog } from '@/store/blogAtom';
  // import { useAtom } from 'jotai';
  // import { blogsAtom } from '@/store/blogAtom';

  const NowTrend = () => {
    // const [blogs] = useAtom(blogsAtom);
    // console.log(blogs, "blogs from nowtrend")
    const [blogs, setBlogs] = useState([]);  
    // const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const res = await client.fetch(`*[_type == 'trendingblog'] {
            _id,
            "ImageUrl": blogImage.asset->url,
            blogTitle,
            time,
            blogShortParagraph,
            blogParagraph,
            blogRead
          }`);
          // console.log('Fetched Blogs:', res); 
          setBlogs(res);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
  
      fetchBlogs();
    }, []);

    return (
      <div className='w-screen h-full  md:h-[600px] my-20 bg-white'>

          {/* main div */}
          <div className='w-[90%] md:w-[1252px]  flex gap-4 flex-col   mx-auto '>
              {/* header */}
          <div className='w-[90%] md:w-full h-14 flex flex-col  items-start  justify-between'>
              <h1 className='text-[24px] font-semibold text[#313131] '>New & Trending</h1>
          <span className='w-full h-[2px] bg-[#D6D6D6]'></span>
          </div>
          {/* body */}
          <div className='grid grid-cols-1  md:grid-cols-3  gap-6 pl-6 md:pl-0  md:gap-4'>

                {blogs.map((blog : Blog , index) => (
                  <Card key={index} blogs={blog} />
                ))}
          
          {/* {Array.from({ length: 3}).map((_, index) => (
              <Card key={index}  />
            ))} */}
            </div>


          </div>
        
      </div>
    )
  }

  export default NowTrend
