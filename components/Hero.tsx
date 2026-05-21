export const Hero = () => {
  return (
    <div className="min-h-[75%] justify-center flex w-full bg-cover bg-center bg-[url('https://framerusercontent.com/images/SSXLWXwuQtiAVh8lr6lZo6e28.jpg')]">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 max-w-screen-xl px-4 mt-16">
        <img
          src="/assets/img/logo.png"
          alt="grav logo"
          className="w-1/2 sm:w-1/3 animate-float sm:order-2"
        />
        <h1 className="text-3xl sm:text-6xl text-center sm:text-left font-medium sm:order-1 tracking-tighter leading-none">Tech-oriented holding company</h1>
      </div>
    </div>
  );
}; 