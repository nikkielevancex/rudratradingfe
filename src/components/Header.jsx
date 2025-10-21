import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
    { path: '/brochure', label: 'Brochure', isBrochure: true }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt={companyInfo.name} 
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isBrochure ? (
                <a
                  key={link.path}
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-lg font-medium text-gray-700 hover:text-green-700 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-lg font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-green-700 border-b-2 border-green-700'
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link to="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-200">
            {navLinks.map((link) =>
              link.isBrochure ? (
                <a
                  key={link.path}
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-green-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 text-lg font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-green-700 font-bold'
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                Get Quote
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;