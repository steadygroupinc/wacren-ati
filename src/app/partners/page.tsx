import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Public, Handshake, TrendingUp, Work, AccountBalance, School, Sync } from '@mui/icons-material';

export const metadata = {
  title: 'Partners - Regional Collaborations | WACREN ATI',
  description: 'Discover our network of regional partners including WACREN, UbuntuNet Alliance, ASREN, and national research and education networks across Africa. Join our collaborative ecosystem.',
  openGraph: {
    title: 'Our Partnership Network | WACREN ATI',
    description: 'Collaborating with national and regional research networks to build a connected and capable Africa.',
  }
};

export default function PartnersPage() {
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
        "name": "Partners",
        "item": "https://ati.wacren.net/partners"
      }
    ]
  };

  const regionalPartners = [
    {
      name: 'WACREN',
      fullName: 'West and Central African Research and Education Network',
      region: 'West & Central Africa',
      description: 'Lead coordinating organization for ATI, providing strategic direction and regional coordination.',
      website: 'https://www.wacren.net',
      logo: <Public className="text-terracotta" />,
      type: 'Regional Organization'
    },
    {
      name: 'UbuntuNet Alliance',
      fullName: 'UbuntuNet Alliance for Research and Education Networking',
      region: 'Eastern & Southern Africa',
      description: 'Pioneering organization in research networking, providing technical expertise and capacity building.',
      website: 'https://www.ubuntunet.net',
      logo: <Handshake className="text-terracotta" />,
      type: 'Regional Organization'
    },
    {
      name: 'ASREN',
      fullName: 'Arab States Research and Education Network',
      region: 'Northern Africa',
      description: 'Connecting research and education communities across the Arab world with advanced networking.',
      website: 'https://www.asren.net/',
      logo: <Public className="text-terracotta" />,
      type: 'Regional Organization'
    }
  ];

  const nationalPartners = [
    {
      name: 'NgREN',
      country: 'Nigeria',
      description: 'Founding member of ATI, providing technical leadership and hosting expertise.',
      type: 'National NREN'
    },
    {
      name: 'KENET',
      country: 'Kenya',
      description: 'Leading research and education network in East Africa, contributing to regional connectivity.',
      type: 'National NREN'
    },
    {
      name: 'MAREN',
      country: 'Morocco',
      description: 'Advanced networking infrastructure supporting research and education in North Africa.',
      type: 'National NREN'
    },
    {
      name: 'RNU Tunis',
      country: 'Tunisia',
      description: 'National research network providing connectivity and services to academic institutions.',
      type: 'National NREN'
    },
    {
      name: 'RINAF',
      country: 'Algeria',
      description: 'Research and education network facilitating collaboration and knowledge sharing.',
      type: 'National NREN'
    },
    {
      name: 'SudREN',
      country: 'Sudan',
      description: 'National research network supporting scientific research and education.',
      type: 'National NREN'
    }
  ];

  const industryPartners = [
    {
      name: 'Cisco',
      type: 'Technology Partner',
      description: 'Providing networking equipment, training, and technical expertise for advanced network infrastructure.'
    },
    {
      name: 'Juniper Networks',
      type: 'Technology Partner',
      description: 'Supporting network automation, security solutions, and professional development programs.'
    },
    {
      name: 'Internet2',
      type: 'International Partner',
      description: 'Collaborating on global research networking standards and best practices.'
    },
    {
      name: 'GEANT',
      type: 'International Partner',
      description: 'Sharing expertise in research networking and participating in joint training initiatives.'
    }
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="fixed top-4 right-4 z-50 font-bold text-xs uppercase tracking-wide bg-ochre text-earth-deep px-3 py-1 rounded-sm">
        Partners
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="bg-earth-deep text-white px-14 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            Our Partners
          </div>
          <h1 className="font-bold font-bold text-4xl lg:text-5xl text-white mb-6">
            Building Together for <em className="text-gold not-italic">African Excellence</em>
          </h1>
          <p className="text-sand text-lg leading-relaxed max-w-3xl mx-auto">
            ATI operates through strategic partnerships with regional and national research networks, creating a collaborative ecosystem that spans the entire African continent.
          </p>
        </div>
      </section>

      {/* Regional Partners */}
      <section className="bg-cream px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Regional <em className="text-terracotta not-italic">Organizations</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed max-w-3xl mx-auto">
              Our core partners provide strategic direction, coordination, and regional expertise across Africa&apos;s research and education networking landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regionalPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{partner.logo}</div>
                  <h3 className="font-bold font-bold text-xl text-earth-deep mb-2">{partner.name}</h3>
                  <p className="text-xs text-terracotta font-semibold uppercase tracking-wide mb-3">{partner.type}</p>
                </div>

                <h4 className="font-semibold text-earth-deep mb-2">{partner.fullName}</h4>
                <p className="text-sm text-text-mid leading-relaxed mb-4">{partner.description}</p>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-muted">Region: <strong className="text-earth-deep">{partner.region}</strong></span>
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-ochre font-semibold focus:outline-none focus:ring-0 active:outline-none active:ring-0">
                    Visit →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Partners */}
      <section className="bg-white px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              National Networks
            </div>
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              National <em className="text-terracotta not-italic">Research Networks</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed max-w-3xl mx-auto">
              Our national partners form the backbone of Africa&apos;s research and education infrastructure, providing local expertise and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalPartners.map((partner, index) => (
              <div key={index} className="bg-cream-mid p-6 rounded-sm shadow-sm transition-all hover:shadow-xl">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold font-bold text-lg text-earth-deep">{partner.name}</h3>
                  <span className="text-xs bg-terracotta text-white px-2 py-1 rounded-sm font-semibold uppercase tracking-wide">
                    {partner.country}
                  </span>
                </div>

                <p className="text-xs text-terracotta font-semibold uppercase tracking-wide mb-2">{partner.type}</p>
                <p className="text-sm text-text-mid leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="bg-cream-mid px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              Industry Collaboration
            </div>
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Technology & <em className="text-terracotta not-italic">Industry Partners</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed max-w-3xl mx-auto">
              Strategic partnerships with leading technology companies and international organizations enhance our training programs and technical capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {partner.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold font-bold text-xl text-earth-deep">{partner.name}</h3>
                    <p className="text-xs text-terracotta font-semibold uppercase tracking-wide">{partner.type}</p>
                  </div>
                </div>
                <p className="text-text-mid leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-primary text-white px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-white mb-5">
              Partnership <em className="text-gold not-italic">Benefits</em>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              Our collaborative approach creates synergies that benefit all stakeholders in Africa&apos;s research and education ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center"><School className="text-gold text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-white mb-3">Enhanced Training</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                Access to diverse expertise and training resources from multiple organizations
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center"><Public className="text-gold text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-white mb-3">Regional Coverage</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                Comprehensive geographic reach across all African regions and countries
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center"><Sync className="text-gold text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-white mb-3">Knowledge Sharing</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                Cross-border collaboration and exchange of best practices and innovations
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center"><TrendingUp className="text-gold text-4xl" /></div>
              <h3 className="font-bold font-bold text-xl text-white mb-3">Scalability</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                Ability to scale programs and impact through coordinated regional efforts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="bg-white px-14 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-6">
            Become a <em className="text-terracotta not-italic">Partner</em>
          </h2>
          <p className="text-text-mid text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Join our growing network of partners committed to advancing research and education networking across Africa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-cream-mid p-6 rounded-sm">
                <div className="mb-3 flex justify-center"><AccountBalance className="text-earth-deep text-3xl" /></div>
                <h3 className="font-semibold text-earth-deep mb-2">Institutional Partner</h3>
                <p className="text-sm text-text-muted">Universities, research institutions, and government agencies</p>
              </div>

              <div className="bg-cream-mid p-6 rounded-sm">
                <div className="mb-3 flex justify-center"><Work className="text-earth-deep text-3xl" /></div>
                <h3 className="font-semibold text-earth-deep mb-2">Industry Partner</h3>
                <p className="text-sm text-text-muted">Technology companies and service providers</p>
              </div>

              <div className="bg-cream-mid p-6 rounded-sm">
                <div className="mb-3 flex justify-center"><Public className="text-earth-deep text-3xl" /></div>
                <h3 className="font-semibold text-earth-deep mb-2">Regional Partner</h3>
                <p className="text-sm text-text-muted">NRENs, NOGs, and regional research organizations</p>
              </div>
            </div>

          <Link href="/contact" className="bg-primary text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-accent transition-colors inline-block focus:outline-none focus:ring-0 active:outline-none active:ring-0">
            Partner With Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
