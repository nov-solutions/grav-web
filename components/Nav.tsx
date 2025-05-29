import Link from 'next/link';

export const Nav = ({ navVisible }: { navVisible: boolean }) => {
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
          <a href="#work" className="text-white hover:text-violet-700 transition-colors">Work</a>
          <a href="#founders" className="text-white hover:text-violet-700 transition-colors">Founders</a>
        </div>
      </div>
    </nav>
  );
}; 