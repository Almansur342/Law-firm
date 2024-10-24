import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div id='about' className='max-w-[1200px] mx-auto flex items-center py-10'>
      <div className='w-1/2'>
      <div className='flex items-center gap-5'>
        <h3 className='text-xl text-[#FFFFFF]'>Who We Are</h3>
        <Image width={251} height={30} src="/Images/Group 16.png" alt='arrow'></Image>
      </div>
      <h1 className='text-7xl font-bold text-[#FFFFFF]'>About <span className='text-[#FFFFFF33]'>Us</span></h1>
      </div>
      <div className='w-1/2'>
        <p className='text-[#FFFFFF] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}
