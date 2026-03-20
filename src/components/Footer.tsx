import Link from 'next/link';
import { FaLinkedinIn, FaBluesky, FaMastodon, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/west-and-central-african-research-and-education-network/", label: "LinkedIn" },
    { icon: <FaBluesky />, href: "https://bsky.app/profile/wacren.bsky.social", label: "BlueSky" },
    { icon: <FaMastodon />, href: "https://mastodon.social/@wacren", label: "Mastodon" },
    { icon: <FaXTwitter />, href: "https://twitter.com/wacren", label: "X (Twitter)" }
  ];

  return (
    <footer>
      <div className="kente-strip" />
      <div className="bg-earth-deep text-sand px-14 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
            
            {/* BRAND DESCRIPTION */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                <Link href="/" className="bg-white px-6 py-3 rounded-sm inline-flex items-center justify-center hover:bg-cream transition-all focus:outline-none focus:ring-0 active:outline-none active:ring-0">
                  <img 
                  src="/images/wacren-ati-logo.png" 
                  alt="WACREN ATI - Africa Training Initiative Logo" 
                  className="h-12 w-auto"
                />
                </Link>
              </div>
              
              <p className="text-sand/70 text-sm leading-relaxed max-w-sm mb-12 font-medium">
                A pan-African, community-driven capacity-building ecosystem, strengthening the technical skills, administrative capacity, business management, and governance of NRENs, network operators, and Africa&apos;s higher education and research institutions.
              </p>

              <div className="space-y-4 text-[10px] uppercase tracking-widest font-bold">
                <div className="text-white/40 mb-3">OPERATED UNDER THE AUSPICES OF</div>
                <Link 
                  href="https://www.wacren.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white/5 text-white/60 px-4 py-2 text-[9px] tracking-[0.3em] font-bold hover:bg-white/10 hover:text-gold transition-all duration-300 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                >
                  WACREN
                </Link>
              </div>
            </div>

            {/* NAVIGATION COLUMNS */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
              
              {/* PROGRAMME */}
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-8">PROGRAMME</h5>
                <ul className="space-y-5">
                  {[
                    { label: "About ATI", href: "/about" },
                    { label: "ATI-6 Model", href: "/ati-6" },
                    { label: "Technical Programmes", href: "/training" },
                    { label: "Admin & Management", href: "/training" },
                    { label: "Governance Track", href: "/training" }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-[13px] text-sand/60 hover:text-white transition-colors font-medium focus:outline-none focus:ring-0 active:outline-none active:ring-0">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AUDIENCES */}
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-8">AUDIENCES</h5>
                <ul className="space-y-5">
                  {[
                    { label: "NRENs", href: "/partners" },
                    { label: "Network Operators", href: "/partners" },
                    { label: "HEIs & Research Institutions", href: "/about" },
                    { label: "Alumni Network", href: "/about" },
                    { label: "Instructor Pathway", href: "/about" }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-[13px] text-sand/60 hover:text-white transition-colors font-medium focus:outline-none focus:ring-0 active:outline-none active:ring-0">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-8">RESOURCES</h5>
                <ul className="space-y-5">
                  {[
                    { label: "Programme Documents", href: "/about" },
                    { label: "Past Workshops", href: "/training" },
                    { label: "ATI History (2014)", href: "/about" },
                    { label: "AfricaConnect", href: "https://africaconnect3.net/" },
                    { label: "TrustBroker Africa", href: "https://trustbroker.africa/" }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-[13px] text-sand/60 hover:text-white transition-colors font-medium focus:outline-none focus:ring-0 active:outline-none active:ring-0">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <div className="h-px bg-white/10 w-full mb-10" />

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col gap-2">
              <div className="text-[10px] text-white/40 font-medium leading-relaxed max-w-xl italic">
                The Africa Training Initiative (ATI) Program is supported by the AfricaConnect Project, co-funded by the European Union through the Global Gateway Program.
              </div>
              <div className="text-[11px] text-white/30 font-medium tracking-wide">
                &copy; 2026 Africa Training Initiative, Operated under the auspices of WACREN
              </div>
            </div>

            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-sand/40 hover:text-gold hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                  aria-label={social.label}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
