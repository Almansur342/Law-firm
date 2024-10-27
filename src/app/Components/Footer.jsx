import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
export default function Footer() {
  return (
    <div className='max-w-[1200px] mx-auto py-14 grid grid-cols-3 gap-10'>
      <div className='flex flex-col items-start'>
        <h3 className='text-lg font-medium mb-3 text-white'>Address 1</h3>
        <p className='text-xl text-white mb-16'>House No. 56, Road No. 15/A, Block E, 4th Floor, Apartment 4B, Gulshan Model Town, Gulshan-2, Dhaka 1212, Bangladesh.</p>
        <div className='flex flex-col items-center gap-4'>
        <Image
        src="/Images/logoWhite.png"
        width={140}
        height={40}
         alt='Legal Matter BD Logo'/>
         <h3 className='font-medium text-xl text-white'>Legal Matter BD</h3>
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <h3 className='text-lg font-medium mb-3 text-white'>Address 2</h3>
        <p className='text-xl text-white mb-16'>House No. 56, Road No. 15/A, Block E, 4th Floor, Apartment 4B, Gulshan Model Town, Gulshan-2, Dhaka 1212, Bangladesh.</p>
        <div className='flex flex-col items-start gap-4'>
         <div className='flex items-center gap-3'>
         <AiOutlineMail className='text-white' size={30} />
          <p className='text-lg text-white'>Email Us</p>
         </div>
         <h3 className='font-medium text-xl text-white'>Loremipsum@gmail.com</h3>
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <h3 className='text-lg font-medium mb-3 text-white'>Address 3</h3>
        <p className='text-xl text-white mb-16'>House No. 56, Road No. 15/A, Block E, 4th Floor, Apartment 4B, Gulshan Model Town, Gulshan-2, Dhaka 1212, Bangladesh.</p>
        <div className='flex items-center gap-5'>
            <FaFacebookSquare
            className='text-white'
            size={40} 
          />
          <FaSquareTwitter 
            size={40} 
            className='text-white'
          />
          <BsLinkedin 
            size={35} 
            className='text-white'
          />
          <FaInstagramSquare
           size={40} 
           className='text-white' />
        </div>
      </div>
    </div>
  )
}
