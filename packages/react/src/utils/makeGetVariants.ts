import get from "lodash.get";
import { SystemStyleObject } from "@styled-system/css";

import { mergeTheme } from "./mergeTheme";

type ThemeVariantGetProps = {
  themeKey?: string;
  variants?: { [key: string]: string | undefined };
};

function makeGetVariants<Theme>({ themeKey, variants }: ThemeVariantGetProps) {
  return (theme: Theme): SystemStyleObject => {
    if (!themeKey) return {};
    const variantsKey = `${themeKey}.variants`;

    const { defaultProps, base } = get(theme, variantsKey) || {};

    if (defaultProps || variants) {
      const variantTypes = Object.keys({ ...defaultProps, ...variants });

      const variantsStyle = variantTypes.reduce((styles, look) => {
        const selectedPreset = variants?.[look] || defaultProps?.[look];
        if (!selectedPreset) return styles;
        const preset = get(theme, `${variantsKey}.${look}.${selectedPreset}`);
        return mergeTheme(styles, preset);
      }, base || {});

      return variantsStyle;
    }

    return {};
  };
}

export { makeGetVariants };
