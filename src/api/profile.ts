import axios, { getAuthToken } from './index';
import { UserProfileUpdates } from '../redux/profile/types';

export const updateUserProfileApi = async (userData: UserProfileUpdates) => {
  try {
    const response = await axios.put<UserProfileUpdates>(
      '/profile',
      { userData },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.errors[0]);
  }
};

export const updatePhotoProfileApi = async (profilePhotos: any) => {
  const profilePhotosData = new FormData();
  profilePhotosData.append("large", profilePhotos.large)
  profilePhotosData.append("small", profilePhotos.small)
  try {
    const response = await axios.put(
      '/profilePhotos',
      profilePhotosData,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
};

