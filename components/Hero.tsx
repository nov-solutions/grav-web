import { WireframeTerrain } from '@/components/WireframeTerrain';

export const Hero = () => {
  return (
    <div className="relative min-h-[75%] justify-center flex w-full overflow-hidden bg-black">
      <WireframeTerrain className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center w-full gap-8 sm:gap-12 max-w-screen-xl px-8 mt-16">
        <img
          src="/assets/img/logo.png"
          alt="grav logo"
          className="w-1/2 md:w-2/5 sm:order-2"
        />
        <h1 className="text-3xl font-serif sm:text-6xl text-center sm:text-left font-medium sm:order-1 tracking-tighter leading-none">
          Tech-oriented holding company
        </h1>
      </div>
    </div>
  );
};
