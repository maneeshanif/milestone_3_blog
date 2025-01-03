"use client";
import React, { useState,useEffect } from 'react'
import { Blog } from '@/store/blogAtom';
// import { useAtom } from 'jotai';
// import { blogsAtom } from '@/store/blogAtom';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

interface Props {
  params: Promise<{_id: string}>
}


//  i will add the comments section function alog with auth if possible a chat section where users can chat with each other about a particular blog

const Page = ({ params }: Props) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const { _id } = await params; // Access _id directly
        console.log(_id)
        const fetchedBlog = await client.fetch(
          `*[_type == 'trendingblog' && _id == "${_id}"][0] {
            blogTitle,
            "ImageUrl": blogImage.asset->url,
            blogParagraph,
            blogRead,
            time
            }`,
          { id: _id }
        );

        if (fetchedBlog) {
          setBlog(fetchedBlog); // Update state with the found blog
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false); // Stop loading after fetch attempt
      }
    };

    loadBlog();
  }, [params]);

  if (loading) {
    return <div>Loading blog...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
   
    <div className='w-screen h-full  md:min-h-[900px] border-t-2 border-[#D6D6D6] bg-white'>
     <div className='flex flex-col gap-4 w-[90%] md:w-[1252px] justify-center items-center  mx-auto my-6'>
    <Image src={blog.ImageUrl} alt={blog.blogTitle} width={400} height={300} className='w-full h-[254px]'/>
    <h1 className='text-[24px]  font-semibold text[#313131] border-b-2 border-[#D6D6D6] '>{blog.blogTitle}</h1>
    <p className='text-[16px] font-medium text[#313131] '>{blog.blogParagraph}</p>

    {/* Comments */}
   <div className='w-full flex flex-col gap-4'>
   <span className='w-full h-1 mt-4 bg-[#D6D6D6]'></span>
    <h2 className='text-[24px] font-semibold text[#313131] '>Comments</h2>
    <div className='w-full flex gap-4'>
    <input type='text' placeholder='Add a comment' className='w-[80%] h-12 border-2 border-[#D6D6D6] rounded-md p-4'/>
    <button className='w-[20%] h-12 bg-[#313131] text-white font-semibold'>Post</button>
    </div>
    <div className='w-full flex flex-col gap-4'>
    <div className='w-full flex gap-4'>
    <div className='w-12 h-12 bg-blue-300 rounded-full'></div>
    <div className='w-[80%]'>
    <h3 className='text-[16px] font-semibold text[#313131] '>Champo</h3>
    <p className='text-[12px] font-medium text[#313131] '>Anime is just cartoons for grown-ups 😆</p>
    </div>
    </div>
    <div className='w-full flex gap-4'>
    <div className='w-12 h-12 bg-pink-600 rounded-full'></div>
    <div className='w-[80%]'>
    <h3 className='text-[16px] font-semibold text[#313131] '>Hamza Alvi</h3>
    <p className='text-[12px] font-medium text[#313131] '>How dare you! @champo Cartoons are the opening act; anime is the main event. Cartoons say &quot;Yabba Dabba Doo,&quot; while anime says &quot;Yamete kudasai!&quot; Respect the art! 😤</p>
    </div>
    </div>
    </div>
 

     </div>
   </div>
    </div>
  );
};

export default Page;
