import axios, { getAuthToken } from './index'
import { UserProfileUpdates } from '../redux/profile/types'
import { ProfilePhotos, UserProfile, Post } from '../types'

export const getUserProfileApi = async (userId: string) => {
  try {
    const response = await axios.get<UserProfile>(`/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.errors[0])
  }
}

export const getPostsApi = async (userId: string) => {
  const response = await axios.get<Array<Post>>(`/posts/${userId}`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  })
  return response.data
}

export const updateUserProfileApi = async (userData: UserProfileUpdates) => {
  try {
    const response = await axios.put<UserProfileUpdates>(
      '/profile',
      { userData },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      },
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.errors[0])
  }
}

export const updatePhotoProfileApi = async (profilePhotos: ProfilePhotos) => {
  const profilePhotosData = new FormData()
  profilePhotosData.append('large', profilePhotos.large)
  profilePhotosData.append('small', profilePhotos.small)
  try {
    const response = await axios.put('/profilePhotos', profilePhotosData, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
    return response.data
  } catch (error) {}
}

export const addPostApi = async (text: string) => {
  try {
    const response = await axios.post<Post>(
      '/post',
      {
        text,
      },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      },
    )
    return response.data
  } catch (error) {}
}
