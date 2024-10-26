import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function Blog({blog}) {
  const {title,image,description,id} = blog || {}

  const truncateTo40Words = (text) => {
    const words = text.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return text; 
  };
  
  return (
    <div className='flex gap-5'>
      <Image className='rounded' alt='blog image' src={image} width={255} height={200}/>
      <div className="flex flex-col justify-between h-[250px]">
        {/* title and description */}
        <div>
          <h2 className="text-xl font-medium text-[#030712]">{title}</h2>
          <p className="text-[#6B7280] font-medium my-4">
            {truncateTo40Words(description)}
          </p>
        </div>
        {/* button */}
        <div>
        <button className="border border-[#030712] rounded-[40px] px-5 py-1 text-lg text-[#030712] flex items-center gap-2 ">
          <Link href={`/blogDetails/${id}`}>Read More</Link>
          <span>
            <MdArrowOutward />
          </span>
        </button>
        </div>
      </div>
    </div>
  )
}
