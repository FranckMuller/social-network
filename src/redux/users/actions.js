import {
  SET_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING_USERS,
  SET_FOLLOWING_PROCESS_USER_ID,
} from './constants';

import { followUserApi, unFollowUserApi, getUsersApi } from '../../api/users';

export const followUser = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcessUserId(true, userId));
    await followUserApi(userId);
    dispatch(followUserAccess(userId));
    dispatch(toggleFollowingProcessUserId(false, userId));
  };
};

export const unFollowUser = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProcessUserId(true, userId));
    await unFollowUserApi(userId);
    dispatch(unFollowUserAccess(userId));
    dispatch(toggleFollowingProcessUserId(false, userId));
  };
};

const followUserAccess = (userId) => {
  return {
    type: FOLLOW_USER,
    payload: {
      userId,
    },
  };
};

const unFollowUserAccess = (userId) => {
  return {
    type: UNFOLLOW_USER,
    payload: {
      userId,
    },
  };
};

const toggleFollowingProcessUserId = (isFetching, userId) => {
  return {
    type: SET_FOLLOWING_PROCESS_USER_ID,
    payload: {
      userId,
      isFetching,
    },
  };
};

export const fetchUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetchingUsers(true));
    const { users, usersCount } = await getUsersApi(page, pageSize);
    dispatch(setUsers(users, usersCount));
    dispatch(toggleIsFetchingUsers(false));
  };
};

const setUsers = (users, usersCount) => {
  return {
    type: SET_USERS,
    payload: {
      users,
      usersCount,
    },
  };
};

const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      page,
    },
  };
};

const toggleIsFetchingUsers = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING_USERS,
    payload: {
      isFetching,
    },
  };
};
