// Improved slider component with better animation
import React from 'react';
import { motion } from 'framer-motion';

const Slider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Enhanced Slider</h1>
    </motion.div>
  );
};

export default Slider;
