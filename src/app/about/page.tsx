"use client";

import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Shield, Sparkles, Cpu, Zap, Eye, Globe } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500 selection:text-white">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Elegant Background elements */}
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
                    The Zyxen Genesis
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.8] text-white"
                >
                  ENGINEERING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-purple-800">EMOTION.</span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light tracking-tight"
                >
                  Born from a defiance of the ordinary. We build digital ecosystems that don't just process data—they command attention.
                </motion.p>
              </motion.div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
               <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </section>

          {/* Our Story - The "Why" */}
          <section className="py-40 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-12"
                >
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                    Why we <br />
                    <span className="text-purple-500 italic">Started Zyxen.</span>
                  </h2>
                  <div className="space-y-8 text-white/60 text-xl font-light leading-relaxed">
                    <p>
                      ZYXEN wasn't born in a boardroom. It was born in the quiet intensity of a high-stakes engineering lab, fueled by the shared frustration of seeing the web become a desert of generic templates and soul-less automation.
                    </p>
                    <p>
                      We saw a gap between <span className="text-white font-medium">raw power</span> and <span className="text-purple-400 font-medium">human elegance</span>. Most software was either fast but ugly, or beautiful but broken. We set out to bridge that void.
                    </p>
                    <p>
                      Our mission was simple yet audacious: To engineer the "Invisible"—the fluid interactions, the millisecond-perfect responsiveness, and the intuitive flow that makes technology feel like magic. We don't just write code; we architect digital legacies.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl shadow-purple-500/10"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12 p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-purple-400 mb-4 font-bold">The Core Belief</p>
                    <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">"Efficiency is the foundation, but elegance is the standard."</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Philosophy Pillars */}
          <section className="py-40 border-y border-white/5 bg-slate-950/30">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24 space-y-4">
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">OUR PILLARS.</h2>
                 <p className="text-white/40 uppercase tracking-widest text-[10px]">The DNA of Zyxen Engineering</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Cpu className="text-purple-500" size={32} />,
                    title: "Invisible Power",
                    description: "High-performance architecture that handles massive scale while remaining completely transparent to the end user."
                  },
                  {
                    icon: <Eye className="text-purple-400" size={32} />,
                    title: "Evocative Vision",
                    description: "We design for the human eye and the human heart, prioritizing motion that feels natural and aesthetics that inspire trust."
                  },
                  {
                    icon: <Zap className="text-purple-600" size={32} />,
                    title: "Absolute Speed",
                    description: "Latency is the enemy of experience. We optimize every millisecond to ensure your platform is always ahead."
                  }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-purple-500/50 transition-all group"
                  >
                    <div className="mb-8 p-4 w-fit rounded-2xl bg-black border border-white/5 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                      <p className="text-white/40 font-light leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities Grid */}
          <section className="py-40 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-8">
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white">
                    SCOPE<span className="text-purple-600">.</span>
                </h2>
                <div className="text-right">
                    <p className="text-purple-500 font-mono text-sm uppercase tracking-widest mb-2">Capabilities / 2025</p>
                    <p className="text-white/30 text-xs font-mono">Global Operations Center</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                {[
                  { title: "Intelligent Infrastructure", detail: "Cloud-native, auto-scaling systems designed for absolute uptime." },
                  { title: "AI Integration", detail: "Seamlessly embedding neural intelligence into your business logic." },
                  { title: "Performance Audits", detail: "Deep-dive optimization to unlock hidden potential in your stack." },
                  { title: "Enterprise Software", detail: "Custom tools built for the unique demands of global organizations." },
                  { title: "Digital Brand Identity", detail: "Creating visual languages that define market leaders." },
                  { title: "Full-Stack Ecosystems", detail: "End-to-end development from hardware interfaces to mobile apps." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-mono text-purple-500">0{i+1}</span>
                        <div className="h-px flex-1 bg-white/10 group-hover:bg-purple-500/50 transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                    <p className="text-white/40 font-light leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-40 relative">
             <div className="absolute inset-0 bg-purple-900/10 blur-[100px] opacity-30" />
            <div className="max-w-5xl mx-auto px-6 text-center space-y-16 relative z-10">
              <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-tight">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">THE FUTURE.</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-10">
                <Link
                  href="/contact"
                  className="group relative px-14 py-7 bg-white text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-full overflow-hidden hover:scale-105 transition-all"
                >
                  <span className="relative z-10">Start an Enquiry</span>
                  <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/#crafted"
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors border-b border-white/0 hover:border-white pb-2"
                >
                  Browse Portfolio
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
