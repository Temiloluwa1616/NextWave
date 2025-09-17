import React from 'react'
import HeroImg from "../assets/Hero.jpg"
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id='home' className='bg-[#0e1122] text-white flex items-center pt-18 md:h-screen relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
      
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 gap-12 h-full relative'>
        {/* Left side */}
        <div className='md:w-1/2 space-y-6'>
          <div className='inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium'>
            <span className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'></span>
            Digital Innovation
          </div>
          
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Digital Solutions That 
            <span className='text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text'> Make Life Easier</span>
          </h1>
          
          <p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg'>
            We help businesses thrive with custom software, stunning websites, and powerful intranets designed for growth
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='group bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25'>
              <a href="#contact" className='flex gap-2 items-center'>
                <span>Get Started</span>
                <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
              </a>
            </button>
            
            <button className='border border-gray-600 text-white py-4 px-8 font-medium rounded-lg hover:bg-white/5 transition-all duration-300'>
              <a href="#portfolio">View Our Work</a>
            </button>
          </div>
        
         
        </div>

        {/* Right side */}
        <div className='md:w-1/2 h-full flex items-center justify-center relative'>
          {/* Decorative background shapes */}
          <div className='absolute w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl rotate-12 blur-sm'></div>
          <div className='absolute w-72 h-72 bg-gradient-to-tr from-blue-600/30 to-cyan-500/30 rounded-2xl -rotate-6'></div>
          
          {/* Main image container */}
          <div className='relative z-10 group'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500'></div>
            <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl transform group-hover:-translate-y-2 transition-all duration-500 shadow-2xl'>
              <img 
                src={HeroImg} 
                alt="Digital Solutions Hero" 
                className='w-[20rem] h-[24rem] object-cover rounded-xl shadow-lg'
              />
              
              {/* Floating elements */}
              <div className='absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-bounce'>
                <FaArrowRight className='w-4 h-4' />
              </div>
              
              <div className='absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg'>
                <span className='text-sm font-medium'>Innovation</span>
              </div>
            </div>
          </div>
          
          {/* Additional floating elements */}
          <div className='absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping'></div>
          <div className='absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse'></div>
          <div className='absolute top-1/3 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce'></div>
        </div>
      </div>
    </section>
  )
}

export default Hero