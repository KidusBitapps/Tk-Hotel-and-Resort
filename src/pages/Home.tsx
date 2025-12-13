import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import EmbeddedServiceSection from "../components/ui/EmbeddedServiceSection";
import DynamicHero from "../components/ui/DynamicHero";
import { 
  FloatingStats, 
  InteractiveFeatures, 
  AnimatedCounter 
} from "../components/ui/WowFactorComponents";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images
    const imageUrls = [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop"
    ];
    
    Promise.all(
      imageUrls.map(url => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = url;
        });
      })
    ).then(() => setIsLoaded(true));
  }, []);

  const services = [
    {
      title: "Luxury Accommodation",
      description:
        "Experience comfort in our elegantly designed rooms and suites with modern amenities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    },
    {
      title: "Fine Dining",
      description:
        "Savor exquisite cuisine at our restaurant featuring local and international dishes.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    },
    {
      title: "Spa & Wellness",
      description:
        "Rejuvenate your body and mind with our premium spa treatments and wellness services.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Dynamic Hero Section */}
      <DynamicHero />

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-5xl md:text-6xl font-black mb-6 leading-tight"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Why Choose TK Hotel & Resort?
            </h2>
            <p 
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Experience the perfect blend of luxury, comfort, and authentic Ethiopian hospitality
            </p>
          </motion.div>
          <FloatingStats />
          <div className="text-center">
            <Link to="/about">
              <Button variant="accent" size="xl" className="shine-effect">
                Discover Our Story
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Preview - Embedded Sections */}
      <Section className="spacing-xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Premium Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Exceptional amenities for an unforgettable stay
          </motion.p>
        </div>
        
        {/* Embedded Service Sections */}
        <div className="space-y-0">
          {isLoaded && services.map((service, index) => (
            <EmbeddedServiceSection 
              key={index} 
              {...service} 
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/services">
            <Button size="xl" className="shine-effect">
              View All Services
              <motion.span 
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </Link>
        </div>
      </Section>

      {/* Interactive Features Section */}
      <Section className="bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-6 leading-tight"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Exclusive Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Discover what makes us extraordinary
            </motion.p>
          </div>
          <InteractiveFeatures />
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-6 leading-tight"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Gallery Highlights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              A glimpse into our beautiful spaces
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {isLoaded && [
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-theme hover:shadow-theme-hover transition-all duration-300 cursor-glow border border-gold/20"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery">
              <Button size="xl" variant="accent" className="shine-effect">
                View Full Gallery
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-teal/10" />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full floating-particle"
              style={{
                background: i % 2 === 0 ? 'var(--color-gold)' : 'var(--color-teal)',
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none shine-effect"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ready for Your Perfect Getaway?
            </h2>
            <p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Join over <AnimatedCounter end={500} suffix="+" /> satisfied guests who chose TK Hotel & Resort
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="primary" size="xl" className="w-full sm:w-auto mr-4 shine-effect">
                  Book Your Stay Now
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
              <a href="tel:+251114300072">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white">
                  Call +251 114 300 072
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
