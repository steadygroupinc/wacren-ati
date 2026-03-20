import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGSAPAnimation = (animation: (element: HTMLElement) => gsap.core.Timeline | void, dependencies: any[] = []) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animation(elementRef.current);
    }
  }, dependencies);

  return elementRef;
};

export const fadeInUp = (element: HTMLElement, delay: number = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: "power2.out" }
  );
};

export const slideInLeft = (element: HTMLElement, delay: number = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: "power2.out" }
  );
};

export const slideInRight = (element: HTMLElement, delay: number = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: "power2.out" }
  );
};

export const scaleIn = (element: HTMLElement, delay: number = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.6, delay, ease: "back.out(1.7)" }
  );
};

export const staggerChildren = (element: HTMLElement, childSelector: string = '*', delay: number = 0) => {
  return gsap.fromTo(element.querySelectorAll(childSelector),
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay, ease: "power2.out" }
  );
};