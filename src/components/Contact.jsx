import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const successMessageRef = useRef();
  const errorMessageRef = useRef();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const services = [
    'Custom Software Development',
    'Professional Web Design & Development',
    'Intranet & Portal Development',
    'Digital Marketing & Ads Management',
    'IT Tutoring & Training',
    'UI/UX Design'
  ]

  // Scroll to message when success/error appears
  useEffect(() => {
    if (successMessage && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
      });
    } else if (errorMessage && errorMessageRef.current) {
      errorMessageRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
      });
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .sendForm("service_e5t8rwq", "template_ko59qef", form.current, "hpox62iil1ifZg74U")
      .then(
        () => {
          setSuccessMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
          setErrorMessage('');
          setLoading(false);  
          form.current.reset();
        },
        (error) => {
          setErrorMessage('Failed to send the message. Please try again or contact us directly.');
          setSuccessMessage('');
          setLoading(false);  
          console.log('FAILED...', error.text);
        }
      );
  }

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

  return (
    <section id="contact" className="bg-white text-gray-900 py-20 relative overflow-hidden">
     
      
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
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Let's <span className='text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'>Talk</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to learn more about our services? Reach out—we're excited to hear from you and discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </motion.div>

            {/* Success Message */}
            {successMessage && (
              <motion.div 
                ref={successMessageRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <p className="text-green-700">{successMessage}</p>
              </motion.div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <motion.div 
                ref={errorMessageRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
              >
                <FaExclamationCircle className="text-red-500 flex-shrink-0" />
                <p className="text-red-700">{errorMessage}</p>
              </motion.div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="+234 XXX XXX XXXX"
                />
              </motion.div>

              {/* Service Dropdown */}
              <motion.div variants={itemVariants}>
                <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-2">
                  What service are you interested in?
                </label>
                <select
                  id="service_type"
                  name="service_type"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white resize-vertical disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your project or how we can help you..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch directly</h2>
              <p className="text-gray-600 mb-8">
                Prefer to reach out directly? Use any of the contact methods below. We're here to help and always happy to chat about your project.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:your.email@nextwave.com.ng" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                      your.email@nextwave.com.ng
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a href="tel:+234XXXXXXXXX" className="text-green-600 hover:text-green-800 transition-colors duration-300">
                      +234 XXX XXX XXXX
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-purple-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Response Time */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact