import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { LogoCarousel } from '@/components/LogoCarousel';
import { Work } from '@/components/Work';
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

      <section id="work" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-medium tracking-tight leading-none">Work</h2>
        <Work />
      </section>

      {/* <Divider /> */}

      <section id="founders" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-medium tracking-tight leading-none">Founders</h2>
        <Founders />
      </section>

      <Footer />
    </>
  );
}
