"use client"
import { notFound, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { blogs } from "../../lib/blogs"
import Image from 'next/image'
import { FaFacebookSquare,} from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import Blog from '@/app/Components/Blogs/Blog'

export default function BlogDetailspage() {
  const [blogUrl, setBlogUrl] = useState('');
  const { id } = useParams()
  const blog = blogs.find((p) => parseInt(p.id) === parseInt(id));
  const otherBlogs = blogs.filter((p) => parseInt(p.id) != parseInt(id)).slice(0, 2);

  if (!blog) {
    notFound();
  }

  const { image, category, title, description, author } = blog || {};

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBlogUrl(window.location.href); // Set the full URL of the current page
    }
  }, []);

  // Function to open social media share links
  const openShareLink = (url) => {
    if (blogUrl) { // Ensure the URL is set before opening the share link
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert("The URL is not ready yet. Please try again.");
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='my-10 max-w-[900px] mx-auto'>

        {/* button */}
        <div className='flex my-14 justify-center'>
          <button className='border rounded-l rounded-tr-none border-[#030712] px-4 py-1 text-xl text-white bg-[#030712]'>English</button>
          <button className='border roudr rounded-tl-none border-[#030712] px-4 py-1 text-xl text-[#030712]'>Bangla</button>
        </div>

        {/* title and category */}
          <div>
          <h1 className='text-[#030712] font-bold text-5xl mb-7'>{title}</h1>
           <div className='flex items-center gap-6 mb-7'>
            <h3 className='text-lg font-medium text-[#030712]'><span className='text-[#6B7280]'>Author : </span>{author}</h3>
            <h3 className='text-lg font-medium text-[#030712]'><span className='text-[#6B7280]'>Category : </span>{category[0]}, {category[1]}</h3>
           </div>
          </div>

        {/* image */}
        <Image
          className='rounded-md mx-auto h-[450px]'
          src={image} objectFit='center' width={900} height={450} alt='Legal Matter BD banner image' />
          <p className='text-[#030712] text-lg mt-7'>{description}</p>

          {/* share */}
          <div className='mt-9 flex items-center gap-5'>
            <h3 className='text-2xl font-medium'>Share : </h3>
            <FaFacebookSquare 
            size={40} 
            onClick={() => openShareLink(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}&quote=${encodeURIComponent(title)}`)} 
            style={{ cursor: 'pointer' }} 
          />
          <FaSquareTwitter 
            size={40} 
            onClick={() => openShareLink(`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(title)}`)} 
            style={{ cursor: 'pointer' }} 
          />
          <BsLinkedin 
            size={35} 
            onClick={() => openShareLink(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`)} 
            style={{ cursor: 'pointer' }} 
          />
          </div>

      </div>
      {/* more blogs */}
      <div className='my-20 '>
        <h1 className='font-bold text-7xl mb-6 text-[#030712]'><span className='text-[#B6BCC6]'>More </span>Blogs</h1>
        <div className='grid  grid-cols-2 gap-8'>
          {
            otherBlogs.map(blog => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))
          }
        </div>
      </div>
    </div>
  )
}
