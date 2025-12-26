"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Feature = {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  layout: 'left' | 'right';
};

const featuresData: Feature[] = [
    {
      label: "Neural Intelligence",
      title: "AI Ecosystems built to evolve and command.",
      description: "We deploy advanced machine learning models that transform static data into predictive power, ensuring your infrastructure is always ten steps ahead of the curve.",
      imageSrc: "/previews/ai.png",
      imageAlt: "AI-Powered Solutions",
      layout: 'left'
    },
    {
      label: "Fortified Core",
      title: "Ultra-Reliable, Enterprise-Grade Architecture.",
      description: "Systems engineered for absolute stability. We build backends that process millions of requests with millisecond latency and cryptographic security.",
      imageSrc: "/previews/scalable.png",
      imageAlt: "Scalable Backends",
      layout: 'right'
    },
    {
      label: "Cloud-Native",
      title: "Global Infrastructure with Zero Boundariness.",
      description: "Scalable environments designed to expand across borders instantly. Our cloud solutions prioritize uptime and elastic performance for the modern enterprise.",
      imageSrc: "/previews/cloud.png",
      imageAlt: "Cloud-Native Products",
      layout: 'left'
    },
    {
      label: "Fluid Automation",
      title: "Redefining efficiency through smart protocols.",
      description: "Eliminate friction with intelligent workflows. We automate the complex to let you focus on the creative, delivering measurable impact from day one.",
        imageSrc: "/previews/business.png",
      imageAlt: "Business Automation",
      layout: 'right'
    }
];

  const FeaturesSection = () => {
    return (
      <div className="space-y-12 md:space-y-24 py-6 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none" />
        {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="relative group/feature"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
                <div className={feature.layout === 'left' ? "order-1" : "order-1 md:order-2"}>
                  <div className="relative aspect-[4/3] w-full bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 group shadow-xl shadow-purple-500/5 backdrop-blur-3xl transition-colors group-hover/feature:border-purple-500/10">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover/feature:opacity-80"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover/feature:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className={feature.layout === 'left' ? "order-2 space-y-4 md:space-y-8" : "order-2 md:order-1 space-y-4 md:space-y-8"}>
                  <div className="space-y-2 md:space-y-4">
                    <span className="text-white/40 font-bold text-[10px] uppercase tracking-[0.5em] border border-white/10 bg-white/5 px-4 py-1.5 rounded-full inline-block group-hover/feature:text-purple-400 group-hover/feature:border-purple-500/20 transition-colors">
                       {feature.label}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-[1]">{feature.title}</h3>
                  </div>
                  <p className="text-white/30 text-base md:text-lg leading-relaxed font-light tracking-tight max-w-xl">{feature.description}</p>
                  <div className="pt-2 md:pt-4">
                    <div className="h-px w-20 bg-gradient-to-r from-purple-500/30 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
        ))}
      </div>
    );
  };

export default FeaturesSection;
