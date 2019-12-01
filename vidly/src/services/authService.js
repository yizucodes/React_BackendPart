//Login and logout services
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

//Returns function as promise
export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
