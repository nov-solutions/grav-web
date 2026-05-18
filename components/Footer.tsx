import Link from 'next/link';

import { RiLinkedinFill } from '@remixicon/react';

export const Footer = () => {
  return (
    <footer className="mx-auto flex flex-col max-w-screen-xl w-full space-y-4 py-12 md:py-24 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/img/wordmark.png"
              alt="grav logo"
              width="56"
            />
          </Link>
          <div className="flex gap-4 text-white text-sm">
            <a href="#portfolio" className="hover:underline underline-offset-4">Portfolio</a>
            <a href="#founders" className="hover:underline underline-offset-4">Founders</a>
          </div>
        </div>
        <hr className="hidden md:inline border border-neutral-800" />
        <div className="flex justify-between">
          <Link href="https://www.linkedin.com/company/grav-solutions/" target="_blank">
            <RiLinkedinFill size={16} className="text-neutral-500 hover:text-white transition-colors" />
          </Link>
          <p className="text-neutral-500 font-serif text-xs">© {new Date().getFullYear()} grav</p>
        </div>
      </footer>
  );
}; 