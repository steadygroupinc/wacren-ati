'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-[72px] bg-white">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[64px] items-start">
          <div>
            <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block">
              About the Programme
            </span>
            <h2 className="font-serif text-[38px] leading-[1.2] mb-[24px] tracking-tighter text-text-main font-normal">
              Technical Capacity for <br /><em className="italic text-primary not-italic font-normal">Digital Infrastructure</em>
            </h2>
            
            <div className="space-y-[16px]">
              <p className="text-[15px] leading-[1.8] text-gray-500">
                The <strong className="font-normal text-text-main">Africa Training Initiative (ATI)</strong> is WACREN&apos;s flagship technical capacity development programme designed to strengthen the expertise required to operate research and education digital infrastructure across Africa.
              </p>
              <p className="text-[15px] leading-[1.8] text-gray-500">
                As universities and research institutions increasingly rely on digital platforms for research collaboration, digital learning, and open science, the need for skilled engineers capable of deploying and operating complex infrastructure continues to grow.
              </p>
              <p className="text-[15px] leading-[1.8] text-gray-500">
                ATI addresses this need by providing structured training programmes for engineers, system administrators, cybersecurity professionals, and infrastructure operators across the research and education community.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-primary/5 border-[1.5px] border-primary/20 rounded-[12px] p-[28px]">
              <div className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[16px]">
                Related WACREN Programme
              </div>
              <div className="bg-white border border-primary/15 rounded-[6px] p-[16px] text-[13px] text-text-main shadow-sm">
                <strong className="text-primary font-semibold">NREN Academy</strong>
                <p className="text-gray-500 mt-[4px] text-[12px]">ATI complements the NREN Academy, which focuses on leadership, strategy, and sustainability for National Research and Education Networks.</p>
              </div>

              <div className="mt-[20px] pt-[20px] border-t border-primary/15">
                <div className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[16px]">
                  Who ATI serves
                </div>
                <ul className="list-none p-0 m-0 flex flex-col gap-[8px] text-[13px] text-gray-500">
                  <li className="flex items-center gap-[8px]">
                    <span className="text-primary">→</span> Network engineers & operators
                  </li>
                  <li className="flex items-center gap-[8px]">
                    <span className="text-primary">→</span> System administrators
                  </li>
                  <li className="flex items-center gap-[8px]">
                    <span className="text-primary">→</span> Cybersecurity professionals
                  </li>
                  <li className="flex items-center gap-[8px]">
                    <span className="text-primary">→</span> Infrastructure operators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
