import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react";


const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-[8%] md:px-[12%] py-16 scroll-mt-20 bg-gray-50 dark:bg-dark-theme"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div 
          className="mb-14 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto dark:text-white">
            Let’s talk about your project and how I can help you build modern, fast, and user-friendly web solutions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Side */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 leading-relaxed dark:text-white">
              I’m a web developer specializing in building responsive, accessible, and scalable web applications using modern technologies. I help individuals and businesses turn ideas into reliable digital products.
            </p>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 dark:text-white">What I can help you with</h3>
              <ul className="space-y-2 text-gray-700 dark:text-white">
                <li>✔️ Responsive Website Development</li>
                <li>✔️ React & Next.js Applications</li>
                <li>✔️ UI Implementation from Figma</li>
                <li>✔️ Performance & SEO Optimization</li>
              </ul>
            </div>

            {/* Availability */}
            <p className="text-sm text-gray-500 dark:text-white">
              ⏱ Typically responds within 24 hours
            </p>

            {/* Contact Details */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center gap-4">
                <Image src={assets.email_icon} alt="Email icon" width={32} height={32} />
                <p className="text-gray-700 dark:text-white">codetechbase@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <Image src={assets.home_icon} alt="Location icon" width={32} height={32} />
                <p className="text-gray-700 dark:text-white">3, Joshua Okeowo Street, Unity B/Stop, Ikotun, Lagos</p>
              </div>

              <div className="flex items-center gap-4">
                <Image src={assets.phone_call_icon} alt="Phone icon" width={32} height={32} />
                <p className="text-gray-700 dark:text-white">+234 907 740 1306</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-[#28e3da] focus:outline-none focus:ring-1 focus:ring-[#28e3da] dark:placeholder-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-[#28e3da] focus:outline-none focus:ring-1 focus:ring-[#28e3da] dark:placeholder-white"
                  placeholder="john@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-[#28e3da] focus:outline-none focus:ring-1 focus:ring-[#28e3da] dark:placeholder-white"
                  placeholder="+234..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-[#28e3da] focus:outline-none focus:ring-1 focus:ring-[#28e3da] dark:placeholder-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-[#28e3da] text-white font-medium rounded-lg hover:bg-[#19b7b7] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

  )
}

export default Contact
