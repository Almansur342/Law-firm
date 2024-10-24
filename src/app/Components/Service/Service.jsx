import Link from 'next/link';
import React from 'react'

export default function Service({service}) {
  const {title,details,image,id} = service || {};
  return (
    <div className='border border-[#C4C4C4] p-10 bg-[#F3F3F3] rounded-lg flex flex-col items-center gap-8 relative overflow-hidden'>
      <div className="absolute -rotate-45 z-50 bg-[#d9d9d94e] h-9 w-[300px] right-44"></div>
      <h1 className='text-2xl font-medium text-[#030712] text-center'>{title}</h1>
       <div className='border border-[#B6BCC6] w-1/2 mx-auto'></div>
       <Link href={`/details/${id}`} className='border rounded-[40px] px-6 py-1 text-lg text-[#030712] border-[#B6BCC6]'>Details
       </Link>
    </div>
  )
}
