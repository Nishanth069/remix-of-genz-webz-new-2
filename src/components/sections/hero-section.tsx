"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const HeroSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        interface Star {
            x: number;
            y: number;
            z: number;
            size: number;
            speed: number;
        }

        const setCanvasSize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const init = () => {
            stars = [];
            const numberOfStars = 400;

            for (let i = 0; i < numberOfStars; i++) {
                stars.push({
                    x: (Math.random() - 0.5) * canvas.width * 2,
                    y: (Math.random() - 0.5) * canvas.height * 2,
                    z: Math.random() * canvas.width,
                    size: Math.random() * 2 + 0.5,
                    speed: Math.random() * 3 + 2,
                });
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let i = stars.length - 1; i >= 0; i--) {
                const star = stars[i];
                star.z -= star.speed;
                
                if (star.z <= 0) {
                    star.x = (Math.random() - 0.5) * canvas.width * 2;
                    star.y = (Math.random() - 0.5) * canvas.height * 2;
                    star.z = canvas.width;
                }
                
                const k = 128 / star.z;
                const px = star.x * k + centerX;
                const py = star.y * k + centerY;
                
                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    const size = (1 - star.z / canvas.width) * star.size * 2;
                    const opacity = (1 - star.z / canvas.width) * 0.8 + 0.2;
                    
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(px, py, Math.max(size, 0.5), 0, Math.PI * 2);
                    ctx.fill();
                    
                    if (star.z < canvas.width * 0.3) {
                        const trailLength = (1 - star.z / (canvas.width * 0.3)) * 20;
                        const prevK = 128 / (star.z + star.speed);
                        const prevPx = star.x * prevK + centerX;
                        const prevPy = star.y * prevK + centerY;
                        
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                        ctx.lineWidth = size * 0.5;
                        ctx.beginPath();
                        ctx.moveTo(prevPx, prevPy);
                        ctx.lineTo(px, py);
                        ctx.stroke();
                    }
                }
            }
        };
        
        const handleResize = () => {
            setCanvasSize();
            init();
        };

        setCanvasSize();
        init();
        animate();
        
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <canvas ref={canvasRef} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black" />
                {/* Elegant Background elements matching About page */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            </div>
            
            <div className="relative z-10 px-6 py-10 text-center max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-10"
                >
                    <motion.div variants={fadeInUp} className="flex justify-center">
                        <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">
                            Innovation Hub 2025
                        </span>
                    </motion.div>
    
                    <motion.h1 
                        variants={fadeInUp}
                        className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.8] text-white"
                    >
                        ENGINEERING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">EXPERIENCES.</span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto leading-relaxed font-light tracking-tight"
                    >
                        We architect high-performance digital ecosystems where intelligence meets human elegance.
                    </motion.p>
                </motion.div>
            </div>



        </section>
    );
};

export default HeroSection;