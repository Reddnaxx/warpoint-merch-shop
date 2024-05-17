import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { AppProps } from "next/app";

export default function MyApp({ pageProps }: AppProps) {
  return <AppCacheProvider {...pageProps} />;
}
