'use client';

import React from 'react';
import { Calendar, Flag, Rocket } from 'lucide-react';

export default function NetSecLaunch() {
  const milestones = [
    { date: '14 April 2026', title: 'CyberBastion Information Session', desc: 'Official launch of the NetSec community initiative alongside the Africa League.', icon: <Rocket /> },
    { date: 'April–May 2026', title: 'CyberBastion Competition', desc: 'Online competition phase involving teams from research and education networks across Africa.', icon: <Flag /> },
    { date: '15–22 May 2026', title: 'TrustBroker Africa VI', desc: 'Community collaboration, ATI NetSec workshops, and CyberBastion Africa League finals.', icon: <Calendar /> },
  ];

  return (
    <section className="py-[120px] bg-bg-soft">
      <div className="container-wf">
        <div className="max-w-[800px] mx-auto text-center mb-[80px]">
          <h2 className="font-serif text-[38px] mb-[20px] tracking-tighter text-text-main">Launch Activities & Milestones</h2>
          <p className="text-[16px] text-gray-500">The ATI NetSec Forum will be launched alongside the CyberBastion Africa League in 2026.</p>
        </div>

        <div className="relative max-w-[900px] mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-[48px] md:space-y-[0]">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-[24px] md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:mb-[64px]`}>
                <div className="md:w-1/2 flex justify-center md:px-[60px]">
                   <div className={`${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} flex flex-col items-center ${i % 2 !== 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-primary font-semibold text-[18px] mb-[8px]">{m.date}</span>
                      <h4 className="text-[20px] font-serif font-semibold text-text-main mb-[12px]">{m.title}</h4>
                      <p className={`text-[14px] text-gray-500 leading-[1.6] ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} text-center font-normal`}>{m.desc}</p>
                   </div>
                </div>
                
                <div className="relative z-10 w-[48px] h-[48px] bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-[6px] border-white ring-2 ring-primary/20 shrink-0">
                  {m.icon}
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[100px] p-[48px] bg-primary rounded-[24px] text-white overflow-hidden relative shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Shield size={220} className="text-white" />
          </div>
          
          <div className="max-w-[640px] relative z-10">
            <h3 className="text-[32px] font-serif font-semibold mb-[20px] tracking-tight">Strategic Significance</h3>
            <p className="text-white/80 leading-[1.8] mb-[32px] text-[16px] font-normal">Through this initiative, WACREN strengthens Africa&apos;s capacity to secure digital infrastructure, expands the practitioner community, and creates a pipeline of skilled cybersecurity professionals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {[
                'Broadening community reach',
                'Operational & research collaboration',
                'Building CSIRT capabilities',
                'Pipeline of skilled experts'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-[12px] text-[14px] font-medium">
                  <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(230,126,34,0.5)]"></div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Shield } from 'lucide-react';
