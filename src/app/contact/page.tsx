// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import SmoothTransitionsProvider from "@/components/animations/smooth-transitions";
import emailjs from "@emailjs/browser";
import Toast from "@/components/ui/toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_p5gb8wg";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_osddfod";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "m1xChN43puPbSRCtJ";

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setToast({ message: "Transmission successful. We will respond shortly.", type: "success" });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (err) {
      console.error("Failed to send email via EmailJS:", err);
      setToast({ message: "Transmission failed. Please retry or contact us directly.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden">
        <Header />
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
              <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-12"
                >
                  <motion.div variants={fadeInUp} className="flex justify-center">
                    <span className="px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-bold tracking-[0.4em] uppercase text-purple-400">
                      ESTABLISH CONNECTION
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] text-white"
                  >
                    TALK TO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-600">THE CORE.</span>
                  </motion.h1>
                  
                  <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-10 pt-8">
                    <div className="group flex items-center gap-4 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-white/10 group-hover:border-purple-500/50">
                        <Mail size={16} className="text-white/60 group-hover:text-purple-400" />
                      </div>
                      <a href="mailto:contact@zyxen.in" className="text-white/40 group-hover:text-white transition-colors font-mono tracking-widest text-xs uppercase">
                        contact@zyxen.in
                      </a>
                    </div>
                    <div className="group flex items-center gap-4 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-white/10 group-hover:border-purple-500/50">
                        <Phone size={16} className="text-white/60 group-hover:text-purple-400" />
                      </div>
                      <a href="tel:+917013558465" className="text-white/40 group-hover:text-white transition-colors font-mono tracking-widest text-xs uppercase">
                        +91 70135 58465
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Contact Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="grid lg:grid-cols-12 gap-16">
                {/* Info Column */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-4 space-y-12"
                >
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold tracking-tight">Our Presence.</h3>
                    <p className="text-white/40 font-light leading-relaxed">
                      We operate at the intersection of intelligence and elegance, serving visionary brands worldwide from our global operations hub.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <MapPin size={20} className="text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Global HQ</h4>
                        <p className="text-white/40 font-light text-sm">Innovating across borders.<br />Hyderabad, India.</p>
                      </div>
                    </div>
                    {/* Add more info items if needed */}
                  </div>

                  <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Fast Response</h4>
                    <p className="text-white/40 font-light text-sm leading-relaxed">
                      Our engineering team typically responds to new inquiries within 4-6 business hours.
                    </p>
                  </div>
                </motion.div>

                {/* Form Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-8 relative"
                >
                  <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden group hover:border-purple-500/20 transition-all duration-700">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] pointer-events-none group-hover:bg-purple-600/10 transition-colors" />
                    
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label htmlFor="firstName" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">
                            Identification
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Full Name"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/10 transition-all focus:border-purple-500/50 focus:bg-white/[0.07] focus:outline-none focus:ring-0"
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="lastName" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">
                            Organization
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Company"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/10 transition-all focus:border-purple-500/50 focus:bg-white/[0.07] focus:outline-none focus:ring-0"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">
                            Digital Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="email@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/10 transition-all focus:border-purple-500/50 focus:bg-white/[0.07] focus:outline-none focus:ring-0"
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">
                            Voice Connection
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 ----- -----"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/10 transition-all focus:border-purple-500/50 focus:bg-white/[0.07] focus:outline-none focus:ring-0"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 px-2">
                          Project Brief
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Describe your vision..."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/10 transition-all focus:border-purple-500/50 focus:bg-white/[0.07] focus:outline-none focus:ring-0 resize-none"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full md:w-auto px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl overflow-hidden hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                          <span className="relative z-10">{isSubmitting ? "ENCRYPTING..." : "SEND MESSAGE"}</span>
                          {!isSubmitting && <Send size={14} className="relative z-10" />}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                          <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </section>
        </main>

        <Footer />

        <AnimatePresence>
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </SmoothTransitionsProvider>
  );
}
