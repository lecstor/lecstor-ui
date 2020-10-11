import React from 'react';
import { DsProvider } from '../packages/react/src/theme';

export const decorators = [
  (Story) => (
    <DsProvider>
      <Story />
    </DsProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}