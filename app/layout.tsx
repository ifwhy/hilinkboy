import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hilink',
  description: 'Travel UI/UX App for Camping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body id='home' className='dark:bg-black selection:text-black selection:bg-green-50 selection:dark:text-black selection:dark:bg-green-50'>
        <Navbar />
        <main className="relative overflow-hidden selection:text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}