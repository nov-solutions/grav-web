import { companies } from '@/lib/constants';

export const LogoCarousel = () => {
  const carouselLogos = companies.map(company => company.carouselLogo);

  // Render enough sets to cover even ultra-wide screens
  const numSets = 4;

  return (
    <div className="flex flex-grow py-12 md:py-24 w-full max-w-screen-xl items-center px-4 md:px-0">
      <div className="relative overflow-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Scrolling content - multiple sets for seamless infinite loop */}
        <div className="animate-scroll flex w-max gap-8 md:gap-16 whitespace-nowrap">
          {Array.from({ length: numSets }).map((_, setIndex) => (
            carouselLogos.map((logo, logoIndex) => (
              <img
                key={`set-${setIndex}-logo-${logoIndex}`}
                src={logo}
                alt="Logo"
                className="md:opacity-50 md:hover:opacity-100 transition-opacity h-6 md:h-8"
              />
            ))
          ))}
        </div>
      </div>
    </div>
  );
}; 