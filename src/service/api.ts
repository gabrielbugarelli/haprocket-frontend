import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'X-Custom-Header': 'foobar' }
});