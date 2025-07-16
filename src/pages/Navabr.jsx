import { useState, useEffect } from "react";
import { Menu, X, Home, Heart, User, Compass } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", icon: Home, section: "home" },
    { label: "Services", icon: Heart, section: "services" },
    { label: "About Me", icon: User, section: "aboutme" },
    { label: "Your Journey", icon: Compass, section: "yourjourney" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${"bg-white/95 backdrop-blur-md shadow-xl border-b border-rose-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Coaching
              </span>
              <span className={"text-gray-800"}>
                {" "}with Salma
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.section)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 group cursor-pointer ${"text-gray-700 hover:text-rose-600 hover:bg-rose-50"}`}
                  >
                    <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${"text-gray-700 hover:bg-gray-100" }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-rose-200 to-pink-200 bg-clip-text text-transparent">
                  Coaching
                </span>
                <span className="text-white"> with Salma</span>
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-rose-100 mt-2 text-sm">Heal. Let Go. Grow.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-6">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.section)}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:text-rose-600 transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-rose-100 group-hover:to-pink-100 transition-all duration-200">
                      <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <span className="text-2xl">🌸</span>
                <span className="text-gray-600 font-medium">Transform your life</span>
              </div>
              <p className="text-sm text-gray-500">Your healing journey starts here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
