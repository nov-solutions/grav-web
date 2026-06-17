import Marquee from 'react-fast-marquee';

import { companies } from '@/lib/constants';

export const LogoCarousel = () => {
  const carouselLogos = companies.map(company => company.carouselLogo);

  return (
    <div className="flex flex-grow py-6 sm:py-12 w-full max-w-screen-2xl items-center px-8">
      <div className="relative w-full">
        <Marquee gradient={true} gradientColor={"black"} speed={25}>
          {Array.from({ length: 4 }).flatMap((_, setIndex) =>
            carouselLogos.map((logo, i) => (
              <img
                key={`${setIndex}-${i}`}
                src={logo}
                alt="Logo"
                className="sm:opacity-50 sm:hover:opacity-100 transition-opacity h-6 sm:h-8 mr-8 sm:mr-16"
              />
            ))
          )}
        </Marquee>
      </div>
    </div>
  );
};
