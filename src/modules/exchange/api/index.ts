import { encode } from "querystring";

const API = process.env.API;
const KEY = process.env.API_KEY;

export const fetchEchangeRate = (params: Record<string, string> = {}) =>
  fetch(`${API}?${encode({ ...params, access_key: KEY })}`)
    .then(r => r.json())
    .then(data => data.rates[params.symbols]);
