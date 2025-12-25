// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import SmoothTransitionsProvider from "@/components/animations/smooth-transitions";
import emailjs from "@emailjs/browser";
import Toast from "@/components/ui/toast";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
      <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500 selection:text-white">
        <Header />
        <main>
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
              <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse" />
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
                    <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">
                      Connect with Us
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.8] text-white"
                  >
                    INITIALIZE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-400/50">CONTACT.</span>
                  </motion.h1>
                  
                  <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-12 pt-6">
                    <a href="mailto:contact@zyxen.in" className="text-white/40 hover:text-white transition-colors font-mono tracking-[0.4em] text-[10px] uppercase font-bold">
                      CONTACT@ZYXEN.IN
                    </a>
                    <div className="hidden md:block w-px h-6 bg-white/10" />
                    <a href="tel:+917013558465" className="text-white/40 hover:text-white transition-colors font-mono tracking-[0.4em] text-[10px] uppercase font-bold">
                      +91 70135 58465
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Contact form */}
            <section className="max-w-5xl mx-auto px-6 py-24">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-12 md:p-20 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
              >
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label htmlFor="firstName" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 px-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Identify yourself"
                        className="w-full bg-black border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-white/10 transition-all focus:border-white/40 focus:outline-none focus:ring-0"
                      />
                    </div>

                    <div className="space-y-4">
                      <label htmlFor="lastName" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 px-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Company name"
                        className="w-full bg-black border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-white/10 transition-all focus:border-white/40 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 px-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        className="w-full bg-black border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-white/10 transition-all focus:border-white/40 focus:outline-none focus:ring-0"
                      />
                    </div>

                    <div className="space-y-4">
                      <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 px-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 --- --- ----"
                        className="w-full bg-black border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-white/10 transition-all focus:border-white/40 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 px-2">
                      Project Vision
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe the future you want to build..."
                      className="w-full bg-black border border-white/10 rounded-2xl px-8 py-6 text-white placeholder-white/10 transition-all focus:border-white/40 focus:outline-none focus:ring-0 resize-none"
                    />
                  </div>

                  <div className="pt-8 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-14 py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full overflow-hidden hover:scale-105 transition-all disabled:opacity-50"
                    >
                      <span className="relative z-10">{isSubmitting ? "TRANSMITTING..." : "INITIALIZE TRANSMISSION"}</span>
                      <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </section>
        </main>

        <Footer />

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </SmoothTransitionsProvider>
  );
}
