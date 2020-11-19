import merge from "deepmerge";

/* deepmerge concatenates arrays by default which doesn't work for our responsive arrays */

const defaultOptions = {
  arrayMerge: (destinationArray: unknown[], sourceArray: unknown[]) =>
    sourceArray || destinationArray,
};

export function mergeTheme<Theme>(
  x: Theme,
  y: Partial<Theme>,
  options?: merge.Options
): Theme {
  if (!y) return x;
  return merge<Theme>(x, y, Object.assign({}, options, defaultOptions));
}
