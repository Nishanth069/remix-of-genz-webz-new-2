"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-white/[0.03] border border-white/5 rounded-[3rem] -z-10 transition-colors group-hover:bg-white/[0.05] backdrop-blur-3xl" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -mr-64 -mt-64 transition-colors group-hover:bg-purple-600/10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -ml-64 -mb-64 transition-colors group-hover:bg-blue-600/10" />
        
        <div className="relative z-10 p-12 md:p-24 text-center space-y-12">
          <div className="space-y-4">
            <span className="inline-block text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] px-6 py-2 rounded-full border border-white/10 bg-white/5">
              Our Visionary Core
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1] tracking-tighter max-w-5xl mx-auto">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400/50 to-purple-800/50 italic">digital legacies.</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto opacity-50" />
          
          <p className="text-white/40 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-light tracking-tight">
            We bridge the void between raw computational power and human elegance, creating ecosystems that feel like an extension of the soul.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;