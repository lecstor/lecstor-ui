import React from "react";
import { render, screen } from "../../test";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

import { Box } from ".";

describe("Box", () => {
  test("renders a box", async () => {
    const { container } = render(<Box id="mybox" role="main" />);

    const box = screen.getByRole("main");
    expect(box).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        min-width: 0;
      }

      <div
        class="emotion-0"
        id="mybox"
        role="main"
      />
    `);
  });

  test("renders a box with space", async () => {
    const { container } = render(<Box role="main" m={3} color="primary.90" />);

    const box = screen.getByRole("main");
    expect(box).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        min-width: 0;
        margin: 4px;
        color: #2F55DC;
      }

      <div
        class="emotion-0"
        role="main"
      />
    `);
  });

  test("does not fail some accessibility tests from axe", async () => {
    const { container } = render(<Box id="myinput" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
