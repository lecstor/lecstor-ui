import merge from "deepmerge";

import { Theme } from "@lecstor/ui-default-theme";

/* deepmerge concatenates arrays by default which doesn't work for our responsive arrays */

const defaultOptions = {
  arrayMerge: (destinationArray: any[], sourceArray: any[]) =>
    sourceArray || destinationArray,
};

export function mergeTheme(
  x: Theme,
  y: Partial<Theme>,
  options?: merge.Options
): Theme {
  return merge(x, y, Object.assign({}, options, defaultOptions));
}
