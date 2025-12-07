// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-purple-700 to-slate-900">
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-pink-100/80 mb-3">
            Cancer Awareness &amp; Support
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            No one fights cancer alone.
          </h1>
          <p className="text-sm md:text-base text-pink-50/90 mb-6">
            Get accurate information, emotional support, and a community that
            understands your journey. Learn warning signs, prevention tips,
            and how to support loved ones.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-pink-400 text-slate-950 text-sm font-semibold shadow-lg hover:bg-pink-300 transition"
            >
              Talk to us
            </a>
            <a
              href="#quotes"
              className="px-6 py-3 rounded-full border border-pink-200/60 text-pink-50 text-sm font-semibold hover:bg-pink-50/10 transition"
            >
              Get motivation
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-pink-100/20">
            <img
              src="/Banner.png"          // file: public/Banner.png
              alt="Cancer awareness support"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-slate-900/80 border border-pink-300/40 rounded-2xl px-4 py-3 text-xs text-pink-50 shadow-lg">
            24×7 Support • Early detection saves lives
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
