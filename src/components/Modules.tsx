'use client';

import React from 'react';

const modules = [
  { id: 1, name: 'Network Monitoring & Management', focus: 'Monitoring architectures, telemetry, troubleshooting', tag: 'Network operations' },
  { id: 2, name: 'Campus Network Architecture', focus: 'Scalable campus networks, wireless infrastructure', tag: 'Africa Digital Campus' },
  { id: 3, name: 'Routing & Interconnection', focus: 'BGP operations, routing resilience, IXPs', tag: 'NREN connectivity' },
  { id: 4, name: 'Cybersecurity Operations', focus: 'Incident response, SOC operations, threat intelligence', tag: 'TrustBroker Africa' },
  { id: 5, name: 'Trust & Identity Infrastructure', focus: 'eduroam, federation, RADIUS infrastructure', tag: 'eduID.africa' },
  { id: 6, name: 'Research Infrastructure Operations', focus: 'Repositories, research data platforms', tag: 'LIBSENSE · CLIMET' },
];

export default function Modules() {
  return (
    <section id="modules" className="py-[72px] bg-white">
      <div className="container-wf">
        <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block">
          Training Curriculum
        </span>
        <h2 className="font-serif text-[32px] md:text-[38px] leading-[1.2] mb-[20px] tracking-tighter text-text-main font-normal">
          ATI Training <em className="italic text-primary not-italic font-normal">Modules</em>
        </h2>
        <p className="text-[15px] md:text-base text-gray-500 max-w-[600px] mb-[40px] font-normal leading-relaxed">
          ATI training modules align with the operational layers of the research and education digital infrastructure stack.
        </p>

        {/* Mobile: Card Layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {modules.map((m) => (
            <div key={m.id} className="bg-bg-soft p-6 rounded-[12px] border border-gray-100 flex flex-col gap-3">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-15px font-semibold text-text-main leading-tight">{m.name}</h3>
                <span className="text-[10px] font-mono text-primary font-medium px-2 py-0.5 bg-primary/5 rounded border border-primary/10 whitespace-nowrap">
                  {m.tag}
                </span>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                {m.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left min-w-[600px]">
            <thead>
              <tr className="bg-bg-soft border-b-2 border-accent">
                <th className="px-[20px] py-[14px] text-[13px] font-semibold text-text-main font-mono uppercase tracking-[0.04em]">Module</th>
                <th className="px-[20px] py-[14px] text-[13px] font-semibold text-text-main font-mono uppercase tracking-[0.04em]">Focus</th>
                <th className="px-[20px] py-[14px] text-[13px] font-semibold text-text-main font-mono uppercase tracking-[0.04em]">Supports</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => (
                <tr key={m.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-[20px] py-[16px] text-[14px] font-semibold text-text-main">{m.name}</td>
                  <td className="px-[20px] py-[16px] text-[14px] text-gray-500 font-normal">{m.focus}</td>
                  <td className="px-[20px] py-[16px]">
                    <span className="text-[12px] font-mono text-primary font-medium">{m.tag}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[14px] md:text-[15px] leading-[1.8] text-gray-400 max-w-[640px] mt-[32px] italic font-normal">
          Together these modules provide a structured pathway for engineers and infrastructure operators to develop the expertise required to support modern research and education environments.
        </p>
      </div>
    </section>
  );
}
