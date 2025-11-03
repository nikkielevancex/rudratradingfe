import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { companyInfo, contactInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-gradient-to-b from-green-900 to-green-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="footer-section">
            <div className="bg-white/90 rounded-lg p-3 inline-block mb-4">
              <img 
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt={companyInfo.name} 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-green-200 mb-4">{companyInfo.tagline}</p>
            <p className="text-green-300 text-sm">Leading agricultural commodity exporter since {companyInfo.founded}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-green-200 hover:text-white transition-colors duration-200">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1 text-green-300" />
                <span className="text-green-200 text-sm">
                  {contactInfo.city}, {contactInfo.state}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-green-300" />
                <a href={`tel:${contactInfo.contacts[0].phone}`} className="text-green-200 hover:text-white text-sm">
                  {contactInfo.contacts[0].phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-green-300" />
                <a href={`mailto:${contactInfo.contacts[0].email}`} className="text-green-200 hover:text-white text-sm break-all">
                  {contactInfo.contacts[0].email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="social-icon bg-green-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon bg-green-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon bg-green-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon bg-green-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-green-300">
            <p>© {currentYear} {companyInfo.name}. All rights reserved.</p>
            {/* Removed Privacy Policy and Terms of Service links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;