"use client";
import { Jura, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const juraFont = Jura({
  subsets: ["latin", "cyrillic"],
});

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E23239",
    },
  },
  typography: {
    fontFamily: juraFont.style.fontFamily,
  },
});

export default theme;
