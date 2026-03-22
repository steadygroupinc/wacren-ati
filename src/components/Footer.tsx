'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaXTwitter, FaMastodon } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';
import Image from 'next/image';

export default function Footer() {
  const atiLinks = [
    { label: 'About ATI', href: '#about' },
    { label: 'Training Modules', href: '#modules' },
    { label: 'Programme Framework', href: '/#framework' },
    { label: 'Apply to Facilitate', href: 'https://survey.wacren.net/index.php/291743' },
  ];

  const programmesLinks = [
    { label: 'NREN Academy', href: '#' },
    { label: 'TrustBroker Africa', href: 'http://trustbroker.africa/' },
    { label: 'eduID.africa', href: 'http://eduid.africa/' },
    { label: 'LIBSENSE', href: 'https://libsense.ren.africa/home' },
    { label: 'Africa Digital Campus', href: 'https://digitalcampus.africa/' },
  ];

  const wacrenLinks = [
    { label: 'About WACREN', href: 'https://www.wacren.net/about' },
    { label: 'WACREN 2026 Conference', href: 'https://wacren.net/conference' },
    { label: 'News & Updates', href: 'https://www.wacren.net/news' },
    { label: 'Contact', href: '/contact' },
  ];

  const socials = [
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/company/west-and-central-african-research-and-education-network/' },
    { icon: <SiBluesky size={18} />, href: 'https://bsky.app/profile/wacren.bsky.social' },
    { icon: <FaMastodon size={18} />, href: 'https://mastodon.social/@wacren' },
    { icon: <FaXTwitter size={18} />, href: 'https://twitter.com/wacren' },
  ];

  return (
    <footer className="bg-primary text-white pt-[80px] pb-[40px] border-t border-white/10">
      <div className="container-wf">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[48px] lg:gap-[64px] mb-[64px]">
          <div>
            <div className="flex items-center mb-[24px]">
              <Image 
                src="/images/wacren-ati-logo.png" 
                alt="WACREN ATI" 
                width={200}
                height={44}
                className="h-[44px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[14px] leading-[1.8] text-white/50 max-w-[340px] mb-[24px]">
              West and Central African Research and Education Network — connecting institutions and building the digital infrastructure for discovery, collaboration, and knowledge dissemination across Africa.
            </p>
            <div className="flex gap-[12px]">
              {socials.map((s, i) => (
                <Link 
                  key={i} 
                  href={s.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] bg-white/5 border border-white/10 rounded-[8px] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all no-underline"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent mb-[26px] font-mono">ATI PROGRAMME</h4>
            <ul className="space-y-[12px] m-0 p-0 list-none">
              {atiLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-[14px] text-white/70 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent mb-[26px] font-mono">PROGRAMMES</h4>
            <ul className="space-y-[12px] m-0 p-0 list-none">
              {programmesLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-[14px] text-white/70 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent mb-[26px] font-mono">WACREN</h4>
             <ul className="space-y-[12px] m-0 p-0 list-none">
              {wacrenLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-[14px] text-white/70 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-[32px] border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-[16px] text-center md:text-left">
          <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.05em]">
            Copyright © {new Date().getFullYear()} WACREN. All rights reserved.
          </div>
          <div className="max-w-[500px] text-[10px] md:text-[11px] font-mono text-white/30 leading-[1.6] md:text-right uppercase tracking-[0.02em]">
            The Africa Training Initiative (ATI) Program is supported by the AfricaConnect Project, co-funded by the European Union through the Global Gateway Program.
          </div>
        </div>
      </div>
    </footer>
  );
}
