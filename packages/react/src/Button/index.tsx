/** @jsxImportSource @emotion/react */
import { forwardRef, FC, Ref } from "react";

import { BaseButton, BaseButtonProps } from "../BaseButton";

export type ButtonProps = BaseButtonProps;

export const Button: FC<ButtonProps> = forwardRef(
  (
    { children, themeKey = "buttons", ...props },
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <BaseButton ref={ref} themeKey={themeKey} {...props}>
        {children}
      </BaseButton>
    );
  }
);
