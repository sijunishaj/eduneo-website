import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  amount = 0.2 // how much of the component needs to be in view before it animates (0 to 1)
}) => {
  const getVariants = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const offset = isMobile ? 20 : 35;
    
    switch(direction) {
      case 'up':
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } };
      case 'left':
        return { hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } };
      case 'fade':
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
