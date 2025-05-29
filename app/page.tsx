import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { LogoCarousel } from '@/components/LogoCarousel';
import { Divider } from '@/components/Divider';
import { Work } from '@/components/Work';
import { Founders } from '@/components/Founders';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />

      <section
        className="h-[66.67vh] flex items-center w-full bg-cover bg-center bg-[url('https://framerusercontent.com/images/SSXLWXwuQtiAVh8lr6lZo6e28.jpg')]"
      >
        <Hero />
      </section>

      <section className="py-8 sm:py-16 w-full max-w-screen-xl px-4 sm:px-0">
        <LogoCarousel />
      </section>

      <Divider />

      <section id="work" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-6 sm:space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-semibold">Work</h2>
        <Work />
      </section>

      <Divider />

      <section id="founders" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-6 sm:space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-semibold">Founders</h2>
        <Founders />
      </section>

      <Footer />
    </>
  );
}
