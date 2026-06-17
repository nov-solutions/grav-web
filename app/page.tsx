import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { LogoCarousel } from '@/components/LogoCarousel';
import { Portfolio } from '@/components/Portfolio';
import { Founders } from '@/components/Founders';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />

      <section
        className="h-[75vh] flex flex-col items-center w-full"
      >
        <Hero />
        <LogoCarousel />
      </section>

      {/* <Divider /> */}

      <section id="portfolio" className="py-12 sm:py-16 w-full max-w-screen-xl space-y-9 px-8">
        <h2 className="text-2xl font-medium tracking-tighter leading-none">Portfolio</h2>
        <Portfolio />
      </section>

      {/* <Divider /> */}

      <section id="founders" className="py-12 sm:py-16 w-full max-w-screen-xl space-y-9 px-8">
        <h2 className="text-2xl font-medium tracking-tighter leading-none">Founders</h2>
        <Founders />
      </section>

      <Footer />
    </>
  );
}
