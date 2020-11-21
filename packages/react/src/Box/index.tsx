/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FC, HTMLAttributes } from "react";
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  BorderProps,
  FlexboxProps,
  SpaceProps,
  ColorStyleProps,
  LayoutProps,
  TypographyProps,
} from "styled-system";

import { handleStyleProps } from "../utils/handleStyleProps";

type SxFnProps = BorderProps &
  FlexboxProps &
  SpaceProps &
  ColorStyleProps &
  LayoutProps &
  TypographyProps &
  HTMLAttributes<HTMLElement> & { className?: string; as?: string };

export type BoxProps = SxFnProps;

export const Box: FC<BoxProps> = ({ as = "div", ...props }) => {
  const forwardProps = handleStyleProps(props, {
    variantKeys: ["look", "size"],
    systemUtils: [border, color, flexbox, layout, space, typography],
    baseStyle: {
      boxSizing: "border-box",
      minWidth: 0,
    },
  });

  return jsx(as, forwardProps);
};
