import { encode } from "querystring";
import { twoDecimals } from "@/helpers/numbers";

const API = process.env.API;

export const fetchEchangeRate = (params: Record<string, string> = {}) =>
  fetch(`${API}?${encode(params)}`)
    .then(r => r.json())
    .then(data => twoDecimals(data.rates[params.symbols]));
