import React, { FC, ReactNode } from 'react';

import { Box, BoxProps } from '../../Box';

export type ButtonProps = BoxProps & {
  // size?: keyof Theme['buttons']['size'];
  // variant?: keyof Theme['buttons']['variant'];
  themeKey?: 'buttons' | 'iconButtons';
  disabled?: boolean;
  // groupPos?: keyof Theme['buttons']['groupPos'];
  // children: React.ReactNode;
  children?: ReactNode
};

// export type ButtonProps = Pick<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   'onClick'
// > &
//   Omit<
//     AriaButtonProps,
//     | 'backgroundColor'
//     | 'onPressStart'
//     | 'onPressEnd'
//     | 'onPressChange'
//     | 'onPressUp'
//     | 'onKeyDown'
//     | 'onKeyUp'
//   > &
//   BaseProps;

export const Button: FC<ButtonProps> = ({
  // variant,
  // size,
  children,
  disabled,
  themeKey = 'buttons',
  // groupPos,
  ...props
}) => {
  // const presetStyles = useThemePresets(themeKey, {
  //   variant,
  //   size,
  //   groupPos,
  // });

  return (
    <Box
      as="button"
      {...props}
      // css={presetStyles}
    >
      {children}
    </Box>
  );
};
