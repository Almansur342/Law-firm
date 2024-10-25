import Image from 'next/image'
import React from 'react'

export default function Vision() {
  return (
    <div className='max-w-[1200px] mx-auto flex items-start gap-10'>
      <div>
         <Image
         alt='Legal matter bd vision'
         height={435}
         width={745}
         src="/Images/Rectangle 8371.png"/>
      </div>
          <div>
            <h3 className='text-[#6B7280] text-xl mb-2'>Our Vision</h3>
            <h1 className='text-7xl font-bold text-[#030712] mb-6'>Your <span className='text-[#B6BCC6]'>Justice,</span> <br className='hidden lg:block' /> Our commitment</h1>
            <ul className='list-disc pl-5 space-y-4'>
              <li className='text-xl text-[#6B7280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </li>
              <li className='text-lg text-[#6B7280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </li>
              <li className='text-lg text-[#6B7280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </li>
            </ul>
          </div>
    </div>
  )
}
