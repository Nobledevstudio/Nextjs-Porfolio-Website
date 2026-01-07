import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [active, setActive] = useState('#top')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]

  // Scroll and active link detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
      const scrollPosition = window.scrollY + 100
      let current = '#top'
      links.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= scrollPosition) {
          current = link.href
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const handleLinkClick = (href) => {
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setActive(href)
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScroll
          ? 'backdrop-blur-md bg-white/80 dark:bg-dark-theme-1 shadow-md py-2'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className='flex items-center justify-between px-5 lg:px-8 xl:px-[8%]'>
        {/* Logo */}
        <a
          href='#top'
          className='text-2xl text-black dark:text-white font-Outfit italic font-bold md:text-3xl'
        >
          Nobledevstudio
        </a>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8'>
          {links.map((link) => (
            <li key={link.href} className='relative group'>
              <a
                href={link.href}
                className={`font-Ovo text-lg md:text-xl transition-colors duration-300 dark:text-white ${
                  active === link.href ? 'text-[#28e3da]' : 'text-gray-800'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
              >
                {link.name}
              </a>
              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#28e3da] transition-all duration-300 ${
                  active === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className='flex items-center gap-4'>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer'
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt='Theme toggle'
              width={32}
              height={32}
            />
          </button>

          {/* Download CV Button */}
          <a
            href='#'
            className='hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-[#28e3da] hover:bg-[#19b7b7] text-white font-Ovo rounded-xl transition-colors duration-300'
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className='md:hidden p-2 rounded-lg hover:bg-gray-200 transition dark:bg-white dark:hover:bg-gray-700'
          >
            <Image src={assets.menu_black} className='w-7' alt='menu' />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40'
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 h-screen w-72 bg-white/95 dark:bg-dark-theme-1 backdrop-blur-md shadow-2xl flex flex-col gap-6 py-20 px-6 transition-all duration-300 z-50 ${
          isMenuOpen ? 'right-0' : '-right-full'
        }`}
      >
        <div
          className='absolute top-5 right-5 cursor-pointer transition-all duration-150'
          onClick={() => setIsMenuOpen(false)}
        >
          <Image src={assets.close_black} className='w-5 dark:invert' alt='close' />
        </div>

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className='font-Ovo text-lg py-2 text-gray-800 dark:text-gray-200 hover:text-[#28e3da] transition-colors duration-300'
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick(link.href)
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
