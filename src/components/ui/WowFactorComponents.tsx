import { motion } from "motion/react";
import { useState, useEffect } from "react";

// Floating Stats Component
export const FloatingStats = () => {
  const stats = [
    { number: "500+", label: "Happy Guests", icon: "👥" },
    { number: "50+", label: "Luxury Rooms", icon: "🏨" },
    { number: "15+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Service", icon: "🔔" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Interactive Feature Cards
export const InteractiveFeatures = () => {
  const features = [
    {
      title: "Smart Room Technology",
      description: "Control lighting, temperature, and entertainment with voice commands",
      icon: "🏠",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Rooftop Infinity Pool",
      description: "Stunning city views while you relax in our heated infinity pool",
      icon: "🏊‍♂️",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Michelin-Star Dining",
      description: "Award-winning chefs creating culinary masterpieces daily",
      icon: "🍽️",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Helicopter Tours",
      description: "Exclusive aerial tours of Ethiopia's breathtaking landscapes",
      icon: "🚁",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          <div className="relative z-10">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated Counter
export const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const startTime = Date.now();
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setHasAnimated(true);
      }
    };
    
    updateCount();
  }, [end, duration, hasAnimated]);

  return <span>{count}{suffix}</span>;
};

// Parallax Section
export const ParallaxSection = ({ children, backgroundImage }: { 
  children: React.ReactNode; 
  backgroundImage: string; 
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};