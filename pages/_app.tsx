import Head from "next/head";
import { CacheProvider, type EmotionCache } from "@emotion/react";

import type { AppProps } from "next/app";

import { ErrorBoundaryWrapper } from "@/hocs";
import { IPage } from "@/interfaces";
import Snack from "@/contexts/Snack";
import Setting from "@/contexts/Setting";
import { Layout } from "@/compositions";
import { createEmotionCache } from "@/utils";
import { SWR, ThemeProvider } from "@/contexts";

import "@/styles/global.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: IPage<[unknown]>;
}

export default function App(props: MyAppProps) {
  const { emotionCache = clientSideEmotionCache, pageProps, Component } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider>
        <ErrorBoundaryWrapper>
          <Snack>
            <SWR fallback={pageProps.fallback}>
              <Setting>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </Setting>
            </SWR>
          </Snack>
        </ErrorBoundaryWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}
