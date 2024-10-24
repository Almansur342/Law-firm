"use client"
import { notFound, useParams, useRouter } from 'next/navigation'
import React from 'react'
import {services} from '../../lib/services'
import Image from 'next/image';

export default function DetailsPage() {
const {id} = useParams();
console.log(id)
const service = services.find((p)=>parseInt(p.id)===parseInt(id));
console.log(service)
if(!service){
  notFound();
}
 const {image,title,details} = service || {};

  return (
    <div className='my-10 max-w-[900px] mx-auto'>
      <Image
        className='rounded-md mx-auto'
        src={image} width={900} height={200} alt='Legal Matter BD banner image'/>
        <div className='flex my-14 justify-center'>
          <button className='border rounded-l rounded-tr-none border-[#030712] px-4 py-1 text-xl text-white bg-[#030712]'>English</button>
          <button className='border roudr rounded-tl-none border-[#030712] px-4 py-1 text-xl text-[#030712]'>Bangla</button>
        </div>
       <h1 className='text-[#030712] font-bold text-7xl'>{title}</h1>
        <p className='text-[#030712] text-lg mt-6'>{details}</p>
    </div>
  )
}
