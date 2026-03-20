'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate badge reveal
      gsap.fromTo(".hero-badge",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.1, ease: "power2.out" }
      );

      // Animate title appearance
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      // Animate description
      gsap.fromTo(".hero-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power2.out" }
      );

      // Animate buttons
      gsap.fromTo(".hero-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1, stagger: 0.15, ease: "power2.out" }
      );

      // Animate network viz
      gsap.fromTo(".network-viz",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] lg:min-h-screen bg-earth-deep grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] overflow-hidden">

      <div className="relative z-10 px-6 lg:px-14 py-20 lg:py-28 flex flex-col justify-center">
        <div className="hero-badge inline-flex items-center gap-2.5 font-bold text-[10px] lg:text-xs uppercase tracking-widest text-gold mb-6 lg:mb-7">
          <div className="w-6 lg:w-8 h-0.5 bg-terracotta"></div>
          African-Led Capacity Building
        </div>

        <h1 ref={titleRef} className="font-black text-4xl md:text-6xl lg:text-[5.75rem] leading-[1.1] lg:leading-tight text-white mb-6">
          Building Africa&apos;s<br/>
          <em className="text-gold not-italic">Knowledge, Leadership</em><br/>
          &amp; Technical Strength
        </h1>

        <p className="hero-desc text-sand text-sm lg:text-base leading-relaxed max-w-lg mb-10 lg:mb-11 font-light opacity-80">
          The Africa Training Initiative strengthens the capacity of NRENs, network operators, and the technical communities of higher education and research institutions across Africa, spanning technical skills, administration, business management, and governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 mb-14">
          <Link href="#about" className="hero-button bg-terracotta text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-ochre transition-all duration-200 hover:-translate-y-0.5 inline-block text-center focus:outline-none focus:ring-0 active:outline-none active:ring-0">
            Explore ATI
          </Link>
          <Link href="#iterations" className="hero-button bg-white/10 text-sand px-7 py-3 text-sm font-medium uppercase tracking-wide rounded-sm hover:bg-white/20 hover:text-gold transition-all duration-200 hover:-translate-y-0.5 inline-block text-center focus:outline-none focus:ring-0 active:outline-none active:ring-0">
            ATI NMM at WACREN 2026
          </Link>
        </div>

      </div>

      <div className="relative z-10 flex items-center justify-center p-12">
        <svg className="network-viz" viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="240" cy="220" r="130" fill="none" stroke="rgba(230,126,34,.1)" strokeWidth="1" />
          <circle cx="240" cy="220" r="160" fill="none" stroke="rgba(0,74,153,.08)" strokeWidth="1" />

          <line x1="240" y1="175" x2="240" y2="102" stroke="#E67E22" strokeWidth="1.5" strokeDasharray="5 4" opacity=".55" />
          <line x1="291" y1="220" x2="360" y2="220" stroke="#E67E22" strokeWidth="1.5" strokeDasharray="5 4" opacity=".55" />
          <line x1="240" y1="265" x2="240" y2="338" stroke="#E67E22" strokeWidth="1.5" strokeDasharray="5 4" opacity=".55" />
          <line x1="189" y1="220" x2="120" y2="220" stroke="#E67E22" strokeWidth="1.5" strokeDasharray="5 4" opacity=".55" />

          <line x1="240" y1="102" x2="360" y2="220" stroke="rgba(230,126,34,.15)" strokeWidth="1" />
          <line x1="360" y1="220" x2="240" y2="338" stroke="rgba(230,126,34,.15)" strokeWidth="1" />
          <line x1="240" y1="338" x2="120" y2="220" stroke="rgba(230,126,34,.15)" strokeWidth="1" />
          <line x1="120" y1="220" x2="240" y2="102" stroke="rgba(230,126,34,.15)" strokeWidth="1" />

          <circle cx="240" cy="78" r="34" fill="#323232" fillOpacity="0.75" stroke="#E67E22" strokeWidth="2" />
          <circle cx="240" cy="78" r="26" fill="#323232" fillOpacity="0.9" stroke="rgba(230,126,34,.3)" strokeWidth="1" />
          <text x="240" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-outfit), sans-serif" fontWeight="700">NRENs</text>
          <text x="240" y="86" textAnchor="middle" fill="rgba(255,255,255,.6)" fontSize="7" fontFamily="var(--font-outfit), sans-serif">Research Networks</text>
          <circle cx="240" cy="44" r="3" fill="#E67E22" opacity=".6" />

          <circle cx="388" cy="220" r="34" fill="#323232" fillOpacity="0.75" stroke="#E67E22" strokeWidth="2" />
          <circle cx="388" cy="220" r="26" fill="#323232" fillOpacity="0.9" stroke="rgba(230,126,34,.3)" strokeWidth="1" />
          <text x="388" y="218" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-outfit), sans-serif" fontWeight="700">NOGs</text>
          <text x="388" y="228" textAnchor="middle" fill="rgba(255,255,255,.6)" fontSize="7" fontFamily="var(--font-outfit), sans-serif">Operator Groups</text>
          <circle cx="422" cy="220" r="3" fill="#E67E22" opacity=".6" />

          <circle cx="240" cy="362" r="34" fill="#323232" fillOpacity="0.75" stroke="#E67E22" strokeWidth="2" />
          <circle cx="240" cy="362" r="26" fill="#323232" fillOpacity="0.9" stroke="rgba(230,126,34,.3)" strokeWidth="1" />
          <text x="240" y="360" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-outfit), sans-serif" fontWeight="700">HEIs</text>
          <text x="240" y="370" textAnchor="middle" fill="rgba(255,255,255,.6)" fontSize="7" fontFamily="var(--font-outfit), sans-serif">Higher Ed & Research</text>
          <circle cx="240" cy="396" r="3" fill="#E67E22" opacity=".6" />

          <circle cx="92" cy="220" r="34" fill="#323232" fillOpacity="0.75" stroke="#E67E22" strokeWidth="2" />
          <circle cx="92" cy="220" r="26" fill="#323232" fillOpacity="0.9" stroke="rgba(230,126,34,.3)" strokeWidth="1" />
          <text x="92" y="218" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-outfit), sans-serif" fontWeight="700">CSIRTs</text>
          <text x="92" y="228" textAnchor="middle" fill="rgba(255,255,255,.6)" fontSize="7" fontFamily="var(--font-outfit), sans-serif">Security Teams</text>
          <circle cx="58" cy="220" r="3" fill="#E67E22" opacity=".6" />

          <circle cx="240" cy="220" r="60" fill="#323232" fillOpacity="0.55" stroke="#E67E22" strokeWidth="2" />
          <circle cx="240" cy="220" r="50" fill="#323232" fillOpacity="0.85" stroke="rgba(230,126,34,.25)" strokeWidth="1" />
          <text x="240" y="208" textAnchor="middle" fill="#E67E22" fontSize="12" fontFamily="var(--font-outfit), sans-serif" fontWeight="800" letterSpacing="1">WACREN</text>
          <text x="240" y="224" textAnchor="middle" fill="#E67E22" fontSize="20" fontFamily="var(--font-outfit), sans-serif" fontWeight="900">ATI</text>
          <text x="240" y="238" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="8" fontFamily="var(--font-outfit), sans-serif">Capacity Hub</text>
        </svg>
      </div>
    </section>
  );
}
