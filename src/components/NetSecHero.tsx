'use client';

import React, { useRef, useEffect } from 'react';
import { Shield, ShieldCheck, Lock, Network } from 'lucide-react';
import gsap from 'gsap';

export default function NetSecHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.netsec-animate', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.to('.cyber-pulse', {
        scale: 1.1,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-[140px] pb-[100px] bg-primary overflow-hidden">
      {/* Brand Identity Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{ 
          background: 'radial-gradient(circle at 70% 30%, rgba(230,126,34,0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)' 
        }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Subtle Digital Grid (Very low opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container-wf relative z-10">
        <div className="max-w-[800px]">
          <div className="netsec-animate inline-flex items-center gap-[8px] px-[12px] py-[6px] bg-white/10 border border-white/20 rounded-full mb-[24px] backdrop-blur-md">
            <Shield size={14} className="text-accent" />
            <span className="text-[11px] font-medium text-white uppercase tracking-[0.12em]">Cybersecurity Operations Track</span>
          </div>
          
          <h1 className="netsec-animate font-serif text-[38px] md:text-[52px] leading-[1.1] mb-[24px] tracking-tighter text-white font-normal">
            ATI <em className="italic text-accent not-italic font-normal">NetSec</em> Forum
          </h1>
          
          <p className="netsec-animate text-[15px] md:text-base text-white/70 mb-[40px] font-normal leading-[1.7] max-w-[520px]">
            Building Africa’s Research & Education Cybersecurity Community through technical exchange, operational training, and trusted collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
