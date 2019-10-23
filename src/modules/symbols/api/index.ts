export const fetchCurrencies = async (): Promise<[string, string][]> =>
  fetch("/api/symbols")
    .then(r => r.json())
    .then(Object.entries);
