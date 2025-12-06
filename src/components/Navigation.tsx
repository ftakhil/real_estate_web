import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  // Pages that have hero sections and should start with transparent navbar
  const heroPages = ['/', '/about', '/gallery', '/find-us', '/lifestyle'];
  const isHeroPage = heroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Development',
      path: '#',
      children: [
        { name: 'Where We Are', path: '/development/where-we-are' },
        { name: 'Property Highlights', path: '/development/property-highlights' },
        { name: 'Master Plan', path: '/development/master-plan' },
        { name: 'Going Green', path: '/development/going-green' },
        { name: 'Home Construction', path: '/development/home-construction' },
        { name: 'Project Updates', path: '/development/project-updates' },
        { name: 'Ownership', path: '/development/ownership' },
        { name: 'In the News', path: '/development/in-the-news' },
        { name: 'Project Status', path: '/development/project-status' },
        { name: 'Careers', path: '/development/careers' },
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'About', path: '/about' },
    { name: 'Find Us', path: '/find-us' },
  ];

  // Show white background if not on hero page OR if scrolled on hero page
  const shouldShowWhiteBg = !isHeroPage || isScrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowWhiteBg ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-cormorant font-bold">
            <span className={`font-cormorant text-xl font-light tracking-widest ${shouldShowWhiteBg ? 'text-black' : 'text-white'
              }`}>
              RANCHO COSTA VERDE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
              >
                {item.children ? (
                  <button
                    className={`flex items-center space-x-1 font-inter font-medium transition-colors duration-300 ${shouldShowWhiteBg ? 'text-black hover:text-gray-800' : 'text-white hover:text-gray-100'
                      } ${location.pathname.includes(item.path.replace('#', '')) ? 'opacity-100' : 'opacity-95'}`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-inter font-medium transition-colors duration-300 relative group ${shouldShowWhiteBg ? 'text-black hover:text-gray-800' : 'text-white hover:text-gray-100'
                      } ${location.pathname === item.path ? 'opacity-100' : 'opacity-95'}`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${shouldShowWhiteBg ? 'bg-black' : 'bg-white'
                      } ${location.pathname === item.path ? 'w-full' : ''}`} />
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden py-2"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black font-inter transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${shouldShowWhiteBg
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-white text-black hover:bg-gray-100'
                }`}
            >
              <Phone size={16} />
              <span className="font-inter font-medium">Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${shouldShowWhiteBg ? 'text-black' : 'text-white'
              }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="px-6 py-3">
                        <button
                          onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full font-inter font-medium text-black mb-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${expandedMobileMenu === item.name ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedMobileMenu === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-2 border-l-2 border-gray-100 py-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    to={child.path}
                                    className="block text-sm text-gray-600 hover:text-black font-inter"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          className="block px-6 py-3 text-black hover:bg-gray-50 transition-colors duration-200 font-inter"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-6 py-3"
                >
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsContactModalOpen(true);
                    }}
                    className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 w-fit"
                  >
                    <Phone size={16} />
                    <span className="font-inter font-medium">Contact Us</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </motion.nav>
  );
};

export default Navigation;
