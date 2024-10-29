"use client";
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const pathName = usePathname()
  const navItems = [
    {
      title:"Home",
      path: "/"
    },
    {
      title:"About",
      path: "#about"
    },
    {
      title:"Services",
      path: "#services"
    },
    {
      title:"Blogs",
      path: "/ourBlogs"
    },
    {
      title:"Contact",
      path: "#contact"
    },
    
  ]
  return (
    <div className='mt-5 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Image
        src="/Images/logoBlack.png"
        width={71}
        height={33}
         alt='Legal Matter BD Logo'/>
         <h3 className='font-medium text-2xl'>Legal Matter BD</h3>
      </div>

      <div className='flex items-center gap-8'>
        {
          navItems.map((item)=>(
            <a
             className={`${item.path == pathName && "text-green-500 font-semibold"} text-lg text-[#030712]`}
             href={item.path}
             key={item.path} 
             >
             {item.title}
             </a>
          ))
        }
      </div>
    </div>
  )
}
