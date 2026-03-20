'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    
    const ctx = gsap.context(() => {
      // Animate the vertical line growth
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      // Animate timeline items
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item: any) => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelector('.timeline-content');

        // Dot pop in
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );

        // Content slide in
        gsap.fromTo(content,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const timelineData = [
    {
      year: '2014',
      title: 'Foundation & Adoption',
      description: 'ATI is conceived by Eko-Konnect (NgREN) and formally adopted by WACREN and UbuntuNet Alliance. This marks the beginning of a coordinated continental approach to capacity building.',
      color: 'bg-terracotta',
      textColor: 'text-white'
    },
    {
      year: '2017',
      title: 'Continental Expansion',
      description: 'ASREN joins the ATI partnership, creating a truly pan-African commitment spanning North, West, East, and Southern Africa.',
      color: 'bg-terracotta',
      textColor: 'text-white'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'ATI adapts to the global pandemic by pioneering virtual training delivery and expanding digital collaboration platforms.',
      color: 'bg-terracotta',
      textColor: 'text-white'
    },
    {
      year: '2024',
      title: 'ATI-6 Framework Launch',
      description: 'The enhanced ATI-6 model is launched, incorporating emerging technologies, advanced leadership development, and stronger industry partnerships.',
      color: 'bg-terracotta',
      textColor: 'text-white'
    },
    {
      year: '2026',
      title: 'Future Horizons',
      description: 'ATI continues to evolve, embracing AI, quantum technologies, and advanced networking paradigms to keep Africa at the forefront of global research and education.',
      color: 'bg-gold',
      textColor: 'text-earth-deep'
    }
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Animated Line */}
      <div 
        ref={lineRef}
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-terracotta to-ochre origin-top transition-transform duration-300"
      ></div>

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item relative flex items-start gap-8">
            <div className={`timeline-dot flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center ${item.textColor} font-bold text-lg relative z-10 shadow-lg`}>
              {item.year}
            </div>
            <div className="timeline-content pt-2">
              <h3 className="font-bold text-xl text-earth-deep mb-2">{item.title}</h3>
              <p className="text-text-mid leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
