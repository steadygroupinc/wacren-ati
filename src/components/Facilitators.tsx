'use client';

import React from 'react';
import Link from 'next/link';

export default function Facilitators() {
  const roles = [
    { text: 'Deliver technical workshops across the research and education community' },
    { text: 'Develop training materials aligned with real operational challenges' },
    { text: 'Mentor participants and build the next generation of infrastructure experts' },
    { text: 'Strengthen regional technical communities across Africa' },
  ];

  return (
    <section id="facilitator" className="py-[72px] bg-white">
      <div className="container-wf">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
          <div>
            <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block">
              Become an ATI Facilitator
            </span>
            <h2 className="font-serif text-[38px] leading-[1.2] mb-[20px] tracking-tighter text-text-main font-normal">
              Join Our Community of <em className="italic text-primary not-italic font-normal">Expert Facilitators</em>
            </h2>
            <p className="text-[15px] leading-[1.8] text-gray-500 mb-[32px]">
              WACREN is building a community of expert facilitators who will contribute to delivering ATI training programmes across Africa.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-[16px]">
              {roles.map((role, i) => (
                <li key={i} className="flex items-start gap-[12px] text-[15px] text-gray-500 font-normal">
                  <span className="text-accent font-medium">→</span>
                  {role.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="border-[2px] border-dashed border-accent bg-white rounded-[12px] p-[32px] text-center">
              <div className="w-[60px] h-[60px] bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-[24px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-text-main mb-[12px]">Apply to Become an ATI Facilitator</h3>
              <p className="text-[14px] leading-[1.6] text-gray-500 mb-[24px]">
                Share your expertise, contribute to Africa&apos;s research and education infrastructure, and help train the next generation of network engineers and operators.
              </p>
              <Link 
                href="https://survey.wacren.net/index.php/291743" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-[32px] py-[14px] bg-primary border-[1.5px] border-primary text-white rounded-[6px] font-bold text-[13px] hover:bg-primary/90 transition-all no-underline shadow-lg"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
