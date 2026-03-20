'use client';

import { useState } from 'react';

export default function ContactUI() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section className="px-8 lg:px-24 py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 pt-10">
            <h1 className="font-bold text-5xl lg:text-7xl text-earth-deep mb-10 tracking-tight text-balance">
              Get in <em className="text-terracotta not-italic font-black">touch</em>
            </h1>
            
            <p className="text-text-mid text-lg lg:text-xl leading-relaxed mb-16 max-w-md font-medium">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="font-bold text-2xl text-earth-deep mb-2">Accra, Ghana</h3>
                <p className="text-text-muted text-base mb-6 font-medium">
                  West and Central African Research and Education Network
                </p>
                
                <div className="space-y-5 text-sm font-bold uppercase tracking-wide">
                  <div className="flex items-start gap-4">
                    <span className="text-earth-deep w-24 flex-shrink-0">Address:</span>
                    <a href="https://www.google.com/maps?sca_esv=df890eccffbfa804&aep=1&prmd=ivns&sxsrf=ANbL-n6VizXt2phx2HBO7wpgIw0HEcgfPA:1773331859691&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-R5R-93bnJN-gfJetFY0A5M6NANLPFEQzj1dcFq3LKKBXHVoOgyWf6JqUwGOohIri1ZbKlIdZIYLCoWCcgdvvLUCGHg9yRK_YDxJ9L6Z2ZB_2aQaHCOnhTyYCnPFqsoOfSnoVwLX5ZQJDHa7zyZ3qmdVvO99Q&biw=1536&bih=742&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=gh&sa=X&geocode=KZfUp8nwm98PMY5U-qS4GZJg&daddr=VCG+Office+Complex,+IPS+Rd,+Accra" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline decoration-ochre underline-offset-4 decoration-2">
                      VCG Office Complex, IPS Rd, Accra
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-earth-deep w-24 flex-shrink-0">Phone:</span>
                    {showPhone ? (
                      <a href="tel:0302942873" className="text-terracotta hover:text-ochre transition-colors lowercase font-black tracking-widest bg-terracotta/5 px-3 py-1 rounded-sm border border-terracotta/10">
                        030 294 2873
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowPhone(true)}
                        className="bg-terracotta/5 text-terracotta px-4 py-2 rounded-sm text-[10px] tracking-[0.2em] hover:bg-terracotta hover:text-white transition-all focus:outline-none focus:ring-0 active:outline-none active:ring-0 font-black uppercase shadow-sm"
                      >
                        Click to view phone
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-earth-deep w-24 flex-shrink-0">Email:</span>
                    {showEmail ? (
                      <a 
                        href={`mailto:${['ati', 'wacren.net'].join('@')}`} 
                        className="text-terracotta hover:text-ochre transition-colors lowercase font-black tracking-widest bg-terracotta/5 px-3 py-1 rounded-sm border border-terracotta/10"
                      >
                        {['ati', 'wacren.net'].join('@')}
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowEmail(true)}
                        className="bg-terracotta/5 text-terracotta px-4 py-2 rounded-sm text-[10px] tracking-[0.2em] hover:bg-terracotta hover:text-white transition-all focus:outline-none focus:ring-0 active:outline-none active:ring-0 font-black uppercase shadow-sm"
                      >
                        Click to reveal email
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form Card */}
          <div className="lg:col-span-7 bg-white p-12 lg:p-20 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.12)] rounded-sm border-t-8 border-terracotta w-full">
            <form className="space-y-8 h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.2em] text-earth-deep">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Jane Smith"
                    className="w-full bg-cream-mid/30 px-6 py-5 text-earth-deep text-base rounded-sm transition-all focus:bg-white focus:shadow-inner focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.2em] text-earth-deep">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="jane@company.com"
                    className="w-full bg-cream-mid/30 px-6 py-5 text-earth-deep text-base rounded-sm transition-all focus:bg-white focus:shadow-inner focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.2em] text-earth-deep">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 555-1234"
                    className="w-full bg-cream-mid/30 px-6 py-5 text-earth-deep text-base rounded-sm transition-all focus:bg-white focus:shadow-inner focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-[0.2em] text-earth-deep">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Your Company"
                    className="w-full bg-cream-mid/30 px-6 py-5 text-earth-deep text-base rounded-sm transition-all focus:bg-white focus:shadow-inner focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.2em] text-earth-deep">Message</label>
                <textarea 
                  id="message" 
                  rows={8}
                  placeholder="Tell us about your project or how we can help you..."
                  className="w-full min-h-[250px] bg-cream-mid/30 px-6 py-5 text-earth-deep text-base rounded-sm transition-all focus:bg-white focus:shadow-inner focus:outline-none focus:ring-0"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-terracotta text-white py-6 text-sm font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-ochre transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-0 active:outline-none active:ring-0 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
