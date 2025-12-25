"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Hyper-Productivity",
      description: "Automate the mundane with neural-precision workflows that liberate your team for high-level strategy.",
      delay: 0.1
    },
    {
      title: "Sensory UX",
      description: "Deliver interfaces that respond with human-like intuition, building immediate trust and brand loyalty.",
      delay: 0.2
    },
    {
      title: "Economic Elasticity",
      description: "Optimize resources with intelligent scaling, reducing overhead while maximizing performance output.",
      delay: 0.3
    }
  ];

    return (
      <section className="mx-auto max-w-7xl px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <div className="mb-16 space-y-6 text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-purple-400 font-bold text-[10px] uppercase tracking-[0.5em] border border-purple-500/20 bg-purple-500/5 px-6 py-2 rounded-full inline-block"
          >
            Operational Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]"
          >
            Architected for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500 italic">Global Impact.</span>
          </motion.h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: benefit.delay }}
              className="group relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-700 backdrop-blur-3xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-purple-500/5 font-mono text-4xl group-hover:text-purple-500/10 transition-colors">
                0{i+1}
              </div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/5 blur-[80px] group-hover:bg-purple-600/10 transition-colors" />
              
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-purple-400 transition-colors">{benefit.title}</h3>
                <p className="text-white/40 text-base font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-10 h-px w-12 bg-white/10 group-hover:w-full group-hover:bg-purple-500/50 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>
    );
};

export default BenefitsSection;