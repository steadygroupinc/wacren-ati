'use client';

import React from 'react';
import { BookOpen, Share2, Target, Lightbulb } from 'lucide-react';

export default function NetSecActivities() {
  const activities = [
    {
      title: 'Training and Capacity Building',
      desc: 'Participants develop practical skills in network security monitoring, intrusion detection, incident response workflows, and threat intelligence fundamentals.',
      icon: <BookOpen className="text-white" />
    },
    {
      title: 'Technical Exchange',
      desc: 'A platform for technical presentations, operational case studies, and practitioner-led knowledge exchange to solve regional security challenges.',
      icon: <Share2 className="text-white" />
    },
    {
      title: 'Cybersecurity Exercises',
      desc: 'Engage in cyber defence exercises such as the CyberBastion Africa League, practising responses to realistic incidents affecting R&E infrastructure.',
      icon: <Target className="text-white" />
    },
    {
      title: 'Research Collaboration',
      desc: 'Advancing applied cybersecurity research relevant to African networks through collaboration between researchers and operational teams.',
      icon: <Lightbulb className="text-white" />
    }
  ];

  return (
    <section className="py-[80px] bg-bg-soft">
      <div className="container-wf">
        <div className="max-w-[800px] mb-[60px]">
          <span className="font-mono text-[10px] tracking-[0.1em] text-primary opacity-70 uppercase mb-[8px] block">Forum Core Activities</span>
          <h2 className="font-serif text-[38px] leading-[1.2] tracking-tighter text-text-main">
            Strengthening Cybersecurity Capability <br /><em className="italic text-primary not-italic">Across Africa</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {activities.map((a, i) => (
            <div key={i} className="flex gap-[24px] p-[32px] bg-white rounded-[16px] border border-gray-100 shadow-sm">
              <div className="shrink-0 w-[44px] h-[44px] bg-primary rounded-[10px] flex items-center justify-center">
                {a.icon}
              </div>
              <div>
                <h4 className="text-[17px] font-semibold text-text-main mb-[8px]">{a.title}</h4>
                <p className="text-[14px] leading-[1.7] text-gray-500 font-normal">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
