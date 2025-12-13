import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-teal/5" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full floating-particle"
            style={{
              background:
                i % 2 === 0 ? "var(--color-gold)" : "var(--color-teal)",
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hotel Info */}
          <div>
            <h3
              className="text-3xl font-black mb-6"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-gold), var(--color-teal))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              TK Hotel & Resort
            </h3>
            <p
              className="text-lg mb-6 leading-relaxed font-medium max-w-md"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Experience luxury and comfort in the heart of Ethiopia. Your
              perfect getaway awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl font-bold mb-6"
              style={{ color: "var(--color-gold)" }}
            >
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Home", "About Us", "Services", "Gallery", "Book Now", "Contact"].map(
                (item, index) => {
                  const paths = [
                    "/",
                    "/about",
                    "/services",
                    "/gallery",
                    "/book",
                    "/contact",
                  ];
                  return (
                    <motion.div key={item} whileHover={{ x: 10 }}>
                      <Link
                        to={paths[index]}
                        className="block text-lg font-medium transition-all duration-300 cursor-glow hover:text-gold"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-xl font-bold mb-6"
              style={{ color: "var(--color-teal)" }}
            >
              Contact Information
            </h4>
            <div className="space-y-3">
              <p
                className="font-bold text-lg"
                style={{ color: "var(--color-text-primary)" }}
              >
                Phone Numbers:
              </p>
              {[
                "+251 114 300 072/73",
                "+251 906 421 111",
                "+251 906 511 111",
              ].map((phone) => (
                <motion.div key={phone} whileHover={{ scale: 1.05 }}>
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                    className="block text-lg font-medium transition-all duration-300 cursor-glow hover:text-gold"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {phone}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <motion.p
            className="text-lg font-medium"
            style={{ color: "var(--color-text-muted)" }}
            whileHover={{ scale: 1.02 }}
          >
            &copy; 2025 TK Hotel & Resort. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
