import React from "react";
import { CurrencySelector } from ".";
import { render, fireEvent } from "@testing-library/react";

describe("CurrencySelector", () => {
  const onClose = jest.fn();
  const onQuery = jest.fn();
  const onSelect = jest.fn();

  it("renders when show prop is true", () => {
    const { getByTestId } = render(
      <CurrencySelector
        query=""
        show={true}
        symbols={[["USD", "Dollar"], ["EUR", "Euro"]]}
        onQuery={onQuery}
        onSelect={onSelect}
        onClose={onClose}
      />
    );

    expect(getByTestId("back-button")).toBeDefined();
    expect(getByTestId("search-input")).toBeDefined();
    expect(getByTestId("USD")).toBeDefined();
    expect(getByTestId("EUR")).toBeDefined();
  });

  it("calls callbacks with proper values", () => {
    const { getByTestId } = render(
      <CurrencySelector
        query=""
        show={true}
        symbols={[["USD", "Dollar"], ["EUR", "Euro"]]}
        onQuery={onQuery}
        onSelect={onSelect}
        onClose={onClose}
      />
    );

    fireEvent.click(getByTestId("EUR"));
    fireEvent.change(getByTestId("search-input"), { target: { value: "USD" } });
    fireEvent.click(getByTestId("back-button"));
    expect(onSelect).toHaveBeenCalledWith("EUR");
    expect(onQuery).toHaveBeenCalledWith("USD");
    expect(onClose).toHaveBeenCalled();
  });
});
