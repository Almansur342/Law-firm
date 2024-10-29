"use client";
import { Flag } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

export default function Navbar2() {
  const pathName = usePathname();
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const scrollSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

  }

  const handleNavigation = (sectionId) => {
    if (pathName == "/") {
      scrollSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  }

  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpenMenu]);

  return (
    <div className='relative w-full z-50 sm:px-[5%] sm:py-8'>
      <div className='max-w-[1200px] mx-auto container'>
        <div className='relative hidden md:flex justify-between items-center overflow-x-hidden'>
          <div className='flex justify-center items-center gap-4'>
            <Link href="/">
              <Image
                src="/Images/logoBlack.png"
                width={90}
                height={100}
                alt='Legal Matter BD Logo'
                className='md:h-8 w-fit'
              />
            </Link>
            <h3 className='font-medium hidden lg:block text-2xl'>Legal Matter BD</h3>
          </div>

          <nav className='py-4 px-6 '>
            <ul className='flex space-x-8 items-center'>
              <li>
                <Link href="/" className='relative text-xl text-[#030712]'>
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("about")}
                  className='relative text-xl text-[#030712]'>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className='relative text-xl text-[#030712]'>
                  Services
                </button>
              </li>
              <li>
                <Link href="/ourBlogs" className='relative text-xl text-[#030712]'>
                  Blogs
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("contact")}
                  className='relative text-xl text-[#030712]'>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* mobile navbar */}
        <div className='relative md:hidden z-50 flex justify-between items-center px-[5%] sm:py-8 bg-white overflow-x-hidden'>
          <Link href="/">
            <Image
              src="/Images/logoBlack.png"
              width={90}
              height={100}
              alt='Legal Matter BD Logo'
              className='h-10 w-fit relative z-50'
            />
          </Link>
          <button
            onClick={toggleMenu}
            className='text-3xl px-1.5 focus:outline-none'>
            {isOpenMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {
          isOpenMenu && (
            <div onClick={() => setIsOpenMenu(false)} className='fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 mt-24 z-0'></div>
          )}

        <div className='md:hidden relative'>
          <nav className={`${isOpenMenu ? "translate-y-0 opacity-100 shadow-md" : "-translate-y-full opacity-100"} transform transition-all duration-500 ease-in-out overflow-hidden absolute top-0 w-full py-6 border-t border-gray-200 z-10`}
          >
            <ul className="flex flex-col items-center text-center space-y-3">
              {[{ name: "Home", href: "/" }, { name: "About", id: "about" }, { name: "Services", id: "services" }, { name: "Blogs", href: "/blogs" }, { name: "Contact", id: "contact" }].map(
                (item, index) => (
                  <li key={index} className="w-full">
                    {item.href ? (
                      <Link
                        className="text-lg font-medium text-[#030712] hover:text-secondary hover:underline"
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavigation(item.id);
                          setIsMenuOpen(false);
                        }}
                        className="text-lg font-medium text-[#030712] hover:text-secondary hover:underline w-full"
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

      </div>
    </div>
  )
}
