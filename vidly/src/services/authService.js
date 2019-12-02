//Login and logout services
import { apiUrl } from "../config.json";
import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

//Get jwt token and set it for httpService module.
// http.setJwt(getJwt());

//Save login response as jwt object
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export async function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);

    //Return user object once jwt is decoded
    return jwtDecode(jwt);
  } catch (ex) {
    //We do not have current user
    return null;
  }
}

//Get JSON web token
export function getJwt() {
  console.log("here");
  return localStorage.getItem(tokenKey);
}

//Export functions as objects
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt
};
