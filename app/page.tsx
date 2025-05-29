'use client';

import { useState, useEffect } from 'react';

import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { LogoCarousel } from '@/components/LogoCarousel';
import { Divider } from '@/components/Divider';
import { Work } from '@/components/Work';
import { Founders } from '@/components/Founders';
import { Footer } from '@/components/Footer';

export default function Home() {
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
    <>
      <Nav navVisible={navVisible} />

      <section
        className="h-[50vh] flex items-center w-full bg-cover bg-center bg-[url('https://framerusercontent.com/images/SSXLWXwuQtiAVh8lr6lZo6e28.jpg')]"
      >
        <Hero />
      </section>

      <section className="py-8 sm:py-16 w-full max-w-screen-xl px-4 sm:px-0">
        <LogoCarousel />
      </section>

      <Divider />

      <section id="work" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-6 sm:space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-semibold">Work</h2>
        <Work />
      </section>

      <Divider />

      <section id="founders" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-6 sm:space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-semibold">Founders</h2>
        <Founders />
      </section>

      <Footer />
    </>
  );
}
