//Module for requests exportable
import axios from "axios";
import { toast } from "react-toastify";
import * as Sentry from "@sentry/browser";

//Only use try catch block when you have to do something as result of failure
//Otherwise use interceptor
//BUG: EXPECTER ERRORS ARE NOT BEING CAUGHT
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  //Unexpected error happens
  if (!expectedError) {
    Sentry.captureException(error);
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
