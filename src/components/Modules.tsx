import { Construction, Assignment, BarChart, Policy } from '@mui/icons-material';

export default function Modules() {
  const trainingTracks = [
    {
      name: 'Technical Track',
      icon: <Construction />,
      color: 'terracotta',
      modules: [
        {
          id: 'T1',
          title: 'Observability and Operations: Network Monitoring and Management (NMM)',
          description: 'Monitoring architectures, performance measurement, fault detection, incident workflows, and root-cause analysis. Hands-on with open-source tooling appropriate for NREN and campus networks.',
          status: 'Launching WACREN 2026',
          isActive: true
        },
        {
          id: 'T2',
          title: 'Routing, Peering and Resilience: BGP and IXP Operations',
          description: 'BGP fundamentals and advanced configurations, IXP integration, peering strategies, and building resilient multi-path routing architectures for growing NREN infrastructure.',
          status: 'Planned: Post-2026'
        },
        {
          id: 'T3',
          title: 'Security Operations Foundations: Monitoring to Response and CSIRT Readiness',
          description: 'Building on NMM baseline and TrustBroker Africa linkages: incident response workflows, threat detection, CSIRT establishment and operations for African RENs and universities.',
          status: 'Planned: Post-2026'
        },
        {
          id: 'T4',
          title: 'Trust and Identity Operations: eduroam, Federation and IAM',
          description: "Operational readiness for eduroam and identity federation services, IAM basics, and building trust infrastructure that connects Africa's research and education communities globally.",
          status: 'Planned: Post-2026'
        },
        {
          id: 'T5',
          title: 'Automation and Reliability: NetDevOps and Config Management',
          description: 'Network automation tooling, configuration management, telemetry pipelines, and NetDevOps workflows that keep expanding NREN networks stable and manageable at scale.',
          status: 'Planned: Post-2026'
        }
      ]
    },
    {
      name: 'Administration Track',
      icon: <Assignment />,
      color: 'ochre',
      modules: [
        {
          id: 'A1',
          title: 'NREN Service Management & Delivery',
          description: 'Frameworks for managing NREN service portfolios, defining service levels, handling member relations, and building operational processes that scale with growing network organisations.',
          status: 'Under Design'
        },
        {
          id: 'A2',
          title: 'Programme & Project Administration for Research Networks',
          description: 'Practical project administration skills for NREN and HEI staff managing capacity-building programmes, donor-funded projects, and multi-stakeholder initiatives.',
          status: 'Under Design'
        }
      ]
    },
    {
      name: 'Business Management Track',
      icon: <BarChart />,
      color: 'ochre',
      modules: [
        {
          id: 'B1',
          title: 'Financial Management & Sustainability for NRENs',
          description: 'Budgeting, cost-recovery models, financial reporting, and strategies for building long-term financial sustainability in NRENs operating in diverse African funding environments.',
          status: 'Under Design'
        },
        {
          id: 'B2',
          title: 'Business Model Design & Service Strategy',
          description: 'Tools and frameworks for designing sustainable NREN and HEI digital service offerings, from membership models to commercial service strategies that support research and education missions.',
          status: 'Under Design'
        }
      ]
    },
    {
      name: 'Governance Track',
      icon: <Policy />,
      color: 'text-muted',
      modules: [
        {
          id: 'G1',
          title: 'NREN Governance Foundations: Board Leadership and Oversight',
          description: 'Governance structures, board responsibilities, accountability frameworks, and leadership practices for those who direct and oversee African NRENs and associated digital infrastructure organisations.',
          status: 'Under Design'
        },
        {
          id: 'G2',
          title: 'Policy, Advocacy & Regulatory Engagement',
          description: 'Understanding the policy landscape, engaging national and regional regulators, advocating for enabling environments for NRENs, and participating effectively in international REN governance bodies.',
          status: 'Under Design'
        }
      ]
    }
  ];

  return (
    <section className="bg-cream px-14 py-24" id="programs">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12">
          <div>
            <div className="font-bold text-xs uppercase tracking-widest text-terracotta mb-3">
              Training Programmes
            </div>
            <h2 className="font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Programmes Across<br />All <em className="text-terracotta not-italic">Tracks & Audiences</em>.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-text-mid text-base leading-relaxed">
              ATI programmes span technical operations, administration, business management, and governance, designed for NRENs, network operators, and the broader technical and leadership communities of higher education and research institutions. Modules are self-contained yet stackable, delivered through NREN, NOG, and university partnerships.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {trainingTracks.map((track, trackIndex) => (
            <div key={trackIndex}>
              {/* Track Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-[10px] font-bold tracking-widest uppercase text-${track.color} whitespace-nowrap flex items-center gap-2`}>
                  <span className="text-xs">{track.icon}</span> {track.name}
                </span>
                <div className={`flex-1 h-px bg-${track.color} opacity-25`}></div>
              </div>

              {/* Module List */}
              <div className="space-y-0">
                {track.modules.map((module, modIndex) => (
                  <div key={modIndex} className="grid grid-cols-[56px_1fr] gap-0 py-6 group cursor-default">
                    <div className="text-xs font-bold text-terracotta pt-1">
                      {module.id}
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-earth-deep mb-1 transition-colors">
                        {module.title}
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed mb-3">
                        {module.description}
                      </p>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm transition-colors ${
                        module.isActive
                        ? 'bg-terracotta/10 text-terracotta'
                        : 'bg-cream-mid text-text-muted ring-1 ring-sand/30'
                      }`}>
                        {module.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
