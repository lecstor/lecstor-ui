import { colors } from "./colors";
import { buttons } from "./buttons";

export const iconButtons = {
  defaultStyle: {
    ...buttons.defaultStyle,
    width: "auto",
  },
  variant: {
    ...buttons.variant,
    tertiary: {
      ...buttons.variant.tertiary,
      backgroundColor: colors.white,
      border: "1px solid",
      borderColor: colors.white,
      ":hover": {
        outline: "none",
        boxShadow: `0px 2px 8px ${colors.brand.shadow}`,
      },
      ":focus": {
        outline: "none",
        border: "1px dashed",
        borderColor: colors.brand["100"],
        boxShadow: `0px 2px 8px ${colors.brand.shadow}`,
      },
      ":disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
        boxShadow: "none",
      },
    },
  },
  size: {
    sm: {
      lineHeight: 0,
      padding: "4px",
      fontSize: "7px",
      borderRadius: 2,
    },
    md: {
      lineHeight: 0,
      padding: "10px",
      fontSize: "13px",
      borderRadius: 3,
    },
    lg: {
      lineHeight: 0,
      padding: "12px",
      borderRadius: 4,
    },
  },
  // the default `size` or `variant`
  defaultProps: {
    size: "lg",
    variant: "primary",
  },
};
