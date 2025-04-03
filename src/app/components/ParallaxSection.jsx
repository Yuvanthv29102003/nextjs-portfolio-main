"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary-900/30 to-transparent"
        style={{ y: backgroundY, opacity }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 to-transparent"
        style={{ y: backgroundY, opacity: useTransform(scrollYProgress, [0, 1], [0.5, 0]) }}
      />
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-500/10 blur-xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          x: useTransform(scrollYProgress, [0, 1], [0, 50]),
          scale,
          rotate
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary-500/10 blur-xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 150]),
          x: useTransform(scrollYProgress, [0, 1], [0, -100]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.3]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -5])
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-primary-500/10 blur-xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          x: useTransform(scrollYProgress, [0, 1], [0, -150]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 10])
        }}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          style={{ y: foregroundY }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Creative Developer
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-[#ADB7BE] max-w-2xl mb-8"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        >
          Building beautiful, interactive web experiences with modern technologies
        </motion.p>
        
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
          y: useTransform(scrollYProgress, [0, 0.2], [0, 20])
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection; 