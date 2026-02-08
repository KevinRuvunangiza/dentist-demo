import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaHeart, FaCoffee, FaLeaf } from "react-icons/fa";

const Team = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staff = [
    {
      name: "Angela Baker",
      role: "Oral Hygienist",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000", // Dental setting
      bio: "Angela qualified as a hygienist in 1991 at Wits University, achieving the accolade of being in the top three students. With vast experience in private practice, she prides herself on a high standard of gentle patient care. She is passionate about educating patients on the latest techniques in preventative home care.",
      highlight: "Gentle Touch",
    },
    {
      name: "Maria Dippenaar",
      role: "Receptionist & PA",
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000", // Welcoming desk
      bio: "Maria is our efficient receptionist, practice manager, and Dr. Van der Walt's personal assistant. Her friendly predisposition and exceptional interpersonal skills make her highly valued by both the team and our patients, ensuring the practice runs smoothly and welcomingly.",
      highlight: "Friendly Voice",
    },
    {
      name: "Mary-Anne Leeferink",
      role: "Dental Nurse",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000", // Clinical warmth
      bio: "Mary-Anne is a vastly experienced dental nurse and clinical assistant. Her in-depth knowledge of dentistry and clinical dental procedures makes her extremely efficient in assisting the dentists during surgery.",
      highlight: "Clinical Expert",
    },
    {
      name: "Julia Mpulo",
      role: "Dental Nurse",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000", // Team work
      bio: "Julia is a qualified dental nurse with many years of experience. Her friendly and efficient manner helps put patients at ease. She possesses in-depth knowledge of clinical assisting and also manages the stock of dental materials.",
      highlight: "Patient Comfort",
    },
    {
      name: "Christine Dibobe",
      role: "Sterilization Specialist",
      image:
        "https://images.unsplash.com/photo-1588776814601-a454a8e3a940?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Clean/Sterile
      bio: "Chrissie is a long-standing member of staff, invaluable in ensuring all instruments undergo a stringent three-step cleaning and sterilization process. She is the guardian of our cross-infection control.",
      highlight: "Safety Guardian",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* Hero Section - Warm & Inviting */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Soft Organic Background Blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-stone-200 mb-8">
              <FaHeart className="text-rose-400 text-sm" />
              <span className="text-sm font-medium text-stone-600">
                The Heart of Our Practice
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-stone-900">
              Meet the Family.
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed font-light">
              We aren't just colleagues; we are a dedicated family of
              professionals united by a passion for gentle, personalized care.
              We've been serving the Sandton community together for decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dr. Albert Feature - Editorial Style */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Side */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                  {/* Placeholder for Dr. Albert */}
                  <img
                    src="https://images.unsplash.com/photo-1662997777051-f50b550bff53?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Dr Albert van der Walt"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Badge */}
                <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 rounded-2xl shadow-xl hidden lg:block max-w-[200px]">
                  <p className="font-serif italic text-lg leading-snug">
                    "Excellence in gentle personalized care."
                  </p>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-stone-900 mb-2">
                    Dr. Albert van der Walt
                  </h2>
                  <p className="text-stone-500 font-medium tracking-wide">
                    Dentist & Prosthodontist • Founder
                  </p>
                </div>

                <div className="prose prose-lg prose-stone text-stone-600 leading-relaxed">
                  <p>
                    Albert qualified as a general dentist in 1980 at Wits
                    University, obtaining a medal for the best student in
                    restorative dentistry. After two years of military training,
                    he specialized as a{" "}
                    <strong className="text-stone-900">
                      prosthodontist in 1985
                    </strong>
                    .
                  </p>
                  <p>
                    He started his own practice in 1989 in Bryanston, growing it
                    on sound principles of quality dentistry. He recently moved
                    to a modern complex attached to the prestigious{" "}
                    <strong className="text-stone-900">
                      Morningside Clinic in Sandton
                    </strong>
                    .
                  </p>
                </div>

                {/* Personal "Cozy" Details */}
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full shadow-sm text-stone-400">
                      <FaCoffee />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">
                        Off Duty
                      </h4>
                      <p className="text-sm text-stone-600">
                        Married to Lesley for 28 years with three children
                        (Ashley, David, Kirsten). Enjoys fitness training and
                        playing golf on weekends.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              The Support Team
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Our practice is built on long-standing relationships. Meet the
              people who make your visit comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgb(0,0,0,0.08)] transition-all duration-300 border border-stone-100"
              >
                {/* Card Image */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-800 shadow-sm">
                    {member.highlight}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-stone-900">
                      {member.name}
                    </h3>
                    <p className="text-stone-500 text-sm font-medium uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex items-center space-x-1 text-yellow-400 text-xs">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-stone-200" />
                    <span className="text-stone-400 ml-2 text-xs font-sans">
                      (Dedication)
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* "Join Us" Card - Warm Invitation */}
            <motion.div
              className="bg-stone-900 rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#ffffff33_1px,transparent_1px)] bg-[size:10px_10px]"></div>
              <div className="relative z-10">
                <div className="bg-stone-800 p-4 rounded-full inline-block mb-6">
                  <FaLeaf className="text-2xl text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Welcome Home</h3>
                <p className="text-stone-400 mb-8 text-sm leading-relaxed">
                  We treat every patient like family. Come visit our modern,
                  comfortable complex in Sandton.
                </p>
                <a
                  href="tel:0117835511"
                  className="bg-white text-stone-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-stone-100 transition-colors"
                >
                  Book a Visit
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section - The "Cozy" Finisher */}
      <section className="py-20 border-t border-stone-200 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FaQuoteLeft className="text-4xl text-stone-200 mx-auto mb-6" />
          <p className="text-3xl md:text-5xl font-serif text-stone-800 italic leading-tight mb-8">
            "The most important thing you wear is your smile – allow us to make
            it shine."
          </p>
          <p className="text-stone-500 font-medium tracking-widest uppercase text-sm">
            — Dr. Albert van der Walt
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
