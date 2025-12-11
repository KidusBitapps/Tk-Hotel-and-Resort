import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import ServiceCard from "../components/ui/ServiceCard";
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
    <div className="pt-16">
      {/* Dynamic Hero Section */}
      <DynamicHero />

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose TK Hotel & Resort?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury, comfort, and authentic Ethiopian hospitality
            </p>
          </motion.div>
          <FloatingStats />
          <div className="text-center">
            <Link to="/about">
              <Button variant="secondary" size="lg">Discover Our Story</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Premium Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Exceptional amenities for an unforgettable stay
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {isLoaded && services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Interactive Features Section */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Exclusive Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Discover what makes us extraordinary
            </motion.p>
          </div>
          <InteractiveFeatures />
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Gallery Highlights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
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
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
              <Button size="lg">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready for Your Perfect Getaway?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join over <AnimatedCounter end={500} suffix="+" /> satisfied guests who chose TK Hotel & Resort
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Book Your Stay Now
                </Button>
              </Link>
              <a href="tel:+251114300072">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-yellow-600">
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
