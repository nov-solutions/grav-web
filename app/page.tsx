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
        className="flex flex-col items-center w-full"
      >
        <Hero />
        <LogoCarousel />
      </section>

      {/* <Divider /> */}

      <section id="work" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-nmedium">Work</h2>
        <Work />
      </section>

      {/* <Divider /> */}

      <section id="founders" className="py-12 sm:py-24 w-full max-w-screen-xl space-y-12 px-4 sm:px-0">
        <h2 className="text-2xl font-medium">Founders</h2>
        <Founders />
      </section>

      <Footer />
    </>
  );
}
