'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaLaptop, FaMicrophone, FaBuildingColumns, FaHeart } from 'react-icons/fa6';

export default function GetInvolved() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const involvementOptions = [
    {
      icon: <FaLaptop className="text-4xl text-gold drop-shadow-[0_0_8px_rgba(240,180,41,0.3)]" />,
      title: 'ATTEND A PROGRAMME',
      description: 'Join an ATI training as an operator, administrator, manager, or governance professional.'
    },
    {
      icon: <FaMicrophone className="text-4xl text-sand drop-shadow-[0_0_8px_rgba(224,206,173,0.2)]" />,
      title: 'BECOME AN INSTRUCTOR',
      description: 'Join the instructor pathway and co-teach future ATI modules in your area of expertise.'
    },
    {
      icon: <FaBuildingColumns className="text-4xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />,
      title: 'HOST A MODULE',
      description: 'Bring ATI to your country as an NREN, NOG, university, or institutional host.'
    },
    {
      icon: <FaHeart className="text-4xl text-ochre drop-shadow-[0_0_8px_rgba(212,147,10,0.3)]" />,
      title: 'PARTNER WITH ATI',
      description: 'Join as a programme partner: technical, institutional, administrative, or funding.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and intro
      gsap.fromTo(".get-involved-intro",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          ease: "power3.out" 
        }
      );

      // Animate cards with stagger
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          delay: 0.4, 
          ease: "power2.out" 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary text-white py-32 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* ─── HEADER ─── */}
        <div className="mb-20">
          <p className="get-involved-intro text-[10px] uppercase tracking-[0.4em] text-white/50 mb-6 font-bold">GET INVOLVED</p>
          <h2 className="get-involved-intro text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Ready to Strengthen Africa&apos;s<br className="hidden lg:block" />
            Research & Education Sector?
          </h2>
          <p className="get-involved-intro text-base lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Whether you&apos;re an NREN engineer, an administrator, an institutional manager, a governance leader, a NOG practitioner, or a university. There&apos;s a role for you in ATI-6.
          </p>
        </div>

        {/* ─── CARDS ─── */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {involvementOptions.map((option, index) => (
            <div key={index} className="group bg-white/5 p-8 lg:p-10 rounded-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-xl flex flex-col items-center">
              <div className="mb-6">{option.icon}</div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-4">
                {option.title}
              </h4>
              <p className="text-[13px] text-white/80 leading-relaxed font-semibold">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* ─── CTA ─── */}
        <div className="get-involved-intro">
          <Link href="/contact" className="inline-flex bg-white/15 border border-white/20 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white/25 hover:-translate-y-1 transition-all group focus:outline-none focus:ring-0 active:outline-none active:ring-0 shadow-lg">
            Contact the ATI Programme Team <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
