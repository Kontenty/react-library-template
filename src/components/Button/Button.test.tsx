import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders Button component", () => {
    render(<Button>example button</Button>);
  });

  it("styles primary button appropriately", () => {
    const container = render(<Button variant="primary">Primary</Button>);
    const button = container.getByRole("button");
    expect(button).toMatchSnapshot();
  });

  it("styles secondary button appropriately", () => {
    const container = render(<Button variant="secondary">Secondary</Button>);
    const button = container.getByRole("button");
    expect(button).toMatchSnapshot();
  });
});
