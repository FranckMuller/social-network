import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
axios.defaults.withCredentials = true;

export const getAuthToken = (): string | undefined => {
  let authState = window.localStorage.getItem('authState');
  if (authState) {
    return JSON.parse(authState).accessToken;
  }
};

export default axios;
