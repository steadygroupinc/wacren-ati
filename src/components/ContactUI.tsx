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
          <div className="lg:col-span-5 pt-0 md:pt-10">
            <h1 className="font-serif text-[38px] lg:text-[72px] font-normal leading-[1.1] text-text-main mb-6 md:mb-10 tracking-tighter">
              Get in <em className="italic text-primary not-italic font-normal">touch</em>
            </h1>
            
            <p className="text-gray-500 text-lg lg:text-[20px] leading-[1.6] mb-16 max-w-md font-normal">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-[28px] font-normal text-text-main mb-4">Accra, Ghana</h3>
                <p className="text-gray-500 text-base mb-8 font-normal leading-relaxed">
                  West and Central African Research and Education Network (WACREN) Headquarters.
                </p>
                
                <div className="space-y-6 text-[13px] font-medium uppercase tracking-wider">
                  <div className="flex items-start gap-4">
                    <span className="text-primary w-24 flex-shrink-0 font-bold">Address:</span>
                    <a href="https://www.google.com/maps?sca_esv=df890eccffbfa804&aep=1&prmd=ivns&sxsrf=ANbL-n6VizXt2phx2HBO7wpgIw0HEcgfPA:1773331859691&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-R5R-93bnJN-gfJetFY0A5M6NANLPFEQzj1dcFq3LKKBXHVoOgyWf6JqUwGOohIri1ZbKlIdZIYLCoWCcgdvvLUCGHg9yRK_YDxJ9L6Z2ZB_2aQaHCOnhTyYCnPFqsoOfSnoVwLX5ZQJDHa7zyZ3qmdVvO99Q&biw=1536&bih=742&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=gh&sa=X&geocode=KZfUp8nwm98PMY5U-qS4GZJg&daddr=VCG+Office+Complex,+IPS+Rd,+Accra" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline underline-offset-4 decoration-primary/20 hover:decoration-accent/40">
                      VCG Office Complex, IPS Rd, Accra
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-primary w-24 flex-shrink-0 font-bold">Phone:</span>
                    {showPhone ? (
                      <a href="tel:0302942873" className="text-primary hover:text-accent transition-colors font-semibold tracking-wide bg-primary/5 px-3 py-1 rounded-[4px] border border-primary/10">
                        030 294 2873
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowPhone(true)}
                        className="bg-primary/5 text-primary px-4 py-2 rounded-[4px] text-[10px] tracking-[0.1em] hover:bg-primary hover:text-white transition-all font-bold uppercase shadow-sm"
                      >
                        Click to view phone
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-primary w-24 flex-shrink-0 font-bold">Email:</span>
                    {showEmail ? (
                      <a 
                        href={`mailto:${['ati', 'wacren.net'].join('@')}`} 
                        className="text-primary hover:text-accent transition-colors font-semibold tracking-wide bg-primary/5 px-3 py-1 rounded-[4px] border border-primary/10"
                      >
                        {['ati', 'wacren.net'].join('@')}
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowEmail(true)}
                        className="bg-primary/5 text-primary px-4 py-2 rounded-[4px] text-[10px] tracking-[0.1em] hover:bg-primary hover:text-white transition-all font-bold uppercase shadow-sm"
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
          <div className="lg:col-span-7 bg-white p-6 md:p-12 lg:p-20 shadow-[0_40px_120px_-20px_rgba(0,74,153,0.1)] rounded-[12px] border-t-8 border-primary w-full">
            <form className="space-y-8 h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Jane Smith"
                    className="w-full bg-bg-soft px-6 py-5 text-text-main text-base rounded-[6px] border border-gray-100 transition-all focus:bg-white focus:border-primary/30 focus:shadow-sm focus:outline-none"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="jane@company.com"
                    className="w-full bg-bg-soft px-6 py-5 text-text-main text-base rounded-[6px] border border-gray-100 transition-all focus:bg-white focus:border-primary/30 focus:shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+233 (0) ..."
                    className="w-full bg-bg-soft px-6 py-5 text-text-main text-base rounded-[6px] border border-gray-100 transition-all focus:bg-white focus:border-primary/30 focus:shadow-sm focus:outline-none"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="company" className="block text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500">Organization</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Organization Name"
                    className="w-full bg-bg-soft px-6 py-5 text-text-main text-base rounded-[6px] border border-gray-100 transition-all focus:bg-white focus:border-primary/30 focus:shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500">Message</label>
                <textarea 
                  id="message" 
                  rows={8}
                  placeholder="Tell us about your training or implementation needs..."
                  className="w-full min-h-[200px] bg-bg-soft px-6 py-5 text-text-main text-base rounded-[6px] border border-gray-100 transition-all focus:bg-white focus:border-primary/30 focus:shadow-sm focus:outline-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-6 text-[14px] font-bold uppercase tracking-[0.2em] rounded-[6px] hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1 focus:outline-none mt-4"
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
