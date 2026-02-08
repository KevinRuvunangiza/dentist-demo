import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaHeart,
  FaUsers,
  FaLightbulb,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description:
        "We maintain the highest standards in dental care with continuous professional development.",
      className: "md:col-span-2",
    },
    {
      icon: <FaHeart />,
      title: "Compassion",
      description:
        "Treating every patient with kindness, understanding, and respect.",
      className: "md:col-span-1",
    },
    {
      icon: <FaUsers />,
      title: "Personalized",
      description:
        "Customized treatment plans designed specifically for your unique needs.",
      className: "md:col-span-1",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "Embracing the latest dental technologies and techniques for optimal results.",
      className: "md:col-span-2",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 text-gray-900">
              Precision meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Personal Connection.
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to providing exceptional dental care with a
              personal touch, blending advanced prosthodontics with genuine
              patient relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Split Image */}
      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Setting the standard <br /> in restorative dentistry.
              </h2>
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>
                  I am a general dentist with a special additional degree in
                  advanced restorative dentistry called prosthodontics. I pride
                  myself in providing top-quality dental care to all my
                  patients.
                </p>
                <p>
                  I have set a standard of excellence in the care of all my
                  patients and exceptional personal service is the corner stone
                  of my practice. It is also my passion to enhance and restore
                  the aesthetics of my patients' teeth and thereby enhancing the
                  natural beauty of their smiles.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Specialist Training",
                  "Patient-Centered",
                  "Modern Technology",
                  "Complex Restorations",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-gray-900 text-sm" />
                    <span className="text-gray-700 font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group">
                {/* Image of Dentist/Professional */}
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068"
                  alt="Modern Dental Office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <FaAward className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        Dr. Albert van der Walt
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        BDS, MDent (Prosthodontics)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Bento Grid */}
      <section className="py-24 bg-gray-50/50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300 ${value.className}`}
              >
                <div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900 mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  <div className="text-lg">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
            {/* Image filling the last slot of the grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-3 h-64 md:h-80 rounded-2xl overflow-hidden border border-gray-200 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1758205308106-5760d0227cc7?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dental Tools"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">
                  State-of-the-art Technology
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Approach Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16">
            {/* Image Side */}
            <motion.div
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-32">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080"
                  alt="Patient Consultation"
                  className="rounded-2xl border border-gray-200 shadow-sm w-full"
                />
                <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Long-term Relationships
                  </h4>
                  <p className="text-sm text-gray-500">
                    We believe in building two-way relationships to make
                    treatment personal and relaxed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-8">
                Our Approach to Care
              </h2>

              <div className="prose prose-lg prose-gray max-w-none text-gray-500">
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Detailed Examinations
                  </h3>
                  <p>
                    We provide detailed examinations to all our patients during
                    their initial consultations. When we do these examinations
                    we focus on all aspects of your mouth: your teeth, jaw
                    joints, muscles and gums.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Preventive Focus
                  </h3>
                  <p>
                    We know that gum disease (bleeding gums, bad breath and
                    receding gums) can lead to the loss of your teeth if not
                    timeously treated. We also have a close look at your oral
                    mucosa for problems like ulcers, swellings and signs of
                    early cancer.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Transparent Planning
                  </h3>
                  <p>
                    Based on this information we provide you with{" "}
                    <strong className="text-gray-900">
                      comprehensive treatment planning
                    </strong>{" "}
                    and written treatment proposals where required. These
                    written proposals also include an estimation of fees,
                    empowering you to make informed choices.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Quote Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(#ffffff05_1px,transparent_1px),linear-gradient(90deg,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <FaQuoteLeft className="text-4xl text-gray-700 mx-auto mb-8" />
            <blockquote className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
              "The most important thing you wear is your smile – allow us to
              make it shine."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="h-px w-12 bg-gray-700"></div>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                Dr. Albert van der Walt
              </p>
              <div className="h-px w-12 bg-gray-700"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
