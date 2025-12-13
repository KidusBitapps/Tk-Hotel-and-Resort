import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";

interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  primaryCTA: { text: string; link: string };
  secondaryCTA: { text: string; link: string };
  theme: 'dark' | 'light';
}

const heroSections: HeroSection[] = [
  {
    id: 1,
    title: "TK Hotel & Resort",
    subtitle: "Luxury Redefined",
    description: "Experience unparalleled luxury and comfort in the heart of Ethiopia",
    backgroundImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop",
    primaryCTA: { text: "Book Now", link: "/contact" },
    secondaryCTA: { text: "Learn More", link: "/about" },
    theme: 'dark'
  },
  {
    id: 2,
    title: "Culinary Excellence",
    subtitle: "Taste the Extraordinary",
    description: "Savor world-class cuisine crafted by our master chefs using the finest ingredients",
    backgroundImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
    primaryCTA: { text: "View Menu", link: "/services" },
    secondaryCTA: { text: "Reserve Table", link: "/contact" },
    theme: 'dark'
  },
  {
    id: 3,
    title: "Wellness & Spa",
    subtitle: "Rejuvenate Your Soul",
    description: "Indulge in premium spa treatments and wellness experiences designed for ultimate relaxation",
    backgroundImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop",
    primaryCTA: { text: "Book Spa", link: "/services" },
    secondaryCTA: { text: "View Treatments", link: "/services" },
    theme: 'light'
  },
  {
    id: 4,
    title: "Event Hosting",
    subtitle: "Memorable Celebrations",
    description: "Create unforgettable moments with our premium event hosting and wedding services",
    backgroundImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop",
    primaryCTA: { text: "Plan Event", link: "/contact" },
    secondaryCTA: { text: "View Venues", link: "/gallery" },
    theme: 'dark'
  }
];

const DynamicHero = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Cursor tracking for mouse-aware effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % heroSections.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentHero = heroSections[currentSection];

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden cursor-glow"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      {/* Background Images */}
      {heroSections.map((section, index) => (
        <motion.div
          key={section.id}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${section.backgroundImage})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: index === currentSection ? 0.7 : 0,
            scale: index === currentSection ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}

      {/* Enhanced Gradient Overlay with Theme Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(212, 175, 55, 0.3) 0%, 
            rgba(20, 184, 166, 0.2) 50%, 
            transparent 70%)`
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full floating-particle"
          style={{
            background: i % 2 === 0 ? 'var(--color-gold)' : 'var(--color-teal)',
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Enhanced Content with Cursor Interactions */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.05}deg) rotateY(${(mousePosition.x - 50) * 0.05}deg)`,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl font-medium mb-4 tracking-wide uppercase"
          >
            {currentHero.subtitle}
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none shine-effect"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {currentHero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {currentHero.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to={currentHero.primaryCTA.link}>
              <Button size="xl" className="w-full sm:w-auto mr-4 shine-effect">
                {currentHero.primaryCTA.text}
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <Link to={currentHero.secondaryCTA.link}>
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white"
              >
                {currentHero.secondaryCTA.text}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {heroSections.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentSection(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 relative overflow-hidden ${
              index === currentSection 
                ? 'scale-125' 
                : 'hover:scale-110'
            }`}
            style={{
              background: index === currentSection 
                ? 'linear-gradient(45deg, var(--color-gold), var(--color-teal))'
                : 'rgba(255, 255, 255, 0.4)'
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentSection && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, var(--color-gold), var(--color-teal))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Enhanced Progress Bar with Theme Colors */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <motion.div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, var(--color-gold), var(--color-teal))',
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 6, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
      
      {/* Directional Visual Cues */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-gold to-teal rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default DynamicHero;