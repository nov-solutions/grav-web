export const Hero = () => {
  return (
    <div className="flex h-[100svh] w-full max-w-screen-xl flex-col space-y-8 sm:space-y-12 px-0 sm:px-8 mx-auto sm:pt-28 pb-12 sm:pb-16 mb-12 sm:mb-16">
      <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-none sm:rounded-2xl">
        <img
          src="/assets/img/hero.gif"
          alt="grav"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:hidden"
          style={{
            background:
              'linear-gradient(to top, rgb(var(--background-rgb)), rgba(var(--background-rgb), 0))',
          }}
        />
      </div>

      <h1 className="px-8 sm:px-0 font-serif text-3xl sm:text-4xl font-medium tracking-tighter leading-none">
        Tech-oriented holding company
      </h1>
    </div>
  );
};
