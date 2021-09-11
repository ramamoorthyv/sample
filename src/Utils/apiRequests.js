import axios from "axios";

export const convertRequest = (data) => data;
export const convertResponse = (data) => data;

// Some default response functions
export const handleResponse = (response) => {  
  return {
    response: convertResponse(response.data),
  }
};
export const errorResponse = (error) => {  
  return {
    errors: convertResponse(error.response.data),
  };
};

export const makeDELETERequest = (uri, config = {}) =>
  axios.delete(uri, config);
export const makeGETRequest = (uri, config = {}) => axios.get(uri, config);
export const makePATCHRequest =
  (uri, config = {}) =>
  (body) =>
    axios.patch(uri, convertRequest(body), config);
export const makePOSTRequest =
  (uri, config = {}) =>
  (body) =>
    axios.post(uri, convertRequest(body), config);
