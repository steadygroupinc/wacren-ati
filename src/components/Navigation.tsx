'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About ATI', href: '/#about' },
    { name: 'Training Modules', href: '/#modules' },
    { name: 'Community', href: '/#community' },
    { name: 'NetSec Forum', href: '/netsec' },
    { name: 'Launch 2026', href: '/#launch' },
    { name: 'Facilitators', href: '/#facilitator' },
    { name: 'Programmes', href: '/#related' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 w-full h-[60px] flex items-center">
      <div className="container-wf flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline shrink-0">
          <Image 
            src="/images/wacren-ati-logo.png" 
            alt="WACREN ATI Logo" 
            width={180}
            height={40}
            className="h-[40px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-[4px] list-none m-0 p-0 flex-1 justify-center px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`px-[10px] py-[6px] text-[12px] font-medium transition-all rounded-[4px] no-underline whitespace-nowrap ${
                  isActive(link.href) 
                    ? 'text-primary bg-primary/5' 
                    : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-[8px] shrink-0">
          <Link 
            href="/#framework" 
            className="px-[12px] py-[8px] border border-gray-200 rounded-[6px] text-[12px] font-bold text-text-main hover:bg-gray-50 transition-all no-underline uppercase tracking-[0.02em]"
          >
            Framework
          </Link>
          <Link 
            href="https://survey.wacren.net/index.php/291743" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-[14px] py-[8px] bg-primary border-[1.5px] border-primary text-white rounded-[6px] text-[12px] font-bold hover:bg-primary/90 transition-all no-underline uppercase tracking-[0.02em]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-primary focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-primary lg:hidden flex flex-col"
          >
            {/* Mobile Header Row */}
            <div className="h-[60px] flex items-center px-6 border-b border-white/10 shrink-0">
              <div className="flex items-center justify-between w-full">
                <Link href="/" onClick={() => setIsOpen(false)} className="no-underline">
                  <Image 
                    src="/images/wacren-ati-logo.png" 
                    alt="WACREN ATI Logo" 
                    width={140}
                    height={32}
                    className="h-[32px] w-auto brightness-0 invert"
                  />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col relative">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 opacity-30"></div>
              
              <ul className="flex flex-col gap-6 list-none m-0 p-0">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`text-[20px] font-medium tracking-tight no-underline transition-colors ${
                        isActive(link.href) ? 'text-accent border-l-2 border-accent pl-4 -ml-4' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 space-y-3">
                <Link 
                  href="https://survey.wacren.net/index.php/291743" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-accent text-white font-semibold uppercase tracking-wider rounded-[6px] text-[13px] no-underline shadow-lg"
                >
                  Apply to Facilitate &rarr;
                </Link>
                <Link 
                  href="https://indico.wacren.net/event/263/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-white/10 text-white font-semibold uppercase tracking-wider rounded-[6px] text-[13px] border border-white/20 no-underline"
                >
                  WACREN 2026 Details
                </Link>
              </div>

              <div className="mt-auto pt-10 pb-6 border-t border-white/10">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono">
                    WACREN ATI &copy; {new Date().getFullYear()}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
