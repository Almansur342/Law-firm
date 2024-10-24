import Image from 'next/image'
import React from 'react'

export default function Team() {
  return (
    <div className='bg-[#F3F3F3]'>
      <div className='max-w-[1200px] relative mx-auto flex  py-20 '>
        <div>
        <h3 className='text-xl text-[#6B7280]'>We are here for you</h3>
        <h1 className='text-[#030712] text-7xl font-bold mt-1'><span className='text-[#B6BCC6]'>Our</span> Team</h1>
        </div>
        <div className='grid grid-cols-2 gap-7 absolute -top-32 right-1'>
          <div>
          <Image 
          height={200}
          width={255}
          alt='Legal matter bd team member'
          src="/Images/Rectangle 8366.png"/>
          <h1 className='text-[#030712] text-xl font-semibold mt-2'>Devon Lane</h1>
          <p className='text-[#6B7280] py-2'>Advocate & Founder of Legal <br className='hidden lg:block' /> Matters BD</p>
          </div>
          <div>
          <Image 
          height={200}
          width={255}
          alt='Legal matter bd team member'
          src="/Images/Rectangle 8366.png"/>
          <h1 className='text-[#030712] text-xl font-semibold mt-2'>Devon Lane</h1>
          <p className='text-[#6B7280] py-2'>Advocate & Founder of Legal <br className='hidden lg:block' /> Matters BD</p>
          </div>
          <div>
          <Image 
          height={200}
          width={255}
          alt='Legal matter bd team member'
          src="/Images/Rectangle 8366.png"/>
          <h1 className='text-[#030712] text-xl font-semibold mt-2'>Devon Lane</h1>
          <p className='text-[#6B7280] py-2'>Advocate & Founder of Legal <br className='hidden lg:block' /> Matters BD</p>
          </div>
          <div>
          <Image 
          height={200}
          width={255}
          alt='Legal matter bd team member'
          src="/Images/Rectangle 8366.png"/>
          <h1 className='text-[#030712] text-xl font-semibold mt-2'>Devon Lane</h1>
          <p className='text-[#6B7280] py-2'>Advocate & Founder of Legal <br className='hidden lg:block' /> Matters BD</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
