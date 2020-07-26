import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: { withCredentials: true },
});

export const signinApi = ({ email, password }) => {
  return instance.post('/signin', { email, password });
};

export const signoutApi = () => {
  return instance.get('/signout');
};

export const signupApi = (signupData) => {
  return instance.post('/signup', signupData);
};
