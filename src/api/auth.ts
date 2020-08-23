import axios from 'axios';
import { LoginData, AuthData } from '../redux/auth/types';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: { withCredentials: true },
});

type SigninApiResponse = {
  id: string;
  name: string;
  email: string;
  surname: string;
  accessToken: string;
};

type SignupApiResponse = {
  accessToken: string;
  id: string;
  name: string;
  surname: string;
  email: string;
};

export const signinApi = async (loginData: LoginData) => {
  try {
    const response = await instance.post<SigninApiResponse>('/signin', loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.errors[0]);
  }
};

export const signoutApi = () => {
  return instance.get('/signout');
};

export const signupApi = async (authData: AuthData) => {
  try {
    const response = await instance.post<SignupApiResponse>('/signup', authData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.errors[0]);
  }
};
