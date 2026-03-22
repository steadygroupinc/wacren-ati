import Navigation from '@/components/Navigation';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Ecosystem from '@/components/Ecosystem';
import Modules from '@/components/Modules';
import Community from '@/components/Community';
import Launch from '@/components/Launch';
import Facilitators from '@/components/Facilitators';
import Framework from '@/components/Framework';
import RelatedProgrammes from '@/components/RelatedProgrammes';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WACREN ATI - Africa Training Initiative",
  description: "WACREN's flagship technical capacity development programme for African research and education networks.",
  alternates: {
    canonical: 'https://ati.wacren.net/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-outfit">
      <AnnouncementBar />
      <Navigation />
      
      <Hero />
      
      <About />
      <Ecosystem />
      <Modules />
      <Community />
      <Launch />
      <Facilitators />
      <Framework />
      <RelatedProgrammes />
      
      <Footer />
    </main>
  );
}
