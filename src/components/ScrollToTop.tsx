'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-12 opacity-0 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-primary text-white rounded-sm shadow-2xl flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-accent/30 active:scale-95"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
}
