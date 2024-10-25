import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function Blog({blog}) {
  const {title,image,description} = blog || {}

  const truncateTo40Words = (text) => {
    const words = text.split(" ");
    if (words.length > 40) {
      return words.slice(0, 40).join(" ") + "...";
    }
    return text; 
  };
  
  return (
    <div className='flex gap-5'>
      <Image alt='blog image' src={image} width={255} height={300}/>
      <div>
        <h2 className='text-xl font-medium text-[#030712]'>{title}</h2>
        <p className='text-[#6B7280] font-medium my-4'>{truncateTo40Words(description)}.</p>
         <button className='border border-[#030712] rounded-[40px] px-4 py-1 text-lg text-[#030712] flex items-center gap-2'>
          <span>Read More</span>
          <span><MdArrowOutward /></span>
          </button>
      </div>
    </div>
  )
}
