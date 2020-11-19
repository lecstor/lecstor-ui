import React, { PropsWithChildren, ReactElement } from "react";
import { ThemeProvider } from "@emotion/react";
import { CSSObject } from "@emotion/css";

import {
  theme as defaultTheme,
  Theme as DefaultTheme,
} from "@lecstor/ui-default-theme";

import { mergeTheme } from "./utils/mergeTheme";

export { useTheme } from "@emotion/react";

export type StylesObject = CSSObject;

type UIProviderProps<Theme> = {
  theme?: Theme;
};

export function UIProvider<Theme extends DefaultTheme = DefaultTheme>({
  children,
  theme,
}: PropsWithChildren<UIProviderProps<Theme>>): ReactElement | null {
  const ourTheme = theme
    ? mergeTheme<Theme>(defaultTheme as Theme, theme)
    : defaultTheme;
  return <ThemeProvider theme={ourTheme}>{children}</ThemeProvider>;
}
