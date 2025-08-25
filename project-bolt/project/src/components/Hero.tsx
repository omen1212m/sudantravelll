import React from 'react';
import { Plane } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden pt-24" dir="rtl">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            استكشف
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"> العالم </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            شريكك الموثوق للرحلات السلسة عبر الدول . 
            اختبر الراحة والموثوقية والخدمة الاستثنائية.
          </p>
          <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-200">
            <Plane className="w-5 h-5" />
            <span className="text-lg">نربط السودان بالعالم </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;