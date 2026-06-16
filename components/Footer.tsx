import Link from 'next/link';

import { RiLinkedinFill } from '@remixicon/react';

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-cover bg-bottom bg-[url('/assets/img/bg.png')] mt-16">
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="relative z-20 mx-auto flex flex-col max-w-screen-xl w-full space-y-4 sm:space-y-6 py-12 sm:py-24 px-8">
        <div className="flex gap-4 sm:gap-8 justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/img/wordmark.png"
              alt="grav logo"
              width="56"
            />
          </Link>
          <div className="flex gap-4 text-white text-xs sm:text-sm">
            <a href="#portfolio" className="hover:underline underline-offset-4">Portfolio</a>
            <a href="#founders" className="hover:underline underline-offset-4">Founders</a>
          </div>
        </div>
        <hr className="border border-neutral-600" />
        <div className="flex justify-between">
          <Link href="https://www.linkedin.com/company/grav-solutions/" target="_blank">
            <RiLinkedinFill size={16} className="text-neutral-600 hover:text-white transition-colors" />
          </Link>
          <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} grav</p>
        </div>
      </div>
    </footer>
  );
}; 