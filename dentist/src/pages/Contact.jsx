import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
  FaSpinner,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
             <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Response time: &lt; 24 hours
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-gray-900">
              Start the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                conversation.
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Whether you have a dental emergency or want to discuss a cosmetic procedure, 
              our team is ready to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Left Column: Contact Details & Info */}
            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Info Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1 group-hover:border-gray-400 transition-colors">
                      <FaPhone className="text-gray-900" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Call Us</p>
                      <a href="tel:0117835511" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
                        011 783 5511
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1 group-hover:border-gray-400 transition-colors">
                      <FaEnvelope className="text-gray-900" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</p>
                      <a href="mailto:reception@sandton-dentist.co.za" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors break-all">
                        reception@sandton-dentist.co.za
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1 group-hover:border-gray-400 transition-colors">
                      <FaMapMarkerAlt className="text-gray-900" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Visit Us</p>
                      <p className="text-gray-900 font-medium">Rochester Place Block D</p>
                      <p className="text-gray-600">173 Rivonia Rd, Morningside</p>
                      <p className="text-gray-600">Sandton, 2191</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Google Map Embed */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden h-80 relative bg-gray-100 shadow-sm group">
                <iframe 
                  title="Practice Location"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  src="https://maps.google.com/maps?q=Rochester%20Place%20Block%20D%2C%20173%20Rivonia%20Rd%2C%20Morningside%2C%20Sandton&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                 
                 {/* Overlay Button */}
                 <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rochester+Place+Block+D+173+Rivonia+Rd+Morningside+Sandton"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl text-sm font-semibold shadow-lg border border-gray-200 flex items-center justify-center gap-2 pointer-events-auto hover:bg-white transition-colors text-gray-900"
                    >
                        <FaExternalLinkAlt className="text-xs text-gray-500" />
                        Open in Google Maps
                    </a>
                 </div>
              </div>
            </motion.div>

            {/* Right Column: The Form */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-xl shadow-gray-200/50">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                  <p className="text-gray-500">
                    Fill out the form below and our team will get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all duration-200 placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all duration-200 placeholder-gray-400"
                        placeholder="082 123 4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all duration-200 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all duration-200 resize-none placeholder-gray-400"
                      placeholder="Tell us about your dental needs..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full flex items-center justify-center space-x-2 py-4 rounded-full font-medium transition-all duration-200 ${
                        submitted 
                          ? 'bg-green-600 text-white cursor-default' 
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {isSubmitting ? (
                        <FaSpinner className="animate-spin" />
                      ) : submitted ? (
                        <>
                          <FaCheckCircle />
                          <span>Message Sent Successfully</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaArrowRight className="text-sm ml-1" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Emergency Bottom Bar */}
      <section className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
               <h3 className="text-2xl font-bold text-white mb-2">Dental Emergency?</h3>
               <p className="text-gray-400">We prioritize emergency appointments. Do not hesitate to call.</p>
            </div>
            <a 
              href="tel:0117835511" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              <FaPhone className="mr-2 text-sm" /> 
              011 783 5511
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;