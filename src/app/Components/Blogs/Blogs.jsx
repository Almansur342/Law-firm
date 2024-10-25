"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

import {blogs} from "../../lib/blogs"
import Blog from './Blog';

// Add a placeholder blog if there's an odd number of blogs
if (blogs.length % 2 !== 0) {
  blogs.push({
    id: "placeholder",
    title: "More Blogs Coming Soon",
    description: "Stay tuned for more updates!",
    image: "https://i.ibb.co.com/FDdPGLD/DALL-E-2024-10-25-22-26-29-A-clean-minimalistic-placeholder-image-for-a-blog-The-background-is-light.webp",
    link: "#"
  });
}


export default function Blogs() {
  const slides = [];
  for (let i = 0; i < blogs.length; i += 2) {
    slides.push(blogs.slice(i, i + 2));
  }

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className='bg-[#F7F7F7] py-10'>
      <div className='max-w-[1200px] mx-auto'>
      <div className='mb-10'>
      <h3 className='text-[#6B7280] text-xl mb-2'>More About Our Law and Legal Works</h3>
      <h1 className='text-7xl font-bold text-[#030712] mb-6'><span className='text-[#B6BCC6]'>Our</span> Blogs</h1>
      </div>
       {/* carousel */}
       <Carousel
       plugins={[autoplayPlugin.current]}
       onMouseEnter={autoplayPlugin.current.stop}
       onMouseLeave={autoplayPlugin.current.reset}
       >
      <CarouselContent>
        {slides.map((slide, slideIndex) => (
          <CarouselItem key={slideIndex}>
            <div className="flex gap-10 justify-between">
              {slide.map((blog) => (
                <div key={blog.id} className="w-1/2">
                <Blog key={blog.id} blog={blog}></Blog>
              </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
      
    </div>
  )
}
