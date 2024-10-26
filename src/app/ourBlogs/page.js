"use client"
import React, { useState } from 'react';
import { blogs } from "../lib/blogs";
import Blog from '../Components/Blogs/Blog';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function OurBlogsPage() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the blogs to display on the current page
  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handler to change the page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='my-12 max-w-[1200px] mx-auto'>
      <h1 className='text-7xl font-bold text-[#030712] mb-14 text-center'>
        <span className='text-[#B6BCC6]'>Our</span> Blogs
      </h1>
      
      {/* Blog items */}
      <div className="grid grid-cols-2 gap-14 ">
        {currentBlogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className='mt-8'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => goToPage(currentPage > 1 ? currentPage - 1 : 1)}
              />
            </PaginationItem>

            {/* Page numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index + 1}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => goToPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
