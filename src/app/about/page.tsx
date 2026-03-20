import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HistoryTimeline from '@/components/HistoryTimeline';
import { Public, Handshake, GpsFixed, EmojiNature, Autorenew, TrendingUp } from '@mui/icons-material';

export const metadata = {
  title: 'About ATI - WACREN Africa Training Initiative',
  description: 'Learn about the Africa Training Initiative (ATI), its history, mission, and impact on research and education networks across Africa. Discover our journey since 2014.',
  openGraph: {
    title: 'About Africa Training Initiative | WACREN ATI',
    description: 'Empowering African research and education through specialized capacity building and sustainable ecosystems.',
  }
};

export default function AboutPage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ati.wacren.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About ATI",
        "item": "https://ati.wacren.net/about"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="fixed top-4 right-4 z-50 font-bold text-xs font-bold uppercase tracking-wide bg-ochre text-earth-deep px-3 py-1 rounded-sm">
        About ATI
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="bg-earth-deep text-white px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            About ATI
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Africa&apos;s <em className="text-gold not-italic">Capacity Building</em> Ecosystem
          </h1>
          <p className="text-sand text-lg leading-relaxed max-w-3xl mx-auto">
            The Africa Training Initiative (ATI) is a continent-wide effort to strengthen research and education networks through comprehensive capacity building, knowledge transfer, and sustainable development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                Our Mission
              </div>
              <h2 className="font-bold font-bold text-3xl text-earth-deep mb-6">
                Empowering Africa&apos;s Digital Future
              </h2>
              <p className="text-text-mid text-base leading-relaxed mb-6">
                To build and sustain a self-sufficient capacity building ecosystem that empowers African research and education institutions to excel in network operations, cybersecurity, leadership, and innovation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-bold mt-0.5">•</span>
                  <span className="text-text-mid">Strengthen technical capabilities across the continent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-bold mt-0.5">•</span>
                  <span className="text-text-mid">Foster regional collaboration and knowledge sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-bold mt-0.5">•</span>
                  <span className="text-text-mid">Promote sustainable development of research infrastructure</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                Our Vision
              </div>
              <h2 className="font-bold font-bold text-3xl text-earth-deep mb-6">
                A Connected, Capable Africa
              </h2>
              <p className="text-text-mid text-base leading-relaxed mb-6">
                An Africa where research and education networks are world-class, where technical expertise is abundant and accessible, and where digital collaboration drives innovation and development.
              </p>
              <div className="bg-white p-6 rounded-sm shadow-sm relative overflow-hidden">
                {/* Accent bar as background instead of border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-terracotta/20"></div>
                <blockquote className="text-text-dark italic text-base leading-relaxed">
                  &ldquo;ATI represents Africa&apos;s commitment to building its own capacity, creating sustainable solutions that serve our unique needs and challenges.&rdquo;
                </blockquote>
                <cite className="text-terracotta font-semibold text-sm mt-3 block">— WACREN Leadership</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-white px-6 lg:px-14 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              Our Journey
            </div>
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              From Vision to <em className="text-terracotta not-italic">Impact</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed max-w-2xl mx-auto">
              ATI&apos;s evolution reflects Africa&apos;s growing commitment to digital excellence and self-reliance.
            </p>
          </div>

          <HistoryTimeline />
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-mid px-6 lg:px-14 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              Our Values
            </div>
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Guiding <em className="text-terracotta not-italic">Principles</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="mb-4 flex justify-center"><Public className="text-terracotta text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-3">African Leadership</h3>
              <p className="text-text-mid leading-relaxed">
                Solutions designed by Africans, for Africans, ensuring relevance and sustainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="mb-4 flex justify-center"><Handshake className="text-terracotta text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-3">Collaboration</h3>
              <p className="text-text-mid leading-relaxed">
                Building partnerships across regions, disciplines, and organizations for greater impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="mb-4 flex justify-center"><GpsFixed className="text-terracotta text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-3">Excellence</h3>
              <p className="text-text-mid leading-relaxed">
                Maintaining the highest standards in training, delivery, and outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="mb-4 flex justify-center"><EmojiNature className="text-terracotta text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-3">Sustainability</h3>
              <p className="text-text-mid leading-relaxed">
                Creating self-sustaining ecosystems that continue to grow and evolve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="mb-4 flex justify-center"><Autorenew className="text-terracotta text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-3">Innovation</h3>
              <p className="text-text-mid leading-relaxed">
                Embracing new technologies and methodologies to stay ahead of emerging needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="mb-4 flex justify-center"><TrendingUp className="text-terracotta text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-3">Impact</h3>
              <p className="text-text-mid leading-relaxed">
                Measuring and demonstrating tangible benefits for participants and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
