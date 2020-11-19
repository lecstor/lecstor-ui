/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC, HTMLAttributes } from "react";
import { SystemStyleObject } from "@styled-system/css";
import { space, SpaceProps } from "styled-system";

import { handleStyleProps } from "../utils/handleStyleProps";

export type TextInputProps = SpaceProps & {
  size?: string;
  look?: string;
  sx?: SystemStyleObject;
  disabled?: boolean;
  groupPos?: string;
} & HTMLAttributes<HTMLInputElement>;

export const TextInput: FC<TextInputProps> = (props) => {
  const forwardProps = handleStyleProps(props, {
    themeKey: "textInput",
    variantKeys: ["look", "size"],
    systemUtils: [space],
  });
  return <input {...forwardProps} />;
};
