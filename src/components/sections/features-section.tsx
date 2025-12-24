import React from 'react';
import Image from 'next/image';

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
      label: "AI-Powered Solutions",
      title: "AI-Powered Solutions Built to Learn and Adapt",
      description: "Harness the power of machine learning to create systems that evolve with your business needs and customer expectations. Our intelligent algorithms adapt and improve over time, providing solutions that grow smarter with every interaction.",
      imageSrc: "/previews/ai.png",
      imageAlt: "AI-Powered Solutions",
      layout: 'left'
    },
    {
      label: "Scalable Infrastructure",
      title: "Scalable, Secure, and Ultra-Reliable Backends",
      description: "Enterprise-grade infrastructure that handles millions of transactions while maintaining security and performance at scale. Our backend systems are built to be resilient, secure, and capable of supporting your growth without compromise.",
      imageSrc: "/previews/scalable.png",
      imageAlt: "Scalable Backends",
      layout: 'right'
    },
    {
      label: "Cloud Architecture",
      title: "Cloud-Native Products Built to Scale Without Limits",
      description: "Modern cloud architecture designed to grow with your business, from startup to enterprise scale. Built on containerized microservices and serverless technologies for ultimate flexibility and cost efficiency.",
      imageSrc: "/previews/cloud.png",
      imageAlt: "Cloud-Native Products",
      layout: 'left'
    },
    {
      label: "Business Automation",
      title: "Business Process Automation That Works Smarter",
      description: "Streamline your operations with intelligent automation that reduces manual work and improves efficiency. Our automation solutions are designed to integrate seamlessly with your existing systems while delivering measurable ROI.",
        imageSrc: "/previews/business.png",
      imageAlt: "Business Automation",
      layout: 'right'
    }
];

const FeaturesSection = () => {
  return (
    <div className="space-y-16 pt-12">
      {featuresData.map((feature) => {
        const isImageLeft = feature.layout === 'left';
        const animationClass = isImageLeft ? 'scroll-trigger-slide-left' : 'scroll-trigger-slide-right';
        
        return (
          <div key={feature.label} className={animationClass}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={isImageLeft ? "order-1" : "order-1 md:order-2"}>
                <div className="relative w-full h-64 bg-slate-800 rounded-lg overflow-hidden">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover transition-all duration-300 ease-in-out hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={isImageLeft ? "order-2 space-y-4" : "order-2 md:order-1 space-y-4"}>
                <p className="text-purple-400 text-sm font-semibold">{feature.label}</p>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesSection;