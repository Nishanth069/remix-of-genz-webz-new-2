"use client";

import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Globe, Smartphone, Palette, Zap, Database, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    icon: Globe,
    title: "Web Ecosystems",
    description: "Architecting high-performance digital environments that serve as the backbone for global enterprises.",
    features: ["Neural Interfaces", "Sub-second Latency", "Elastic Scaling", "Enterprise Grade"]
  },
  {
    icon: Smartphone,
    title: "Mobile Intelligence",
    description: "Developing native applications that bridge the gap between human intent and software precision.",
    features: ["iOS & Android", "Real-time Sync", "Edge Computing", "Biometric Security"]
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Creating visual languages that communicate authority and inspire absolute brand loyalty.",
    features: ["Sensory UX", "Dynamic Branding", "Motion Protocols", "Visual Identity"]
  },
  {
    icon: Zap,
    title: "Neural Automation",
    description: "Deploying AI-driven workflows that transform complex processes into effortless productivity.",
    features: ["Process Evolution", "Smart Logic", "Zero Friction", "Predictive Analytics"]
  },
  {
    icon: Database,
    title: "Backend Core",
    description: "Systems engineered for absolute stability, processing millions of requests with cryptographic safety.",
    features: ["Secure API", "Microservices", "Cloud Native", "Database Logic"]
  },
  {
    icon: Shield,
    title: "Digital Strategy",
    description: "Defining the trajectory for market leaders through data-driven insights and technical audits.",
    features: ["Market Analysis", "Growth Logic", "Security Audits", "Scalability Roadmap"]
  }
];

export default function ServicesPage() {
    return (
      <SmoothTransitionsProvider>
        <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500 selection:text-white">
          <Header />
          <main>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-12"
                >
                  <motion.div variants={fadeInUp} className="flex justify-center">
                    <span className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-[0.4em] uppercase text-purple-400">
                      Our Capabilities
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.8] text-white"
                  >
                    ENGINEERED <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-purple-800">SUCCESS.</span>
                  </motion.h1>
                  
                  <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light tracking-tight"
                  >
                    We provide the technical infrastructure and design precision needed to dominate the digital landscape.
                  </motion.p>
                </motion.div>
              </div>
            </section>

            <section className="py-40 bg-black">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="group relative p-12 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-purple-500/50 transition-all duration-500"
                    >
                      <div className="relative z-10 space-y-8">
                        <div className="w-16 h-16 bg-black border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <service.icon className="w-8 h-8 text-purple-500" />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                          <p className="text-white/40 font-light leading-relaxed">{service.description}</p>
                        </div>
                        <ul className="space-y-3 pt-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-white/30 group-hover:text-purple-400 transition-colors">
                              <div className="w-1 h-1 bg-purple-500 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-10 h-px w-12 bg-white/10 group-hover:w-full group-hover:bg-purple-500/30 transition-all duration-700" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
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
                  LET'S BUILD <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">TOGETHER.</span>
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
                    href="/#crafted"
                    className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors border-b border-white/0 hover:border-white pb-2"
                  >
                    Browse Portfolio
                  </Link>
                </motion.div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </SmoothTransitionsProvider>
    );
}