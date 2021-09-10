import axios from 'axios';
import humps from 'humps';
import { normalize } from 'normalizr';
import jsonApiMerge from 'json-api-merge';

export const convertRequest = (data) => humps.decamelizeKeys(data);
export const convertResponse = (data) => humps.camelizeKeys(data);

// Normalize a certain set of data
export const normalizeData = (data, schema) => normalize(convertResponse(data), schema);
// Generally normalize a response
export const normalizeResponse = (response, schema) => ({
  response: normalizeData(response.data, schema)
});

// Handling of normalzing responses when the data is nested in another key
// e.g response.data.catalogue_items
//
export const normalizeResponseWithKey = (response, key, schema) => ({
  response: normalizeData(_.get(response, `data.${key}`), schema)
});

export const normalizeDependatntResponse = (response, schema) => ({
  response: normalizeData(response.data.data, schema)
});

export const normalizeResponseWithPage = (response, schema) => ({
  response: { ...normalizeData(response.data.data, schema), page: { ...convertResponse(response.data.page) } }
});

// Some default response functions
export const handleResponse = (response) => ({ response: convertResponse(response.data) });
export const errorResponse = (error) => ({ errors: convertResponse(error.response.data.errors) });

export const makeDELETERequest = (uri, config = {}) => axios.delete(uri, config);
export const makeGETRequest = (uri, config = {}) => axios.get(uri, config);
export const makePATCHRequest = (uri, config = {}) => (body) => axios.patch(uri, convertRequest(body), config);
export const makePOSTRequest = (uri, config = {}) => (body) => axios.post(uri, convertRequest(body), config);

// New handlers for zavyapi which is built off JSON::API standard
export const makeZavyApiDELETERequest = (uri, config = {}) => axios.delete(`/zavyapi/${uri}`, config);
export const makeZavyApiGETRequest = (uri, config = {}) => axios.get(`/zavyapi/${uri}`, config);
export const makeZavyApiPATCHRequest = (uri, config = {}) => (body) => axios.patch(`/zavyapi/${uri}`, body, config);
export const makeZavyApiPUTRequest = (uri, config = {}) => (body) =>
  axios.put(`/zavyapi/${uri}`, humps.camelizeKeys(body), config);
export const makeZavyApiPOSTRequest = (uri, config = {}) => (body) =>
  axios.post(`/zavyapi/${uri}`, humps.camelizeKeys(body), config);

export const handleZavyApiResponse = ({ data, status }) => {
  try {
    const merged = jsonApiMerge(data.included, data.data);
    return { data: merged, raw_data: data, status, success: true };
  } catch (err) {
    // Handle 201 when no content is returned
    return { data: {}, raw_data: {}, status, success: true };
  }
};
export const handleZavyApiError = (error) => {
  return {
    status: error.response.status,
    error: error.response.statusText,
    errors: error.response.data.errors,
    success: false
  };
};
