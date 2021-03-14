import {
  SET_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING_USERS,
  SET_FOLLOWING_PROCESS_USER_ID,
  CLEAR_USERS_STATE,
} from './action-types';
import { followUserApi, unFollowUserApi, getUsersApi } from '../../api/users';
import { UsersAction, UsersThunk } from './types';

export const clearUsers = (): UsersAction => {
  return {
    type: CLEAR_USERS_STATE,
  };
};

const followUserAccess = (userId: string): UsersAction => {
  return {
    type: FOLLOW_USER,
    payload: {
      userId,
    },
  };
};

const unFollowUserAccess = (userId: string): UsersAction => {
  return {
    type: UNFOLLOW_USER,
    payload: {
      userId,
    },
  };
};

const toggleFollowingProcessUserId = (isFetching: boolean, userId: string): UsersAction => {
  return {
    type: SET_FOLLOWING_PROCESS_USER_ID,
    payload: {
      userId,
      isFetching,
    },
  };
};

const setUsers = (users: any, usersCount: number): UsersAction => {
  return {
    type: SET_USERS,
    payload: {
      users,
      usersCount,
    },
  };
};

export const setCurrentPage = (page: number): UsersAction => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      page,
    },
  };
};

const toggleIsFetchingUsers = (isFetching: boolean): UsersAction => {
  return {
    type: TOGGLE_IS_FETCHING_USERS,
    payload: {
      isFetching,
    },
  };
};

export const followUser = (userId: string): UsersThunk => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcessUserId(true, userId));
    try {
      await followUserApi(userId);
      dispatch(followUserAccess(userId));
    } catch (error) {}
    dispatch(toggleFollowingProcessUserId(false, userId));
  };
};

export const unFollowUser = (userId: string): UsersThunk => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcessUserId(true, userId));
    try {
      await unFollowUserApi(userId);
      dispatch(unFollowUserAccess(userId));
    } catch (error) {}
    dispatch(toggleFollowingProcessUserId(false, userId));
  };
};

export const fetchUsers = (page: number, pageSize: number): UsersThunk => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingUsers(true));
    const response = await getUsersApi(page, pageSize);
    dispatch(setUsers(response.users, response.usersCount));
  };
};
