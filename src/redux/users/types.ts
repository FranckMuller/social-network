import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'

import {
  SET_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING_USERS,
  SET_FOLLOWING_PROCESS_USER_ID,
  CLEAR_USERS_STATE,
} from './action-types'

export type User = {
  name: string
  surname: string
  _id: string
  photos: {
    small?: string
    large?: string
  }
  location: {
    country?: string
    city?: string
  }
  isFollowed: boolean
}

export type UsersState = {
  users: Array<User> | []
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingProcessUsers: Array<string>
}

type followUserAccess = {
  type: typeof FOLLOW_USER
  payload: {
    userId: string
  }
}

type unFollowUserAccess = {
  type: typeof UNFOLLOW_USER
  payload: {
    userId: string
  }
}

type toggleFollowingProcessUserId = {
  type: typeof SET_FOLLOWING_PROCESS_USER_ID
  payload: {
    userId: string
    isFetching: boolean
  }
}

type SetUsers = {
  type: typeof SET_USERS
  payload: {
    users: Array<User>
    usersCount: number
  }
}

type SetCurrentPage = {
  type: typeof SET_CURRENT_PAGE
  payload: {
    page: number
  }
}

type ToggleIsFetchingUsers = {
  type: typeof TOGGLE_IS_FETCHING_USERS
  payload: {
    isFetching: boolean
  }
}

type clearUsersState = {
  type: typeof CLEAR_USERS_STATE
}

export type UsersAction =
  | followUserAccess
  | unFollowUserAccess
  | toggleFollowingProcessUserId
  | SetUsers
  | SetCurrentPage
  | ToggleIsFetchingUsers
  | clearUsersState

export type UsersThunk = ThunkAction<Promise<void>, RootState, null, UsersAction>
