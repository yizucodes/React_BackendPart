import axios from "axios";
//Module for requests exportable

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
