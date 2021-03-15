import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import { CHANGE_NEW_POST_MESSAGE, ADD_POST, SET_USER_PROFILE, UPDATE_USER_PROFILE, SET_IS_FETCHING } from './constants'

export type Post = {
  message: string
  created: string
  id: number
}

export type UserProfile = {
  name: string | ''
  surname: string | ''
  email?: string
  location?: {
    country?: string
    city?: string
  }
  photos: {
    large: string
    small: string
  }
  following?: Array<string>
  followers?: Array<string>
  lastActivity?: Date
  _id?: string
  created?: Date
  birthDate?: string
  status: string
}

export type UserProfileUpdates = {
  name?: string
  surname?: string
  birthDate?: string
  location?: {
    city?: string
    country?: string
  }
  status?: string
}

export type ProfileState = {
  posts: [] | Array<Post>
  userProfile: UserProfile
  newPostMessage: string
  isFetching: boolean
}

type ChangeNewPostMessage = {
  type: typeof CHANGE_NEW_POST_MESSAGE
  payload: {
    value: string
  }
}

type AddPost = {
  type: typeof ADD_POST
}

type SetUserProfile = {
  type: typeof SET_USER_PROFILE
  payload: {
    userProfile: UserProfile
  }
}

type UpdateUserProfile = {
  type: typeof UPDATE_USER_PROFILE
  payload: {
    userUpdates: {}
  }
}

type SetIsFetching = {
  type: typeof SET_IS_FETCHING
  payload: {
    flag: boolean
  }
}

export type ProfileAction = ChangeNewPostMessage | AddPost | SetUserProfile | UpdateUserProfile | SetIsFetching
export type ProfileThunk = ThunkAction<Promise<void>, RootState, null, ProfileAction>
