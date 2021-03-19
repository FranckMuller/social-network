import * as types from './action-types'
import { AuthActionTypes } from './actions'
import { AuthState } from './types'

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

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case types.SET_AUTH_DATA:
      return {
        ...state,
        ...action.authData,
        isAuthed: true,
        isProcessing: false,
      }

    case types.UPDATE_AUTH_STATE:
      return {
        ...state,
        ...action.payload.updates,
      }

    case types.SET_IS_PROCESSING:
      return {
        ...state,
        isProcessing: true,
      }

    case types.SET_AJAX_ERROR:
      return {
        ...state,
        serverError: [action.payload.error],
        isProcessing: false,
      }

    case types.CLEAR_AUTH_STATE:
      return {
        ...state,
        ...initialState,
      }

    case types.SET_PHOTO:
      return {
        ...state,
        photo: action.payload.photo,
      }

    default:
      return state
  }
}

export default authReducer
