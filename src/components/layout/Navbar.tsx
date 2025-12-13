import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book Now', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md shadow-lg z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="TK Hotel & Resort Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
              }}
            />
            <span 
              className="text-2xl font-bold hidden sm:block"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TK Hotel & Resort
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative overflow-hidden cursor-glow ${
                    location.pathname === item.path
                      ? 'text-gold border-b-2 border-gold'
                      : 'text-white hover:text-gold'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{
                        background: 'linear-gradient(90deg, var(--color-gold), var(--color-teal))',
                      }}
                      layoutId="activeTab"
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold/10 to-teal/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 cursor-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white my-1 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gold/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg cursor-glow ${
                        location.pathname === item.path
                          ? 'text-gold bg-gradient-to-r from-gold/20 to-teal/20'
                          : 'text-white hover:text-gold hover:bg-gradient-to-r hover:from-gold/10 hover:to-teal/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;