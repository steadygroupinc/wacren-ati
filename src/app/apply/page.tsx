'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { submitApplication } from './actions';

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    country: '',
    position: '',
    experience: '',
    trainingInterest: '',
    motivation: '',
    specialRequirements: '',
    website: '' // Honeypot
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value as string);
    });

    const result = await submitApplication(data);
    setSubmitResult(result);
    setIsSubmitting(false);

    if (result.success) {
      // Clear form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        country: '',
        position: '',
        experience: '',
        trainingInterest: '',
        motivation: '',
        specialRequirements: '',
        website: ''
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const trainingPrograms = [
    'Network Management Masterclass',
    'Cybersecurity for Research Networks',
    'Leadership & Governance',
    'Cloud & Emerging Technologies',
    'ATI-6 Comprehensive Program',
    'Custom Training Program'
  ];

  const countries = [
    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi',
    'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros',
    'Congo', 'Côte d\'Ivoire', 'Djibouti', 'Egypt', 'Equatorial Guinea',
    'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea',
    'Guinea-Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar',
    'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique',
    'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'São Tomé and Príncipe',
    'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa',
    'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda',
    'Zambia', 'Zimbabwe'
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 font-bold text-xs font-bold uppercase tracking-wide bg-ochre text-earth-deep px-3 py-1 rounded-sm">
        Apply
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="bg-earth-deep text-white px-14 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-bold text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            Training Application
          </div>
          <h1 className="font-bold font-bold text-4xl lg:text-5xl text-white mb-6">
            Apply for <em className="text-gold not-italic">ATI Training</em>
          </h1>
          <p className="text-sand text-lg leading-relaxed max-w-3xl mx-auto">
            Take the next step in your professional development. Join our comprehensive training programs designed to build capacity across Africa&apos;s research and education networks.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-cream px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Application <em className="text-terracotta not-italic">Process</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed max-w-3xl mx-auto">
              Our selection process ensures that participants receive maximum benefit from their training experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold font-bold text-lg text-earth-deep mb-2">Submit Application</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Complete the application form with your background and training interests
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold font-bold text-lg text-earth-deep mb-2">Review Process</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Applications are reviewed by our selection committee within 2-3 weeks
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold font-bold text-lg text-earth-deep mb-2">Selection Notification</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Successful applicants receive notification and preparation materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold font-bold text-lg text-earth-deep mb-2">Training Begins</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Join your cohort for an intensive, transformative learning experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-white px-14 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold font-bold text-3xl lg:text-4xl text-earth-deep mb-5">
              Application <em className="text-terracotta not-italic">Form</em>
            </h2>
            <p className="text-text-mid text-base leading-relaxed">
              Please provide detailed information to help us assess your suitability for our training programs.
            </p>
          </div>

          {submitResult && (
            <div className={`mb-8 p-6 rounded-sm text-center font-bold uppercase tracking-widest text-sm ${submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitResult.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-cream-mid p-8 rounded-sm shadow-sm">
            {/* Honeypot field (hidden) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-6 bg-sand/20 px-4 py-2 rounded-sm">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-earth-deep mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-earth-deep mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-semibold text-earth-deep mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8">
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-6 bg-sand/20 px-4 py-2 rounded-sm">
                Professional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-earth-deep mb-2">
                    Organization/Institution *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                    placeholder="University, NREN, or Company name"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-earth-deep mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="position" className="block text-sm font-semibold text-earth-deep mb-2">
                  Current Position/Title *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                  placeholder="e.g., Network Engineer, IT Manager, Researcher"
                />
              </div>
            </div>

            {/* Training Information */}
            <div className="mb-8">
              <h3 className="font-bold font-bold text-xl text-earth-deep mb-6 bg-sand/20 px-4 py-2 rounded-sm">
                Training Information
              </h3>

              <div className="mb-6">
                <label htmlFor="trainingInterest" className="block text-sm font-semibold text-earth-deep mb-2">
                  Training Program of Interest *
                </label>
                <select
                  id="trainingInterest"
                  name="trainingInterest"
                  required
                  value={formData.trainingInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                >
                  <option value="">Select a training program</option>
                  {trainingPrograms.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-semibold text-earth-deep mb-2">
                  Years of Experience in Networking/IT *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all"
                >
                  <option value="">Select experience level</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="motivation" className="block text-sm font-semibold text-earth-deep mb-2">
                  Motivation for Applying *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all resize-vertical"
                  placeholder="Please describe why you want to participate in this training program and how it will benefit your work and organization..."
                />
              </div>

              <div>
                <label htmlFor="specialRequirements" className="block text-sm font-semibold text-earth-deep mb-2">
                  Special Requirements or Accommodations
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white shadow-sm rounded-sm focus:bg-white focus:outline-none transition-all resize-vertical"
                  placeholder="Any special dietary requirements, accessibility needs, or other accommodations we should be aware of..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-terracotta text-white px-12 py-4 text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-ochre transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
              <p className="text-xs text-text-muted mt-4">
                By submitting this application, you agree to our terms and conditions.
                We will process your information in accordance with our privacy policy.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream-mid px-14 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold font-bold text-3xl text-earth-deep mb-5">
              Frequently Asked <em className="text-terracotta not-italic">Questions</em>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="font-semibold text-earth-deep mb-2">Who is eligible to apply?</h3>
              <p className="text-sm text-text-mid">
                Professionals working in research and education networks, universities, government agencies, and related organizations across Africa are eligible to apply.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="font-semibold text-earth-deep mb-2">Is there a fee for the training?</h3>
              <p className="text-sm text-text-mid">
                Training fees vary by program. Many programs are offered at reduced rates or free of charge for participants from developing countries, with funding from our partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="font-semibold text-earth-deep mb-2">What is the selection criteria?</h3>
              <p className="text-sm text-text-mid">
                We consider professional experience, organizational impact potential, geographic diversity, and commitment to applying learned skills in your work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="font-semibold text-earth-deep mb-2">Can I apply for multiple programs?</h3>
              <p className="text-sm text-text-mid">
                Yes, you may apply for multiple programs. However, we recommend focusing on one program that best matches your current needs and career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
