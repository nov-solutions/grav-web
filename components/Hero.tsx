export const Hero = () => {
  return (
    <div className="min-h-[50vh] sm:min-h-[66.67vh] justify-center flex w-full bg-cover bg-center bg-[url('https://framerusercontent.com/images/SSXLWXwuQtiAVh8lr6lZo6e28.jpg')]">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 max-w-screen-xl p-4 sm:p-0 mt-20">
        <img
          src="/assets/img/logo.png"
          alt="grav logo"
          className="w-1/2 sm:w-2/5 animate-float sm:order-2"
        />
        <h1 className="text-4xl sm:text-6xl text-center sm:text-left font-medium sm:order-1">Tech-oriented holding company</h1>
      </div>
    </div>
  );
}; 