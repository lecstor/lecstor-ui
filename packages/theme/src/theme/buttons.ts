import { SystemStyleObject } from "@styled-system/css";

import { fonts } from "./typography";

export type Buttons = {
  variants: {
    base: SystemStyleObject;
    look: {
      [key: string]: SystemStyleObject;
    };
    size: {
      [key: string]: SystemStyleObject;
    };
    defaultProps: { look: string; size: string };
  };
};

export const buttons: Buttons = {
  variants: {
    base: {
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
    look: {
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
      look: "primary",
    },
  },
};
