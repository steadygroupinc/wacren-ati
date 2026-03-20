import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'ATI-6 Framework | Africa Training Initiative',
  description: 'The six interconnected pillars of the Africa Training Initiative framework: Awareness, Technical, Institutional, Innovation, Industry, and Sustainability. Our architectural model for digital growth.',
  openGraph: {
    title: 'The ATI-6 Framework explained | WACREN ATI',
    description: 'A comprehensive, pan-African architecture for sustainable digital growth and NREN development.',
  }
};

export default function Ati6Page() {
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
        "name": "ATI-6 Framework",
        "item": "https://ati.wacren.net/ati-6"
      }
    ]
  };

  const ati6Pillars = [
    {
      letter: 'A',
      title: 'Awareness & Advocacy',
      description: 'Building understanding and support for NREN development and regional collaboration initiatives.',
      modules: ['Policy Development', 'Stakeholder Engagement', 'Communication Strategies'],
      color: 'terracotta'
    },
    {
      letter: 'T',
      title: 'Technical Capacity',
      description: 'Developing advanced networking, cybersecurity, and infrastructure management skills.',
      modules: ['Network Operations', 'Cybersecurity', 'Cloud Technologies', 'SDN/NFV'],
      color: 'terracotta'
    },
    {
      letter: 'I',
      title: 'Institutional Development',
      description: 'Strengthening organizational structures, governance, and business management capabilities.',
      modules: ['Governance Models', 'Financial Management', 'Strategic Planning', 'Performance Metrics'],
      color: 'terracotta'
    },
    {
      letter: 'N',
      title: 'Innovation & Research',
      description: 'Fostering research collaboration and innovation in network technologies and services.',
      modules: ['Research Networking', 'Innovation Labs', 'Technology Transfer', 'R&D Partnerships'],
      color: 'gold'
    },
    {
      letter: 'P',
      title: 'Industry Partnership',
      description: 'Building strategic relationships with technology providers and industry stakeholders.',
      modules: ['Vendor Relations', 'Procurement Strategies', 'Technology Roadmapping', 'Industry Collaboration'],
      color: 'gold'
    },
    {
      letter: 'S',
      title: 'Sustainability Planning',
      description: 'Developing long-term financial and operational sustainability strategies for NRENs.',
      modules: ['Business Models', 'Funding Strategies', 'Cost Optimization', 'Impact Assessment'],
      color: 'gold'
    }
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-earth-deep text-white px-14 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-bold text-xs uppercase tracking-widest text-terracotta mb-3">
            The Model
          </div>
          <h1 className="font-bold text-4xl lg:text-5xl text-white mb-6">
            The <em className="text-gold not-italic">ATI-6</em> Framework
          </h1>
          <p className="text-sand text-lg leading-relaxed max-w-3xl mx-auto">
            A comprehensive, pan-African architecture for sustainable digital growth. ATI-6 addresses the holistic needs of Research & Education Networks through six strategic pillars.
          </p>
        </div>
      </section>

      {/* ATI-6 Framework Details */}
      <section className="bg-cream px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ati6Pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl bg-${pillar.color}`}>
                    {pillar.letter}
                  </div>
                  <h3 className="font-bold text-xl text-earth-deep">{pillar.title}</h3>
                </div>
                <p className="text-text-mid leading-relaxed mb-6">{pillar.description}</p>
                <div>
                  <h4 className="font-semibold text-earth-deep mb-2 text-sm uppercase tracking-wide">Key Modules:</h4>
                  <ul className="space-y-1">
                    {pillar.modules.map((module, idx) => (
                      <li key={idx} className="text-sm text-text-muted flex items-center gap-2">
                        <span className="text-terracotta">•</span>
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Impact Section */}
       <section className="bg-earth-deep text-white px-14 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl lg:text-4xl text-white mb-6">
            Drive <em className="text-gold not-italic">Sovereignty</em> through Skill
          </h2>
          <p className="text-sand text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            The ATI-6 model is designed to grow local instructor pipelines, ensuring that expertise stays within Africa.
          </p>
          <Link href="/contact" className="bg-terracotta text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-ochre transition-colors inline-block focus:outline-none focus:ring-0 active:outline-none active:ring-0">
            Discuss Implementation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
