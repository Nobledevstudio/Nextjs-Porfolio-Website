import React from 'react'
import { assets, WorkData } from '../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
const Work = () => {

   
  return (
    <div  id='work' className='w-full px-[12%] py-10 scroll-mt-20 dark:bg-dark-theme-1'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>   
      <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>

 <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
  Take a look at some of my recent work, featuring modern, responsive designs and projects that focus on delivering great user experiences.
</p>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10'>
  {WorkData.map((project, index) => (
    <motion.div
      key={index}
      className='relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-f h-full'
       initial ={{ y: 20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1}}
        duration={{duration: 0.6, delay: 1.2}}
                        
    >
      {/* Full image */}
      <div className='w-full aspect-1920/2087 relative'>
        <Image
          src={project.bgImage}
          alt={project.title}
          fill
          className='object-contain rounded-xl bg-gray-100'
          priority
        />
      </div>

      {/* Card overlay */}
      <div className='absolute bottom-0 w-full bg-linear-to-t from-black/70 via-black/30 to-transparent text-white px-5 py-4 flex flex-col justify-end transition-all duration-500 group-hover:py-6'>
        <h2 className='font-bold text-lg sm:text-xl'>{project.title}</h2>
        <p className='text-sm sm:text-base mt-1'>{project.description}</p>
      </div>

      {/* Action icon */}
      <div className='absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md group-hover:bg-lime-300 transition-colors duration-300'>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Image src={assets.sendicon} alt='Open Project' className='w-5 h-5 cursor-pointer' />
        </a>
      </div>
    </motion.div>
  ))}
</div>


    <a href="https://github.com/Nobledevstudio" target="_blank" rel="noopener noreferrer" className='w-max flex items-center justify-center gap-2 text-gray-700
         border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 duration-500 dark:text-white dark:border-2 dark:hover:bg-gray-700 cursor-pointer'
         >Show More <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4 cursor-pointer dark:invert'/> </a>
    </div>

      
  )
}

export default Work