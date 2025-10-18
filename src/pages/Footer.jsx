import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Heart, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Me', href: '#about' },
    { name: 'Your Journey', href: '#yourjourney' },
  ];

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 border-t border-rose-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">The Inner Bloom Journey</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Guiding you on a transformative journey to unlock your full potential and live a life of purpose, meaning, and fulfillment through certified Life Coaching.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span>theinnerbloomjourney07@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 cursor-pointer hover:text-rose-600 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-700">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-rose-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/theinnerbloomjourney/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/share/1AwdKwVSov/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/salma-nisha-657795117"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>

              <a
                href="https://www.youtube.com/@TheInnerBloomJourney07"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-full text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} The Inner Bloom Journey – All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
