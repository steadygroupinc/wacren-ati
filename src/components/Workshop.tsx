'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PushPinIcon from '@mui/icons-material/PushPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

gsap.registerPlugin(ScrollTrigger);

export default function Workshop() {
  const workshopRef = useRef<HTMLDivElement>(null);
  const partners = ['WACREN', 'NGNOG', 'GHNOG', 'UTG', 'GAMREN'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content reveal
      gsap.fromTo(".workshop-content > *",
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".workshop-content",
            start: "top 80%"
          }
        }
      );

      // Animate info card
      gsap.fromTo(".workshop-card",
        { opacity: 0, scale: 0.95, x: 30 },
        { 
          opacity: 1, 
          scale: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".workshop-card",
            start: "top 80%"
          }
        }
      );
    }, workshopRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-earth-deep text-white py-20 lg:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ─── LEFT COLUMN: CONTENT ─── */}
        <div ref={workshopRef} className="workshop-content">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
            WACREN 2026<br />
            NMM Workshop,<br />
            <span className="text-gold">Banjul, The Gambia</span>
          </h2>
          
          <p className="text-sand text-base lg:text-lg leading-relaxed mb-10 opacity-90 max-w-xl">
            Join the Network Management and Monitoring workshop at the WACREN 2026 conference. This intensive training model focuses on building core operational strength for African NRENs.
          </p>

          <ul className="space-y-4 mb-12">
            {[
              'Monitoring architectures and operational models for NRENs',
              'Performance measurement, traffic analysis, and visibility tooling',
              'Fault detection, incident workflows, and root-cause analysis',
              'Open-source tooling suited to NREN and campus network environments',
              'Turning monitoring data into operational and management decisions'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-sand/90">
                <span className="text-gold mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 lg:gap-8 border-t border-white/10 pt-10">
            {partners.map((partner) => (
              <span key={partner} className="text-white/40 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* ─── RIGHT COLUMN: INFO CARD & PARTNERS ─── */}
        <div className="relative">
          <div className="workshop-card bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-sm shadow-2xl relative z-10 border border-white/5">
            <h3 className="text-2xl font-bold mb-2 text-white">NMM Workshop</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-10">ATI MODULE 1, WACREN 2026</p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  <CalendarMonthIcon fontSize="small" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 font-bold">Dates</p>
                  <p className="text-sm font-medium">March 16 - 20, 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  <PushPinIcon fontSize="small" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 font-bold">Location</p>
                  <p className="text-sm font-medium">Banjul, The Gambia</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  <AccessTimeIcon fontSize="small" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 font-bold">Duration</p>
                  <p className="text-sm font-medium">5 Full Days</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  <GroupIcon fontSize="small" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 font-bold">Capacity</p>
                  <p className="text-sm font-medium">Limited to 40 Participants</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  <EmojiObjectsIcon fontSize="small" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 font-bold">Focus</p>
                  <p className="text-sm font-medium">Monitoring & Automation</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="flex-1 bg-terracotta hover:bg-ochre text-white text-center py-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all focus:outline-none focus:ring-0 active:outline-none active:ring-0">
                Register Now
              </Link>
              <Link href="/training" className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all focus:outline-none focus:ring-0 active:outline-none active:ring-0">
                View Details
              </Link>
            </div>
          </div>
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-terracotta/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
        </div>
      </div>
    </section>
  );
}
