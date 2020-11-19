/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC } from "react";

import { BaseButton, ButtonProps } from "../BaseButton";

export { ButtonProps };

export const Button: FC<ButtonProps> = ({
  children,
  themeKey = "buttons",
  ...props
}) => {
  return (
    <BaseButton themeKey={themeKey} {...props}>
      {children}
    </BaseButton>
  );
};
