"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-900/10 blur-[120px] opacity-30 -z-10" />
      <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] text-white"
        >
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">ASCEND?</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-10"
        >
          <Link
            href="/contact"
            className="group relative px-14 py-7 bg-white text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-full overflow-hidden hover:scale-105 transition-all"
          >
            <span className="relative z-10">Initialize Project</span>
            <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <Link
            href="/about"
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors border-b border-white/0 hover:border-white pb-2"
          >
            Our Philosophy
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;