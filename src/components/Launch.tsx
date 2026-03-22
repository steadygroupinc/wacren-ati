'use client';

import React from 'react';
import Link from 'next/link';

export default function Launch() {
  return (
    <section id="launch" className="py-[72px] bg-bg-soft">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[64px] items-center">
          <div>
            <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block">
              Programme Launch
            </span>
            <h2 className="font-serif text-[38px] leading-[1.2] mb-[20px] tracking-tighter text-text-main font-normal">
              Launch of the <br /><em className="italic text-primary not-italic font-normal">Renewed ATI Programme</em>
            </h2>
            
            <div className="space-y-[16px] text-[15px] leading-[1.8] text-gray-500 mb-[32px] font-normal">
              <p>
                The renewed ATI programme will begin with the <span className="font-medium text-text-main">Network Monitoring and Management (NMM)</span> module during the WACREN 2026 Conference in Banjul, The Gambia.
              </p>
              <p>
                This inaugural training will focus on operational monitoring of network infrastructure and will be delivered in collaboration with regional Network Operator Group communities.
              </p>
              <p>
                The programme will also include a <span className="font-medium text-text-main">facilitator development component</span>, aimed at expanding the pool of trainers and technical experts across the research and education networking community.
              </p>
            </div>

            <div className="flex flex-wrap gap-[12px]">
              <Link 
                href="https://indico.wacren.net/event/263/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent border-[1.5px] border-accent text-white rounded-[6px] font-medium text-[13px] hover:bg-accent/90 transition-all no-underline"
              >
                Register for NMM Training →
              </Link>
              <Link 
                href="https://survey.wacren.net/index.php/291743" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-[1.5px] border-gray-200 text-text-main bg-white rounded-[6px] font-medium text-[13px] hover:bg-gray-50 transition-all no-underline"
              >
                Become a Facilitator
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-accent text-white p-[32px] rounded-[12px] shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-[8px] mb-[24px]">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                <span className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase">Event Details — Live</span>
              </div>
              
              <div className="space-y-[20px]">
                {[
                  { label: 'MODULE', value: 'Network Monitoring & Management', bold: true },
                  { label: 'EVENT', value: 'WACREN 2026 Conference' },
                  { label: 'LOCATION', value: 'Banjul, The Gambia' },
                  { label: 'YEAR', value: '2026' },
                  { label: 'PARTNERS', value: 'Regional NOG communities' },
                ].map((row, i) => (
                  <div key={i} className="flex flex-col gap-[2px]">
                    <span className="text-[9px] font-mono font-bold tracking-[0.05em] opacity-60 uppercase">{row.label}</span>
                    <span className={`text-[13px] ${row.bold ? 'font-bold' : 'font-medium opacity-90'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
