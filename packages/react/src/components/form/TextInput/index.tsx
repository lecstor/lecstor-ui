/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC, HTMLAttributes } from "react";

import { useThemePresets } from "../../../theme";

import { Box, BoxProps } from "../../Box";

export type TextInputProps = BoxProps & {
  size?: string;
  variant?: string;
  disabled?: boolean;
  groupPos?: string;
} & HTMLAttributes<HTMLInputElement>;

export const TextInput: FC<TextInputProps> = ({ variant, size, ...props }) => {
  const presetStyles = useThemePresets("textInput", {
    variant,
    size,
  });

  return <Box as="input" css={presetStyles} {...props} />;
};
