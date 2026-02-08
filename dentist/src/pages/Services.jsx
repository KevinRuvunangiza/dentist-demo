import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaSmile, 
  FaCrown, 
  FaTeeth, 
  FaSyringe,
  FaChild,
  FaHeartbeat,
  FaShieldAlt,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <FaCrown />,
      title: 'Prosthodontics',
      description: 'Specialist restoration of missing teeth. We restore function and aesthetics using implant-supported crowns, bridges, and dentures.',
      features: ['Dental Implants', 'Crowns & Bridges', 'Veneers', 'Complex Cases']
    },
    {
      icon: <FaSmile />,
      title: 'Cosmetic Dentistry',
      description: 'Enhance the natural beauty of your smile with comprehensive aesthetic treatments designed for your facial structure.',
      features: ['Teeth Whitening', 'Smile Design', 'Aesthetic Bonding', 'Gingival Contouring']
    },
    {
      icon: <FaTooth />,
      title: 'General Dentistry',
      description: 'Routine care including fillings, root canals, and metal-free dentistry to maintain oral health.',
      features: ['Resin Fillings', 'Root Canals', 'Extractions', 'Oral Exams']
    },
    {
      icon: <FaTeeth />,
      title: 'Fixed Bridges',
      description: 'Permanent solutions for missing teeth using fixed bridges that restore both chewing function and confidence.',
      features: ['Traditional', 'Maryland', 'Cantilever', 'Implant-Supported']
    },
    {
      icon: <FaChild />,
      title: 'Pediatric Dentistry',
      description: 'A gentle, child-friendly environment ensuring comfortable visits for our youngest patients.',
      features: ['Preventive Care', 'Fluoride', 'Orthodontic Checks', 'Gentle Care']
    },
    {
      icon: <FaHeartbeat />,
      title: 'Preventive Care',
      description: 'Regular examinations and professional cleaning by our oral hygienist to prevent gum disease.',
      features: ['Check-ups', 'Pro Cleaning', 'Hygiene Education', 'Screening']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Protective Treatments',
      description: 'Safeguarding your teeth with sealants and custom-fitted guards for sports or grinding.',
      features: ['Fissure Sealants', 'Mouthguards', 'Night Guards', 'Fluoride']
    },
    {
      icon: <FaSyringe />,
      title: 'Advanced Tech',
      description: 'Utilization of CAD/CAM technology for precise manufacturing of crowns, veneers, and dentures.',
      features: ['CAD/CAM', 'Digital Impressions', 'Same-Day', 'Precision']
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Full Service Practice
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-gray-900">
              World-class procedures, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                local care.
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From routine maintenance to complex restorative surgeries, we utilize state-of-the-art technology to ensure precision and comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all duration-300"
              >
                <div>
                  <div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-1 rounded bg-gray-50 text-[10px] uppercase tracking-wide font-medium text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Philosophy Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                State-of-the-Art <br />
                <span className="text-gray-400">Technology & Materials</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Precision is paramount in dentistry. When restorative work is required, 
                  we contract the best dental technicians and utilize advanced equipment.
                </p>
                <p>
                  This includes <strong>CAD/CAM technology</strong> to manufacture our crowns, bridges, 
                  porcelain inlays, and veneers. This digital workflow ensures a perfect fit, 
                  esthetic excellence, and longevity for your restorations.
                </p>
              </div>

              <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                 <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <FaShieldAlt className="mr-2 text-gray-400" />
                    Our Treatment Philosophy
                 </h4>
                 <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-600">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span>Prevention is better than cure (Regular exams & cleaning).</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span>Comprehensive analysis: Teeth, jaw, muscles, and gums.</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span>Transparent fees and written treatment proposals.</span>
                    </li>
                 </ul>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2070" 
                  alt="Modern Dental Technology" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <div className="text-white">
                        <p className="font-bold text-xl">Digital Precision</p>
                        <p className="text-sm text-gray-200">Advanced imaging for accurate diagnosis.</p>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-gray-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff33_1px,transparent_1px),linear-gradient(90deg,#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Your health is our priority.
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Schedule your consultation today and let us create a personalized treatment plan just for you.
              </p>
              <a 
                href="tel:0117835511" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Call 011 783 5511 <FaArrowRight className="ml-2 text-sm" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;