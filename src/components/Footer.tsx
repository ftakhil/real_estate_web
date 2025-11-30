import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-cormorant font-bold">RANCHO COSTA VERDE</h3>
            <p className="text-gray-200 font-inter leading-relaxed">
              Experience affordable, sustainable, and beachfront living in Baja California.
              Budget-friendly, eco-conscious coastal paradise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ranchocostaverde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/ranchocostaverde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-cormorant font-semibold text-white">Features</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Solar-Powered Homes</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Beachfront Access</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Sustainable Living</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Community Amenities</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Weekend Tours</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-cormorant font-semibold">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link to="/moments" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/films" className="text-gray-300 hover:text-white transition-colors duration-300">Videos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-cormorant font-semibold">Contact</h4>
            <ul className="space-y-2 font-inter">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+18002117400" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +1 (800) 211-7400
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@RanchoCostaVerde.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@RanchoCostaVerde.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">Baja California, Mexico</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 font-inter text-sm leading-relaxed">
            © 2022-2025 BY RANCHO COSTA VERDE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-500 font-inter text-xs mt-4 leading-relaxed">
            OFFERED BY R-MAC PROPERTIES, INC. CA BROKER #01264356. BRE CHECK LICENSE STATUS: 877–373–4542.
            WARNING: THE CALIFORNIA DEPARTMENT OF REAL ESTATE HAS NOT EXAMINED THIS OFFERING, INCLUDING, BUT NOT LIMITED TO
            THE CONDITION OF TITLE, THE STATUS OF BLANKET LIENS ON THE PROJECT (IF ANY), ARRANGEMENTS TO ASSURE PROJECT COMPLETION,
            ESCROW PRACTICES, CONTROL OVER PROJECT MANAGEMENT, RACIALLY DISCRIMINATORY PRACTICES, TERMS, CONDITIONS AND PRICE OF THE OFFER.
          </p>
          <p className="text-gray-400 font-inter text-xs mt-4">
            Website Redesigned by <a href="https://slaterockautomation.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Slaterock Automation</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
