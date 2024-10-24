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
    <div className=''>
      <Image
        className='mx-auto rounded-md'
        src={image} width={900} height={200} alt='Legal Matter BD banner image'/>
        <h1>hello</h1>
    </div>
  )
}
