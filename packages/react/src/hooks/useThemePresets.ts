import get from "lodash.get";
import css from "@styled-system/css";

import { useTheme } from "@emotion/react";
import { mergeTheme } from "../utils/mergeTheme";

export const useThemePresets = (
  themeKey: string,
  selectedPresets: { [key: string]: any },
  customStyle?: { [key: string]: any }
) => {
  const theme = useTheme();

  console.log({ theme, themeKey });
  const { defaultProps, defaultStyle } = get(theme, themeKey);

  if (defaultProps || selectedPresets) {
    const presetTypes = Object.keys({ ...defaultProps, ...selectedPresets });

    const presetsStyle = presetTypes.reduce((styles, type) => {
      const selectedPreset = selectedPresets?.[type] || defaultProps?.[type];
      if (!selectedPreset) return styles;
      console.log("preset", `${themeKey}.${type}.${selectedPreset}`);
      const preset = get(theme, `${themeKey}.${type}.${selectedPreset}`);
      styles = mergeTheme(styles, preset);
      return styles;
    }, defaultStyle || {});

    const style = customStyle
      ? mergeTheme(presetsStyle, customStyle)
      : presetsStyle;

    // run styles from theme through styled-system `css` to convert any remaining
    // theme property references or handle responsive values
    return css(style)(theme) as any; // TODO: fix any - maybe wait until we're not using a beta emotion
  } else {
    if (defaultStyle && customStyle) {
      return mergeTheme(defaultStyle, customStyle);
    }
    return defaultStyle || customStyle || {};
  }
};
