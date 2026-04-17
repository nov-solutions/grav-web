export const Hero = () => {
  return (
    <div className="min-h-[75%] justify-center flex w-full bg-cover bg-center bg-[url('https://framerusercontent.com/images/SSXLWXwuQtiAVh8lr6lZo6e28.jpg')]">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 max-w-screen-xl p-4 md:p-0 mt-16">
        <img
          src="/assets/img/logo.png"
          alt="grav logo"
          className="w-1/2 md:w-1/3 animate-float md:order-2"
        />
        <h1 className="text-4xl md:text-6xl text-center md:text-left font-medium md:order-1 tracking-tight leading-none">Tech-oriented holding company</h1>
      </div>
    </div>
  );
}; 