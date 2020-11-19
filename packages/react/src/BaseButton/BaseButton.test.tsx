import React from "react";
import { render, screen } from "../../test";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

import { BaseButton } from ".";

describe("BaseButton", () => {
  test("renders a button", async () => {
    const { container } = render(<BaseButton>Click Me!</BaseButton>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me!");

    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="emotion-0"
      >
        Click Me!
      </button>
    `);
  });

  test("renders a button with css", async () => {
    const { container } = render(
      <BaseButton sx={{ margin: 3, border: "none", color: "purple" }}>
        Click Me!
      </BaseButton>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me!");

    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        margin: 4px;
        border: none;
        color: purple;
      }

      <button
        class="emotion-0"
      >
        Click Me!
      </button>
    `);
  });

  test("renders a button with margin prop", async () => {
    const { container } = render(<BaseButton margin={3}>Click Me!</BaseButton>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me!");

    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        margin: 4px;
      }

      <button
        class="emotion-0"
      >
        Click Me!
      </button>
    `);
  });

  test("renders a button with default variants with overrides", async () => {
    const { container } = render(
      <BaseButton
        themeKey="buttons"
        sx={{ margin: 3, border: "none", color: "white" }}
      >
        Click Me!
      </BaseButton>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me!");

    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        padding: .5em 1em;
        line-height: 1;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        color: #fff;
        display: inline-block;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        width: 100%;
        cursor: pointer;
        border: none;
        letter-spacing: 0.03125px;
        font-weight: 700;
        white-space: nowrap;
        font-family: Roboto;
        font-size: 1rem;
        border-radius: 6px;
        background-color: #1d45d6;
        border-color: #1d45d6;
        margin: 4px;
      }

      @media screen and (min-width: 600px) {
        .emotion-0 {
          width: auto;
        }
      }

      .emotion-0>* {
        vertical-align: text-top;
      }

      .emotion-0:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        box-shadow: none;
      }

      .emotion-0:hover {
        background-color: #5574E6;
      }

      <button
        class="emotion-0"
      >
        Click Me!
      </button>
    `);
  });

  test("renders a small danger button", async () => {
    const { container } = render(
      <BaseButton themeKey="buttons" size="sm" look="danger">
        Click Me!
      </BaseButton>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me!");

    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        padding: .6em 1em .4em;
        line-height: 1;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        color: #f9f9f9;
        display: inline-block;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        width: 100%;
        cursor: pointer;
        border: 1px solid;
        letter-spacing: 0.03125px;
        font-weight: 700;
        white-space: nowrap;
        font-family: Roboto;
        font-size: 0.666rem;
        border-radius: 4px;
        background-color: #DA2423;
        border-color: #DA2423;
      }

      @media screen and (min-width: 600px) {
        .emotion-0 {
          width: auto;
        }
      }

      .emotion-0>* {
        vertical-align: text-top;
      }

      .emotion-0:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        box-shadow: none;
      }

      .emotion-0:hover,
      .emotion-0:focus {
        background-color: #E85A59;
      }

      <button
        class="emotion-0"
      >
        Click Me!
      </button>
    `);
  });

  test("calls onClick on {enter}", async () => {
    const onClick = jest.fn();
    render(<BaseButton onClick={onClick}>Click Me!</BaseButton>);
    const button = screen.getByRole("button");

    await userEvent.type(button, "{enter}");
    expect(onClick).toHaveBeenCalled();
  });

  test("calls onClick on {space}", async () => {
    const onClick = jest.fn();
    render(<BaseButton onClick={onClick}>Click Me!</BaseButton>);
    const button = screen.getByRole("button");

    await userEvent.type(button, "{space}");
    expect(onClick).toHaveBeenCalled();
  });

  test("does not fail some accessibility tests from axe", async () => {
    const { container } = render(<BaseButton>Click</BaseButton>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
