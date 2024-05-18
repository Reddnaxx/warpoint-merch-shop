import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
