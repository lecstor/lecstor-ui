import css, {
  CSSObject,
  CssFunctionReturnType,
  SystemStyleObject,
  Theme,
} from "@styled-system/css";
import { styleFn } from "styled-system";

import { makeGetVariants } from "./makeGetVariants";
import { mergeTheme } from "./mergeTheme";

type CssFnProps = {
  sx?: SystemStyleObject;
  themeKey?: string;
  variants: { [key: string]: string | undefined };
  systemUtil?: styleFn;
  props?: Record<string, unknown>;
};

export function cssFn({
  sx,
  themeKey,
  variants,
  systemUtil,
  props = {},
}: CssFnProps): CssFunctionReturnType {
  const getVariants = variants
    ? makeGetVariants({ themeKey, variants })
    : undefined;

  return (theme?: Theme | { theme: Theme }): CSSObject => {
    let style = systemUtil ? systemUtil({ theme, ...props }) : {};

    if (sx) {
      style = mergeTheme<SystemStyleObject>(css(sx)(theme), style);
    }

    if (getVariants) {
      const variantsStyle = getVariants(theme);
      style = mergeTheme<SystemStyleObject>(css(variantsStyle)(theme), style);
    }

    return style;
  };
}
