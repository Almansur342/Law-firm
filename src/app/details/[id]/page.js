"use client"
import { notFound, useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { services } from '../../lib/services'
import Image from 'next/image';
import Service from '@/app/Components/Service/Service';

export default function DetailsPage() {
  const { id } = useParams();
  const service = services.find((p) => parseInt(p.id) === parseInt(id));
  const otherServices = services.filter((p) => parseInt(p.id) != parseInt(id)).slice(0, 3);

  if (!service) {
    notFound();
  }
  const { image, title, details } = service || {};

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='my-10 max-w-[1000px] mx-auto'>
        <Image
          className='rounded-md mx-auto'
          src={image} width={900} height={200} alt='Legal Matter BD banner image' />
        <div className='flex my-14 justify-center'>
          <button className='border rounded-l rounded-tr-none border-[#030712] px-4 py-1 text-xl text-white bg-[#030712]'>English</button>
          <button className='border roudr rounded-tl-none border-[#030712] px-4 py-1 text-xl text-[#030712]'>Bangla</button>
        </div>
        <h1 className='text-[#030712] font-bold text-7xl'>{title}</h1>
        <p className='text-[#030712] text-lg mt-6'>{details}</p>
        <p className='border-b mt-7 mb-14 border-[#C4C4C4]'></p>
      </div>
      <div className='my-20 '>
        <h1 className='font-semibold text-4xl mb-6'>Our Other Services</h1>
        <div className='grid  grid-cols-3 gap-5'>
          {
            otherServices.map(service => (
              <Service key={service.id} service={service}></Service>
            ))
          }
        </div>
      </div>
      {/* form */}
      <div className='max-w-[1000px] mx-auto'>
        <h1 className='font-semibold text-4xl mb-6'>Consult Now</h1>
        <div className='bg-[#F3F3F3] p-8 rounded-md'>
          <div className='flex'>
            <div className="w-full p-4">
              <label htmlFor="Your Name" className="text-lg font-medium text-[#030712]">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 w-full p-3 text-sm border border-[#C4C4C4] shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="w-full p-4">
              <label htmlFor="Your Name" className="text-lg font-medium text-[#030712]">
                Email
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your email"
                className="mt-1 w-full p-3 text-sm border border-[#C4C4C4]  shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          {/* text area */}
          <div className="p-4 bg-gray-100 rounded-lg">
            {/* Label */}
            <label htmlFor="message" className="text-lg font-medium text-[#030712] mb-1">
              Message
            </label>

            {/* Textarea */}
            <textarea
              rows={8}
              id="message"
              placeholder="Your Message..."
              className="w-full  p-4 border border-[#C4C4C4] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <div className="flex items-center justify-between mt-4">
            {/* Checkbox and Label */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="ml-4 w-5 h-5 text-indigo-600 border-[#030712] rounded"
              />
              <label htmlFor="terms" className="text-lg text-[#030712]">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="px-10 py-3 text-[#030712] text-lg border border-[#030712] rounded-full"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
