import React, { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { CSSObject } from "@emotion/css";

import { theme as defaultTheme, Theme } from "@lecstor/ui-default-theme";

import { mergeTheme } from "./utils/mergeTheme";

export { useTheme } from "@emotion/react";

export type StylesObject = CSSObject;

type UIProviderProps = {
  theme?: Theme;
};

export const UIProvider: FC<UIProviderProps> = ({ children, theme }) => {
  const ourTheme = theme ? mergeTheme(defaultTheme, theme) : defaultTheme;
  return <ThemeProvider theme={ourTheme}>{children}</ThemeProvider>;
};
