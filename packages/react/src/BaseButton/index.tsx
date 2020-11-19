/** @jsx jsx */
import { jsx } from "@emotion/react";
import { forwardRef, FC, ReactNode } from "react";
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
} & React.ComponentPropsWithRef<"button">;

export const BaseButton: FC<ButtonProps> = forwardRef(
  (props, ref: React.Ref<HTMLButtonElement>) => {
    const forwardProps = handleStyleProps(props, {
      variantKeys: ["look", "size"],
      systemUtils: [space],
    });

    return <button ref={ref} {...forwardProps} />;
  }
);
