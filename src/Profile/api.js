import { endpoint } from "../config";

import {
  errorResponse,
  handleResponse,
  makePOSTRequest,
} from "../Utils/apiRequests";

const login = ({ user }) => {
  const url = `${endpoint}/login`;
  return makePOSTRequest(url)({ ...user })
    .then(handleResponse)
    .catch(errorResponse);
};

const signup = ({ user }) => {
  const url = `${endpoint}/signup`;
  return makePOSTRequest(url)({ ...user })
    .then(handleResponse)
    .catch(errorResponse);
};
const api = {
  login,
  signup,
}
export default api;
