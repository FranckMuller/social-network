import axios, { getAuthToken } from './index';

export const updateUserProfileApi = (userData) => {
  return axios
    .put(
      '/profile',
      { userData },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    });
};
