import { Balance } from "./index";
import renderer from "react-test-renderer";

describe("Balance", () => {
  test(`handles integers`, () =>
    expect(
      renderer
        .create(
          <Balance amount={120} currency={"USD"} overdraft={false}></Balance>
        )
        .toJSON()
    ).toMatchSnapshot());

  test(`handles floats`, () =>
    expect(
      renderer
        .create(
          <Balance amount={120.52} currency={"USD"} overdraft={false}></Balance>
        )
        .toJSON()
    ).toMatchSnapshot());

  test(`handles expressions`, () =>
    expect(
      renderer
        .create(
          <Balance amount={120.52} currency={"USD"} overdraft={3 > 2}></Balance>
        )
        .toJSON()
    ).toMatchSnapshot());

  test(`renders styles when overdraft`, () =>
    expect(
      renderer
        .create(
          <Balance amount={120.52} currency={"USD"} overdraft={true}></Balance>
        )
        .toJSON()
    ).toMatchSnapshot());
});
