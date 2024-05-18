import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ pageProps }: AppProps) {
  return <AppCacheProvider {...pageProps}></AppCacheProvider>;
}
