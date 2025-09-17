import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FaExternalLinkAlt, FaGithub, FaEye, FaReact, FaMobile, FaQrcode, FaFileInvoice, FaCube } from 'react-icons/fa'
import  Nithub from '../assets/Nithub.jpg'
import QrCode from '../assets/QrCode.jpg'
import EduPro from '../assets/EduPro.png'
import Invoice from '../assets/InvoiceApp.png'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      name: 'NiTHub Website Redesign',
      category: 'Web Development',
      categoryTag: 'web',
      description: 'Redesigned the NiTHub website using React and Tailwind CSS, working with backend engineers to integrate dynamic content and ensure responsive, high-performance delivery.',
      fullDescription: 'Complete website redesign focusing on modern UI/UX principles, performance optimization, and seamless backend integration for dynamic content management.',
      image: Nithub,
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'API Integration'],
      features: ['Responsive Design', 'Dynamic Content', 'High Performance', 'Modern UI/UX'],
      icon: <FaReact className="w-6 h-6" />,
      color: 'blue',
      type: 'Website Redesign',
      demo: 'https://nithub.unilag.edu.ng'
    },
    {
      id: 2,
      name: 'Edu-Pro Mobile App',
      category: 'Mobile Development',
      categoryTag: 'mobile',
      description: 'Spearheaded development of Edu-Pro, a mobile app offering academic resources and learning tools for students. Enhanced cross-platform UX/UI consistency on iOS and Android using React Native components and styled-system.',
      fullDescription: 'Comprehensive educational mobile application providing students with academic resources, learning tools, and cross-platform compatibility with consistent user experience.',
      image: EduPro,
      
      technologies: ['React Native', 'Styled-System', 'JavaScript', 'Cross-Platform'],
      features: ['Academic Resources', 'Learning Tools', 'Cross-Platform UX/UI', 'iOS & Android'],
      icon: <FaMobile className="w-6 h-6" />,
      color: 'green',
      type: 'Mobile App'
    },
    {
      id: 3,
      name: 'QR Code Generator',
      category: 'Web Application',
      categoryTag: 'web',
      description: 'QR-Code-Generator is a web application for a company that allows users to generate QR codes by entering text or URLs. Built with HTML, CSS, and JavaScript, it offers a straightforward interface for real-time QR code generation.',
      fullDescription: 'User-friendly web application designed for quick and efficient QR code generation with real-time preview and multiple input options for various use cases.',
      image: QrCode,
      github: 'https://github.com/Temiloluwa1616/QR-Code-Generator',
      technologies: ['HTML', 'CSS', 'JavaScript', 'QR Library'],
      features: ['Real-time Generation', 'Text & URL Support', 'Simple Interface', 'Instant Preview'],
      icon: <FaQrcode className="w-6 h-6" />,
      color: 'purple',
      type: 'Web Tool',
      demo: 'https://qr-code-generator-temi1.vercel.app/'
    },
    {
      id: 4,
      name: 'Invoice Generator Mobile App',
      category: 'Mobile Development',
      categoryTag: 'mobile',
      description: 'Mobile application designed to streamline invoice creation and management for small businesses and freelancers with intuitive design and essential business features.',
      fullDescription: 'Professional invoice generation tool built for mobile devices, enabling users to create, manage, and send invoices efficiently with modern design and user-friendly interface.',
      image: Invoice,
      technologies: ['React Native', 'JavaScript', 'PDF Generation', 'Local Storage'],
      features: ['Invoice Creation', 'PDF Export', 'Client Management', 'Mobile Optimized'],
      icon: <FaFileInvoice className="w-6 h-6" />,
      color: 'orange',
      type: 'Business App'
    },
    {
      id: 5,
      name: '3D Printing Project',
      category: 'Hardware & Design',
      categoryTag: 'design',
      description: 'Innovative 3D printing project showcasing design expertise and technical skills in creating functional prototypes and custom solutions.',
      fullDescription: 'Comprehensive 3D printing project involving design conceptualization, CAD modeling, prototype development, and successful fabrication of functional components.',
      technologies: ['CAD Design', '3D Modeling', 'Prototyping', 'Manufacturing'],
      features: ['Custom Design', 'Prototype Development', 'Functional Testing', 'Manufacturing Ready'],
      icon: <FaCube className="w-6 h-6" />,
      color: 'red',
      type: 'Hardware Design'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.categoryTag === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.categoryTag === 'mobile').length },
    { id: 'design', name: 'Design & Hardware', count: projects.filter(p => p.categoryTag === 'design').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categoryTag === activeFilter)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-600',
      green: 'from-green-50 to-green-100 border-green-200 text-green-600',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-600',
      orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-600',
      red: 'from-red-50 to-red-100 border-red-200 text-red-600'
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section id="portfolio" className="bg-white text-gray-900 py-20 relative overflow-hidden">
     
      
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
            Our Portfolio
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className='text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>Work</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent projects. Each one was designed to solve a specific challenge for our clients.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeFilter} // Force re-animation when filter changes
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
             <div className="relative overflow-hidden group">
  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
    {project.image?.trim() ? (
      <img
        src={project.image}
        alt={project.name || "Project screenshot"}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="text-center px-4">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(
            project.color
          )} rounded-full flex items-center justify-center mx-auto mb-4 border`}
        >
          {project.icon}
        </div>
        <p className="text-gray-500 font-medium">{project.name}</p>
      </div>
    )}
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <div className="flex gap-4">
      <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
        <FaEye className="w-5 h-5" />
      </button>
      <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
        <FaExternalLinkAlt className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>


              {/* Project Content */}
              <div className="p-8">
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getColorClasses(project.color)} px-3 py-1 rounded-full text-sm font-medium mb-4 border`}>
                  {project.icon}
                  {project.type}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                 { project.github && <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm">
                    <a href={project.github} target='_blank'>View Details</a>
                  </button>}
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm">
                    <a href={project.demo} target='_blank'>Live Demo</a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
            <p className="text-gray-600">Technologies Used</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
            <p className="text-gray-600">Mobile Apps</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Let's create something amazing together. Get in touch to discuss your next project.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              <a href="#contact">Start Your Project</a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio