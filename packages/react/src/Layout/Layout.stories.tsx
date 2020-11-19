import React, { FC } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { UIProvider } from "../UIProvider";

import { Box, Layout } from "..";

export default {
  title: "Components/Layout/Stack",
  component: Layout,
  decorators: [
    (AStory: Story) => (
      <UIProvider>
        <AStory />
      </UIProvider>
    ),
  ],
} as Meta;

const StoryBox: FC = ({ children }) => (
  <Box border="1px solid #0066cc" borderRadius={3} p={3}>
    {children}
  </Box>
);

export const defaultStack = () => (
  <Layout look="stack" border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);

export const withGap = () => (
  <Layout look="stack" gridGap={2} border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);

export const withPadding = () => (
  <Layout look="stack" p={2} border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);

export const withGapAndPadding = () => (
  <Layout look="stack" gridGap={2} p={2} border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);
