'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function Launch() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the badge
      gsap.fromTo(".launch-badge",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      );

      // Animate title
      gsap.fromTo(".launch-title",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
      );

      // Animate list items with stagger
      gsap.fromTo(".launch-list-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, delay: 0.6, ease: "power2.out" }
      );

      // Animate the card on the right
      gsap.fromTo(".launch-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-teal-dark text-white px-14 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-15 -right-15 w-80 h-80 bg-teal-dark/30 rounded-full"></div>

      <div ref={contentRef} className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="launch-badge inline-flex items-center gap-2 bg-gold/15 text-gold font-bold text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm mb-6 shadow-sm">
              Featured
            </div>

            <h2 className="launch-title font-bold text-3xl lg:text-4xl text-white mb-3">
              ATI Network Management<br/>
              <em className="text-gold not-italic">Masterclass 2026</em>
            </h2>

            <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-7 font-medium">
              Join us at WACREN 2026 for an intensive 3-day masterclass designed for senior network engineers and IT managers looking to advance their careers in research and education networking.
            </p>

            <ul className="space-y-2.5 mb-8">
              <li className="launch-list-item flex items-start gap-3 text-sm text-white/80">
                <span className="text-gold font-bold mt-0.5">✓</span>
                Advanced network architecture and design principles
              </li>
              <li className="launch-list-item flex items-start gap-3 text-sm text-white/80">
                <span className="text-gold font-bold mt-0.5">✓</span>
                Cybersecurity frameworks for research networks
              </li>
              <li className="launch-list-item flex items-start gap-3 text-sm text-white/80">
                <span className="text-gold font-bold mt-0.5">✓</span>
                Service management and SLA implementation
              </li>
              <li className="launch-list-item flex items-start gap-3 text-sm text-white/80">
                <span className="text-gold font-bold mt-0.5">✓</span>
                Leadership and team management skills
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-white/10 rounded-sm p-8 shadow-xl">
              <h3 className="font-bold text-xl text-white mb-1">WACREN 2026</h3>
              <div className="text-sm text-gold uppercase tracking-wide font-semibold mb-6">Network Management Masterclass</div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-white font-bold opacity-30 text-xs">DATE</span>
                  <span>March 15-17, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-white font-bold opacity-30 text-xs">LOCATION</span>
                  <span>Dakar, Senegal</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-white font-bold opacity-30 text-xs">TARGET</span>
                  <span>Limited to 50 participants</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">WACREN</span>
                <span className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">ATI</span>
                <span className="bg-white/10 text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">UbuntuNet</span>
                <span className="bg-white/10 text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">ASREN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
