import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaLinkedin, FaTwitter, FaTooth } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 font-sans text-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
               <div className="h-8 w-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                <FaTooth className="text-sm" />
              </div>
              <span className="font-bold text-xl tracking-tight">Dr. Albert van der Walt</span>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed max-w-sm">
              Specialist prosthodontic care dedicated to restoring the natural beauty and function of your smile.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-gray-900 mb-6">Practice</h4>
            <ul className="space-y-4">
              {['/', 'About Us', 'Our Team', 'Services'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
                    {item === '/' ? 'Home' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li>
                <a href="tel:0117835511" className="hover:text-gray-900 transition-colors">
                  011 783 5511
                </a>
              </li>
              <li>
                <a href="mailto:reception@sandton-dentist.co.za" className="hover:text-gray-900 transition-colors">
                  reception@sandton-dentist.co.za
                </a>
              </li>
              <li className="leading-relaxed">
                Rochester Place Block D <br/>
                173 Rivonia Rd, Morningside <br/>
                Sandton, 2191
              </li>
            </ul>
          </div>

          {/* Links Column 3 (Hours) */}
          <div className="lg:col-span-3">
             <h4 className="font-bold text-gray-900 mb-6">Hours</h4>
             <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Mon - Fri</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Saturday</span>
                  <span className="font-medium">09:00 - 13:00</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-400 italic">Closed</span>
                </li>
             </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Dr. Albert van der Walt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-gray-900 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-gray-900 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;