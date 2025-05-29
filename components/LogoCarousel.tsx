import { companies } from '@/lib/constants';

export const LogoCarousel = () => {
  const carouselLogos = companies.map(company => company.carouselLogo);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Scrolling content */}
      <div className="animate-scroll flex w-max gap-8 sm:gap-16 whitespace-nowrap">
        {[...carouselLogos, ...carouselLogos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Logo"
            className="sm:opacity-50 sm:hover:opacity-100 transition-opacity h-6 sm:h-8"
          />
        ))}
      </div>
    </div>
  );
}; 