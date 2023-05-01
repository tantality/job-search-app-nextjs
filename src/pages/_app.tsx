import type { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/globals';
import { Header } from '@/components/header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />;
    </>
  );
}
