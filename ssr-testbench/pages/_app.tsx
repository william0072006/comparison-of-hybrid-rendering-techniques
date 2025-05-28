import type { AppProps } from 'next/app';
import { Geist, Shrikhand } from 'next/font/google';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const shrikhand = Shrikhand({
  variable: '--font-shrikhand',
  subsets: ['latin'],
  weight: '400',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${geistSans.variable} ${shrikhand.variable} antialiased`}
    >
      <Component {...pageProps} />
    </main>
  );
}
