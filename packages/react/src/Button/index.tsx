/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC, HTMLAttributes, ReactNode } from "react";

import { useThemePresets } from "../hooks/useThemePresets";

import { Box, BoxProps } from "../Box";

export type ButtonProps = BoxProps & {
  size?: string;
  variant?: string;
  themeKey?: "buttons" | "iconButtons";
  disabled?: boolean;
  groupPos?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  themeKey = "buttons",
  ...props
}) => {
  const presetStyles = useThemePresets(themeKey, {
    variant,
    size,
  });

  return (
    <Box as="button" css={presetStyles} {...props}>
      {children}
    </Box>
  );
};
