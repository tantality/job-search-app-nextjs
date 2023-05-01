import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { GlobalStyles } from '@/styles/globals';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />;
    </div>
  );
}
