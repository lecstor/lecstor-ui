import isPropValid from "@emotion/is-prop-valid";
import { PropsWithChildren } from "react";
// import memoize from '@emotion/memoize';
import { styleFn } from "styled-system";

export function getForwardProps<
  Props extends PropsWithChildren<Record<string, unknown>>
>(system: styleFn, props: Props): Props {
  const handledProps = system.propNames;

  // always forward special React props
  const forwardProps: Record<string, unknown> = {};

  Object.keys(props).forEach((prop) => {
    if (!handledProps?.includes(prop) && isPropValid(prop)) {
      forwardProps[prop] = props[prop as keyof Props];
    }
  });

  return forwardProps as Props;
}
