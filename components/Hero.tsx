export const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full gap-8 max-w-screen-xl mx-auto p-4 sm:p-0 mt-16 sm:mt-0">
      <img
        src="/assets/img/logo.png"
        alt="grav logo"
        className="w-1/2 sm:w-2/5 animate-float sm:order-2"
      />
      <h1 className="text-4xl sm:text-6xl text-center sm:text-left font-medium sm:order-1">Tech-oriented holding company</h1>
    </div>
  );
}; 