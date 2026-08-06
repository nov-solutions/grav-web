export const Hero = () => {
  return (
    <div className="flex h-[100svh] w-full max-w-screen-xl flex-col space-y-8 sm:space-y-12 px-8 mx-auto pt-24 pb-12 sm:pt-28 sm:pb-16 mb-12 sm:mb-16">
      <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-2xl">
        <img
          src="/assets/img/hero.gif"
          alt="grav"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tighter leading-none">
        Tech-oriented holding company
      </h1>
    </div>
  );
};
