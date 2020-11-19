/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC, HTMLAttributes, ReactNode } from "react";
import { SystemStyleObject } from "@styled-system/css";
import { space, SpaceProps } from "styled-system";

import { handleStyleProps } from "../utils/handleStyleProps";

export type ButtonProps = SpaceProps & {
  size?: string;
  look?: string;
  sx?: SystemStyleObject;
  themeKey?: "buttons" | "iconButtons";
  disabled?: boolean;
  groupPos?: string;
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<ButtonProps> = (props) => {
  const forwardProps = handleStyleProps(props, {
    variantKeys: ["look", "size"],
    systemUtils: [space],
  });

  return <button {...forwardProps} />;
};
