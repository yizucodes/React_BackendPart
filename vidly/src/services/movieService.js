import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

//Template literal to get id of movie in DB
function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

//Create or update current movie in DB
export function saveMovie(movie) {
  //If movie exists
  if (movie._id) {
    //Original body of movie to edit and delete id because movie in Mongo has id of its own
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  http.delete(movieUrl(movieId));
}
