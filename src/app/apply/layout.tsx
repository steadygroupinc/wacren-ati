import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply for Training | WACREN ATI',
  description: 'Join our comprehensive training programs. Apply now to build your technical and leadership capacity in the African research and education ecosystem.',
  openGraph: {
    title: 'Apply for ATI Training | WACREN Africa Training Initiative',
    description: 'Advance your career and institutional capacity through specialized ATI training programs.',
  }
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
