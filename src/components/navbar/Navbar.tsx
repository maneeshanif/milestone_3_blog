"use client";
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] =useState(false)

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'Sign up', link: '/signup' },
    { name: 'Sign in', link: '/signin' },
  ]

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='h-[53px] relative w-screen '>
      <div className= 'h-[53px] md:w-[1360px] mx-auto flex items-center justify-between  px-2 md:px-0'>
        {/* Logo */}
        <Image src={'/images/logo.png'} alt='logo' width={42} height={38} />
        {/* main nav part */}
        <div className='w-[340px] h-[28px] hidden sm:flex  '>
          <div className='text-[#313131] flex items-center justify-between w-full h-full '>
          {navItems.map((item) => (
            <Link key={item.name} href={item.link} className='font-normal text-[14px] hover:bg-[#313131] hover:text-white'>{item.name}</Link>
          ))}
          </div>

  </div>
        {/* menu button for mobile */}
        <div className='sm:hidden flex' >
        <button onClick={toggle} >
           {isOpen ? <RxCross1 size={24} /> : <AlignJustify size={24} />}
        </button>
        </div>
        {/* mobile nav part */}
        {isOpen && (
          <div className='sm:hidden flex absolute top-16 z-40 border border-white left-0 flex-col h-[200px] w-[410px]  '>
            <Image src={'/images/forest-hero.png'} alt='logo' width={600} height={200} className='w-full h-full' />
        <div className='absolute top-0 left-0 w-full h-full  flex flex-col  items-center justify-around '>
        {navItems.map((item) => (
            <Link key={item.name} href={item.link} className='font-normal text-white text-[14px] hover:bg-[#313131] hover:text-white'>{item.name}</Link>
          ))}
        </div>
          </div>
        )}

        
      </div>
    </div>
  )
}

export default Navbar
