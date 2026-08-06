import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { People } from '@/components/People';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />

      <section className="flex flex-col items-center w-full">
        <Hero />
      </section>

      {/* <Divider /> */}

      <section
        id="portfolio"
        className="py-12 sm:py-16 w-full max-w-screen-xl space-y-9 px-8"
      >
        <h2 className="text-2xl font-serif font-medium tracking-tighter leading-none">
          Portfolio
        </h2>
        <Portfolio />
      </section>

      {/* <Divider /> */}

      <section
        id="people"
        className="py-12 sm:py-16 w-full max-w-screen-xl space-y-9 px-8"
      >
        <h2 className="text-2xl font-serif font-medium tracking-tighter leading-none">
          People
        </h2>
        <People />
      </section>

      <Footer />
    </>
  );
}
