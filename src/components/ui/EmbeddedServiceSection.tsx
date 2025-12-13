import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import Button from './Button';

interface EmbeddedServiceSectionProps {
  title: string;
  description: string;
  image: string;
  index: number;
  reverse?: boolean;
}

const EmbeddedServiceSection = ({ 
  title, 
  description, 
  image, 
  index, 
  reverse = false 
}: EmbeddedServiceSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('mousemove', handleMouseMove);
      return () => sectionElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative min-h-[70vh] flex items-center overflow-hidden cursor-glow spacing-generous ${
        reverse ? 'flex-row-reverse' : ''
      }`}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        {/* Cursor-aware gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(212, 175, 55, 0.4) 0%, 
              rgba(20, 184, 166, 0.2) 50%, 
              transparent 70%)`
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full floating-particle"
          style={{
            background: i % 2 === 0 ? 'var(--color-gold)' : 'var(--color-teal)',
            left: `${20 + i * 20}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? 'lg:grid-flow-col-dense' : ''
        }`}>
          
          {/* Text Content */}
          <motion.div
            className={`text-white ${reverse ? 'lg:col-start-2' : ''}`}
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.02}deg) rotateY(${(mousePosition.x - 50) * 0.02}deg)`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 
                className="text-5xl md:text-6xl font-black mb-6 leading-tight shine-effect"
                style={{
                  background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {title}
              </h3>
              
              <p 
                className="text-xl md:text-2xl mb-8 leading-relaxed font-medium max-w-2xl"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shine-effect"
                >
                  Learn More
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Visual Element */}
          <motion.div
            className={`relative ${reverse ? 'lg:col-start-1' : ''}`}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-theme hover:shadow-theme-hover transition-all duration-500">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Overlay with theme colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              {/* Orbiting element */}
              <motion.div
                className="absolute w-4 h-4 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, var(--color-gold), var(--color-teal))',
                  top: '20%',
                  right: '20%',
                }}
                animate={{
                  rotate: 360,
                  x: [0, 30, 0, -30, 0],
                  y: [0, -30, 0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Directional Visual Cue */}
      <motion.div
        className={`absolute ${reverse ? 'left-8' : 'right-8'} top-1/2 transform -translate-y-1/2 z-20`}
        animate={{ 
          x: reverse ? [-10, 0, -10] : [10, 0, 10],
          opacity: [0.5, 1, 0.5] 
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
          style={{
            background: 'linear-gradient(45deg, var(--color-gold), var(--color-teal))',
            color: 'white',
          }}
        >
          {reverse ? '←' : '→'}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmbeddedServiceSection;