import React, { useEffect, useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "motion/react"
import { animate } from 'motion/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleCloseMenu = ()=> {
        setIsOpen(false)
    }

    const handleScroll = () => {
        const sections = ['home', 'services', 'about', "contact", "portfolio"]
        const scrollPosition = window.scrollY + 100

        sections.forEach(section => {
            const element = document.getElementById(section)
            if(element){
                const offsetTop = element.offsetTop
                const height = element.offsetHeight
                if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height){
                    setActiveSection(section)
                }
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const handleScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    const navbarHeight = 60
    const elementPosition = targetElement.offsetTop - navbarHeight

    animate(window.scrollY, elementPosition, {
      type: "spring",
      stiffness: 100,
      damping: 20,
      onUpdate: (latest) => window.scrollTo(0, latest),
    })
  }
}
    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('home')
                }} 
                href="#home"
              
                className={`text-white ${activeSection== 'home' ? 'isActive' : ""}`}>Home</motion.a>
            </li>
            <li>
                <motion.a href="#services"
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('services')
                }} 
                className={`text-white ${activeSection== 'services' ? 'isActive' : ""}`}>Services</motion.a>
            </li>
            <li>
                <motion.a href="#about"
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('about')
                }} 
                className={`text-white ${activeSection== 'about' ? 'isActive' : ""}`}>About Us</motion.a>
            </li>
            <li>
                <motion.a href="#portfolio"
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('portfolio')
                }} 
                className={`text-white ${activeSection== 'portfolio' ? 'isActive' : ""}`}>Portfolio</motion.a>
            </li>
           
        </ul>
    )

  return (
    <header className='bg-[#0e1122] text-white py-3 px-4 fixed top-0 left-0 right-0 z-50'>
       <div className="container mx-auto flex justify-between items-center h-full">
  {/* Logo + Name */}
  <div className="flex items-center gap-2 text-white text-lg font-semibold">
    <a href="/" className="flex items-center gap-2">
      <img src="/NextWaveLogo.png" alt="logo" className="w-[2.5rem]" />
      <h3>NextWave</h3>
    </a>
  </div>

   {/* nav items */}
   <div className='hidden md:flex flex-grow justify-center'>
    <nav>
        {navLinks}
    </nav>
  </div>

    {/* button  */}
  <div className='hidden md:block'>
    <motion.a whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('contact')
                }} href="#contact" className='text-white bg-green-600 hover:bg-green-400 px-4 py-2 rounded'>Contact Us</motion.a>
  </div>

   <div className='block md:hidden'>
    <button onClick={handleToggle} className={`text-white focus:outline-none ${isOpen ? "border border-white" : ''}`}>
        <RiMenu3Fill className='size-6'/>
    </button>
  </div>
</div>

{/* Mobile menu */}
{isOpen && (
  <div className='md:hidden'>
    <nav className='bg-[#0e1122] px-4 pb-4'>
      {navLinks}
      <div className='mt-4'>
        <a href="#contact" className='text-white bg-green-600 hover:bg-green-400 px-4 py-2 rounded block text-center'>Contact Us</a>
      </div>
    </nav>
  </div>
)}

     </header>
  )
}

export default Navbar