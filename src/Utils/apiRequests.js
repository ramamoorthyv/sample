import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("idToken");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const convertRequest = (data) => data;
export const convertResponse = (data) => data;

// Some default response functions
export const handleResponse = (response) => {
  return {
    response: convertResponse(response.data),
  };
};
export const errorResponse = (error) => {
  return {
    errors: convertResponse(error.response.data),
  };
};

export const makeDELETERequest = (uri, config = {}) =>
  axiosInstance.delete(uri, config);
export const makeGETRequest = (uri, config = {}) =>
  axiosInstance.get(uri, config);
export const makePATCHRequest =
  (uri, config = {}) =>
  (body) =>
    axiosInstance.patch(uri, convertRequest(body), config);
export const makePOSTRequest =
  (uri, config = {}) =>
  (body) =>
    axiosInstance.post(uri, convertRequest(body), config);
