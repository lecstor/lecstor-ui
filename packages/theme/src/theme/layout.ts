import * as CSS from "csstype";

type cssPropertiesFallback = CSS.PropertiesFallback<
  string | number | string[] | number[]
>;

type cssType =
  | cssPropertiesFallback
  | {
      [key: string]: cssPropertiesFallback;
    };

export type Layout = {
  variant: {
    [key: string]: cssType;
  };
  space: {
    [key: string]: cssType;
  };
  defaultProps: { variant: string };
};

export const layout: Layout = {
  variant: {
    centered: {
      display: "grid",
      placeItems: "center",
    },
    stack: {
      display: "grid",
      gridGap: 0,
    },
    stretchedStack: {
      display: "grid",
      alignSelf: "stretch",
      gridTemplateRows: "auto 1fr auto",
    },
    responsiveStack: {
      display: "grid",
      gridGap: 0,
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
  defaultProps: {
    variant: "stack",
  },
};
