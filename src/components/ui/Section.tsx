import { motion } from 'motion/react';
import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id={id}
      className={`py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;