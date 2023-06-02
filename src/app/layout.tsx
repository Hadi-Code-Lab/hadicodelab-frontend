import './globals.css';
import { Roboto_Serif } from 'next/font/google';

const roboto_Serif = Roboto_Serif({
  subsets: ['latin'],
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
      <body className={roboto_Serif.className}>{children}</body>
    </html>
  );
}
