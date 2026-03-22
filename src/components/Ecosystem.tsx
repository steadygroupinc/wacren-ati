'use client';

import React from 'react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-[100px] bg-primary text-white relative">
      <div className="container-wf">
        <span className="font-mono text-[10px] tracking-[0.1em] text-accent opacity-90 uppercase mb-[8px] block font-bold">
          Capacity Development
        </span>
        <h2 className="font-serif text-[42px] leading-[1.1] mb-[24px] tracking-tight text-white max-w-[640px] font-normal">
          Across the Research & Education <br /><em className="italic text-accent not-italic font-normal">Ecosystem</em>
        </h2>
        <p className="text-[16px] leading-[1.8] text-white/70 max-w-[640px] mb-[48px] font-normal">
          WACREN capacity development supports the entire research and education ecosystem — from NREN leadership through technical infrastructure operators to the research and scholarly communities that rely on digital infrastructure for discovery, collaboration, and knowledge dissemination.
        </p>

        <div className="bg-white/10 border border-dashed border-white/20 rounded-[16px] h-[340px] flex flex-col items-center justify-center gap-[16px] backdrop-blur-sm">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-35">
            <rect x="6" y="6" width="36" height="36" rx="8" stroke="white" strokeWidth="1.5" fill="none"/>
            <rect x="14" y="14" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" fill="none"/>
            <circle cx="24" cy="24" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
          </svg>
          <div className="font-mono text-center tracking-[0.06em]">
            <strong className="block text-[14px] text-white/65 mb-[4px]">ATI Ecosystem Diagram</strong>
            <p className="text-[12px] text-white/45 max-w-[400px]">
              NREN leadership → technical operators → research & scholarly communities
            </p>
          </div>
        </div>

        <p className="text-[15px] leading-[1.8] text-white/60 max-w-[600px] mt-[28px]">
          The Africa Training Initiative develops the operational expertise required to support the infrastructure layers that enable digital research and education services across Africa.
        </p>
      </div>
    </section>
  );
}
