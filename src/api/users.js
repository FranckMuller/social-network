import { getAuthToken } from './index';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const getUsersApi = (page, pageSize) => {
  return instance
    .get(`/users?page=${page}&limit=${pageSize}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
    .then((res) => res.data);
};

export const followUserApi = (userId) => {
  return instance
    .post(
      `/user/follow/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    )
    .then((res) => res.data);
};

export const unFollowUserApi = (userId) => {
  return instance
    .delete(`/user/unfollow/${userId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
    .then((res) => res.data);
};

export const getUserProfileApi = (userId) => {
  return instance
    .get(`/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};
