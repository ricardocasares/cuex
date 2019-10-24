import { encode } from "querystring";

const API = process.env.API;

export const fetchEchangeRate = (params: Record<string, string> = {}) =>
  fetch(`${API}?${encode(params)}`)
    .then(r => r.json())
    .then(data => data.rates[params.symbols]);
