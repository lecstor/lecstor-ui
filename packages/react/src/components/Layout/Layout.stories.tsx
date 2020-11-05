import React, { FC } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { UIProvider } from "../../theme";

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
  <Layout variant="stack" border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);

export const withGap = () => (
  <Layout variant="stack" gap={2} border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);

export const withPadding = () => (
  <Layout variant="stack" p={2} border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);

export const withGapAndPadding = () => (
  <Layout variant="stack" gap={2} p={2} border="1px solid green">
    <StoryBox>First</StoryBox>
    <StoryBox>Second</StoryBox>
    <StoryBox>Third</StoryBox>
  </Layout>
);
