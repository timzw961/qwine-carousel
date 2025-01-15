import React from "react";
import { render, screen } from "@testing-library/react";
import AddToCartButton from "./AddToCartButton";

describe("AddToCartButton Component", () => {
  test("renders the button with correct text and icon", () => {
    render(<AddToCartButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("ADD");
    expect(buttonElement).toContainElement(screen.getByAltText("Cart Icon"));
  });
});
