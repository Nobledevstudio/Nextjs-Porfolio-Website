import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-white py-12 px-5 lg:px-8 xl:px-[8%] dark:bg-dark-theme-1 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

        {/* Branding / Logo */}
        <div className="flex flex-col gap-2">
          <h2 className="w-28 cursor-pointer font-Outfit  text-2xl lg:text-3xl italic text-[#28e3da]">Nobledevstudio</h2>
          <p className="text-gray-700 max-w-xs dark:text-white">
            Building modern, responsive, and high-performing web applications that drive results.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-12 text-gray-700 dark:text-white">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold sm:text-lg text-gray-700 mb-2 dark:text-white">Navigate</h2>
                <Link href="#home" className="hover:text-[#28e3da] transition-colors">Home</Link>
                <Link href="#about" className="hover:text-[#28e3da] transition-colors">About</Link>
                 <Link href="#services" className="hover:text-[#28e3da] transition-colors">Services</Link>
                 <Link href="#work" className="hover:text-[#28e3da] transition-colors">Work</Link>
                <Link href="#contact" className="hover:text-[#28e3da] transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2 dark:text-white">
            <h4 className="font-semibold text-gray-700 mb-2 sm:text-lg dark:text-white">Follow Me</h4>
            <div className="flex gap-2 items-center">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image className='dark:invert' src={assets.github} alt="GitHub" width={30} height={28} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image className='dark:invert' src={assets.linkedin} alt="LinkedIn" width={30} height={28} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image className='dark:invert' src={assets.X_icon} alt="Twitter" width={30} height={28} />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image className='dark:invert' src={assets.instagram} alt="Instagram" width={30} height={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 dark:border-white"></div>

      {/* Copyright */}
      <div className="text-center text-gray-700 mt-4 text-sm dark:text-white">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
