import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "warning", "danger"],
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

// export const SmallWarning = Template.bind({});
// SmallWarning.args = {
//   children: "Click Me!",
//   variant: "warning",
//   size: "sm",
// };
