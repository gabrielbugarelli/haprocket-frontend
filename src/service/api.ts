import axios from "axios";

export const api = axios.create({
  baseURL: 'https://haprocket.herokuapp.com',
  headers: { 'X-Custom-Header': 'foobar' }
});