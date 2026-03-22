'use client';

import React from 'react';
import Link from 'next/link';
import { School, Shield, Lock, Library, Globe, Database } from 'lucide-react';

const programmes = [
  { 
    name: 'NREN Academy', 
    desc: 'Leadership and sustainability for NREN communities across Africa.',
    icon: <School size={16} className="text-orange-500" />,
    iconBg: 'bg-orange-50',
    href: '#'
  },
  { 
    name: 'TrustBroker Africa', 
    desc: 'Cybersecurity collaboration and CSIRT development across the continent.',
    icon: <Shield size={16} className="text-blue-500" />,
    iconBg: 'bg-blue-50',
    href: 'http://trustbroker.africa/'
  },
  { 
    name: 'eduID.africa', 
    desc: 'Federated identity infrastructure for the research and education community.',
    icon: <Lock size={16} className="text-amber-500" />,
    iconBg: 'bg-amber-50',
    href: 'http://eduid.africa/'
  },
  { 
    name: 'LIBSENSE', 
    desc: 'Open science repositories and research data infrastructure platforms.',
    icon: <Database size={16} className="text-indigo-500" />,
    iconBg: 'bg-indigo-50',
    href: 'https://libsense.ren.africa/home'
  },
  { 
    name: 'Africa Digital Campus', 
    desc: 'Distributed digital learning environments for higher education across Africa.',
    icon: <Globe size={16} className="text-cyan-500" />,
    iconBg: 'bg-cyan-50',
    href: 'https://digitalcampus.africa/'
  },
  { 
    name: 'Africa Training Initiative', 
    desc: 'You are here — technical capacity development for infrastructure operators.',
    isActive: true,
    icon: <Globe size={16} className="text-white" />,
    iconBg: 'bg-white/20',
    href: '#'
  },
];

export default function RelatedProgrammes() {
  return (
    <section id="related" className="py-[100px] bg-white">
      <div className="container-wf">
        <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[12px] block font-bold">
          Related WACREN Programmes
        </span>
        <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.1] mb-[40px] md:mb-[48px] tracking-tighter text-text-main max-w-[800px] font-normal">
          ATI Contributes to Africa&apos;s Wider <em className="italic text-primary not-italic font-normal">Digital Ecosystem</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {programmes.map((p, i) => (
            <div 
              key={i} 
              className={`p-[32px] rounded-[16px] transition-all flex flex-col items-start gap-[20px] ${
                p.isActive 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02] relative z-10' 
                  : 'bg-bg-soft hover:bg-white hover:shadow-lg hover:shadow-black/5 border border-transparent hover:border-gray-100'
              }`}
            >
              <div className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center ${p.iconBg}`}>
                {p.icon}
              </div>
              
              <div>
                <h3 className={`text-[16px] font-bold mb-[8px] ${p.isActive ? 'text-white' : 'text-text-main'}`}>
                  {p.name}
                </h3>
                <p className={`text-[13px] leading-[1.6] ${p.isActive ? 'text-white/80' : 'text-gray-500'}`}>
                  {p.desc}
                </p>
              </div>

              {p.isActive ? (
                <div className="mt-auto pt-[12px] flex items-center gap-[8px] text-[11px] font-bold uppercase tracking-[0.05em] text-white/60">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  Current page
                </div>
              ) : (
                <Link 
                  href={p.href} 
                  target={p.href.startsWith('http') ? "_blank" : undefined}
                  rel={p.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="mt-auto pt-[12px] text-[12px] font-bold text-primary hover:text-accent transition-colors no-underline flex items-center gap-[4px]"
                >
                  Explore <span className="text-[14px]">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-[15px] leading-[1.8] text-gray-400 max-w-[640px] mt-[48px]">
          Together these programmes support the digital infrastructure that enables research, education, and innovation across Africa.
        </p>
      </div>
    </section>
  );
}
