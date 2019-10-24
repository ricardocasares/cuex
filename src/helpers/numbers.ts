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
