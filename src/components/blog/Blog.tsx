"use client";
import React from 'react'
import Card from '../home/nowtrend/Card'
// import { useAtom } from 'jotai';
// import { blogsAtom } from '@/store/blogAtom';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

const Blog = () => {
  // const [blogs] = useAtom(blogsAtom);
  // console.log(blogs , "blogs from blog")
      const [blogs, setBlogs] = useState([]);  
      useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const res = await client.fetch(`*[_type == 'trendingblog'] {
              "ImageUrl": blogImage.asset->url,
              blogTitle,
              time,
              blogShortParagraph,
              blogParagraph,
              blogRead
            }`);
            console.log('Fetched Blogs:', res);
            setBlogs(res);  // Set the blogs into the atom state
          } catch (error) {
            console.error('Error fetching blogs:', error);
          }
        };
    
        fetchBlogs();
      }
      , []);
  return (
    <div className='h-full w-screen  border-t-2 border-[#D6D6D6] bg-white '>
      <div className='flex flex-col gap-4 w-[90%] md:w-[1252px] justify-center items-center  mx-auto my-6'>
        <h1 className='text-[24px] font-semibold text-[#313131]'>Blog</h1>
          {/* body */}
          <div className='grid grid-cols-1  md:grid-cols-3  gap-6  md:gap-10'>
      {blogs.map((blog, index) => (
        <Card key={index} blogs={blog} />
      ))}
        

  </div>
      </div>
    </div>
  )
}

export default Blog
