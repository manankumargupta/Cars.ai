import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Car, X, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity"
          >
            <Car className="h-8 w-8 text-racing-500" />
            <span className="text-xl font-bold">Cars.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/categories" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Categories
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/community" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Community
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-primary-800 shadow-xl"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-700 text-white' : 'text-metal-300 hover:bg-primary-700 hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/categories" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-700 text-white' : 'text-metal-300 hover:bg-primary-700 hover:text-white'
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-700 text-white' : 'text-metal-300 hover:bg-primary-700 hover:text-white'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/community" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-primary-700 text-white' : 'text-metal-300 hover:bg-primary-700 hover:text-white'
                }`
              }
            >
              Community
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;