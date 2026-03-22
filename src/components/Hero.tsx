'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-animate", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
      
      gsap.fromTo(".hero-card-animate",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-primary text-white py-[80px] lg:py-[100px] overflow-hidden">
      {/* Brand Identity Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ 
          background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(230,126,34,0.15) 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 60%)' 
        }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      <div className="container-wf relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <div className="hero-animate inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[11px] font-bold font-mono tracking-[0.08em] text-white mb-5 uppercase backdrop-blur-sm">
              WACREN Flagship Programme
            </div>
            
            <h1 className="hero-animate text-[38px] md:text-[52px] font-serif leading-[1.1] mb-5 tracking-tighter">
              Africa Training<br />
              <em className="italic text-accent not-italic font-normal">Initiative</em>
            </h1>
            
            <p className="hero-animate text-[15px] md:text-base text-white/70 mb-8 leading-[1.7] max-w-[460px]">
              Building the capacity required to operate research and education digital infrastructure across Africa — structured training for engineers, system administrators, and cybersecurity professionals.
            </p>
            
            <div className="hero-animate flex flex-wrap gap-3">
              <Link 
            href="https://indico.wacren.net/event/263/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-[32px] py-[16px] bg-accent text-white rounded-[6px] font-bold text-[14px] hover:bg-accent/90 transition-all no-underline shadow-lg uppercase tracking-[0.05em]"
          >
            Register for NMM Training →
          </Link>
            </div>
          </div>

          <div className="hero-card-animate relative">
            <div className="bg-white/5 border border-white/14 p-7 rounded-[12px] backdrop-blur-[4px] shadow-2xl relative">
              <div className="text-[10px] font-mono uppercase tracking-[0.1em] text-white/45 mb-4">
                Programme at a glance
              </div>
              
              <div className="grid grid-cols-2 gap-0.5">
                {[
                  { num: '6', label: 'Training modules' },
                  { num: '3', label: 'Partner communities' },
                  { num: 'Pan-', label: 'African reach' },
                  { num: '2026', label: 'Renewed launch' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-[6px] border border-white/8">
                    <div className="text-3xl font-serif text-white mb-1 leading-none font-normal">{stat.num}</div>
                    <div className="text-[12px] text-white/50 font-mono font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-3 -right-3 md:right-0 bg-accent text-white px-4 py-2 rounded-full font-mono text-[10px] md:text-[11px] font-bold tracking-[0.04em] shadow-xl border-[3px] border-primary z-20 flex items-center gap-2 max-w-[max-content]">
              <Rocket size={14} />
              Launching · Banjul 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
