'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Public as GlobeIcon, 
  Favorite as HeartIcon, 
  Build as WrenchIcon, 
  AccountBalance as BuildingIcon, 
  Assessment as ChartIcon, 
  AllInclusive as InfinityIcon 
} from '@mui/icons-material';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline years and content
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      
      timelineItems?.forEach((item) => {
        const dot = item.querySelector('.timeline-dot');
        const year = item.querySelector('.timeline-year');
        const content = item.querySelector('.timeline-content');

        gsap.fromTo([dot, year, content],
          { opacity: 0, x: -20 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8, 
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Animate main heading and paragraph
      gsap.fromTo([".about-tag", ".about-title", ".about-desc"],
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 85%"
          }
        }
      );

      // Animate brand pillar headers
      gsap.fromTo([".pillars-tag", ".pillars-title"],
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pillars-title",
            start: "top 85%"
          }
        }
      );

      // Animate pillars grid
      gsap.fromTo(".pillar-card",
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pillars-grid",
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: <GlobeIcon className="text-terracotta text-9xl" />,
      title: 'AFRICAN-LED',
      description: 'Owned and driven by African RENs, practitioners, and communities, not donor-directed.'
    },
    {
      icon: <HeartIcon className="text-gold text-9xl" />,
      title: 'COMMUNITY-DRIVEN',
      description: 'Peer learning and practitioner instruction at the core. Alumni become tomorrow\'s trainers and leaders.'
    },
    {
      icon: <WrenchIcon className="text-ochre text-9xl" />,
      title: 'TECHNICALLY GROUNDED',
      description: 'Hands-on labs and real NREN environments that build durable, applicable operational skills.'
    },
    {
      icon: <BuildingIcon className="text-sand text-9xl" />,
      title: 'GOVERNANCE-AWARE',
      description: 'Building NREN and institutional governance capacity so organisations are well-led, not just well-run.'
    },
    {
      icon: <ChartIcon className="text-terracotta text-9xl" />,
      title: 'MANAGEMENT & ADMIN',
      description: 'Equipping administrators and managers with the business and organisational skills to sustain digital infrastructure services.'
    },
    {
      icon: <InfinityIcon className="text-gold text-9xl" />,
      title: 'SUSTAINABLE',
      description: 'Designed for continuity, growing instructor pipelines, local communities, and institutional capacity that persists.'
    }
  ];

  return (
    <section id="about" className="bg-cream-light text-earth-deep px-6 lg:px-14 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 lg:gap-32 items-start">
        {/* Left Column: Story & Timeline */}
        <div className="lg:pl-8">
          <div className="about-tag font-bold text-xs uppercase tracking-[0.3em] text-terracotta mb-8">
            OUR STORY
          </div>
          <h2 className="about-title font-bold text-5xl lg:text-[5.5rem] lg:text-7xl leading-[1.05] text-earth-deep mb-10">
            An African Ecosystem,<br/>
            Built to <em className="text-terracotta not-italic">Last</em>
          </h2>
          <p className="about-desc text-text-mid text-lg lg:text-2xl leading-relaxed mb-20 max-w-2xl font-medium">
            ATI was conceived as a self-sustaining capacity-building ecosystem, not a donor-dependent training project. It serves NRENs, network operators, and the technical communities of higher education and research institutions, building capability across technical operations, administration, business management, and governance. Originally developed by Eko-Konnect (NgREN, Lagos), ATI was formally adopted by WACREN and UbuntuNet Alliance in 2014, and ASREN in 2017, creating a continent-spanning commitment to grow and retain expertise across Africa&apos;s research and education sector.
          </p>

          <div ref={timelineRef} className="mt-12 relative pl-[28px] space-y-8">
            {/* ─── VERTICAL CONNECTOR ─── */}
            <div className="absolute left-[8px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-terracotta to-gold"></div>
            
            {/* ─── 2014 ─── */}
            <div className="tl-item relative mb-8">
              <div className="tl-dot absolute -left-[25px] top-[6px] w-[12px] h-[12px] rounded-full bg-gold shadow-[0_0_0_2px_var(--earth-deep)] z-10"></div>
              <div className="tl-year text-[11px] text-terracotta font-bold tracking-wider mb-1">2014</div>
              <p className="tl-text text-[14px] leading-relaxed text-text-mid">
                <strong className="text-text-dark">Founding Adoption:</strong> WACREN & UbuntuNet Alliance sign MOU, adopting ATI as a jointly endorsed programme.
              </p>
            </div>

            {/* ─── 2017 ─── */}
            <div className="tl-item relative mb-8">
              <div className="tl-dot absolute -left-[25px] top-[6px] w-[12px] h-[12px] rounded-full bg-gold shadow-[0_0_0_2px_var(--earth-deep)] z-10"></div>
              <div className="tl-year text-[11px] text-terracotta font-bold tracking-wider mb-1">2017</div>
              <p className="tl-text text-[14px] leading-relaxed text-text-mid">
                <strong className="text-text-dark">ASREN joins:</strong> extending ATI&apos;s reach to North Africa and making it a true pan-continental initiative.
              </p>
            </div>

            {/* ─── 2014 to 2024 ─── */}
            <div className="tl-item relative mb-8">
              <div className="tl-dot absolute -left-[25px] top-[6px] w-[12px] h-[12px] rounded-full bg-gold shadow-[0_0_0_2px_var(--earth-deep)] z-10"></div>
              <div className="tl-year text-[11px] text-terracotta font-bold tracking-wider mb-1">2014 to 2024</div>
              <p className="tl-text text-[14px] leading-relaxed text-text-mid">
                <strong className="text-text-dark">ATI Practice:</strong> successive workshop editions with practitioners delivering campus network best-practice instruction.
              </p>
            </div>

            {/* ─── 2026 ─── */}
            <div className="tl-item relative">
              <div className="tl-dot absolute -left-[25px] top-[6px] w-[12px] h-[12px] rounded-full bg-gold shadow-[0_0_0_2px_var(--earth-deep)] z-10"></div>
              <div className="tl-year text-[11px] text-terracotta font-bold tracking-wider mb-1">2026</div>
              <p className="tl-text text-[14px] leading-relaxed text-text-mid">
                <strong className="text-text-dark">ATI-6 Resurgence:</strong> relaunched at WACREN 2026 with a modernised model: NREN NOG co-delivery and community seeding.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Brand Pillars */}
        <div className="lg:pr-8">
          <div className="pillars-tag font-bold text-xs uppercase tracking-[0.3em] text-terracotta mb-8">
            BRAND PILLARS
          </div>
          <h3 className="pillars-title font-bold text-4xl lg:text-6xl text-earth-deep mb-20 leading-tight">
            What ATI<br/>
            Stands For
          </h3>

          <div className="pillars-grid grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card bg-white p-12 lg:p-14 rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] flex flex-col items-start hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-10">{pillar.icon}</div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-earth-deep mb-5 h-6 flex items-center">
                  {pillar.title}
                </h4>
                <p className="text-base text-text-mid leading-relaxed font-semibold">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
