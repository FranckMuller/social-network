import {
  SET_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING_USERS,
  SET_FOLLOWING_PROCESS_USER_ID,
  CLEAR_USERS_STATE,
} from './action-types';
import { UsersState, User } from './types';

const initialState: UsersState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProcessUsers: [],
};

const findUserIdx = (arr: Array<User>, id: string): number => {
  return arr.findIndex((user: any) => user._id === id);
};

const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload.users,
        totalUsersCount: action.payload.usersCount,
        isFetching: false,
      };

    case FOLLOW_USER: {
      const userIdx = findUserIdx(state.users, action.payload.userId);
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
      const userIdx = findUserIdx(state.users, action.payload.userId);
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
        currentPage: action.payload.page,
      };

    case TOGGLE_IS_FETCHING_USERS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };

    case SET_FOLLOWING_PROCESS_USER_ID: {
      return {
        ...state,
        followingProcessUsers: action.payload.isFetching
          ? [...state.followingProcessUsers, action.payload.userId]
          : state.followingProcessUsers.filter((userId: string) => userId !== action.payload.userId),
      };
    }

    case CLEAR_USERS_STATE:
      return initialState;

    default:
      return state;
  }
};

export default usersReducer;
