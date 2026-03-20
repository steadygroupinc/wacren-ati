import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Workshop from '@/components/Workshop';
import Model from '@/components/Model';
import Modules from '@/components/Modules';
import Launch from '@/components/Launch';
import Outcomes from '@/components/Outcomes';
import Partners from '@/components/Partners';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <section id="about">
        <About />
      </section>
      <section id="iterations">
        <Workshop />
      </section>
      <div className="kente-strip" />
      <section id="model">
        <Model />
      </section>
      <div className="kente-strip" />
      <section id="programmes">
        <Modules />
      </section>
      <div className="kente-strip" />
      <Launch />
      <div className="kente-strip" />
      <Outcomes />
      <div className="kente-strip" />
      <Partners />
      <div className="kente-strip" />
      <section id="contact">
        <GetInvolved />
      </section>
      <Footer />
    </div>
  );
}
