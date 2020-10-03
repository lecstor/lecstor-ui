import { css, jsx } from "@emotion/react";
import { FC } from 'react';
import {
  border,
  color,
  layout,
  space,
  BorderProps,
  SpaceProps,
  ColorStyleProps,
  LayoutProps,
  compose,
} from 'styled-system';

type SxFnProps = BorderProps &
  SpaceProps &
  ColorStyleProps &
  LayoutProps & { className?: string; as?: string };

export type BoxProps = SxFnProps;

export const Box: FC<BoxProps> = ({ children, className, as = 'div', ...props }) => {
  return jsx(as, {
    className,
    css: css(compose(border, color, layout, space)(props)),
    children,
  });
};
