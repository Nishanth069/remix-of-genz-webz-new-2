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
    <div className="space-y-40 py-20">
      {featuresData.map((feature, index) => (
        <motion.div 
          key={feature.label}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className={feature.layout === 'left' ? "order-1" : "order-1 md:order-2"}>
              <div className="relative aspect-[4/3] w-full bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl shadow-purple-500/5">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </div>
            <div className={feature.layout === 'left' ? "order-2 space-y-8" : "order-2 md:order-1 space-y-8"}>
              <div className="space-y-2">
                <p className="text-purple-500 font-mono text-[10px] uppercase tracking-[0.5em]">Phase 0{index + 1} / {feature.label}</p>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">{feature.title}</h3>
              </div>
              <p className="text-white/40 text-lg leading-relaxed font-light">{feature.description}</p>
              <div className="pt-4">
                <div className="h-px w-20 bg-purple-500/30" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesSection;