/** @jsxImportSource @emotion/react */
import { SystemStyleObject } from "@styled-system/css";
import {
  border,
  grid,
  layout,
  space as spaceUtil,
  BorderProps,
  GridProps,
  LayoutProps as SSLayoutProps,
  SpaceProps,
} from "styled-system";

import { FC, ReactNode } from "react";

import { handleStyleProps } from "../utils/handleStyleProps";

export type LayoutProps = BorderProps &
  GridProps &
  SpaceProps &
  SSLayoutProps & {
    look?: string;
    space?: "between" | "around";
    sx?: SystemStyleObject;
    children?: ReactNode;
  };

export const Layout: FC<LayoutProps> = (props) => {
  const forwardProps = handleStyleProps(props, {
    themeKey: "layout",
    variantKeys: ["look", "space"],
    systemUtils: [border, grid, layout, spaceUtil],
  });
  return <div {...forwardProps} />;
};
