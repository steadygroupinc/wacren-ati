'use client';

import React from 'react';

export default function Community() {
  const audiences = [
    'Network Operator Groups (NOGs)',
    'NREN engineering teams',
    'Campus network operators',
    'Cybersecurity practitioners',
    'DevOps engineers',
    'Open science infrastructure specialists',
  ];

  const partners = [
    { name: 'NgNOG', subtitle: 'Nigeria Network Operators Group' },
    { name: 'GhNOG', subtitle: 'Ghana Network Operators Group' },
    { name: 'TrustBroker Africa', subtitle: 'Cybersecurity collaboration' },
    { name: 'WACREN', subtitle: 'Programme host' },
  ];

  return (
    <section id="community" className="py-[72px] bg-bg-soft">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-[64px] items-start">
          <div>
            <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block font-bold">
              Community-Driven Training
            </span>
            <h2 className="font-serif text-[38px] leading-[1.2] mb-[20px] tracking-tighter text-text-main">
              A Collaborative Model Across <em className="italic text-primary not-italic">Africa</em>
            </h2>
            <p className="text-[15px] leading-[1.8] text-gray-500 mb-[32px]">
              ATI follows a collaborative model that brings together technical communities across Africa. Training participants and facilitators come from across the research and education ecosystem.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] list-none p-0 m-0">
              {audiences.map((item, i) => (
                <li key={i} className="text-[13px] text-gray-500 flex items-center gap-[8px]">
                  <span className="text-primary font-bold">→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-[44px]">
            <h3 className="text-[18px] font-bold text-text-main mb-[16px]">Community Partnerships</h3>
            <p className="text-[14px] leading-[1.7] text-gray-500 mb-[24px]">
              Partnerships with communities such as <strong className="font-semibold text-text-main">NgNOG</strong>, <strong className="font-semibold text-text-main">GhNOG</strong>, and <strong className="font-semibold text-text-main">TrustBroker Africa</strong> ensure that ATI training remains practical and aligned with real operational challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {partners.map((p, i) => (
                <div key={i} className="bg-white border-t-2 border-primary rounded-[6px] p-[20px] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[14px] font-bold text-text-main mb-[4px]">{p.name}</span>
                  <span className="text-[11px] text-gray-400 font-medium">{p.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
