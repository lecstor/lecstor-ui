import React, { FC } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "warning"],
      },
      defaultValue: "primary",
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["sm", "md", "lg"],
      },
      defaultValue: "lg",
    },
    themeKey: {
      defaultValue: "buttons",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Sandpit = Template.bind({});
Sandpit.args = {
  children: "Click Me!",
};

// export const MediumSecondary = Template.bind({});
// MediumSecondary.args = {
//   children: "Click Me!",
//   variant: "secondary",
//   size: "md",
// };

// export const SmallTertiary = Template.bind({});
// SmallTertiary.args = {
//   children: "Click Me!",
//   variant: "tertiary",
//   size: "sm",
// };
