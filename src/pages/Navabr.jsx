import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 200);
    } else {
      scrollToSection(section);
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", icon: <AiFillHome className="mr-2" />, section: "home" },
    { label: "Services", icon: <MdMiscellaneousServices className="mr-2" />, section: "services" },
    { label: "About Me", icon: <FaUserAlt className="mr-2" />, section: "aboutme" },
    { label: "Your Journey", icon: <GiPathDistance className="mr-2" />,section: "yourjourney" },
  ];

  return (
    <nav className="bg-teal-800 px-6 md:px-20 py-4 left-0 top-0 w-full z-50 fixed flex justify-between items-center shadow-md">
      {/* Hamburger on Left */}
      <button
        className="md:hidden text-white text-3xl mr-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Logo - hidden when mobile menu open */}
      {!isOpen && (
        <div className="text-white text-2xl md:text-3xl font-bold">
          Life Coaching
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigation(item.section)}
              className="text-white hover:text-teal-300 cursor-pointer text-xl font-semibold transition duration-300"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Slide-in Left Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-[75%] h-screen bg-[#105153] text-white shadow-lg z-40 flex flex-col justify-between md:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-white">
              <h1 className="text-2xl font-bold">Life Coaching</h1>
              <button
                className="text-white text-2xl absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <IoClose />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col items-start px-6 space-y-5 mt-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.section)}
                  className="text-lg font-semibold hover:text-teal-300 transition duration-300 w-full flex items-center"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Bottom Message */}
            <div className="p-6 mt-8 border-t border-white text-sm text-gray-200">
              <p className="mb-1">🌟 Let’s grow together.</p>
              <p>Your transformation starts here.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



