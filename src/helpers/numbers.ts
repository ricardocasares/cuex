import { pipe } from "./utils";

export const format = (
  num: number,
  currency: string,
  decimals: number = 2,
  locale: string = "en-GB"
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: decimals
  }).format(num);

export function toFixed(n: number) {
  return (s: string) => {
    const idx = s.indexOf(".");

    if (idx < 0) {
      return s;
    }

    return s.substring(0, s.indexOf(".") + n + 1);
  };
}

export const toNumber = (str: string) => parseFloat(str);
export const toString = (n: number) => n.toString();
export const twoDecimals = pipe(
  toString,
  toFixed(2),
  toNumber
);
