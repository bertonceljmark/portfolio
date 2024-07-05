"use client";
import { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
//@ts-ignore
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
//@ts-ignore
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { styleReset } from "react95";

const StyleProvider = ({ children }: { children: ReactNode }) => {
  const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>{children}</ThemeProvider>
    </>
  );
};

export default StyleProvider;
