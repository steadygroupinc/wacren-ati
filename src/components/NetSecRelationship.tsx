'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function NetSecRelationship() {
  const roadmap = [
    { stage: 'Community and Knowledge Exchange', name: 'ATI NetSec Forum', color: 'bg-primary/60' },
    { stage: 'Trusted Operational Collaboration', name: 'TrustBroker Africa', color: 'bg-primary' },
    { stage: 'Cyber Defence Exercises', name: 'CyberBastion Africa League', color: 'bg-accent' },
    { stage: 'Threat Intelligence Sharing', name: 'WACREN ISAC', color: 'bg-accent/80' },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          <div>
            <h2 className="font-serif text-[32px] mb-[24px] tracking-tighter text-text-main text-center lg:text-left">Relationship to TrustBroker Africa</h2>
            <div className="space-y-[20px] text-[15px] leading-[1.8] text-gray-500">
              <p>The <strong className="text-text-main">ATI NetSec Forum</strong> complements TrustBroker Africa but does not replace it. TrustBroker Africa provides a trusted collaboration environment for incident response teams and security organisations.</p>
              <p>The NetSec Forum expands the ecosystem by bringing together a broader community of practitioners, researchers, and organisations interested in network security for research and education infrastructure.</p>
            </div>
          </div>
          
          <div className="relative">
            <h3 className="font-mono text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-[32px] text-center">Layered Cybersecurity Ecosystem</h3>
            <div className="space-y-[12px]">
              {roadmap.map((item, i) => (
                <div key={i} className="flex items-center gap-[12px] group">
                   <div className="flex-1 p-[16px] bg-gray-50 border border-gray-100 rounded-[8px] flex items-center justify-between group-hover:bg-white group-hover:shadow-md transition-all">
                      <div>
                        <span className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-[0.05em] block mb-[2px]">{item.stage}</span>
                        <span className="text-[14px] font-semibold text-text-main">{item.name}</span>
                      </div>
                      <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center`}>
                        <ArrowRight size={14} className="text-white" />
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
