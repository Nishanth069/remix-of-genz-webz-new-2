"use client";

import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Globe, Smartphone, Palette, Zap, Database, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Secure & Scalable"]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    features: ["iOS & Android", "Cross-Platform", "Offline Support", "Push Notifications"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user engagement and drive conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: Zap,
    title: "Digital Solutions",
    description: "Comprehensive digital transformation services to modernize your business operations.",
    features: ["Process Automation", "Digital Strategy", "Cloud Migration", "Analytics"]
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Robust server-side architecture and database solutions for reliable performance.",
    features: ["API Development", "Database Design", "Cloud Infrastructure", "Microservices"]
  },
  {
    icon: Shield,
    title: "Branding",
    description: "Complete brand identity development that communicates your unique value proposition.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
  }
];

export default function ServicesPage() {
    return (
      <SmoothTransitionsProvider>
        <div className="min-h-screen bg-black text-white antialiased">
          <Header />
          <main>
          <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full"
                >
                  Our Services
                </motion.span>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
                >
                  What We Do Best
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  End-to-end digital solutions crafted with precision, designed for impact.
                </motion.p>
              </motion.div>
            </div>
          </section>

          <section className="py-24">
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
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10 space-y-5">
                      <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 pt-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950/50 via-slate-900 to-slate-900 border border-purple-500/20 p-12 md:p-16 text-center"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_50%)]" />
                
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Let's discuss how we can help bring your vision to life with our expertise.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:scale-105"
                    >
                      Get in Touch
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}