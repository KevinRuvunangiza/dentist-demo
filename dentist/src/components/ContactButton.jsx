import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const ContactButton = () => {
  return (
    <motion.a
      href="tel:0117835511"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-40 flex items-center justify-center transition-colors duration-200"
      style={{ width: '56px', height: '56px' }}
    >
      <FaPhone className="text-lg" />
    </motion.a>
  );
};

export default ContactButton;