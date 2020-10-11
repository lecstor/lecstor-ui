import React from "react";
import { render, screen } from "../../../../test";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

import { TextInput } from ".";

describe("TextInput", () => {
  test("renders a text input", async () => {
    const { container, debug } = render(<TextInput />);
    debug();

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
        border-color: #D2D2D2;
        border-style: solid;
        border-width: 1px;
        border-radius: 6px;
        box-shadow: inset 0 1px 0 rgba(225,228,232,.2);
        font-size: 1rem;
        line-height: 1.5;
        -webkit-flex: auto;
        -ms-flex: auto;
        flex: auto;
        min-height: 28px;
      }

      <input
        class="emotion-0"
      />
    `);
  });

  test("calls onClick on {enter}", async () => {
    const onClick = jest.fn();
    render(<TextInput onClick={onClick}>Click Me!</TextInput>);
    const button = screen.getByRole("button");

    await userEvent.type(button, "{enter}");
    expect(onClick).toHaveBeenCalled();
  });

  test("calls onClick on {space}", async () => {
    const onClick = jest.fn();
    render(<TextInput onClick={onClick}>Click Me!</TextInput>);
    const button = screen.getByRole("button");

    await userEvent.type(button, "{space}");
    expect(onClick).toHaveBeenCalled();
  });

  test("does not fail some accessibility tests from axe", async () => {
    const { container } = render(<TextInput>Click</TextInput>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
