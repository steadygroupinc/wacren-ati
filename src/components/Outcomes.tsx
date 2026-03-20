export default function Outcomes() {
  const outcomes = [
    {
      phase: 'Phase 1',
      number: '500',
      label: 'Professionals Trained',
      text: 'Technical experts, managers, and leaders equipped with advanced skills',
      color: 'terracotta'
    },
    {
      phase: 'Phase 2',
      number: '15',
      label: 'Countries Impacted',
      text: 'African nations with strengthened research and education infrastructure',
      color: 'teal'
    },
    {
      phase: 'Phase 3',
      number: '25',
      label: 'Institutions Supported',
      text: 'Universities and research organizations with enhanced capabilities',
      color: 'gold'
    },
    {
      phase: 'Phase 4',
      number: '8',
      label: 'Years of Excellence',
      text: 'Continuous capacity building and knowledge transfer since 2014',
      color: 'terracotta'
    },
    {
      phase: 'Phase 5',
      number: '12',
      label: 'Regional Partnerships',
      text: 'Collaborative networks spanning the African research ecosystem',
      color: 'teal'
    },
    {
      phase: 'Phase 6',
      number: '95',
      label: 'Success Rate',
      text: 'Participants report significant improvements in their organizations',
      color: 'gold'
    }
  ];

  return (
    <section className="bg-cream-mid px-14 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="font-bold text-xs uppercase tracking-widest text-terracotta mb-3">
              Impact & Results
            </div>
            <h2 className="font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Measurable <em className="text-terracotta not-italic">Outcomes</em> Across Africa
            </h2>
          </div>
          <div>
            <p className="text-text-mid text-base leading-relaxed">
              Since 2014, ATI has delivered tangible results through systematic capacity building, creating a sustainable foundation for Africa&apos;s research and education networks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white p-7 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <div className="font-bold text-xs uppercase tracking-wide text-text-muted mb-3">
                {outcome.phase}
              </div>
              <div className={`font-bold text-4xl text-${outcome.color} leading-none mb-1`}>
                {outcome.number}{outcome.number !== '95' ? '+' : '%'}
              </div>
              <div className="text-sm font-semibold text-earth-deep mb-2 uppercase tracking-wide">
                {outcome.label}
              </div>
              <div className="text-sm text-text-muted leading-relaxed">
                {outcome.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
