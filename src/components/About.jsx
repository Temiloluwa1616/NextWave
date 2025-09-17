import React from 'react'
import { motion } from 'motion/react'
import { FaFileAlt, FaHandshake, FaCalendarCheck, FaArrowRight } from 'react-icons/fa'
import AboutImg from '../assets/AboutImg.jpg'

const About = () => {
  const steps = [
    {
      id: 1,
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Fill a Form",
      description: "Tell us about your project, business needs, and goals through our simple intake form. The more details you share, the better we can understand your vision."
    },
    {
      id: 2,
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Get Matched",
      description: "Our team reviews your requirements and matches you with the right experts and solutions. We'll create a custom proposal tailored specifically to your needs."
    },
    {
      id: 3,
      icon: <FaCalendarCheck className="w-8 h-8" />,
      title: "Schedule",
      description: "Book a free consultation call where we'll discuss your project in detail, answer questions, and create a clear roadmap to bring your digital vision to life."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <>
      {/* ABOUT US SECTION - White Background */}
      <section id="about" className="bg-white text-gray-900 py-20  overflow-hidden">
        {/* Background decorative elements */}
      
        
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6'>
              <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></span>
              About NEXTWAVE
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Your Partners in <span className='text-transparent bg-blue-500 bg-clip-text'>Digital Growth</span>
            </h1>
          </motion.div>

          {/* Main Content with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-lg text-gray-600 leading-relaxed mb-8">
                At NEXTWAVE, we get it. Technology is supposed to make life easier, but often it just adds more complexity. That's where we come in. We're your partners in cutting through the noise.
              </p>
              <p className="text-lg md:text-lg text-gray-600 leading-relaxed">
                We design, build, and teach—creating custom software, beautiful websites, and intuitive intranets that actually work for you. Let's simplify your digital world, together.
              </p>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div 
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative"
>
  <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
    <img 
      src={AboutImg} 
      alt="Our Team" 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    />
    {/* Optional overlay for better text readability if needed */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Optional caption overlay */}
    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
      <p className="font-medium text-lg">Our Amazing Team</p>
      <p className="text-sm text-white/80">Building innovative solutions together</p>
    </div>
  </div>
</motion.div>
          </div>

          {/* Our Why Section */}
          <motion.div 
            className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why We <span className='text-transparent bg-blue-500 bg-clip-text'>Do It</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We believe that every business, regardless of size, deserves access to powerful and affordable digital tools. Our mission is to demystify technology and provide solutions that are both innovative and incredibly practical.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION - Dark Background */}
      <section id="how-it-works" className="bg-[#0e1122] text-white py-20 relative overflow-hidden">
       
        
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6'>
              <span className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'></span>
              Simple Process
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className='text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text'>Works</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Getting started with NEXTWAVE is easy. Follow these simple steps to transform your digital presence.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="group relative bg-white text-gray-900 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-400">
                    <FaArrowRight className="w-6 h-6" />
                  </div>
                )}

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-50 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About