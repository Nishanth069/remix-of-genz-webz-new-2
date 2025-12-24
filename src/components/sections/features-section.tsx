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
    <div className="space-y-60 py-20 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none" />
      {featuresData.map((feature, index) => (
        <motion.div 
          key={feature.label}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className={feature.layout === 'left' ? "order-1" : "order-1 md:order-2"}>
              <div className="relative aspect-[4/3] w-full bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl shadow-purple-500/10 backdrop-blur-3xl">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none" />
              </div>
            </div>
            <div className={feature.layout === 'left' ? "order-2 space-y-10" : "order-2 md:order-1 space-y-10"}>
              <div className="space-y-4">
                <span className="text-purple-500 font-bold text-[10px] uppercase tracking-[0.5em] border border-purple-500/20 bg-purple-500/5 px-5 py-2 rounded-full inline-block">
                  Phase 0{index + 1} / {feature.label}
                </span>
                <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9]">{feature.title}</h3>
              </div>
              <p className="text-white/40 text-xl leading-relaxed font-light tracking-tight max-w-xl">{feature.description}</p>
              <div className="pt-6">
                <div className="h-px w-32 bg-gradient-to-r from-purple-500 to-transparent opacity-30" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesSection;