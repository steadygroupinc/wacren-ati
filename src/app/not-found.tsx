'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-earth-deep flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[120px] lg:text-[180px] font-black leading-none text-white/5 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            404
          </div>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-widest rounded-sm mb-6">
              Missing Connection
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Page Not Found
            </h1>
            <p className="text-sand/70 text-lg leading-relaxed max-w-lg mx-auto mb-12">
              The path you're looking for doesn't exist or has been relocated. Let's get you back to the WACREN ATI ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="px-8 py-3.5 bg-terracotta text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-ochre transition-all shadow-lg hover:shadow-terracotta/20"
            >
              Back to Home
            </Link>
            <Link 
              href="/training" 
              className="px-8 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all"
            >
              Explore Programmes
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
