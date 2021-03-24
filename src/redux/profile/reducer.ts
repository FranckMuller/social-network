import * as types from './action-types'
import { ProfileActionTypes } from './actions'
import { UserProfile, Post } from '../../types'

export type ProfileStateType = typeof initialState

const initialState = {
  posts: [] as Array<Post>,
  userProfile: {
    _id: '',
    name: '',
    surname: '',
    email: '',
    status: '',
    location: {
      country: '',
      city: '',
    },
    photos: {
      large: '',
      small: '',
    },
    following: null,
    followers: null,
    lastActivity: null,
    created: null,
    birthDate: '',
  } as UserProfile,
  newPostMessage: '',
  addPostProcessing: false,
  isFetching: true,
}

const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileStateType => {
  switch (action.type) {
    case types.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
        addPostProcessing: false,
      }

    case types.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload.userProfile,
        },
      }

    case types.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.flag,
      }

    case types.UPDATE_USER_PROFILE: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload.userUpdates,
        },
      }
    }

    case types.SET_POST_PROCESSING: {
      return {
        ...state,
        addPostProcessing: action.payload.isProcessing,
      }
    }

    case types.SET_POSTS: {
      return {
        ...state,
        posts: action.payload.posts,
      }
    }

    case types.DELETE_POST: {
      const deletedPostIdx = state.posts.findIndex((post) => {
        return post._id === action.payload.postId
      })

      return {
        ...state,
        posts: [...state.posts.slice(0, deletedPostIdx), ...state.posts.slice(deletedPostIdx + 1)],
      }
    }

    default:
      return state
  }
}

export default profileReducer
