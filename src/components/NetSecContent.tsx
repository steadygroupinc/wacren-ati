'use client';

import React from 'react';
import { Network, ShieldCheck, Users, GraduationCap, Search, Building2 } from 'lucide-react';

export default function NetSecContent() {
  const scopeItems = [
    {
      title: 'NRENs',
      desc: 'Network engineers and security specialists operating national research and education networks.',
      icon: <Network className="text-primary" />
    },
    {
      title: 'Universities',
      desc: 'Campus network operators and institutional security teams protecting academic digital infrastructure.',
      icon: <GraduationCap className="text-primary" />
    },
    {
      title: 'CSIRTs',
      desc: 'Collaboration with national teams to strengthen coordination between academic and national cyber defence.',
      icon: <ShieldCheck className="text-primary" />
    },
    {
      title: 'Researchers',
      desc: 'Experts contributing applied research on threat detection, network measurement, and infrastructure resilience.',
      icon: <Search className="text-primary" />
    },
    {
      title: 'Students',
      desc: 'Early-career professionals engaging with practitioners to develop practical cybersecurity skills.',
      icon: <Users className="text-primary" />
    },
    {
      title: 'Private Sector',
      desc: 'Cybersecurity companies and threat intelligence organizations contributing technical expertise.',
      icon: <Building2 className="text-primary" />
    }
  ];

  return (
    <section className="py-[80px] bg-white">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] mb-[100px]">
          <div>
            <h2 className="font-serif text-[32px] mb-[24px] tracking-tighter text-text-main">Background & Purpose</h2>
            <div className="space-y-[20px] text-[15px] leading-[1.8] text-gray-500">
              <p>As research and education networks across Africa expand, they are increasingly supporting critical digital infrastructure for universities, research institutions, and scientific collaboration. This growth brings significant opportunities but also exposes networks to an evolving cybersecurity threat landscape.</p>
              <p>Addressing these challenges requires more than isolated technical teams. It requires a trusted, collaborative cybersecurity community that connects network operators, security practitioners, researchers, and institutions across the continent.</p>
              <p>The <strong className="text-text-main font-semibold">ATI NetSec Forum</strong> serves as a community platform connecting cybersecurity practitioners and researchers working to secure Africa’s research and education infrastructure.</p>
            </div>
          </div>
          <div className="bg-bg-soft p-[40px] rounded-[16px] border border-gray-100 self-start">
            <h3 className="font-serif text-[24px] mb-[20px] text-text-main">Bridging the Gap</h3>
            <p className="text-[14px] text-gray-500 mb-[24px]">The NetSec Forum provides a broader technical ecosystem where network engineers, security teams, researchers, and industry experts can exchange knowledge and build operational capability between:</p>
            <ul className="list-none p-0 m-0 space-y-[12px]">
              {['Network operations', 'Security operations', 'Cybersecurity research', 'Operational incident response'].map((item, i) => (
                <li key={i} className="flex items-center gap-[12px] text-[14px] font-medium text-primary">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-[32px] mb-[40px] tracking-tighter text-text-main text-center">Community Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {scopeItems.map((item, i) => (
              <div key={i} className="p-[32px] bg-white border border-gray-100 rounded-[12px] hover:border-primary/20 hover:shadow-md transition-all">
                <div className="mb-[20px] w-[40px] h-[40px] bg-gray-50 rounded-[8px] flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-[16px] font-semibold text-text-main mb-[12px]">{item.title}</h4>
                <p className="text-[13px] leading-[1.6] text-gray-500 font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
