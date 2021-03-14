import {
  SET_AUTH_DATA,
  CLEAR_AUTH_STATE,
  UPDATE_AUTH_STATE,
  SET_IS_PROCESSING,
  SET_AJAX_ERROR,
  SET_PHOTO
} from './action-types'
import { AuthState, AuthAction } from './types'

export const initialState: AuthState = {
  id: null,
  name: null,
  email: null,
  photo: null,
  surname: null,
  accessToken: null,
  isAuthed: false,
  isProcessing: false,
  serverError: null,
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload.authData,
        isAuthed: true,
        isProcessing: false,
      }

    case UPDATE_AUTH_STATE:
      return {
        ...state,
        ...action.payload.updates,
      }

    case SET_IS_PROCESSING:
      return {
        ...state,
        isProcessing: true,
      }

    case SET_AJAX_ERROR:
      return {
        ...state,
        serverError: [action.payload.error],
        isProcessing: false,
      }

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        ...initialState,
      }

    case SET_PHOTO:
      return {
        ...state,
        photo: action.payload.photo,
      }

    default:
      return state
  }
}

export default authReducer
