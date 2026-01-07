import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-dark-theme dark:z-10 px-5 sm:px-8 lg:px-16 xl:px-[10%] py-24 flex flex-col items-center text-center overflow-hidden">

      {/* ---------- Profile Image ---------- */}
      <motion.div 
         initial ={{scale: 0}}
         whileInView={{scale: 1}}
         transition={{duration: 0.8, type: 'spring' , stiffness: 100}}
      className="relative mb-8 animate-fadeIn">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-gray-800"></div>
        <Image
          src={assets.my_image}
          alt="Victor"
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-white"
          priority
        />
      </motion.div>


      {/* ---------- Name ---------- */}
      <div className="flex items-center gap-3 mb-4 animate-slideUp">
        <motion.h1
             initial ={{y: -20, opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{duration: 0.6, delay: 0.4}}
        className="text-3xl sm:text-4xl md:text-5xl font-Ovo font-extrabold dark:text-white">
          Hi, I'm Victor
        </motion.h1>
        <Image
          src={assets.hand_icon}
          alt="hand icon"
          className="w-7 sm:w-9 md:w-10"
        />
      </div>

      {/* ---------- Short Value Statement ---------- */}
      <motion.p
             initial ={{x: -30, opacity: 0}}
         whileInView={{x:0, opacity: 1}}
         transition={{duration: 0.8, delay: 0.5}}
      className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-8 animate-slideUp delay-100 dark:text-white">
        I build fast, scalable, and conversion-focused websites that help businesses
        grow online — from clean user experiences to complete, production-ready solutions.
      </motion.p>

      {/* ---------- Info Row ---------- */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm sm:text-base mb-10 animate-slideUp delay-150 dark:text-white">
        <motion.div 
           initial ={{y: -20, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.6}}
        className="flex items-center gap-2">
          <Image className="w-5 sm:w-6 dark:invert" src={assets.location} alt="location" />
          <span>Lagos, Nigeria</span>
        </motion.div>

        <motion.div 
           initial ={{y: -20, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.7}}
        className="flex items-center gap-2">
          <Image className="w-5 sm:w-6 dark:block" src={assets.online_icon} alt="status" />
          <span>Available for New Projects</span>
        </motion.div>
      </div>

      {/* ---------- CTA Buttons ---------- */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-slideUp delay-200">
        <motion.a
            initial ={{scale: 0}}
         whileInView={{scale: 1}}
         transition={{duration: 0.8, type: 'spring' , stiffness: 100}}
          href="#work"
          className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors dark:text-white dark:border"
        >
          View My Work
        </motion.a>

        <motion.a
          initial ={{scale: 0}}
         whileInView={{scale: 1}}
         transition={{duration: 0.8, type: 'spring' , stiffness: 100}}
          href="#contact"
          className="px-8 py-3 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors dark:bg-white"
        >
          Contact Me
        </motion.a>
      </div>

      {/* ---------- Social Icons ---------- */}
      <div className="flex items-center gap-5 animate-slideUp delay-300 ">
        <motion.a 
                initial ={{x: -20, opacity: 0}}
          whileInView={{x:0, opacity: 1}}
              whileHover={{ y: -4, scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
           href="https://github.com/Nobledevstudio" aria-label="GitHub">
          <Image className="w-7 sm:w-9 opacity-80 hover:opacity-100 transition-opacity dark:invert" src={assets.github} alt="github" />
        </motion.a>
        <motion.a 
                    initial ={{x: -20, opacity: 0}}
          whileInView={{x:0, opacity: 1}}
               whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
           href="#" aria-label="X">
          <Image className="w-7 sm:w-9 opacity-80 hover:opacity-100 transition-opacity dark:invert" src={assets.X_icon} alt="X icon" />
        </motion.a>
        <motion.a 
                 initial ={{x: -20, opacity: 0}}
                 whileInView={{x:0, opacity: 1}}
               whileHover={{ y: -4, scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
             transition={{ type: "spring", stiffness: 300, damping: 15 }}
             href="https://www.figma.com/files/team/1358112686600251442/recents-and-sharing?fuid=1358112684160879303" aria-label="Figma">
          <Image className="w-7 sm:w-9 opacity-80 hover:opacity-100 transition-opacity dark:invert" src={assets.figma_icon} alt="figma" />
        </motion.a>
      </div>

    </section>
  )
}

export default Header
