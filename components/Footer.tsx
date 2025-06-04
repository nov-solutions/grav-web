import Link from 'next/link';

import { RiLinkedinFill } from '@remixicon/react';

export const Footer = () => {
  return (
    <footer className="mx-auto flex flex-col max-w-screen-xl w-full space-y-4 py-12 sm:py-24 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/img/wordmark.png"
              alt="grav logo"
              width="56"
            />
          </Link>
          <div className="flex gap-4">
            <a href="#work" className="text-white hover:text-violet-700 transition-colors">Work</a>
            <a href="#founders" className="text-white hover:text-violet-700 transition-colors">Founders</a>
          </div>
        </div>
        <hr className="hidden sm:inline border border-neutral-800" />
        <div className="flex justify-between">
          <Link href="https://www.linkedin.com/company/grav-solutions/" target="_blank">
            <RiLinkedinFill size={16} className="text-neutral-500 hover:text-white transition-colors" />
          </Link>
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} grav</p>
        </div>
      </footer>
  );
}; 