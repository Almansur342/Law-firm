import Image from 'next/image';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Banner() {
  return (
    <div className='my-16'>
      <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
        <div>
          <h1 className='text-7xl font-bold text-[#030712]
          font-inter-tight'>
          Your Problem,<br className='hidden lg:block '/> The <span className='text-[#B6BCC6]'>headache</span><br className='hidden lg:block '/> of solving it<br className='hidden lg:block '/> is ours
          </h1>
        </div>
        <div>
          <p className='text-[#030712] text-2xl  mb-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className='hidden lg:block '/> sed do eiusmod tempor incididunt ut labore et dolore <br className='hidden lg:block '/>magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          <button cla className='border rounded-[44px] flex items-center gap-1 px-5 text-[#030712] py-2 text-lg border-[#000000]'>Let’s Talk <IoIosArrowRoundForward /></button>
        </div>
      </div>
      <div className='relative'>
        <div className='space-y-9 mt-64'>
        <div className='border border-[#C4C4C4]'/>
        <div className='border border-[#C4C4C4]'/>
        <div className='border border-[#C4C4C4]'/>
        </div>
        <Image
        className='mx-auto rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        src="/Images/pexels-august-de-richelieu-4427630 1.png" width={920} height={500} alt='Legal Matter BD banner image'/>
      </div>
    </div>
  )
}
