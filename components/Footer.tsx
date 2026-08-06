import Link from 'next/link';

import { RiLinkedinFill } from '@remixicon/react';

import { WireframeTerrain } from '@/components/WireframeTerrain';

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black mt-16">
      <WireframeTerrain className="absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="relative z-20 mx-auto flex flex-col max-w-screen-xl w-full space-y-4 sm:space-y-6 py-12 sm:py-24 px-8 text-white">
        <div className="flex gap-4 sm:gap-8 justify-between">
          <Link href="/" className="flex items-center">
            <img src="/assets/img/wordmark.png" alt="grav logo" width="56" />
          </Link>
          <div className="flex gap-4 font-medium text-xs sm:text-sm">
            <a href="#portfolio" className="hover:underline underline-offset-4">
              Portfolio
            </a>
            <a href="#people" className="hover:underline underline-offset-4">
              People
            </a>
          </div>
        </div>
        <hr className="border-[0.5px] border-white" />
        <div className="flex justify-between">
          <Link
            href="https://www.linkedin.com/company/grav-solutions/"
            target="_blank"
          >
            <RiLinkedinFill size={16} className="transition-colors" />
          </Link>
          <p className="text-xs">Austin, Texas | Denver, Colorado</p>
        </div>
      </div>
    </footer>
  );
};
