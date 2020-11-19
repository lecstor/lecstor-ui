import { SystemStyleObject } from "@styled-system/css";
import { compose, styleFn } from "styled-system";

import { cssFn } from "./cssFn";
import { getForwardProps } from "./getForwardProps";
import { mergeTheme } from "./mergeTheme";

type GetPropsOptions = {
  variantKeys?: string[];
  systemUtils?: styleFn[];
  themeKey?: string;
  baseStyle?: SystemStyleObject;
};

export function handleStyleProps(
  props: Record<string, any>,
  options?: GetPropsOptions
) {
  const { variantKeys, systemUtils, baseStyle } = options || {};
  const variants: Record<string, any> = {};
  variantKeys?.forEach((v: string) => (variants[v] = props[v]));

  let systemUtil;
  let forwardProps;

  if (systemUtils) {
    systemUtil = compose(...systemUtils);
    forwardProps = getForwardProps(systemUtil, props);
  }

  const styleFn = cssFn({
    themeKey: props.themeKey || options?.themeKey,
    variants,
    sx: baseStyle ? mergeTheme(baseStyle, props.sx) : props.sx,
    systemUtil,
    props,
  });
  return { css: styleFn, ...forwardProps };
}
