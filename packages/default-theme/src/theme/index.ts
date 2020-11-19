import { Theme as BaseTheme } from "styled-system";

import { buttons, Buttons } from "./buttons";
import { textInput, TextInput } from "./text-input";
import { colors } from "./colors";
import { iconButtons } from "./icon-buttons";

import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "./typography";
import { borderWidths, breakpoints, space, radii } from "./scales";
import { layout, Layout } from "./layout";

export type Theme = Omit<BaseTheme, "buttons"> & {
  buttons: Buttons;
  iconButtons: Buttons;
  layout: Layout;
  textInput: TextInput;
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
