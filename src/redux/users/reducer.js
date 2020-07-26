import {
  SET_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING_USERS,
  SET_FOLLOWING_PROCESS_USER_ID,
} from './constants';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProcessUsers: [],
};

const findUserIdx = (arr, id) => {
  return arr.findIndex((user) => user._id === id);
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload.users,
        totalUsersCount: payload.usersCount,
      };

    case FOLLOW_USER: {
      const userIdx = findUserIdx(state.users, payload.userId);
      return {
        ...state,
        users: [
          ...state.users.slice(0, userIdx),
          {
            ...state.users[userIdx],
            isFollowed: true,
          },
          ...state.users.slice(userIdx + 1),
        ],
      };
    }

    case UNFOLLOW_USER: {
      const userIdx = findUserIdx(state.users, payload.userId);
      return {
        ...state,
        users: [
          ...state.users.slice(0, userIdx),
          {
            ...state.users[userIdx],
            isFollowed: false,
          },
          ...state.users.slice(userIdx + 1),
        ],
      };
    }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.page,
      };

    case TOGGLE_IS_FETCHING_USERS:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case SET_FOLLOWING_PROCESS_USER_ID: {
      return {
        ...state,
        followingProcessUsers: payload.isFetching
          ? [...state.followingProcessUsers, payload.userId]
          : state.followingProcessUsers.filter((id) => id !== payload.userId),
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
