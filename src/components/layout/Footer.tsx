import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">TK Hotel & Resort</h3>
            <p className="text-gray-300 mb-4">
              Experience luxury and comfort in the heart of Ethiopia. Your perfect getaway awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link>
              <Link to="/services" className="block text-gray-300 hover:text-yellow-400 transition-colors">Services</Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-yellow-400 transition-colors">Gallery</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-300">
              <p className="font-bold">Phone Numbers:</p>
              <a href="tel:+251114300072" className="block hover:text-yellow-400 transition-colors">+251 114 300 072/73</a>
              <a href="tel:+251906421111" className="block hover:text-yellow-400 transition-colors">+251 906 421 111</a>
              <a href="tel:+251906511111" className="block hover:text-yellow-400 transition-colors">+251 906 511 111</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TK Hotel & Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;