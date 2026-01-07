import Image from 'next/image'
import React from 'react'
import { assets, infoList, toolsData } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-5 sm:px-8 lg:px-16 xl:px-[10%] py-28 bg-white dark:bg-dark-theme-1 scroll-mt-20"
    >

      {/* ---------- Header ---------- */}
      <motion.div 
          initial ={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          duration={{duration: 0.6}}
      className="max-w-4xl mx-auto text-center mb-20">
        <motion.span 
          initial ={{y: -20, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{duration: 0.6}}
        className="text-xs tracking-widest uppercase text-gray-500 dark:text-white">
          About Me
        </motion.span>
        <motion.h2 
          initial ={{y: 30, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.2}}
        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-Ovo font-bold text-gray-900 leading-tight dark:text-white">
          I build digital products that are<br className="hidden sm:block" />
          clear, scalable, and business-focused
        </motion.h2>
      </motion.div>

      {/* ---------- Main Layout ---------- */}
      <motion.div 
          initial ={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          duration={{duration: 0.8}}
      className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* ---------- Left: Image ---------- */}
      <div className="flex justify-center lg:justify-start">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 30,   // softer spring
            damping: 12,     // gentle stop
            duration: 0.7,
            delay: 0.3       // slight delay so text appears first
          }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-gray-100"></div>
          <Image
            src={assets.user_image1}
            alt="Victor"
            className="relative w-64 sm:w-72 md:w-80 rounded-3xl object-cover"
          />
        </motion.div>
      </div>


        {/* ---------- Right: Content ---------- */}
        <div>

          {/* ---------- Core Statement ---------- */}
          <motion.p 
             initial ={{x:-20, scale: 0.7, opacity: 0}}
              whileInView={{x:0 , scale: 1 , opacity: 1}}
              transition={{duration: 0.8, }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 max-w-xl dark:text-white">
            I’m a Full Stack Developer focused on creating high-quality websites
            that help businesses communicate clearly, convert users, and scale
            with confidence. My approach combines clean design, thoughtful
            structure, and reliable engineering to deliver solutions that work
            long after launch.
          </ motion.p>

          {/* ---------- Value Points ---------- */}
          <motion.div 
              initial ={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.2}}
          className="space-y-6 mb-12">
            {infoList.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <motion.div
                    initial ={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 0.4, delay: 0.2}}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white">
                  <Image src={icon} alt={title} className="w-5" />
                </motion.div>
                <div>
                  <motion.h3 
                    initial ={{x:-20, opacity: 0}}
                    whileInView={{x:0 , opacity: 1}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="font-semibold text-gray-800 mb-1 dark:text-white">
                    {title}
                  </motion.h3>
                  <motion.p 
                    initial ={{x:-20, opacity: 0}}
                    whileInView={{x:0 , opacity: 1}}
                    transition={{duration: 0.6, delay: 0.3}}
                  className="text-sm text-gray-600 leading-relaxed max-w-md dark:text-white">
                    {description}
                  </motion.p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ---------- Tools ---------- */}
          <div>
            <motion.h4 
              initial ={{x:-20, opacity: 0}}
              whileInView={{x:0 , opacity: 1}}
              transition={{duration: 0.6, delay: 0.2}}
            className="text-sm font-medium text-gray-800 mb-4 dark:text-white">
              Tools & Technologies
            </motion.h4>

            <motion.div 
              initial ={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.4}}
            className="flex flex-wrap gap-3">
              {toolsData.map((tool, index) => (
                <motion.div
                  initial ={{scale: 0.7}}
                  whileInView={{scale: 1}}
                  transition={{duration: 0.4, delay: 0.2}}
                  key={index}
                  className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-300 bg-gray-50 hover:bg-white hover:shadow-sm transition"
                >
                  <Image
                    src={tool}
                    alt="tool"
                    className="w-5 opacity-80 hover:opacity-100 transition"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default About
