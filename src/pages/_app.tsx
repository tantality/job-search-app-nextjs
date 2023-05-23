import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { GlobalStyles } from '@/styles/globals';
import { PageLayout } from '@/components/layouts/page-layout';
import { FavoriteVacanciesProvider } from '@/contexts/favorite-vacancies/provider';
import { mantineTheme } from '@/styles/mantine-theme';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={mantineTheme}>
      <FavoriteVacanciesProvider>
        <QueryClientProvider client={queryClient}>
          <div className={inter.className}>
            <GlobalStyles />
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </div>
        </QueryClientProvider>
      </FavoriteVacanciesProvider>
    </MantineProvider>
  );
}
