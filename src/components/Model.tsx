'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading reveal
      gsap.fromTo(".model-heading > *",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".model-heading",
            start: "top 85%"
          }
        }
      );

      // Animate cards staggered
      gsap.fromTo(".pillar-card",
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          stagger: 0.12, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pillar-grid",
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-earth-deep text-white px-6 lg:px-14 py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-terracotta/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="model-heading text-center mb-16 px-4">
          <div className="font-bold text-[10px] lg:text-xs uppercase tracking-widest text-terracotta mb-3">
            ATI-6 Framework
          </div>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Six Pillars of <em className="text-gold not-italic">Capacity Building</em>
          </h2>
          <p className="text-sand text-sm lg:text-base leading-relaxed max-w-2xl mx-auto opacity-80">
            The ATI-6 model provides a comprehensive framework for developing technical and leadership capacity across Africa&apos;s research and education networks.
          </p>
        </div>

        <div className="pillar-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="pillar-card bg-white/10 p-7 rounded-sm hover:bg-white/15 transition-all duration-300">
            <div className="font-black text-4xl text-terracotta opacity-70 mb-3">A</div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-gold mb-2.5">Awareness & Advocacy</h3>
            <p className="text-sm leading-relaxed text-sand/80">Building understanding and support for NREN development and regional collaboration initiatives.</p>
          </div>

          <div className="pillar-card bg-white/10 p-7 rounded-sm hover:bg-white/15 transition-all duration-300">
            <div className="font-black text-4xl text-terracotta opacity-70 mb-3">T</div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-gold mb-2.5">Technical Capacity</h3>
            <p className="text-sm leading-relaxed text-sand/80">Developing advanced networking, cybersecurity, and infrastructure management skills.</p>
          </div>

          <div className="pillar-card bg-white/10 p-7 rounded-sm hover:bg-white/15 transition-all duration-300">
            <div className="font-black text-4xl text-terracotta opacity-70 mb-3">I</div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-gold mb-2.5">Institutional Development</h3>
            <p className="text-sm leading-relaxed text-sand/80">Strengthening organizational structures, governance, and business management capabilities.</p>
          </div>

          <div className="pillar-card bg-white/10 p-7 rounded-sm hover:bg-white/15 transition-all duration-300">
            <div className="font-black text-4xl text-terracotta opacity-70 mb-3">N</div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-gold mb-2.5">Innovation & Research</h3>
            <p className="text-sm leading-relaxed text-sand/80">Fostering research collaboration and innovation in network technologies and services.</p>
          </div>

          <div className="pillar-card bg-white/10 p-7 rounded-sm hover:bg-white/15 transition-all duration-300">
            <div className="font-black text-4xl text-terracotta opacity-70 mb-3">P</div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-gold mb-2.5">Industry Partnership</h3>
            <p className="text-sm leading-relaxed text-sand/80">Building strategic relationships with technology providers and industry stakeholders.</p>
          </div>

          <div className="pillar-card bg-white/10 p-7 rounded-sm hover:bg-white/15 transition-all duration-300">
            <div className="font-black text-4xl text-terracotta opacity-70 mb-3">S</div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-gold mb-2.5">Sustainability Planning</h3>
            <p className="text-sm leading-relaxed text-sand/80">Developing long-term financial and operational sustainability strategies for NRENs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
