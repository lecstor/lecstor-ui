/** @jsx jsx */
import { jsx } from "@emotion/react";
import { forwardRef, FC, Ref } from "react";

import { BaseButton } from "../BaseButton";

type ButtonProps = React.ComponentProps<typeof BaseButton>;

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
