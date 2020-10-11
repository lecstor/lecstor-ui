import { buttons, Buttons } from "./buttons";
import { textInput } from "./text-input";
import { colors, Colors } from "./colors";
import { iconButtons } from "./icon-buttons";

import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "./typography";
import { borderWidths, breakpoints, space, radii } from "./scales";
import { layout } from "./layout";

export type Theme = {
  borderWidths: typeof borderWidths;
  colors: Colors;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  letterSpacings: typeof letterSpacings;
  lineHeights: typeof lineHeights;
  breakpoints: typeof breakpoints;
  space: typeof space;
  radii: typeof radii;

  buttons: Buttons;
  iconButtons: typeof iconButtons;
  layout: typeof layout;
  textInput: typeof textInput;
};

export const theme: Theme = {
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  space,

  buttons,
  iconButtons,
  layout,
  textInput,
};
