'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Nav = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const isScrollingDown = scrollPosition > prevScrollPosition;
        
        if (Math.abs(scrollPosition - prevScrollPosition) > 70) {
          setNavVisible(!isScrollingDown);
          setPrevScrollPosition(scrollPosition);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPosition]);
  
  return (
    <nav className={`fixed w-screen sm:w-full px-4 sm:px-0 z-20 backdrop-blur-md bg-black/25 items-center transition-transform duration-300 ${
      navVisible ? 'translate-y-0' : '-translate-y-full' 
    }`}>
      <div className="py-6 flex mx-auto justify-between gap-4 sm:gap-8 w-full max-w-screen-xl">
        <Link href="/" className="flex items-center">
          <img
            src="/assets/img/wordmark.png"
            alt="grav logo"
            width="56"
          />
        </Link>
        <div className="flex space-x-4">
          <a href="#portfolio" className="text-white hover:text-violet-700 transition-colors">Portfolio</a>
          <a href="#founders" className="text-white hover:text-violet-700 transition-colors">Founders</a>
        </div>
      </div>
    </nav>
  );
}; 