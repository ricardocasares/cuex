import { Conversion } from "./index";
import renderer from "react-test-renderer";

describe("Conversion", () => {
  test(`renders correctly`, () =>
    expect(
      renderer
        .create(
          <Conversion
            rate={2}
            originSymbol="USD"
            targetSymbol="EUR"
          ></Conversion>
        )
        .toJSON()
    ).toMatchSnapshot());

  test(`renders max 5 decimals`, () =>
    expect(
      renderer
        .create(
          <Conversion
            rate={2.222222}
            originSymbol="USD"
            targetSymbol="EUR"
          ></Conversion>
        )
        .toJSON()
    ).toMatchSnapshot());

  test(`renders different symbols`, () =>
    expect(
      renderer
        .create(
          <Conversion
            rate={2}
            originSymbol="JPY"
            targetSymbol="GBP"
          ></Conversion>
        )
        .toJSON()
    ).toMatchSnapshot());
});
