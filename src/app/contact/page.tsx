import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactUI from '@/components/ContactUI';

export const metadata = {
  title: 'Contact Us | WACREN ATI',
  description: 'Get in touch with the Africa Training Initiative team. Our headquarters is located in Accra, Ghana. Discuss training, partnerships, or implementation needs.',
  openGraph: {
    title: 'Contact WACREN ATI | Get in Touch',
    description: 'Reach out to the ATI team for inquiries regarding capacity building, training programs, and regional collaborations.',
  }
};

export default function ContactPage() {
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
        "name": "Contact Us",
        "item": "https://ati.wacren.net/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Navigation />
      <ContactUI />
      <Footer />
    </div>
  );
}
