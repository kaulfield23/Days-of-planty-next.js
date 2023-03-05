import IndexLayout from '@/layout';
import '@/styles/globals.css';
import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider theme={theme}>
      <IndexLayout>
        <Component {...pageProps} />
      </IndexLayout>
    </ThemeProvider>
  );
}
