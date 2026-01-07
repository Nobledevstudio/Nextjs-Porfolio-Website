import React from 'react'
import { servicesData } from '../assets/assets'
import { motion } from "motion/react"

const Services = () => {
  return (
    <section id="services" className="w-full px-[8%] md:px-[12%] bg-gray-50 dark:bg-dark-theme py-20 scroll-mt-20">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.h4 
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-white"
        >
          Services
        </motion.h4>

        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-Ovo mt-3 dark:text-white"
        >
          What I Can Do For You
        </motion.h2>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-gray-600 leading-relaxed dark:text-white"
        >
          I help businesses and individuals build reliable, high-quality digital
          products that are designed to grow and perform.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }} // short stagger for professional flow
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-dark-theme"
          >
            <motion.div 
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 text-2xl mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300 dark:hover:border-gray-500"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {service.icon}
            </motion.div>

            <motion.h3 
              className="text-xl font-semibold mb-3"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {service.title}
            </motion.h3>

            <motion.p 
              className="text-gray-600 text-sm leading-relaxed dark:text-white"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
