import { Public, Handshake, AccountBalance, Wifi, School } from '@mui/icons-material';

export default function Partners() {
  const partners = [
    { name: 'WACREN', role: 'Lead Organization', icon: <Public className="text-terracotta" /> },
    { name: 'UbuntuNet', role: 'Regional Partner', icon: <Handshake className="text-terracotta" /> },
    { name: 'ASREN', role: 'Continental Partner', icon: <Public className="text-terracotta" /> },
    { name: 'NgREN', role: 'Founding Member', icon: <AccountBalance className="text-terracotta" /> },
    { name: 'MAREN', role: 'Network Partner', icon: <Wifi className="text-terracotta" /> },
    { name: 'KENET', role: 'Education Partner', icon: <School className="text-terracotta" /> }
  ];

  return (
    <section className="bg-white px-14 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-20 items-center">
          <div>
            <div className="font-bold text-xs uppercase tracking-widest text-terracotta mb-3">
              Our Partners
            </div>
            <h2 className="font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Building Together for<br/>
              <em className="text-terracotta not-italic">African Excellence</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed mb-8">
              ATI operates through strategic partnerships with regional and national research and education networks across Africa, creating a collaborative ecosystem for capacity building.
            </p>

            <div className="text-xs text-text-muted uppercase tracking-wide">
              Under the auspices of
            </div>
            <div className="flex gap-3 mt-2">
              <span className="bg-terracotta/5 text-terracotta text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-sm">WACREN</span>
              <span className="bg-terracotta/5 text-terracotta text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-sm">UbuntuNet Alliance</span>
              <span className="bg-terracotta/5 text-terracotta text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-sm">ASREN</span>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="bg-cream-mid/30 rounded-sm p-6 text-center hover:bg-cream-mid/50 hover:shadow-xl transition-all cursor-pointer">
                  <div className="mb-3 flex justify-center">{partner.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-earth-deep mb-1">
                    {partner.name}
                  </div>
                  <div className="text-xs text-text-muted leading-relaxed">
                    {partner.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
