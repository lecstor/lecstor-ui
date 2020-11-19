/** @jsx jsx */
import { jsx } from "@emotion/react";
import { forwardRef, FC } from "react";
import { SystemStyleObject } from "@styled-system/css";
import { space, SpaceProps } from "styled-system";

import { handleStyleProps } from "../utils/handleStyleProps";

export type TextInputProps = SpaceProps & {
  size?: string;
  look?: string;
  sx?: SystemStyleObject;
  disabled?: boolean;
  groupPos?: string;
} & React.ComponentPropsWithRef<"input">;

export const TextInput: FC<TextInputProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const forwardProps = handleStyleProps(props, {
      themeKey: "textInput",
      variantKeys: ["look", "size"],
      systemUtils: [space],
    });
    return <input ref={ref} {...forwardProps} />;
  }
);
