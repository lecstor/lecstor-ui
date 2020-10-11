import React, { FC } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { DsProvider } from "../src/theme";

const AllTheProviders: FC = ({ children }) => {
  return <DsProvider>{children}</DsProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
