import React from 'react';

const MissionSection = () => {
  return (
    <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto overflow-hidden">
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/20 border border-slate-800/50 rounded-2xl md:rounded-3xl p-8 md:p-20 relative group overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-colors group-hover:bg-purple-600/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/5 rounded-full blur-[80px] -ml-32 -mb-32 transition-colors group-hover:bg-violet-600/10" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
          <div className="space-y-3">
            <span className="inline-block text-purple-400 text-xs md:text-sm font-bold uppercase tracking-[0.3em] bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
              Our Mission
            </span>
          </div>
          
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] md:leading-[1.15] tracking-tight">
            Building <span className="text-purple-400">high-performance</span> digital products with speed, reliability, and lasting impact.
          </h2>
          
          <div className="w-12 md:w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full" />
          
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between complex engineering and intuitive design to deliver excellence at every touchpoint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;