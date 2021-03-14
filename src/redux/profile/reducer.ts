import {
  CHANGE_NEW_POST_MESSAGE,
  ADD_POST,
  SET_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from './constants'
import { ProfileState } from './types'

const initialState: ProfileState = {
  posts: [
    {
      message: 'react - путь самруая',
      created: '21 янв в 14:51',
      id: 1,
    },
    {
      message: 'hello world',
      created: '21 янв в 14:51',
      id: 2,
    },
    {
      message: 'build awesome application',
      created: '21 янв в 14:51',
      id: 3,
    },
  ],
  userProfile: {
    name: '',
    surname: '',
    status: '',
    photos: {
      large: '',
      small: '',
    },
  },
  newPostMessage: '',
}

const profileReducer = (state = initialState, action: any): ProfileState => {
  switch (action.type) {
    case CHANGE_NEW_POST_MESSAGE:
      return {
        ...state,
        newPostMessage: action.payload.value,
      }

    case ADD_POST:
      const newPost = {
        message: state.newPostMessage,
        created: '21 янв в 14:51',
        id: state.posts[state.posts.length - 1].id + 1,
      }
      return {
        ...state,
        newPostMessage: '',
        posts: [...state.posts, newPost],
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload.userProfile,
      }

    case UPDATE_USER_PROFILE: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload.userUpdates,
        },
      }
    }

    default:
      return state
  }
}

export default profileReducer
