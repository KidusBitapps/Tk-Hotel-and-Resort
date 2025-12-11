import { motion } from "motion/react";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
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
      "bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
