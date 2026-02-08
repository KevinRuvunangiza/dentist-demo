import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaUserMd, 
  FaSmile, 
  FaAward, 
  FaArrowRight, 
  FaCheckCircle, 
  FaPhone,
  FaStar
} from 'react-icons/fa';

const Landing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <FaTooth />,
      title: 'Prosthodontics',
      description: 'Advanced restorative dentistry including crowns, bridges, and dentures.'
    },
    {
      icon: <FaSmile />,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, whitening, and aesthetic treatments.'
    },
    {
      icon: <FaUserMd />,
      title: 'General Dentistry',
      description: 'Comprehensive dental care tailored for the whole family.'
    },
    {
      icon: <FaAward />,
      title: 'Preventive Care',
      description: 'Regular check-ups and treatments to maintain optimal oral health.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Hero Text */}
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 mb-8 hover:border-gray-300 transition-colors cursor-default shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Accepting New Patients in Sandton
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-gray-900">
                Your Smile, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Perfected.
                </span>
              </h1>
              
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                Experience exceptional dental care with Dr. Albert van der Walt. 
                Specialist prosthodontics dedicated to restoring the natural beauty and function of your smile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="h-12 px-8 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center min-w-[160px]"
                >
                  Book Appointment
                </Link>
                <Link 
                  to="/services" 
                  className="h-12 px-8 rounded-full bg-white text-gray-600 border border-gray-200 font-medium hover:border-gray-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center min-w-[160px]"
                >
                  View Services
                </Link>
              </div>

              {/* Review/Trust Snippet */}
              <div className="mt-10 flex items-center gap-4 text-sm font-medium text-gray-500">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                   ))}
                </div>
                <div>
                   <div className="flex text-yellow-400 text-xs mb-0.5">
                     <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                   </div>
                   <p>Trusted by families in Sandton</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
               <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Happy Patient" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-5 py-3 rounded-xl border border-gray-100 shadow-lg flex items-center gap-3">
                     <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <FaCheckCircle />
                     </div>
                     <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Specialist</p>
                        <p className="text-sm font-bold text-gray-900">Dr. Albert van der Walt</p>
                     </div>
                  </div>
               </div>
               {/* Decoration */}
               <div className="absolute -z-10 top-10 right-10 w-full h-full bg-gray-100 rounded-3xl transform rotate-3"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-12">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { label: "Years Experience", value: "15+" },
                 { label: "Happy Patients", value: "2k+" },
                 { label: "Specialist Degrees", value: "2" },
                 { label: "Google Rating", value: "5.0" }
               ].map((stat, i) => (
                 <div key={i}>
                    <p className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Comprehensive Care
            </h2>
            <p className="text-lg text-gray-500">
              From routine check-ups to complex restorative surgeries, we utilize state-of-the-art technology to ensure precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all duration-300"
              >
                <div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Why Choose Us?</h2>
             <p className="text-gray-500 text-lg">We believe this is the recipe for patient satisfaction. Our commitment to excellence sets us apart.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
             
             {/* Large Card Left */}
             <motion.div 
               className="md:col-span-2 row-span-1 rounded-3xl relative overflow-hidden group"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
             >
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068" 
                  alt="Modern Office" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                   <h3 className="text-2xl font-bold text-white mb-2">State-of-the-art Facility</h3>
                   <p className="text-gray-200">Equipped with modern CAD/CAM technology for precise treatments.</p>
                </div>
             </motion.div>

             {/* Card Right Top */}
             <motion.div 
               className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-center"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
               transition={{ delay: 0.1 }}
             >
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-xl mb-6">
                   <FaAward />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Specialist Care</h3>
                <p className="text-gray-500 text-sm">BDS, MDent (Prosthodontics) qualifications ensure expert handling of complex cases.</p>
             </motion.div>

             {/* Card Left Bottom */}
             <motion.div 
               className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-center"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
               transition={{ delay: 0.2 }}
             >
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-xl mb-6">
                   <FaSmile />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Comfort</h3>
                <p className="text-gray-500 text-sm">A child-friendly, relaxed environment with safe parking in Sandton.</p>
             </motion.div>

             {/* Large Card Right Bottom */}
             <motion.div 
               className="md:col-span-2 row-span-1 rounded-3xl bg-gray-900 relative overflow-hidden p-8 flex flex-col justify-center items-start"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
               transition={{ delay: 0.3 }}
             >
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff33_1px,transparent_1px),linear-gradient(90deg,#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">"The most important thing you wear is your smile."</h3>
                    <Link to="/about" className="inline-flex items-center text-white border border-gray-600 rounded-full px-6 py-2 hover:bg-white hover:text-gray-900 transition-colors">
                       Read our Mission <FaArrowRight className="ml-2 text-xs"/>
                    </Link>
                 </div>
             </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff33_1px,transparent_1px),linear-gradient(90deg,#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Ready to transform your smile?
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Contact us today to schedule your appointment and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0117835511" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaPhone className="mr-2 text-sm" /> 011 783 5511
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;