'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'About ATI', href: '/about' },
    { name: 'ATI-6', href: '/ati-6' },
    { name: 'Training', href: '/training' },
    { name: 'Iterations', href: '/#iterations' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-[100] bg-earth-deep w-full shadow-lg">
      <div className="flex items-center justify-between px-6 lg:px-14 h-16 lg:h-20 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link href="/" className="bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-sm flex items-center justify-center hover:bg-cream transition-all relative z-50">
          <img src="/images/wacren-ati-logo.png" alt="WACREN ATI - Africa Training Initiative official logo" className="h-8 lg:h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`text-xs font-bold uppercase tracking-widest transition-all relative py-1 ${
                  isActive(link.href) 
                    ? 'text-gold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:rounded-full' 
                    : 'text-sand hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-4 ml-4">
            <Link 
              href="/apply" 
              className={`px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                isActive('/apply')
                  ? 'bg-gold text-earth-deep shadow-inner'
                  : 'bg-terracotta text-white hover:bg-ochre'
              }`}
            >
              Apply Now
            </Link>
            <Link 
              href="/partners" 
              className={`px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                isActive('/partners')
                  ? 'bg-gold text-earth-deep shadow-inner'
                  : 'bg-white/10 text-white hover:bg-gold hover:text-earth-deep'
              }`}
            >
              Partner With Us
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2 text-gold focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-earth-deep flex flex-col pt-24 px-8 lg:hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            
            <ul className="flex flex-col gap-6 list-none relative z-10 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className={`text-2xl font-bold uppercase tracking-widest ${
                      isActive(link.href) ? 'text-gold' : 'text-sand'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link 
                  href="/apply" 
                  className="w-full text-center py-4 bg-terracotta text-white font-bold uppercase tracking-[0.2em] rounded-sm text-sm"
                >
                  Apply Now
                </Link>
                <Link 
                  href="/partners" 
                  className="w-full text-center py-4 bg-white/10 text-white font-bold uppercase tracking-[0.2em] rounded-sm text-sm border border-white/10"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </ul>

            {/* Bottom Footer in Menu */}
            <div className="mt-auto pb-12 opacity-40 text-sand text-[10px] uppercase tracking-[0.3em] font-medium text-center">
              WACREN ATI &copy; {new Date().getFullYear()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
