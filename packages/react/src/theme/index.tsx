import React, { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { CSSObject } from "@emotion/css";

import { theme as defaultTheme, Theme } from "@lecstor/ui-default-theme";

import { mergeTheme } from "./mergeTheme";

export { useTheme } from "@emotion/react";
export * from "./useThemePresets";
export { mergeTheme };

export type StylesObject = CSSObject;

type DsProviderProps = {
  theme?: Theme;
};

export const DsProvider: FC<DsProviderProps> = ({ children, theme }) => {
  console.log({ defaultTheme });
  const ourTheme = theme ? mergeTheme(defaultTheme, theme) : defaultTheme;
  return <ThemeProvider theme={ourTheme}>{children}</ThemeProvider>;
};
