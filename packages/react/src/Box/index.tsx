/** @jsx jsx */
import { jsx } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import { FC } from "react";
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
  compose,
} from "styled-system";

function filterProps(props: any) {
  const htmlProps: Record<string, string> = {};
  Object.keys(props).forEach((p) => {
    if (isPropValid(p)) {
      htmlProps[p] = props[p];
    }
  });
  return htmlProps;
}

type SxFnProps = BorderProps &
  FlexboxProps &
  SpaceProps &
  ColorStyleProps &
  LayoutProps &
  TypographyProps & { className?: string; as?: string };

export type BoxProps = SxFnProps;

export const Box: FC<BoxProps> = ({
  children,
  className,
  as = "div",
  ...props
}) => {
  return jsx(as, {
    className,
    css: (theme: any) =>
      compose(
        () => ({
          boxSizing: "border-box",
          minWidth: 0,
        }),
        border,
        color,
        flexbox,
        layout,
        space,
        typography
      )({ theme, ...props }),
    ...filterProps(props),
    children,
  });
};
