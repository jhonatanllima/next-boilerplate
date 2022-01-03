import { useState, useEffect } from 'react';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProps } from '~/types/theme';

import GlobalStyles from '~/styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeProps>(darkTheme);

  const date = new Date();
  const hour = date.getHours();

  useEffect(() => {
    if (hour > 6 && hour <= 18) {
      setTheme(lightTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [hour]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>FAÇO FESTA!</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="Faço Festa é criado e pensado para democratizar a forma de fazer festa! Feito para estudo e possivelmente pode se tornar uma startup"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
