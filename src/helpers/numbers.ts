export const format = (num: number, currency: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 5
  }).format(num);
