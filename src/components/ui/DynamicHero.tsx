import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % heroSections.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentHero = heroSections[currentSection];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${
        currentHero.theme === 'dark' 
          ? 'bg-gradient-to-r from-black/60 to-gray-900/40' 
          : 'bg-gradient-to-r from-white/60 to-gray-100/40'
      }`} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={currentHero.theme === 'dark' ? 'text-white' : 'text-gray-900'}
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
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {currentHero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
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
              <Button size="lg" className="w-full sm:w-auto">
                {currentHero.primaryCTA.text}
              </Button>
            </Link>
            <Link to={currentHero.secondaryCTA.link}>
              <Button 
                variant={currentHero.theme === 'dark' ? 'outline' : 'secondary'} 
                size="lg" 
                className="w-full sm:w-auto"
              >
                {currentHero.secondaryCTA.text}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSection(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
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
    </section>
  );
};

export default DynamicHero;