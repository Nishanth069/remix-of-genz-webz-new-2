"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="px-6 py-6 md:py-12 max-w-7xl mx-auto overflow-hidden relative">
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
          
          <div className="relative z-10 p-8 md:p-16 text-center space-y-8 md:space-y-10">
            <div className="space-y-4">
              <span className="inline-block text-purple-400 text-[10px] font-bold uppercase tracking-[0.4em] px-6 py-2 rounded-full border border-purple-500/10 bg-purple-500/5">
                Our Visionary Core
              </span>
            </div>
            
            <h2 className="text-3xl md:text-7xl font-bold text-white leading-[1] tracking-tighter max-w-5xl mx-auto">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-purple-500/40 italic">digital legacies.</span>
            </h2>
            
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto opacity-50" />
            
            <p className="text-white/40 text-base md:text-2xl max-w-4xl mx-auto leading-relaxed font-light tracking-tight px-4">
              We bridge the void between raw computational power and human elegance, creating ecosystems that feel like an extension of the soul.
            </p>
          </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;