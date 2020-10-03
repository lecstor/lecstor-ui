/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC } from 'react';
import { flexbox, FlexboxProps as FlexboxSSProps } from 'styled-system';

import { Box, BoxProps } from '../Box';

export type FlexBoxProps = BoxProps & FlexboxSSProps;

export const FlexBox: FC<FlexBoxProps> = (props) => 
    <Box css={flexbox(props)} {...props} />;
