/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC, ReactNode } from "react";

import { useThemePresets } from "../hooks/useThemePresets";

import { Box, BoxProps } from "../Box";

export type LayoutProps = BoxProps & {
  variant?: string;
  gap?: number;
  space?: "between" | "around";
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  children,
  variant,
  space: spacing,
  gap,
  ...props
}) => {
  const customStyle = { gridGap: gap };
  const presetStyles = useThemePresets(
    "layout",
    {
      variant,
      space: spacing,
    },
    customStyle
  );

  return (
    <Box as="div" css={presetStyles} {...props}>
      {children}
    </Box>
  );
};
