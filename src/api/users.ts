import { getAuthToken } from './index'
import axios from 'axios'
import { UserProfile } from '../types'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

type GetUsersApiResponse = {
  users: Array<UserProfile>
  usersCount: number
}
export const getUsersApi = async (page: number, pageSize: number) => {
  try {
    const response = await instance.get<GetUsersApiResponse>(`/users?page=${page}&limit=${pageSize}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.errors[0])
  }
}

export const followUserApi = (userId: string) => {
  return instance.post(
    `/user/follow/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    },
  )
}

export const unFollowUserApi = (userId: string) => {
  return instance.delete(`/user/unfollow/${userId}`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  })
}
