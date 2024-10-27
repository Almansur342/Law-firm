"use client"
import React, { useState } from 'react'
import { FaSquarePhone } from 'react-icons/fa6';

export default function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className=''>
      <div className='max-w-[750px] mx-auto'>
        <h3 className='text-xl text-[#6B7280] text-center mb-3'>Contact Us</h3>
        <h1 className='text-7xl font-bold text-[#030712] mb-8 text-center'>Connect <span className='text-[#B6BCC6]'>With Us For</span> a Strong Legal Defense</h1>
      </div>
      {/* form position */}
      <div className='relative'>
        <div className='space-y-9 my-80'>
          <div className='border border-[#C4C4C4]' />
          <div className='border border-[#C4C4C4]' />
          <div className='border border-[#C4C4C4]' />
        </div>
        {/* form */}
        <div className='bg-[#F3F3F3] max-w-[700px] mx-auto p-8 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='grid grid-cols-2'>
            <div className="w-full p-4">
              <label htmlFor="FIrst Name" className="text-lg font-medium text-[#030712]">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="mt-1 w-full p-3 text-sm border border-[#C4C4C4] shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="w-full p-4">
              <label htmlFor="Last Name" className="text-lg font-medium text-[#030712]">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="mt-1 w-full p-3 text-sm border border-[#C4C4C4]  shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="w-full p-4">
              <label htmlFor="email" className="text-lg font-medium text-[#030712]">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full p-3 text-sm border border-[#C4C4C4] shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="w-full p-4">
              <label htmlFor="Your Name" className="text-lg font-medium text-[#030712]">
                Phone Number(optional)
              </label>
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone number"
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
      <div className='max-w-[1200px] mx-auto flex justify-between items-center py-10'>
        <h1 className='text-7xl font-bold text-[#030712] mb-8 text-center'>Your <span className='text-[#B6BCC6]'>Legal Solution </span><br className='hidden lg:block' />Is Just a Call Away</h1>
        <div className='flex items-center gap-5'>
        <FaSquarePhone size={90} />
        <h3 className='font-bold text-[#030712] text-5xl'>0123 456 789</h3>
        </div>
      </div>
    </div>
  )
}
