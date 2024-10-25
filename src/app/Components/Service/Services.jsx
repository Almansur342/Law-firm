import React from 'react'
import { services } from '../../lib/services'
import Service from './Service'

export default function Services() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='text-center mb-9'>
        <h3 className='text-[#6B7280] text-xl'>How We Can Help</h3>
        <h1 className='text-7xl text-[#030712] font-bold'><span className='text-[#B6BCC6]'>Our</span> Services</h1>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {
          services.map((service)=>(
            <Service
            service={service}
             key={service.id}>   
             </Service>
          ) )
        }
      </div>
    </div>
  )
}
