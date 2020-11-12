import React from 'react';
import { UIProvider } from '../packages/react/src/UIProvider';

export const decorators = [
  (Story) => (
    <UIProvider>
      <Story />
    </UIProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}