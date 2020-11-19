import { SystemStyleObject } from "@styled-system/css";

export type Layout = {
  variants: {
    base: SystemStyleObject;
    look: {
      [key: string]: SystemStyleObject;
    };
    space: {
      [key: string]: SystemStyleObject;
    };
  };
  defaultProps: { look: string };
};

export const layout: Layout = {
  variants: {
    base: {
      boxSizing: "border-box",
    },
    look: {
      centered: {
        display: "grid",
        placeItems: "center",
      },
      stack: {
        display: "grid",
        columnGap: 0,
        rowGap: 0,
      },
      stretchedStack: {
        display: "grid",
        alignSelf: "stretch",
        gridTemplateRows: "auto 1fr auto",
      },
      responsiveStack: {
        display: "grid",
        columnGap: 0,
        rowGap: 0,
        justifyContent: ["", "start"],
        gridAutoFlow: ["", "column"],
      },
    },
    space: {
      before: {
        justifyContent: ["", "end"],
      },
      between: {
        justifyContent: ["", "space-between"],
      },
      around: {
        justifyContent: ["", "space-around"],
      },
    },
  },
  defaultProps: {
    look: "stack",
  },
};
