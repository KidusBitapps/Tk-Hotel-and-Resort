import { motion } from "motion/react";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = " cursor-pointer",
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white shadow-theme hover:shadow-theme-hover shine-effect",
    secondary:
      "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-theme hover:shadow-theme-hover",
    outline:
      "border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white hover:border-teal-400 shadow-lg hover:shadow-xl",
    accent:
      "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-theme hover:shadow-theme-hover shine-effect",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl font-bold",
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} cursor-glow relative overflow-hidden`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <span className="relative z-10">{children}</span>
      {(variant === 'primary' || variant === 'accent') && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
          initial={{ x: '-100%', skewX: -15 }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

export default Button;