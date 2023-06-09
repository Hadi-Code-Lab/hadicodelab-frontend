import './globals.css';

import { Roboto } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  fallback: ['arial'],
});

export const metadata = {
  title: 'Hadi Code Lab',
  description: 'A website to learn more about web development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} bg-neutralBg`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
