export const format = (
  num: number,
  currency: string,
  locale: string = "en-GB"
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 5
  }).format(num);
