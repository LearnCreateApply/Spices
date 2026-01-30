import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Indian Spice Exports</h3>
            <p className="text-gray-300 mb-4">
              Premium Indian spices for discerning global markets.
            </p>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <span>Navi Mumbai, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-saffron-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={18} />
                <a href="mailto:info@indianspiceexports.com" className="hover:text-saffron-400 transition-colors">
                  info@indianspiceexports.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-green-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Indian Spice Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
