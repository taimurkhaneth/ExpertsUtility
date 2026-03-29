import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ExpertsUtility | UK Business Energy, Water & Finance Consultancy',
  description:
    'ExpertsUtility helps UK businesses reduce energy costs, optimise water contracts, access business finance, and implement payment solutions — all under one trusted consultancy.',
  keywords:
    'business energy consultancy UK, reduce electricity costs, business water contracts, business finance UK, card machines, payment solutions',
  metadataBase: new URL('https://expertsutility.com'),
  openGraph: {
    title: 'ExpertsUtility | UK Business Consultancy',
    description:
      'Save money on energy, water, payments and finance for your UK business.',
    url: 'https://expertsutility.com',
    siteName: 'ExpertsUtility',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpertsUtility | UK Business Consultancy',
    description: 'Save money on energy, water, payments and finance for your UK business.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
