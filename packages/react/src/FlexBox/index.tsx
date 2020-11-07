/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC } from "react";

import { Box, BoxProps } from "../Box";

export type FlexBoxProps = BoxProps;

export const FlexBox: FC<FlexBoxProps> = (props) => (
  <Box display="flex" {...props} />
);
