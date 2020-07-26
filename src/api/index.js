import * as axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
axios.defaults.withCredentials = true;

export const getAuthToken = () => {
  return JSON.parse(window.localStorage.getItem('authState')).accessToken;
};

export default axios;
