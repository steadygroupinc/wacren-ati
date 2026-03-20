import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CalendarToday, Computer, Public, MenuBook, Handshake } from '@mui/icons-material';

export const metadata = {
  title: 'Training Programs - ATI-6 Framework | WACREN',
  description: 'Explore the ATI-6 comprehensive training framework covering network operations, cybersecurity, leadership, and innovation for African research and education networks.',
  openGraph: {
    title: 'Specialized Training Programs | WACREN ATI',
    description: 'Advance your skills in network management, cybersecurity, and leadership with our expert-led courses.',
  }
};

export default function TrainingPage() {
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
        "name": "Training",
        "item": "https://ati.wacren.net/training"
      }
    ]
  };

  const coursesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Course",
        "position": 1,
        "name": "Network Management Masterclass",
        "description": "Intensive training for senior network engineers and IT managers focusing on advanced network architecture and operations.",
        "provider": {
          "@type": "Organization",
          "name": "WACREN ATI"
        }
      },
      {
        "@type": "Course",
        "position": 2,
        "name": "Cybersecurity for Research Networks",
        "description": "Comprehensive security frameworks and incident response strategies tailored for research and education environments.",
        "provider": {
          "@type": "Organization",
          "name": "WACREN ATI"
        }
      }
    ]
  };

  const trainingPrograms = [
    {
      title: 'Network Management Masterclass',
      duration: '3 Days',
      level: 'Advanced',
      description: 'Intensive training for senior network engineers and IT managers focusing on advanced network architecture and operations.',
      topics: ['Advanced Routing & Switching', 'Network Security', 'Service Management', 'Leadership Skills']
    },
    {
      title: 'Cybersecurity for Research Networks',
      duration: '2 Days',
      level: 'Intermediate',
      description: 'Comprehensive security frameworks and incident response strategies tailored for research and education environments.',
      topics: ['Threat Analysis', 'Incident Response', 'Compliance Frameworks', 'Security Operations']
    },
    {
      title: 'Leadership & Governance',
      duration: '2 Days',
      level: 'Executive',
      description: 'Strategic leadership and governance training for NREN executives and senior management.',
      topics: ['Strategic Planning', 'Governance Models', 'Team Leadership', 'Change Management']
    },
    {
      title: 'Cloud & Emerging Technologies',
      duration: '3 Days',
      level: 'Intermediate',
      description: 'Modern cloud technologies, SDN/NFV, and emerging networking paradigms for research infrastructure.',
      topics: ['Cloud Architecture', 'SDN/NFV', 'Edge Computing', 'AI/ML in Networking']
    }
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesStructuredData) }}
      />
      <div className="fixed top-4 right-4 z-50 font-bold text-xs uppercase tracking-wide bg-ochre text-earth-deep px-3 py-1 rounded-sm">
        Training
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="bg-earth-deep text-white px-14 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            ATI-6 Framework
          </div>
          <h1 className="font-bold text-4xl lg:text-5xl text-white mb-6">
            Comprehensive <em className="text-gold not-italic">Training Programs</em>
          </h1>
          <p className="text-sand text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Our ATI-6 framework provides a structured approach to capacity building, combining technical excellence with leadership development and sustainable practices.
          </p>
          <Link href="/apply" className="bg-terracotta text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-ochre transition-colors inline-block focus:outline-none focus:ring-0 active:outline-none active:ring-0">
            Apply for Training
          </Link>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-white px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              Current Programs
            </div>
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Featured <em className="text-terracotta not-italic">Training Courses</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed max-w-3xl mx-auto">
              Specialized training programs designed to meet the diverse needs of network operators, managers, and technical professionals across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-cream-mid p-8 rounded-sm shadow-sm transition-all hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold font-bold text-xl text-earth-deep">{program.title}</h3>
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-sm ${
                    program.level === 'Advanced' ? 'bg-terracotta text-white' :
                    program.level === 'Intermediate' ? 'bg-ochre text-earth-deep' :
                    'bg-gold text-earth-deep'
                  }`}>
                    {program.level}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <CalendarToday className="text-text-muted" />
                  <span className="text-sm text-text-muted">{program.duration}</span>
                </div>

                <p className="text-text-mid leading-relaxed mb-6">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-earth-deep mb-2 text-sm uppercase tracking-wide">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.topics.map((topic, idx) => (
                      <span key={idx} className="bg-white text-xs font-medium px-3 py-1 rounded-sm shadow-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/apply" className="bg-terracotta text-white px-6 py-2 text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-ochre transition-colors inline-block focus:outline-none focus:ring-0 active:outline-none active:ring-0">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Delivery */}
      <section className="bg-cream-mid px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                Training Delivery
              </div>
              <h2 className="font-bold font-bold text-3xl text-earth-deep mb-6">
                Flexible, <em className="text-terracotta not-italic">Accessible Learning</em>
              </h2>
              <p className="text-text-mid text-base leading-relaxed mb-6">
                We understand the challenges of delivering training across a vast continent. Our programs are designed with flexibility and accessibility in mind.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1"><Computer /></div>
                  <div>
                    <h3 className="font-semibold text-earth-deep mb-1">Hybrid Delivery</h3>
                    <p className="text-sm text-text-muted">Combination of in-person and virtual training to maximize participation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1"><Handshake className="text-white" /></div>
                  <div>
                    <h3 className="font-semibold text-earth-deep mb-1">Regional Hubs</h3>
                    <p className="text-sm text-text-muted">Training centers across Africa for localized, contextual learning</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1"><MenuBook /></div>
                  <div>
                    <h3 className="font-semibold text-earth-deep mb-1">Self-Paced Learning</h3>
                    <p className="text-sm text-text-muted">Online modules and resources for continuous professional development</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1"><Handshake className="text-white" /></div>
                  <div>
                    <h3 className="font-semibold text-earth-deep mb-1">Mentorship Program</h3>
                    <p className="text-sm text-text-muted">Ongoing support and guidance from experienced network professionals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-6">Training Impact</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-text-mid">Technical Skills Improvement</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-sand rounded-full">
                      <div className="w-20 h-2 bg-terracotta rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-terracotta">83%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-mid">Career Advancement</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-sand rounded-full">
                      <div className="w-18 h-2 bg-terracotta rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-terracotta">75%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-mid">Institutional Impact</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-sand rounded-full">
                      <div className="w-16 h-2 bg-terracotta rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-terracotta">67%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-mid">Regional Collaboration</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-sand rounded-full">
                      <div className="w-22 h-2 bg-terracotta rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-terracotta">91%</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-text-muted mt-6 italic">
                Based on participant surveys and institutional assessments (2020-2025)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white px-14 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl lg:text-5xl text-white mb-6 tracking-tight">
            Ready to <em className="text-gold not-italic">Advance Your Career?</em>
          </h2>
          <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            Join hundreds of network professionals who have transformed their careers and organizations through ATI training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/apply" className="bg-gold text-earth-deep px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-0 active:outline-none active:ring-0">
              Apply Now
            </Link>
            <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white/20 hover:-translate-y-1 transition-all focus:outline-none focus:ring-0 active:outline-none active:ring-0">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
