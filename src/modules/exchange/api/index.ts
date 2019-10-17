function random() {
  const rates = [2, 4];
  return rates[Math.floor(Math.random() * rates.length)];
}

export const getExchangeRate = async (base: string, target: string) => random();
