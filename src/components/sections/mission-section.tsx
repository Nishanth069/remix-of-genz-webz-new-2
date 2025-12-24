"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="px-6 py-40 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-[3rem] -z-10 transition-colors group-hover:bg-white/[0.08]" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-colors group-hover:bg-purple-600/15" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -ml-48 -mb-48 transition-colors group-hover:bg-blue-600/10" />
        
        <div className="relative z-10 p-12 md:p-32 text-center space-y-12">
          <div className="space-y-4">
            <span className="inline-block text-purple-400 text-[10px] font-bold uppercase tracking-[0.4em] px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5">
              Our Mission
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter max-w-5xl mx-auto">
            Architecting <span className="text-purple-500 italic">digital legacies</span> through precision engineering and human-centric design.
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
          
          <p className="text-white/40 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light tracking-tight">
            We bridge the void between complex neural networks and intuitive interfaces, creating software that feels like an extension of thought.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;