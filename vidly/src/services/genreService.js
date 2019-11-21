import http from "./httpService";

export function getGenres() {
  // return genres.filter(g => g);
  return http.get("http://localhost:3900/api/genres");
}
