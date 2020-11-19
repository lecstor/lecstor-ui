import { SystemStyleObject } from "@styled-system/css";

export type TextInput = {
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

export const textInput: TextInput = {
  variants: {
    base: {
      boxSizing: "border-box",
      font: "inherit",
      margin: 0,
      overflow: "visible",
      fontFamily: "body",
      paddingY: 3,
      paddingX: 5,
      color: "text",
      verticalAlign: "middle",
      backgroundColor: "white",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 8px center",
      borderColor: "border",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 3,
      fontSize: 2,
      lineHeight: 2,
      flex: "auto",
    },
    look: {
      primary: {
        borderColor: "primary.100",
      },
      secondary: {
        borderColor: "secondary.100",
      },
      warning: {
        borderColor: "warning.100",
      },
      danger: {
        borderColor: "danger.100",
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
