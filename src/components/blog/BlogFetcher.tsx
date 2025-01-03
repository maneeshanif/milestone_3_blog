'use client';

import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { blogsAtom } from '@/store/blogAtom';
import { client } from '@/sanity/lib/client';

const BlogFetcher = () => {
  
  const  setBlogs = useSetAtom(blogsAtom); // Using Jotai to set the blogs state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch(`*[_type == 'trendingblog'] {
          "ImageUrl": blogImage.asset->url,
          blogTitle,
          time,
          blogShortParagraph,
          blogParagraph,
          blogRead
        }`);
        console.log('Fetched Blogs:', data); // Ensure this logs the correct data
        setBlogs(data);
      } catch (error ) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [setBlogs]);

  return null; // This component doesn't render anything
};

export default BlogFetcher;


