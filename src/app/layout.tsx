import { Jura } from "next/font/google";
import React, { ReactNode } from "react";
import "./globals.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/themes/dark.theme";
import localFont from "next/font/local";
import Header from "@/shared/components/header/header";
import { clsx } from "clsx";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Магазин мерча Warpoint',
}

const jediFont = localFont({
  src: "../../public/fonts/starjedi_cyrillic.otf",
  display: "swap",
  variable: "--jedi-font",
});

const juraFont = Jura({
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={clsx(juraFont.className, jediFont.variable)}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
