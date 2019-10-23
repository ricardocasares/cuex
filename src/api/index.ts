import { encode } from "querystring";
import fetch from "isomorphic-unfetch";

const API = process.env.API;
const KEY = process.env.API_KEY;

export const api = (params: Record<string, string> = {}) =>
  fetch(`${API}?${encode({ ...params, access_key: KEY })}`).then(r => r.json());
