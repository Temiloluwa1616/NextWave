import React from 'react'
import { FaCode, FaGlobe, FaNetworkWired, FaBullhorn, FaChalkboardTeacher, FaPalette } from 'react-icons/fa'
import { motion } from 'motion/react'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tired of off-the-shelf software that doesn't quite fit? We build scalable, custom applications from the ground up—whether it's a custom CRM, inventory management system, or a unique tool for your specific industry.",
      features: ["Custom CRM Systems", "Inventory Management", "Industry-Specific Tools", "Scalable Architecture"]
    },
    {
      id: 2,
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Professional Web Design & Development",
      description: "Your website is your digital first impression. We create responsive, user-friendly websites that are not just visually appealing but also optimized for search engines (SEO) and designed to drive action.",
      features: ["Responsive Design", "SEO Optimization", "User-Friendly Interface", "Conversion Focused"]
    },
    {
      id: 3,
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Intranet & Portal Development",
      description: "Streamline your internal operations. We develop secure, easy-to-use intranets that become the central nervous system of your company—perfect for document sharing, team communication, and project management.",
      features: ["Document Sharing", "Team Communication", "Project Management", "Secure Access"]
    },
    {
      id: 4,
      icon: <FaBullhorn className="w-8 h-8" />,
      title: "Digital Marketing & Ads Management",
      description: "Built a great website but no one is visiting? We can help with that too. We create and manage targeted digital ad campaigns (Google, Facebook, Instagram) to generate leads and grow your audience.",
      features: ["Google Ads", "Social Media Marketing", "Lead Generation", "Campaign Management"]
    },
    {
      id: 5,
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: "IT Tutoring & Training",
      description: "Empower yourself and your team. We offer personalized coaching sessions to help you master the digital tools you use every day, from your own company intranet to advanced software suites.",
      features: ["Personalized Training", "Team Coaching", "Software Mastery", "Ongoing Support"]
    },
    {
      id: 6,
      icon: <FaPalette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create exceptional user experiences that keep customers engaged. We design intuitive interfaces that not only look stunning but also provide seamless user journeys, increasing satisfaction and conversion rates.",
      features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="bg-white text-gray-900 py-20 relative overflow-hidden">

     
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></span>
            What We Offer
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className='text-transparent bg-blue-500 bg-clip-text'>Services</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a full suite of digital solutions designed to work together seamlessly. Whether you need a standalone website or a complete digital overhaul, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm border border-gray-200 hover:border-blue-300 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-blue-600">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25">
                Learn More
              </button>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-50 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help transform your business with our digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <a href="#contact">Get Free Consultation</a>
              </button>
              <button className="border border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services