import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <NavLink 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Sanjan B M
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-indigo-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-indigo-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              About
            </NavLink>
            
            {/* Projects Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Projects
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <NavLink 
                  to="/#web-projects" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Web Development
                </NavLink>
                <NavLink 
                  to="/#mobile-projects" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Mobile Apps
                </NavLink>
                <NavLink 
                  to="/#design-projects" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  UI/UX Design
                </NavLink>
              </div>
            </div>

            <NavLink 
              to="/#contact" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </NavLink>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/sanjanb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sanjan-bm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:sanjanacharaya1234@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="mailto:sanjanacharaya1234@gmail.com" 
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-4 space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block text-sm font-medium ${
                  isActive 
                    ? 'text-indigo-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block text-sm font-medium ${
                  isActive 
                    ? 'text-indigo-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/#projects" 
              className="block text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/#contact" 
              className="block text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>

            {/* Mobile Social Links */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/sanjanb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/sanjan-bm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:sanjanacharaya1234@gmail.com" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <a 
                href="mailto:sanjanacharaya1234@gmail.com" 
                className="mt-4 block text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;