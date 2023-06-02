import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { Roboto } from 'next/font/google';

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
      </body>
    </html>
  );
}
