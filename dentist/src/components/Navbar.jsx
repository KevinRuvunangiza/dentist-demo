import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTooth, FaBars, FaTimes, FaPhone, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-gray-200 py-3' 
            : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 bg-gray-900 text-white rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaTooth className="text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 leading-tight">Dr. Albert van der Walt [DEMO]</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Prosthodontist</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 relative group ${
                      location.pathname === item.path
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 rounded-full"></span>
                    )}
                  </Link>
                ))}
              </div>
              
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              
              <a
                href="tel:0117835511"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                <FaPhone className="text-xs" />
                <span>011 783 5511</span>
              </a>
              
              <Link
                to="/contact"
                className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                Book Now <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 right-0 bg-white border-b border-gray-200 z-40 lg:hidden overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-medium py-2 border-b border-gray-50 ${
                    location.pathname === item.path ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                 <a
                  href="tel:0117835511"
                  className="w-full text-center py-3 rounded-lg bg-gray-50 text-gray-900 font-medium border border-gray-200"
                >
                  Call 011 783 5511
                </a>
                <Link
                  to="/contact"
                  className="w-full text-center py-3 rounded-lg bg-gray-900 text-white font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;