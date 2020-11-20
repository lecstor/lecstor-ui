import React from "react";
import { render, screen } from "../../test";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

import { TextInput } from ".";

describe("TextInput", () => {
  test("renders a text input", async () => {
    const { container } = render(<TextInput id="myinput" />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    // expect(input).toHaveTextContent("Click Me!");
    // expect(input).toHaveStyleRule();

    // snapshots could be annoying, but could be useful too
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        font: inherit;
        margin: 0;
        overflow: visible;
        font-family: Roboto;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
        color: #2D2D2D;
        vertical-align: middle;
        background-color: #fff;
        background-repeat: no-repeat;
        -webkit-background-position: right 8px center;
        background-position: right 8px center;
        border-color: #1d45d6;
        border-style: solid;
        border-width: 1px;
        border-radius: 6px;
        font-size: 1rem;
        line-height: 1.5;
        -webkit-flex: auto;
        -ms-flex: auto;
        flex: auto;
      }

      <input
        class="emotion-0"
        id="myinput"
      />
    `);
  });

  test("does not fail some accessibility tests from axe", async () => {
    const { container } = render(
      <>
        <label htmlFor="myinput">Foo</label>
        <TextInput id="myinput" />
      </>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
