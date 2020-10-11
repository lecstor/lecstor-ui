import * as CSS from "csstype";
import { fonts } from "./typography";

type cssPropertiesFallback = CSS.PropertiesFallback<
  string | number | string[] | number[]
>;

type cssType =
  | cssPropertiesFallback
  | {
      [key: string]: cssPropertiesFallback | number | string;
    };

export type Buttons = {
  defaultStyle: cssType;
  variant: {
    [key: string]: cssType;
  };
  size: {
    [key: string]: cssType;
  };
  defaultProps: { variant: string; size: string };
};

export const buttons: Buttons = {
  defaultStyle: {
    padding: ".5em 1em",
    lineHeight: 1,
    appearance: "none",
    color: "offWhite",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    width: ["100%", "auto"],
    cursor: "pointer",
    border: "1px solid",
    letterSpacing: 0,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    "> *": {
      verticalAlign: "text-top",
    },
    ":disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    fontFamily: fonts.body,
  },
  variant: {
    primary: {
      backgroundColor: "primary.100",
      borderColor: "primary.100",
      ":hover": {
        backgroundColor: "primary.70",
      },
    },
    secondary: {
      backgroundColor: "secondary.100",
      borderColor: "secondary.100",
      color: "text",
      ":hover": {
        backgroundColor: "secondary.70",
      },
    },
    warning: {
      backgroundColor: "warning.100",
      borderColor: "warning.100",
      color: "text",
      ":hover": {
        backgroundColor: "warning.70",
      },
    },
    danger: {
      backgroundColor: "danger.100",
      borderColor: "danger.100",
      ":hover, :focus": {
        backgroundColor: "danger.70",
      },
    },
  },
  size: {
    sm: {
      fontSize: 1,
      borderRadius: 2,
      padding: ".6em 1em .4em",
    },
    md: {
      fontSize: 2,
      borderRadius: 3,
    },
    lg: {
      fontSize: 3,
      borderRadius: 4,
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};
